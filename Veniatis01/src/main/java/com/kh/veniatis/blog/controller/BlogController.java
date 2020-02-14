package com.kh.veniatis.blog.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.kh.veniatis.blog.model.service.BlogService;

import com.kh.veniatis.blog.model.vo.BlogCate;
import com.kh.veniatis.blog.model.vo.BlogPost;


import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.common.reply.model.vo.Reply;
import com.kh.veniatis.member.model.service.MemberService;
import com.kh.veniatis.member.model.vo.Member;



@Controller
public class BlogController {
	//사진 저장을 위한 전역변수.....
	ArrayList<String> originName= new ArrayList();
	ArrayList<String> changeName= new ArrayList();
	
	
	@Autowired
	private BlogService bService;
	//블로그 홈
	@Autowired
	private MemberService mService;
	
	//블로그메인
	@RequestMapping("blogMain2.do")
	public ModelAndView blogList(ModelAndView mv,
			@RequestParam(value="page", required=false) Integer page,HttpServletRequest request,
			 @RequestParam("userId") String userId) {
			System.out.println(userId);
			Member m=mService.selectOneMember(userId); 
			
			//카테고리 목록 갖고오기
			ArrayList<BlogCate> cate = bService.selectCateList(userId);
			System.out.println(cate);
			//포스트 목록 갖고오기
			ArrayList<BlogPost> post = bService.selectPostList(userId);
			

			mv.addObject("user",m);
			mv.addObject("cate",cate);
			mv.addObject("post",post);
			mv.setViewName("blog/blogMain2");
		 
		return mv;
	}
	
	
	//카테고리별
	@RequestMapping("blogMainCate.do")
	public ModelAndView blogCateList(ModelAndView mv,
			@RequestParam(value="page", required=false) Integer page,HttpServletRequest request,
			 @RequestParam("mId") String mId,
			 @RequestParam("cateNo") Integer cateNo) {

		 
			Member m=mService.selectOneMember(mId);	 
			//카테고리 목록 갖고오기
			ArrayList<BlogCate> cate = bService.selectCateList(mId);
			
			//포스트 목록 갖고오기
			
			BlogPost bp = new BlogPost();
			bp.setmId(mId);
			bp.setCateNo(cateNo);
			ArrayList<BlogPost> post = bService.selectCatePostList(bp);		 
			System.out.println(post);

			mv.addObject("user",m);
			mv.addObject("cate",cate);
			mv.addObject("post",post);
			mv.setViewName("blog/blogMain2");
		 
		 
		return mv;
	}	
	
	
	//블로그 내용 상세보기
	@RequestMapping("blogDetail.do")
	public ModelAndView blogDetail(ModelAndView mv,
			@RequestParam(value="page", required=false) Integer page,HttpServletRequest request,
			 @RequestParam("userId") String mId,
			 @RequestParam("uniNo") Integer uniNo
			 ) {

			BlogPost b= new BlogPost();
			b.setUniNo(uniNo);
			b.setmId(mId);
			//포스트 내용 갖고오기
			BlogPost post = bService.selectPostDetail(b);
			

			
			Member m=mService.selectOneMember(mId);
			mv.addObject("user",m);	// 블로그주인 유저정보
			mv.addObject("post",post);	// 포스트 정보
			 
			
			//좋아요 몇개있는지 갖고오기!
			Likes l= new Likes();
			l.setbNo(post.getbNo());
			l.setmNo(m.getmNo());
			int likeCount = bService.selectLikeCount(l);
			
			//내가 좋아요 했는지 알아오기!
			int myLikeCount = bService.selectMyLikes(l);			
			

	        HttpSession session = request.getSession();
	        Member nowUser = (Member) session.getAttribute("loginUser");
			
	        
			//본인의 카테고리 정보 갖고오기
			ArrayList<BlogCate> cate = bService.selectCateList(nowUser.getmId());
			
	        mv.addObject("myCate",cate);	//스크랩 전용 내 카테고리
			mv.addObject("nowUser",nowUser); //현재 로그인하고 있는 유저 정보
			 mv.addObject("likeDetail",l);	// 좋아요
			 mv.setViewName("blog/blogDetail2");	
				
		return mv;
	}	
	
