package com.kh.veniatis.blog.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.collections.bag.SynchronizedSortedBag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springsource.loaded.SystemClassReflectionInvestigator;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.kh.veniatis.blog.model.service.BlogService;
import com.kh.veniatis.blog.model.vo.BlogAlert;
import com.kh.veniatis.blog.model.vo.BlogCate;
import com.kh.veniatis.blog.model.vo.BlogDetail;
import com.kh.veniatis.blog.model.vo.BlogPagination;
import com.kh.veniatis.blog.model.vo.BlogPost;
import com.kh.veniatis.blog.model.vo.BlogSub;
import com.kh.veniatis.blog.model.vo.Compet;
import com.kh.veniatis.blog.model.vo.ReReply;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.common.reply.model.vo.Reply;
import com.kh.veniatis.member.model.service.MemberService;
import com.kh.veniatis.member.model.vo.Member;

@Controller
public class BlogController {
	// 사진 저장을 위한 전역변수
	ArrayList<String> originName = new ArrayList();
	ArrayList<String> changeName = new ArrayList();

	@Autowired
	private BlogService bService;
	@Autowired
	private MemberService mService;

	// 테스트 화면 이동
	@RequestMapping("testDisplay.do")
	public String testDisplay() {
		return "blog/test";
	}

	// 블로그 메인
	@RequestMapping("blogMain2.do")
	public ModelAndView blogList(ModelAndView mv, @RequestParam(value = "page", required = false) Integer page,
			HttpServletRequest request, @RequestParam("userId") String userId) {
		
		Member m = mService.selectOneMember(userId);
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		
		// 유저에 할당하는 블로그 정보를 갖고온다.
		BlogDetail bd = bService.selectBlogDetail(m.getmNo());
		
		if (bd == null) {
			// 만약에 그 블로그 정보가 비어있다면? 블로그 서비스에 처음 접속하는 것 이므로 블로그를 생성한다.
			Member newM = mService.selectOneMember(userId);
			newM.setmName(newM.getmName() + " 님의 블로그입니다.");
			bService.insertBlogDetail(newM);

			// 기본 카테고리도 만들어준다.
			bService.insertNewCate(newM.getmId());
			
			// 다 갖추어졌으니 블로그 정보를 갖고온다.
			bd = bService.selectBlogDetail(m.getmNo());
		}

		// 카테고리 목록 갖고오기
		ArrayList<BlogCate> cate = bService.selectCateList(userId);

		// 포스트 목록 갖고오기
		int currentPage = page != null ? page : 1;
		ArrayList<BlogPost> post = bService.selectPostList(userId, currentPage);

		// 태그 전체 갖고오기
		// 1. 전체 게시글을 갖고온다 (한개의 게시글당 여러태그가 존재하므로
		ArrayList<BlogPost> allPost = bService.selectPostList(userId);
		// 태그 목록을 한 곳에 담을 String 변수를 선언한다.
		String allTag = "";
		
		// 2. allPost에 태그가 있다면 allTag 변수에 추가한다.
		for (int i = 0; i < allPost.size(); i++) {
			if (allPost.get(i).getbTag() != null) {
				allTag = allTag + allPost.get(i).getbTag();
			}
		}
		
		// 3. split 메소드를 통해 tag 배열에 담는다.
		String tags[] = allTag.split("#");
		
		// 4. ArrayList에 담는다
		ArrayList<String> realtags = new ArrayList();

		for (int i = 0; i < tags.length; i++) {
			realtags.add(tags[i]);
		}
		
		// 5. 중복제거
		for (int i = 0; i < realtags.size(); i++) {
			for (int j = 0; j < realtags.size(); j++) {
				if (i == j) {

				} else if (realtags.get(j).equals(realtags.get(i))) {
					realtags.remove(j);
				}
			}
		}

		// 지금 접속하려는 블로그가 나의 구독상탠지 아닌지 알아보기
		// 1.먼저 내 구독리스트를 갖고 온다
		//   구독 블로거들 ID를 갖고 온다. subId에 담겨져 있음
		ArrayList<BlogSub> subList = bService.selectSubList(nowUser.getmId());
		// 2. 비교한다. true면 구독 되어있는 상태, false면 미구독 상태
		boolean sub = false;
		for (int i = 0; i < subList.size(); i++) {
			if (subList.get(i).getSubId().equals(userId)) {
				sub = true;
			}
		}

		mv.addObject("subtf", sub);// 구독확인
		mv.addObject("bd", bd); // 블로그디테일
		mv.addObject("user", m); // 유저(블로그주인)
		mv.addObject("tags", tags); // 태그
		mv.addObject("cate", cate); // 카테고리
		mv.addObject("post", post); // 포스트목록
		mv.addObject("tags", realtags); // 태그
		mv.addObject("pi", BlogPagination.getPageInfo()); /// 페이징바
		mv.setViewName("blog/blogMain2");

		return mv;
	}

	// 카테고리별 화면 출력하기
	@RequestMapping("blogMainCate.do")
	public ModelAndView blogCateList(ModelAndView mv, @RequestParam(value = "page", required = false) Integer page,
			HttpServletRequest request, @RequestParam("mId") String mId, @RequestParam("cateNo") Integer cateNo) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");

		Member m = mService.selectOneMember(mId);
		// 카테고리 목록 갖고오기
		ArrayList<BlogCate> cate = bService.selectCateList(mId);

		// 포스트 목록 갖고오기

		BlogPost bp = new BlogPost();
		bp.setmId(mId);
		bp.setCateNo(cateNo);
		ArrayList<BlogPost> post = bService.selectCatePostList(bp);

		// 태그 전체 갖고오기
		ArrayList<BlogPost> allPost = bService.selectPostList(mId);
		String allTag = "";