	@RequestMapping("write2.do")
	public ModelAndView boardInsertView2(ModelAndView mv,HttpServletRequest request) {
        HttpSession session = request.getSession();
        Member m = (Member) session.getAttribute("loginUser");
        ArrayList<BlogCate> cate = bService.selectCateList(m.getmId());
        
        mv.addObject("cate",cate);
        mv.setViewName("blog/blogWrite");
        
		return mv;
	}
	
	
	@RequestMapping("write.do")
	public String boardInsertView() {
		return "blog/blogWrite";
	}
	
	
	
	// 블로그 글쓰기
	@RequestMapping("blogInsert.do")
	public String boardInsert(BlogPost b,HttpServletRequest request,
								@RequestParam(value="represent", required=false) MultipartFile file) {
		

		String test = b.getbTContent();
		if(b.getbTContent().length()>80) {
			test = b.getbTContent().substring(0,80)+" ……";
		}
		
		b.setbTContent(test);
		System.out.println(b);
		
        HttpSession session = request.getSession();
        Member m = (Member) session.getAttribute("loginUser");
		b.setmId(m.getmId());
		//changeName이 DB에있는지 중복확인후
		
		
		boolean flag = false;
		
		int result = bService.insertPost(b); 

		//썸네일 넣기...
		if(!file.getOriginalFilename().equals("")) {

			String renameFileName = saveFile(file, request);
		}else {

			String root = request.getSession().getServletContext().getRealPath("resources");
			String savePath = root + "\\buploadFiles";

			String renamePath =savePath+ "\\BasicThumbs.jpg";

			Files f = new Files();
			f.setChangeName("BasicThumbs.jpg");
			f.setOrginName("BasicThumbs.jpg");
			f.setFilePath(renamePath);
			f.setFileLevel(1);
			int result2 = bService.insertFiles(f); 	
		}
		
		
		String defaultPath = request.getSession().getServletContext().getRealPath("resources");
		// 파일 기본경로 _ 상세경로
		String path = defaultPath + "\\upload" + File.separator;
		
		//중복이 아닌경우!! 파일 둘다 넣자
		if(!(changeName.isEmpty())) {
			for(int i=0; i<changeName.size();i++) {
			Files f = new Files();
			f.setChangeName(changeName.get(i));
			f.setOrginName(originName.get(i));
			f.setFilePath(path+changeName.get(i));
			f.setFileLevel(2);

			int result2 = bService.insertFiles(f); 	
			}
			
			//전역변수지워주기!!
			changeName.clear();
			originName.clear();
		}


		return "redirect:blogMain2.do?userId="+b.getmId();
	}
	
	// 블로그 스크랩
	@RequestMapping("blogScrap.do")
	public String boardScrap(HttpServletRequest request,
							@RequestParam("bNo") Integer bNo,
							@RequestParam("scrapCate") Integer scrapCate,
							@RequestParam("memo") String memo) {
		
		// bNo = 스크랩할 블로그 글 정보 번호
		// scrapCate = (집어넣을) 카테고리 번호
		// memo = 추가로 적고싶은....
		String plusMemo= memo.replace("\n", "<br>");
		plusMemo = "<br>  <hr> <br>"+plusMemo;

		
		//스크랩 할 글 번호를 통해 글 정보를 갖고온당
		BlogPost post = bService.selectScrapPost(bNo);
		
		String scrapTitle = "[스크랩] " + post.getbTitle();
		String scrapContent = post.getbContent() + plusMemo;
				
		BlogPost scrap = new BlogPost();
		
		scrap.setbTitle(scrapTitle);
		scrap.setbContent(scrapContent);
		
		System.out.println(scrap);
		
		//내꺼에다 넣자!!
        HttpSession session = request.getSession();
        Member m = (Member) session.getAttribute("loginUser");
		
        scrap.setmId(m.getmId());
        scrap.setCateNo(scrapCate);
        
        //넣는당
        int result = bService.insertPost(scrap);
        System.out.println(result);
        // 사진 DB에 넣기!!
        // 1.썸네일 갖고와서 넣기 ; b_no, file_level 1 로 갖고오기
        Files thumbPic = new Files();
        thumbPic.setbNo(bNo);
        thumbPic.setFileLevel(1);
        
        Files thumb = bService.getScrapThumbPic(thumbPic);
        int result2 = bService.insertFiles(thumb);
        
       
        //스크랩글은.. 사진 DB 저장따로말자
		return "redirect:blogMain2.do?userId="+m.getmId();

	}
		
	
	
	
	
	
	
	//파일업로드!!(네이버전용)
	@RequestMapping("fileUploader.do")
	public void photoUpload(HttpServletRequest request, HttpServletResponse response) {
		String sFileInfo = "";
		
		// 파일명 - 싱글파일업로드와 다르게 멀티파일업로드는 HEADER로 넘어옴 
		String name = request.getHeader("file-name");

		// 확장자
		String ext = name.substring(name.lastIndexOf(".")+1);

		// 파일 기본경로
		/* String defaultPath = getServletContext().getRealPath("/"); */
		String defaultPath = request.getSession().getServletContext().getRealPath("resources");
		// 파일 기본경로 _ 상세경로
		String path = defaultPath + "\\upload" + File.separator;

		File file = new File(path);
		if(!file.exists()) {
			file.mkdirs();
		}
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		int ranNum = (int)(Math.random()*10000);
		
		
		String realname =sdf.format(new Date()) +ranNum + "." + ext;
		InputStream is;
		try {
			is = request.getInputStream();
			OutputStream os = new FileOutputStream(path + realname);
			int numRead;

			// 파일쓰기
			byte b[] = new byte[Integer.parseInt(request.getHeader("file-size"))];
			while((numRead = is.read(b,0,b.length)) != -1) {
				os.write(b,0,numRead);
			}

			if(is != null) {
				is.close();
			}

			os.flush();
			os.close();

			//전역변수에 넣는당....
			originName.add(name);
			changeName.add(realname);
			
			sFileInfo += "&bNewLine=true&sFileName="+ name+"&sFileURL="+request.getContextPath()+"/resources/upload/"+realname;
			PrintWriter print = response.getWriter();
			
			print.print(sFileInfo);
			print.flush();
			print.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//썸네일파일저장! 
	public String saveFile(MultipartFile file, HttpServletRequest request) {

		String root = request.getSession().getServletContext().getRealPath("resources");
		String savePath = root + "\\buploadFiles"; // 파일 경로 수정
		File folder = new File(savePath);
		if (!folder.exists()) {
			folder.mkdirs();
		}

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss"); //년월일시분초
		String originFileName = file.getOriginalFilename();
		String renameFileName = "S"+sdf.format(new Date()) 
				+ originFileName.substring(originFileName.lastIndexOf("."));

		String renamePath = folder + "\\" + renameFileName;
		
		// DB에 넣기
		Files f = new Files();
		f.setChangeName(renameFileName);
		f.setOrginName(originFileName);
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
	
	
	
	
	//좋아요 조회
	@RequestMapping(value="myHeart.do",produces="application/json; charset=utf-8")
	@ResponseBody
	public String myHeart(int mNo, int bNo,HttpServletRequest request) {
        HttpSession session = request.getSession();
        Member m = (Member) session.getAttribute("loginUser");
		Likes l= new Likes();
		l.setbNo(bNo);
		l.setmNo(m.getmNo());
		String likeCount = String.valueOf(bService.selectLikeCount(l));

		return likeCount;

	}
		
	
	
	//좋아요 내가 넣었는지 확인
	@RequestMapping(value="getHeartColor.do",produces="application/json; charset=utf-8")
	@ResponseBody
	public String myHeartColor(int mNo, int bNo,HttpServletRequest request) {
        HttpSession session = request.getSession();
        Member m = (Member) session.getAttribute("loginUser");
		Likes l= new Likes();
		l.setbNo(bNo);
		l.setmNo(m.getmNo());
		String myHeartColor = String.valueOf(bService.selectMyLikes(l));

		return myHeartColor;

	}	
	
	
	// 좋아요 넣기
	@RequestMapping(value="heartInsert.do",produces="application/json; charset=utf-8")
	@ResponseBody
	public String likeInsert(int mNo, int bNo,HttpServletRequest request) {
		Likes l =new Likes();
        HttpSession session = request.getSession();
        Member m = (Member) session.getAttribute("loginUser");
		l.setbNo(bNo);
		l.setmNo(m.getmNo());
		int heart = bService.insertLikes(l);
		
		
		return "success";

	}
	
	
	
	
	//좋아요 취소
	
	@RequestMapping(value="heartdelete.do",produces="application/json; charset=utf-8")
	@ResponseBody
	public String likeDelete(int mNo, int bNo,HttpServletRequest request) {
		Likes l =new Likes();
        HttpSession session = request.getSession();
        Member m = (Member) session.getAttribute("loginUser");
		l.setbNo(bNo);
		l.setmNo(m.getmNo());
		int heart = bService.deleteLikes(l);
		
		
		return "success";

	}
	
	
	
	//댓글리스트 가져오깅
	@RequestMapping(value="rList.do", produces="application/json; charset=utf-8")
	@ResponseBody
	public String getReplyList(int bId) {
		ArrayList<Reply> rList = bService.selectReplyList(bId);
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		return gson.toJson(rList);
	}
	
	//댓글 넣기
	@RequestMapping("replyInsert.do")
	@ResponseBody
	public String addReply(Reply r, HttpSession session) {
		Member loginUser = (Member)session.getAttribute("loginUser");
		int rWriter = loginUser.getmNo();
		
		r.setmNo(rWriter);
		
		int result = bService.insertReply(r);
			return "success";
	}
	
	//댓글 삭제
	@RequestMapping("blogReplyDelete.do")
	@ResponseBody
	public String deleteReply(Reply r, HttpSession session) {
		Member loginUser = (Member)session.getAttribute("loginUser");
		int rWriter = loginUser.getmNo();
		
		r.setmNo(rWriter);
		System.out.println(r);
		int result = bService.deleteReply(r);
			return "success";
	}	
	
		//검색용
	@RequestMapping("bSearch.do")
	public ModelAndView searchPostList(ModelAndView mv,
			@RequestParam(value="page", required=false) Integer page,HttpServletRequest request,
			 @RequestParam("userId") String userId,
			 @RequestParam("searchValue") String searchValue) {
		
		Member m=mService.selectOneMember(userId);
				
		//유저아이디와 서치벨류 
		BlogPost search = new BlogPost();
		search.setmId(userId);
		search.setSearchValue(searchValue);
		
		ArrayList<BlogPost> post = bService.searchPostList(search);

		//카테고리 목록 갖고오기
		ArrayList<BlogCate> cate = bService.selectCateList(userId);
		
		//포스트 목록 갖고오기
		
		mv.addObject("user",m);
		mv.addObject("cate",cate);
		mv.addObject("post",post);
		mv.addObject("search",searchValue);
		mv.setViewName("blog/blogMainSearch");

		return mv;
	}
	
	
	@RequestMapping("badmin.do")
	public String blogAdminView() {
		return "blog/blogAdmin";
	}
	
	
	
	// 블로그홈
	@RequestMapping("blogHome.do")
	public ModelAndView blogHome(ModelAndView mv,HttpServletRequest request) {
        HttpSession session = request.getSession();
        Member nowUser = (Member) session.getAttribute("loginUser");
		// 좋아요 횟수 많은 게시글 수대로 갖고오기
		 ArrayList<BlogPost> post = bService.selectPopularList();
		 System.out.println(post);
		 // 이렇게까지 해야하나...?
		 ArrayList<BlogPost> bp =bService.selectPopularRealList(post);
		 System.out.println(bp);
		 
        mv.addObject("loginUser",nowUser);
        mv.addObject("popPost",bp);
        mv.setViewName("blog/blogHome");

		return mv;
	}
	
	@RequestMapping("loginPageGo.do")
	public String test() {
		
		
		return "blog/login";
	}
	
	
	
	
	
	
	
	
}