		for (int i = 0; i < allPost.size(); i++) {
			if (allPost.get(i).getbTag() != null) {
				allTag = allTag + allPost.get(i).getbTag();
			}
		}
		String tags[] = allTag.split("#");

		ArrayList<String> realtags = new ArrayList();

		for (int i = 0; i < tags.length; i++) {
			realtags.add(tags[i]);
		}

		for (int i = 0; i < realtags.size(); i++) {
			for (int j = 0; j < realtags.size(); j++) {
				if (i == j) {

				} else if (realtags.get(j).equals(realtags.get(i))) {
					realtags.remove(j);
				}
			}
		}

		BlogDetail bd = bService.selectBlogDetail(m.getmNo());

		// 구독상탠지 아닌지 알아보깅
		// 1.먼저 내 구독리스트를갖고온다
		// 1. 구독 블로거들 ID를갖고온당!! subId에 담겨져있음!
		ArrayList<BlogSub> subList = bService.selectSubList(nowUser.getmId());
		// 비교
		boolean sub = false;
		for (int i = 0; i < subList.size(); i++) {
			if (subList.get(i).getSubId().equals(mId)) {
				sub = true;
			}
		}

		mv.addObject("subtf", sub);

		mv.addObject("bd", bd);
		mv.addObject("tags", realtags); // 태그
		mv.addObject("user", m);
		mv.addObject("cate", cate);
		mv.addObject("post", post);
		mv.setViewName("blog/blogMain2");

		return mv;
	}

	// 블로그 내용 상세보기
	@RequestMapping("blogDetail.do")
	public ModelAndView blogDetail(ModelAndView mv, @RequestParam(value = "page", required = false) Integer page,
			HttpServletRequest request, @RequestParam("userId") String mId, @RequestParam("uniNo") Integer uniNo) {

		BlogPost b = new BlogPost();
		b.setUniNo(uniNo);
		b.setmId(mId);
		// 포스트 내용 갖고오기
		BlogPost post = bService.selectPostDetail(b);
		// 블로그주인의 카텍고리 갖고오깅
		// 카테고리 목록 갖고오기
		ArrayList<BlogCate> nowCate = bService.selectCateList(mId);

		Member m = mService.selectOneMember(mId);
		mv.addObject("user", m); // 블로그주인 유저정보
		mv.addObject("post", post); // 포스트 정보

		// 좋아요 몇개있는지 갖고오기!
		Likes l = new Likes();
		l.setbNo(post.getbNo());
		l.setmNo(m.getmNo());
		int likeCount = bService.selectLikeCount(l);

		// 내가 좋아요 했는지 알아오기!
		int myLikeCount = bService.selectMyLikes(l);

		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");

		// 태그목록
		if (post.getbTag() != null) {
			String dTagList = post.getbTag().substring(1, post.getbTag().length());
			String[] detailTagList = dTagList.split("#");
			mv.addObject("detailTagList", detailTagList); // 현재 게시글의 태그 리스트
		}

		// 태그 전체 갖고오기
		ArrayList<BlogPost> allPost = bService.selectPostList(mId);
		String allTag = "";

		for (int i = 0; i < allPost.size(); i++) {
			if (allPost.get(i).getbTag() != null) {
				allTag = allTag + allPost.get(i).getbTag();
			}
		}
		String tags[] = allTag.split("#");

		ArrayList<String> realtags = new ArrayList();

		for (int i = 0; i < tags.length; i++) {
			realtags.add(tags[i]);
		}

		for (int i = 0; i < realtags.size(); i++) {
			for (int j = 0; j < realtags.size(); j++) {
				if (i == j) {

				} else if (realtags.get(j).equals(realtags.get(i))) {
					realtags.remove(j);
				}
			}
		}

		// 본인의 카테고리 정보 갖고오기
		ArrayList<BlogCate> cate = bService.selectCateList(nowUser.getmId());

		// 블로그 정보 갖고오기
		BlogDetail bd = bService.selectBlogDetail(m.getmNo());

		// 구독상탠지 아닌지 알아보깅
		// 1.먼저 내 구독리스트를갖고온다
		// 1. 구독 블로거들 ID를갖고온당!! subId에 담겨져있음!
		ArrayList<BlogSub> subList = bService.selectSubList(nowUser.getmId());
		// 비교
		boolean sub = false;
		for (int i = 0; i < subList.size(); i++) {
			if (subList.get(i).getSubId().equals(mId)) {
				sub = true;
			}
		}

		mv.addObject("subtf", sub);

		mv.addObject("bd", bd);
		mv.addObject("tags", realtags); // 전체태그정보
		mv.addObject("nowCate", nowCate); // 블로그주인의 카테고리
		mv.addObject("myCate", cate); // 스크랩 전용 내 카테고리
		mv.addObject("nowUser", nowUser); // 현재 로그인하고 있는 유저 정보
		mv.addObject("likeDetail", l); // 좋아요

		mv.setViewName("blog/blogDetail2");

		return mv;
	}

	@RequestMapping("write2.do")
	public ModelAndView boardInsertView2(ModelAndView mv, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member m = (Member) session.getAttribute("loginUser");
		ArrayList<BlogCate> cate = bService.selectCateList(m.getmId());

		mv.addObject("cate", cate);
		mv.setViewName("blog/blogWrite");

		return mv;
	}

	@RequestMapping("write.do")
	public String boardInsertView() {
		return "blog/blogWrite";
	}

	// 블로그 글쓰기
	@RequestMapping("blogInsert.do")
	public String boardInsert(BlogPost b, HttpServletRequest request,
			@RequestParam(value = "represent", required = false) MultipartFile file) {

		String test = b.getbTContent();
		if (b.getbTContent().length() > 100) {
			test = b.getbTContent().substring(0, 100) + " ……";
		}

		b.setbTContent(test);

		HttpSession session = request.getSession();
		Member m = (Member) session.getAttribute("loginUser");
		b.setmId(m.getmId());
		// changeName이 DB에있는지 중복확인후

		boolean flag = false;

		int result = bService.insertPost(b);

		// 썸네일 넣기...
		if (!file.getOriginalFilename().equals("")) {

			String renameFileName = saveFile(file, request);
		} else {

			String root = request.getSession().getServletContext().getRealPath("resources");
			String savePath = root + "\\buploadFiles";

			String renamePath = savePath + "\\BasicThumbs.jpg";

			Files f = new Files();
			f.setChangeName("BasicThumbs.jpg");
			f.setOriginName("BasicThumbs.jpg");
			f.setFilePath(renamePath);
			f.setFileLevel(1);
			int result2 = bService.insertFiles(f);
		}

		String defaultPath = request.getSession().getServletContext().getRealPath("resources");
		// 파일 기본경로 _ 상세경로
		String path = defaultPath + "\\upload" + File.separator;

		// 중복이 아닌경우!! 파일 둘다 넣자
		if (!(changeName.isEmpty())) {
			for (int i = 0; i < changeName.size(); i++) {
				Files f = new Files();
				f.setChangeName(changeName.get(i));
				f.setOriginName(originName.get(i));
				f.setFilePath(path + changeName.get(i));
				f.setFileLevel(2);

				int result2 = bService.insertFiles(f);
			}

			// 전역변수지워주기!!
			changeName.clear();
			originName.clear();
		}

		return "redirect:blogMain2.do?userId=" + b.getmId();
	}

	
	// 블로그 수정폼으로
	@RequestMapping("blogUpdateForm.do")
	public ModelAndView boardUpdateForm(ModelAndView mv, HttpServletRequest request, @RequestParam("uniNo") Integer uniNo) {

		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		
		BlogPost b = new BlogPost();
		b.setUniNo(uniNo);
		b.setmId(nowUser.getmId());
		// 포스트 내용 갖고오기
		BlogPost post = bService.selectUpdateDetail(b);
		
		
		// 카테고리 목록 갖고오기
		ArrayList<BlogCate> cate = bService.selectCateList(nowUser.getmId());
		mv.addObject("cate", cate);
		
		mv.addObject("post", post); // 포스트 정보

		// 태그목록
		if (post.getbTag() != null) {
			String dTagList = post.getbTag().substring(1, post.getbTag().length());
			String[] detailTagList = dTagList.split("#");
			mv.addObject("detailTagList", detailTagList); // 현재 게시글의 태그 리스트
		}

		mv.setViewName("blog/blogUpdateForm");

		return mv;
	}
	
	@RequestMapping("blogDelete.do")
	public String blogDelete(@RequestParam("uniNo") Integer uniNo,HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member m = (Member) session.getAttribute("loginUser");	
		
		BlogPost bp = new BlogPost();
		bp.setUniNo(uniNo);
		bp.setmId(m.getmId());
		
		int num = bService.blogPostDelete(bp);
		
		return "redirect:blogMain2.do?userId=" + m.getmId();
	}
	
	//수정하기~~
	@RequestMapping("blogUpdate.do")
	public String boardUpdate(BlogPost b, HttpServletRequest request,
			@RequestParam(value = "represent", required = false) MultipartFile file ,@RequestParam("uniNo") Integer uniNo) {
		HttpSession session = request.getSession();
		Member m = (Member) session.getAttribute("loginUser");
		b.setmId(m.getmId());
		b.setUniNo(uniNo);
		// 원문포스트 내용 갖고오기
		BlogPost post = bService.selectUpdateDetail(b);
		
		// 태그 제외 요약 넣기
		String test = b.getbTContent();
		if (b.getbTContent().length() > 100) {
			test = b.getbTContent().substring(0, 100) + " ……";
		}
		b.setbTContent(test);


		// changeName이 DB에있는지 중복확인후
		boolean flag = false;
		int result = bService.updatePost(b);

		// 썸네일 넣기...
		if (!file.getOriginalFilename().equals("")) {
			String renameFileName = saveFileUpdate(file, request,post.getbNo());
		} else {
			
		}

		String defaultPath = request.getSession().getServletContext().getRealPath("resources");
		// 파일 기본경로 _ 상세경로
		String path = defaultPath + "\\upload" + File.separator;
	
		// 중복이 아닌경우!! 파일 둘다 넣자
		if (!(changeName.isEmpty())) {
			for (int i = 0; i < changeName.size(); i++) {
				Files f = new Files();
				f.setChangeName(changeName.get(i));
				f.setOriginName(originName.get(i));
				f.setFilePath(path + changeName.get(i));
				f.setFileLevel(2);
				f.setbNo(post.getbNo());
				int result2 = bService.insertFilesUpdate(f);
			}

			// 전역변수지워주기!!
			changeName.clear();
			originName.clear();
		}

		return "redirect:blogMain2.do?userId=" + b.getmId();
	}
	
	
	// 블로그 스크랩
	@RequestMapping("blogScrap.do")
	public String boardScrap(HttpServletRequest request, @RequestParam("bNo") Integer bNo,
			@RequestParam("scrapCate") Integer scrapCate, @RequestParam("memo") String memo) {

		// bNo = 스크랩할 블로그 글 정보 번호
		// scrapCate = (집어넣을) 카테고리 번호
		// memo = 추가로 적고싶은....
		String plusMemo = memo.replace("\n", "<br>");
		plusMemo = "<br>  <hr> <br>" + plusMemo;

		// 스크랩 할 글 번호를 통해 글 정보를 갖고온당
		BlogPost post = bService.selectScrapPost(bNo);

		String scrapTitle = "[스크랩] " + post.getbTitle();
		String scrapContent = post.getbContent() + plusMemo;

		BlogPost scrap = new BlogPost();

		scrap.setbTitle(scrapTitle);
		scrap.setbContent(scrapContent);

		// 내꺼에다 넣자!!
		HttpSession session = request.getSession();
		Member m = (Member) session.getAttribute("loginUser");

		scrap.setmId(m.getmId());
		scrap.setCateNo(scrapCate);

		// 넣는당
		int result = bService.insertPost(scrap);

		// 사진 DB에 넣기!!
		// 1.썸네일 갖고와서 넣기 ; b_no, file_level 1 로 갖고오기
		Files thumbPic = new Files();
		thumbPic.setbNo(bNo);
		thumbPic.setFileLevel(1);

		Files thumb = bService.getScrapThumbPic(thumbPic);
		int result2 = bService.insertFiles(thumb);

		// 스크랩글은.. 사진 DB 저장따로말자
		return "redirect:blogMain2.do?userId=" + m.getmId();

	}

	// 파일업로드!!(네이버전용)
	@RequestMapping("fileUploader.do")
	public void photoUpload(HttpServletRequest request, HttpServletResponse response) {
		String sFileInfo = "";

		// 파일명 - 싱글파일업로드와 다르게 멀티파일업로드는 HEADER로 넘어옴
		String name = request.getHeader("file-name");

		// 확장자
		String ext = name.substring(name.lastIndexOf(".") + 1);

		// 파일 기본경로
		/* String defaultPath = getServletContext().getRealPath("/"); */
		String defaultPath = request.getSession().getServletContext().getRealPath("resources");
		// 파일 기본경로 _ 상세경로
		String path = defaultPath + "\\upload" + File.separator;

		File file = new File(path);
		if (!file.exists()) {
			file.mkdirs();
		}
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		int ranNum = (int) (Math.random() * 10000);

		String realname = sdf.format(new Date()) + ranNum + "." + ext;
		InputStream is;
		try {
			is = request.getInputStream();
			OutputStream os = new FileOutputStream(path + realname);
			int numRead;

			// 파일쓰기
			byte b[] = new byte[Integer.parseInt(request.getHeader("file-size"))];
			while ((numRead = is.read(b, 0, b.length)) != -1) {
				os.write(b, 0, numRead);
			}

			if (is != null) {
				is.close();
			}

			os.flush();
			os.close();

			// 전역변수에 넣는당....
			originName.add(name);
			changeName.add(realname);

			sFileInfo += "&bNewLine=true&sFileName=" + name + "&sFileURL=" + request.getContextPath()
					+ "/resources/upload/" + realname;
			PrintWriter print = response.getWriter();

			print.print(sFileInfo);
			print.flush();
			print.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	// 썸네일파일저장!
	public String saveFile(MultipartFile file, HttpServletRequest request) {

		String root = request.getSession().getServletContext().getRealPath("resources");
		String savePath = root + "\\buploadFiles"; // 파일 경로 수정
		File folder = new File(savePath);
		if (!folder.exists()) {
			folder.mkdirs();
		}

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss"); // 년월일시분초
		String originFileName = file.getOriginalFilename();
		String renameFileName = "S" + sdf.format(new Date())
				+ originFileName.substring(originFileName.lastIndexOf("."));

		String renamePath = folder + "\\" + renameFileName;

		// DB에 넣기
		Files f = new Files();
		f.setChangeName(renameFileName);
		f.setOriginName(originFileName);
		f.setFilePath(renamePath);
		f.setFileLevel(1);
		int result2 = bService.insertThumb(f);

		try {
			file.transferTo(new File(renamePath)); // 전달받은 file이 rename명으로 저장
		} catch (Exception e) {
			System.out.println("파일 전송 에러 : " + e.getMessage());
		}

		return renameFileName;

	}
	
	
	
	
	
	
	
	
	// 썸네일파일저장!수정용ㅋㅋ
	public String saveFileUpdate(MultipartFile file, HttpServletRequest request,int bNo) {

		String root = request.getSession().getServletContext().getRealPath("resources");
		String savePath = root + "\\buploadFiles"; // 파일 경로 수정
		File folder = new File(savePath);
		if (!folder.exists()) {
			folder.mkdirs();
		}

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss"); // 년월일시분초
		String originFileName = file.getOriginalFilename();
		String renameFileName = "S" + sdf.format(new Date())
				+ originFileName.substring(originFileName.lastIndexOf("."));

		String renamePath = folder + "\\" + renameFileName;

		// DB에 넣기
		Files f = new Files();
		f.setChangeName(renameFileName);
		f.setOriginName(originFileName);
		f.setFilePath(renamePath);
		f.setFileLevel(1);
		f.setbNo(bNo);
		int result2 = bService.insertThumbUpdate(f);

		try {
			file.transferTo(new File(renamePath)); // 전달받은 file이 rename명으로 저장
		} catch (Exception e) {
			System.out.println("파일 전송 에러 : " + e.getMessage());
		}

		return renameFileName;

	}
	
	

	// 좋아요 조회
	@RequestMapping(value = "myHeart.do", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String myHeart(int mNo, int bNo, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member m = (Member) session.getAttribute("loginUser");
		Likes l = new Likes();
		l.setbNo(bNo);
		l.setmNo(m.getmNo());
		String likeCount = String.valueOf(bService.selectLikeCount(l));

		return likeCount;

	}

	// 좋아요 내가 넣었는지 확인
	@RequestMapping(value = "getHeartColor.do", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String myHeartColor(int mNo, int bNo, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member m = (Member) session.getAttribute("loginUser");
		Likes l = new Likes();
		l.setbNo(bNo);
		l.setmNo(m.getmNo());
		String myHeartColor = String.valueOf(bService.selectMyLikes(l));

		return myHeartColor;

	}

	// 좋아요 넣기
	@RequestMapping(value = "heartInsert.do", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String likeInsert(int mNo, int bNo, int no, HttpServletRequest request) {
		Likes l = new Likes();
		HttpSession session = request.getSession();
		Member m = (Member) session.getAttribute("loginUser");
		l.setbNo(bNo);
		l.setmNo(m.getmNo());
		int heart = bService.insertLikes(l);

		// 넣기조아용

		if (mNo != m.getmNo()) {
			BlogAlert ba = new BlogAlert();
			ba.setbNo(bNo);
			ba.setmNo(mNo);
			ba.setMatchNo(m.getmNo());
			int alert = bService.alertHeart(ba);

		}

		return "success";

	}

	// 좋아요 취소

	@RequestMapping(value = "heartdelete.do", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String likeDelete(int mNo, int bNo, HttpServletRequest request) {
		Likes l = new Likes();
		HttpSession session = request.getSession();
		Member m = (Member) session.getAttribute("loginUser");
		l.setbNo(bNo);
		l.setmNo(m.getmNo());
		int heart = bService.deleteLikes(l);

		return "success";

	}

	// 댓글리스트 가져오깅
	@RequestMapping(value = "rList.do", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getReplyList(int bId) {
		ArrayList<Reply> rList = bService.selectReplyList(bId);
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		return gson.toJson(rList);
	}

	// 댓글 넣기
	@RequestMapping("replyInsert.do")
	@ResponseBody
	public String addReply(Reply r, HttpSession session, @RequestParam("mId") String mId) {
		Member loginUser = (Member) session.getAttribute("loginUser");

		int rWriter = loginUser.getmNo();

		r.setmNo(rWriter);
		int result = bService.insertReply(r);

		// 알림넣기
		Member m = mService.selectOneMember(mId);
		if (!(mId.equals(loginUser.getmId()))) {
			BlogAlert ba = new BlogAlert();
			ba.setbNo(r.getbNo());
			ba.setmNo(m.getmNo());
			ba.setMatchNo(loginUser.getmNo());
			int alert = bService.alertReply(ba);

		}

		return "success";
	}

	// 댓글 삭제
	@RequestMapping("blogReplyDelete.do")
	@ResponseBody
	public String deleteReply(Reply r, HttpSession session) {
		Member loginUser = (Member) session.getAttribute("loginUser");
		int rWriter = loginUser.getmNo();

		r.setmNo(rWriter);

		int result = bService.deleteReply(r);
		return "success";
	}
	
	// 댓글 수정
	@RequestMapping("replyUpdate.do")
	@ResponseBody
	public String updateReply(Reply r, HttpSession session) {
		Member loginUser = (Member) session.getAttribute("loginUser");
		int rWriter = loginUser.getmNo();
		r.setmNo(rWriter);
		int result=bService.updateReply(r);
		return "success";
	}
	
	//답글불러오기
	@RequestMapping(value = "blogReReply.do",produces = "application/json; charset=utf-8")
	@ResponseBody
	public String reReply(Reply r, HttpSession session) {
		Member loginUser = (Member) session.getAttribute("loginUser");
		ReReply rr = new ReReply();
		
		rr.setrNo(r.getrNo());

		ArrayList<ReReply> rrlist = bService.selectReReplyList(rr);
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		return gson.toJson(rrlist);
	}	
	//답글넣기
	@RequestMapping("rreplyInsert.do")
	@ResponseBody
	public String reReplyInsert(ReReply r, HttpSession session) {
		Member loginUser = (Member) session.getAttribute("loginUser");
		int rWriter = loginUser.getmNo();

		r.setmNo(rWriter);
		int num =bService.insertRReply(r);
		
		return "success";
	}	
	
	
	

	// 검색용
	@RequestMapping("bSearch.do")
	public ModelAndView searchPostList(ModelAndView mv, @RequestParam(value = "page", required = false) Integer page,
			HttpServletRequest request, @RequestParam("userId") String userId,
			@RequestParam("searchValue") String searchValue) {

		Member m = mService.selectOneMember(userId);
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		// 유저아이디와 서치벨류
		BlogPost search = new BlogPost();
		search.setmId(userId);
		search.setSearchValue(searchValue);

		ArrayList<BlogPost> post = bService.searchPostList(search);

		// 카테고리 목록 갖고오기
		ArrayList<BlogCate> cate = bService.selectCateList(userId);

		// 포스트 목록 갖고오기

		// 태그 전체 갖고오기
		ArrayList<BlogPost> allPost = bService.selectPostList(userId);
		String allTag = "";

		for (int i = 0; i < allPost.size(); i++) {
			if (allPost.get(i).getbTag() != null) {
				allTag = allTag + allPost.get(i).getbTag();
			}
		}
		String tags[] = allTag.split("#");

		ArrayList<String> realtags = new ArrayList();

		for (int i = 0; i < tags.length; i++) {
			realtags.add(tags[i]);
		}

		for (int i = 0; i < realtags.size(); i++) {
			for (int j = 0; j < realtags.size(); j++) {
				if (i == j) {

				} else if (realtags.get(j).equals(realtags.get(i))) {
					realtags.remove(j);
				}
			}
		}

		// 블로그 정보 갖고오기
		BlogDetail bd = bService.selectBlogDetail(m.getmNo());

		mv.addObject("bd", bd);
		// 구독상탠지 아닌지 알아보깅
		// 1.먼저 내 구독리스트를갖고온다
		// 1. 구독 블로거들 ID를갖고온당!! subId에 담겨져있음!
		ArrayList<BlogSub> subList = bService.selectSubList(nowUser.getmId());
		// 비교
		boolean sub = false;
		for (int i = 0; i < subList.size(); i++) {
			if (subList.get(i).getSubId().equals(userId)) {
				sub = true;
			}
		}

		mv.addObject("subtf", sub);

		mv.addObject("tags", realtags);
		mv.addObject("user", m);
		mv.addObject("cate", cate);
		mv.addObject("post", post);
		mv.addObject("search", searchValue);
		mv.setViewName("blog/blogMainSearch");

		return mv;
	}

	// 태그별 리스트조회
	@RequestMapping("blogTag.do")
	public ModelAndView blogTag(ModelAndView mv, @RequestParam(value = "page", required = false) Integer page,
			HttpServletRequest request, @RequestParam("userId") String userId, @RequestParam("tags") String tags) {

		Member m = mService.selectOneMember(userId);
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		// 전체 게시글 갖고오기
		ArrayList<BlogPost> allPosts = bService.selectPostList(userId);
		ArrayList<BlogPost> realAllTagList = new ArrayList();
		for (int i = 0; i < allPosts.size(); i++) {
			if ((allPosts.get(i).getbTag() != null)) {
				String tagirr[] = allPosts.get(i).getbTag().split("#");

				for (int k = 0; k < tagirr.length; k++) {
					if ((tagirr[k].equals(tags))) {
						realAllTagList.add(allPosts.get(i));
						break;
					}
				}

			}
			;

		}

		// 카테고리 목록 갖고오기
		ArrayList<BlogCate> cate = bService.selectCateList(userId);

		// 태그 전체 갖고오기
		ArrayList<BlogPost> allPost = bService.selectPostList(userId);
		String allTag = "";

		for (int i = 0; i < allPost.size(); i++) {
			if (allPost.get(i).getbTag() != null) {
				allTag = allTag + allPost.get(i).getbTag();
			}
		}
		String tagss[] = allTag.split("#");

		ArrayList<String> realtags = new ArrayList();

		for (int i = 0; i < tagss.length; i++) {
			realtags.add(tagss[i]);
		}

		for (int i = 0; i < realtags.size(); i++) {
			for (int j = 0; j < realtags.size(); j++) {
				if (i == j) {

				} else if (realtags.get(j).equals(realtags.get(i))) {
					realtags.remove(j);
				}
			}
		}
		// 블로그 정보 갖고오기
		BlogDetail bd = bService.selectBlogDetail(m.getmNo());

		// 구독상탠지 아닌지 알아보깅
		// 1.먼저 내 구독리스트를갖고온다
		// 1. 구독 블로거들 ID를갖고온당!! subId에 담겨져있음!
		ArrayList<BlogSub> subList = bService.selectSubList(nowUser.getmId());
		// 비교
		boolean sub = false;
		for (int i = 0; i < subList.size(); i++) {
			if (subList.get(i).getSubId().equals(userId)) {
				sub = true;
			}
		}

		mv.addObject("subtf", sub);

		mv.addObject("bd", bd);

		mv.addObject("tag", tags);
		mv.addObject("tags", realtags);
		mv.addObject("user", m);
		mv.addObject("cate", cate);
		mv.addObject("post", realAllTagList);
		mv.setViewName("blog/blogTagList");

		return mv;
	}

	// 블로그홈
	@SuppressWarnings("unchecked")
	@RequestMapping("blogHome.do")
	public ModelAndView blogHome(ModelAndView mv, HttpServletRequest request,  @RequestParam(value = "page", required = false) Integer page) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		// 좋아요 횟수 많은 게시글 수대로 갖고오기
		ArrayList<BlogPost> post = bService.selectPopularList();

		// 인기게시글 갖고오기
		ArrayList<BlogPost> bp1 = bService.selectPopularRealList(post);
		ArrayList<BlogPost> bp = new ArrayList<BlogPost>();
		for (int i = 0; i < bp1.size(); i++) {
			if (bp1.get(i) != null) {
				bp.add(bp1.get(i));
			}
		}

		// 알림 정보 가져오깅
		int currentPage = page != null ? page : 1;
		ArrayList<BlogAlert> ba = bService.selectAlertList(nowUser.getmNo(), currentPage);


		// 구독블로거 정보 가져오기
		// 1. 구독 블로거들 ID를갖고온당!! subId에 담겨져있음!
		ArrayList<BlogSub> subList = bService.selectSubList(nowUser.getmId());
		// 2. 얘네들의 글 리스트를 갖고옴(오늘부터 7일까지만)
		ArrayList<BlogPost> subPostList = bService.subPostList(subList);
		// 날짜순 정렬
		Collections.sort(subPostList, new Comparator<BlogPost>() {
			public int compare(BlogPost b1, BlogPost b2) {
				return b2.getbEnrollDate().compareTo(b1.getbEnrollDate());
			}

		});
		mv.addObject("pi", BlogPagination.getPageInfo());
		mv.addObject("sp", subPostList);
		mv.addObject("alert", ba);
		mv.addObject("loginUser", nowUser);
		mv.addObject("popPost", bp);
		mv.setViewName("blog/blogHome2");

		return mv;
	}

	// 구독하기
	@RequestMapping("blogSubPlus.do")
	@ResponseBody
	public String blogSubPlus(String subId, HttpSession session) {
		Member loginUser = (Member) session.getAttribute("loginUser");
		BlogSub bs = new BlogSub();
		bs.setSubId(subId);
		bs.setmId(loginUser.getmId());
		int result = bService.subPlus(bs);

		return "success";
	}

	// 구독취소
	@RequestMapping("blogSubDelete.do")
	@ResponseBody
	public String blogSubDelete(String subId, HttpSession session) {
		Member loginUser = (Member) session.getAttribute("loginUser");
		BlogSub bs = new BlogSub();
		bs.setSubId(subId);
		bs.setmId(loginUser.getmId());
		int result = bService.subDelete(bs);

		return "success";
	}

	/// @페이징
	// 댓글리스트 가져오깅
/*	@RequestMapping(value = "alertpaging.do", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String homePaging(int page, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");

		ArrayList<BlogAlert> ba = bService.selectAlertList(nowUser.getmNo());
		return "success";
	}*/

	// 알림삭제
	@RequestMapping("deleteAlert.do")
	@ResponseBody
	public String deleteAlert(String baNo, HttpSession session) {

		int result = bService.deleteAlert(Integer.parseInt(baNo));
		return "success";
	}

	@RequestMapping("loginPageGo.do")
	public String test() {

		return "blog/login";
	}

	// 관리하기!!(처음 관리하기 눌렀을 때 글 관리부터 들어감)
	@RequestMapping("badmin.do")
	public ModelAndView blogAdminView(ModelAndView mv, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		BlogDetail bd = bService.selectBlogDetail(nowUser.getmNo());

		mv.addObject("bd", bd);
		mv.setViewName("blog/blogAdminDetail");
		return mv;
	}

	// 블로그 관리- 게시글 관리
	@RequestMapping("badminPost.do")
	public ModelAndView blogAdminPostView(ModelAndView mv, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		ArrayList<BlogPost> allPost = bService.selectPostList(nowUser.getmId());
		ArrayList<BlogCate> cate = bService.selectCateList(nowUser.getmId());

		mv.addObject("cate", cate);
		mv.addObject("post", allPost);
		mv.setViewName("blog/blogAdminPost");
		return mv;
	}

	// 블로그 관리- 카테고리 관리: 화면출력
	@RequestMapping("badminCate.do")
	public ModelAndView blogAdminCateView(ModelAndView mv, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		ArrayList<BlogCate> cate = bService.selectCateList(nowUser.getmId());
		mv.addObject("cate", cate);
		mv.setViewName("blog/blogAdminCate");
		return mv;
	}

	// 블로그 관리- 카테고리 관리: 카테고리 추가
	@RequestMapping("badminCatePlus.do")
	public ModelAndView blogAdminCatePlus(ModelAndView mv, HttpServletRequest request,
			@RequestParam("plusCate") String plusCate) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		BlogCate newCate = new BlogCate();
		newCate.setbCateName(plusCate);
		newCate.setmId(nowUser.getmId());

		// 추가하기
		int plus = bService.plusCate(newCate);

		// 다시 화면출력하기
		ArrayList<BlogCate> cate = bService.selectCateList(nowUser.getmId());
		mv.addObject("cate", cate);
		mv.setViewName("blog/blogAdminCate");
		return mv;
	}

	// 블로그 관리- 카테고리 관리 : 카테고리 수정
	@RequestMapping("badminCateUpdate.do")
	public ModelAndView blogAdminCateUpdate(ModelAndView mv, HttpServletRequest request,
			@RequestParam("updateCate") String updateCate, @RequestParam("cateNo") Integer cateNo) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		BlogCate upCate = new BlogCate();
		upCate.setCateNo(cateNo);
		upCate.setbCateName(updateCate);
		upCate.setmId(nowUser.getmId());

		// 수정하기
		int update = bService.updateCate(upCate);

		// 다시 화면출력하기
		ArrayList<BlogCate> cate = bService.selectCateList(nowUser.getmId());
		mv.addObject("cate", cate);
		mv.setViewName("blog/blogAdminCate");
		return mv;
	}

	// 블로그 관리- 카테고리 관리: 카테고리 제거(+ 글 제거)
	@RequestMapping("badminCateDelete.do")
	public ModelAndView blogAdminCateDelete(ModelAndView mv, HttpServletRequest request,
			@RequestParam("cateNo") Integer cateNo) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		BlogCate upCate = new BlogCate();
		upCate.setCateNo(cateNo);
		upCate.setmId(nowUser.getmId());

		// 삭제하기
		int postDelete = bService.cDeletePost(cateNo); // 글 전체 삭제
		int cateDelete = bService.cDeleteCate(cateNo); // 카테고리 제거

		// 다시 화면출력하기
		ArrayList<BlogCate> cate = bService.selectCateList(nowUser.getmId());
		mv.addObject("cate", cate);
		mv.setViewName("blog/blogAdminCate");
		return mv;
	}

	// 블로그 관리- 게시글 관리 : 삭제
	@RequestMapping("badminPostDelete.do")
	public ModelAndView badminPostDelete(ModelAndView mv, HttpServletRequest request) {

		// 체크박스 목록 갖고오기 (글번호목록)
		String[] arr = request.getParameterValues("bNo");
		int[] intArr = new int[arr.length];

		for (int i = 0; i < arr.length; i++) {
			intArr[i] = Integer.parseInt(arr[i]);
		}

		int postDelete = bService.badminPostDelete(intArr);

		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		ArrayList<BlogPost> allPost = bService.selectPostList(nowUser.getmId());
		ArrayList<BlogCate> cate = bService.selectCateList(nowUser.getmId());

		mv.addObject("cate", cate);
		mv.addObject("post", allPost);
		mv.setViewName("blog/blogAdminPost");
		return mv;
	}

	// 블로그 관리- 게시글 관리: 카테고리 이동
	@RequestMapping("badminPostMove.do")
	public ModelAndView badminPostMove(ModelAndView mv, HttpServletRequest request) {

		// 이동할 카테고리 명 갖고오기
		int cateNo = Integer.parseInt(request.getParameter("cateNo"));

		// 체크박스 목록 갖고오기 (글번호목록)
		String[] arr = request.getParameterValues("bNo");
		int[] intArr = new int[arr.length];

		for (int i = 0; i < arr.length; i++) {
			intArr[i] = Integer.parseInt(arr[i]);
		}

		ArrayList<BlogPost> moveList = new ArrayList();

		for (int i = 0; i < arr.length; i++) {
			BlogPost b = new BlogPost();
			b.setbNo(intArr[i]);
			b.setCateNo(cateNo);

			moveList.add(b);
		}

		int postMove = bService.badminPostMove(moveList);

		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		ArrayList<BlogPost> allPost = bService.selectPostList(nowUser.getmId());
		ArrayList<BlogCate> cate = bService.selectCateList(nowUser.getmId());

		mv.addObject("cate", cate);
		mv.addObject("post", allPost);
		mv.setViewName("blog/blogAdminPost");
		return mv;
	}

	// 블로그 관리- 기본정보 관리
	@RequestMapping("badminDetail.do")
	public ModelAndView badminDetail(ModelAndView mv, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		BlogDetail bd = bService.selectBlogDetail(nowUser.getmNo());

		mv.addObject("bd", bd);
		mv.setViewName("blog/blogAdminDetail");
		return mv;
	}

	// 블로그 관리- 기본정보 관리:수정
	@RequestMapping("blogDetailUpdate.do")
	public ModelAndView bDetailUpdate(ModelAndView mv, HttpServletRequest request, BlogDetail bd) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		bd.setmNo(nowUser.getmNo());

		int upBd = bService.updateBlogDetail(bd);

		BlogDetail nbd = bService.selectBlogDetail(nowUser.getmNo());
		mv.addObject("bd", nbd);
		mv.setViewName("blog/blogAdminDetail");
		return mv;
	}

	// 블로그 관리-CSS수정(화면)
	@RequestMapping("badminCss.do")
	public ModelAndView badminCSS(ModelAndView mv, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		BlogDetail bd = bService.selectBlogDetail(nowUser.getmNo());

		mv.addObject("bd", bd);
		mv.setViewName("blog/blogAdminCSS");
		return mv;
	}

	// 블로그관리-CSS수정
	@RequestMapping("badminCssChange.do")
	public ModelAndView badminCssChange(ModelAndView mv, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");

		BlogDetail bd = new BlogDetail();
		// 변경된 색깔 갖고오기
		if (request.getParameter("cssBack") != null) {
			bd.setCssBack(request.getParameter("cssBack"));
		}

		bd.setBlogTag("none");
		bd.setCssTime("none");
		bd.setCssWeather("none");
		bd.setCssLocation("none");
		// 체크박스 목록 갖고오기 (글번호목록)
		bd.setmNo(nowUser.getmNo());

		if (request.getParameterValues("blogcss") != null) {
			String[] arr = request.getParameterValues("blogcss");

			for (int i = 0; i < arr.length; i++) {
				if (arr[i].equals("blogTag")) {
					bd.setBlogTag("");
				} else if (arr[i].equals("cssWeather")) {
					bd.setCssWeather("");
				} else if (arr[i].equals("cssTime")) {
					bd.setCssTime("");
				} else if (arr[i].equals("cssLocation")) {
					bd.setCssLocation("");
				}
			}
		}

		// 업뎃하기!
		int num = bService.updateBlogCss(bd);
		BlogDetail bds = bService.selectBlogDetail(nowUser.getmNo());
		mv.addObject("bd", bds);
		mv.setViewName("blog/blogAdminCSS");

		return mv;
	}

	// 블로그 관리 - 내 활동(좋아요/댓글 쓴거, 달린거 관리)
	@RequestMapping("badminActive.do")
	public ModelAndView badminActive(ModelAndView mv, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");

		mv.setViewName("blog/blogAdminActive");
		return mv;
	}

	// 블로그 관리 - 구독관리
	@RequestMapping("badminSub.do")
	public ModelAndView badminSub(ModelAndView mv, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");

		// 1. 구독 블로거들 ID를갖고온당!! subId에 담겨져있음!
		ArrayList<BlogSub> subList = bService.selectSubList(nowUser.getmId());
		// 2. BlogDeetail 갖고오깅
		ArrayList<BlogDetail> bd = bService.selectSubDetail(subList);

		mv.addObject("bd", bd);
		mv.setViewName("blog/blogAdminSub");
		return mv;
	}
	
	// 블로그 관리 - 구독 취소
	@RequestMapping("adminSubDelete.do")
	public  ModelAndView adminSubDelete(ModelAndView mv,HttpServletRequest request,
			@RequestParam("mId") String subId) {
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");		
		
		BlogSub bs = new BlogSub();
		bs.setmId(nowUser.getmId());
		bs.setSubId(subId);
		
		int num = bService.adminSubDelete(bs);
		// 1. 구독 블로거들 ID를갖고온당!! subId에 담겨져있음!
		ArrayList<BlogSub> subList = bService.selectSubList(nowUser.getmId());
		// 2. BlogDeetail 갖고오깅
		ArrayList<BlogDetail> bd = bService.selectSubDetail(subList);

		mv.addObject("bd", bd);
		mv.setViewName("blog/blogAdminSub");
		return mv;
	}
	
	// etc
	@RequestMapping("guideMain.do")
	public ModelAndView guideGo(ModelAndView mv, HttpServletRequest request) {

		mv.setViewName("blog/guideDetail");
		
		return mv;
	}
	
	
	
	// 전체검색
	@RequestMapping("blogAllSearch.do")
	public ModelAndView allSearch(ModelAndView mv, HttpServletRequest request, @RequestParam("searchValue") String searchValue) {
		
		
		ArrayList<BlogPost> bp = bService.blogAllSearch(searchValue);
		mv.addObject("bp",bp);
		mv.addObject("sv",searchValue);
		mv.setViewName("blog/blogAllSearch");
		return mv;
	}
	
	// 공모전 정보 불러오기
	@RequestMapping("competView.do")
	public ModelAndView competView(ModelAndView mv, HttpServletRequest request) {
		
		ArrayList<Compet> clist = bService.competView();
		mv.addObject("clist",clist);
		mv.setViewName("blog/competition");
		return mv;
	}
}
