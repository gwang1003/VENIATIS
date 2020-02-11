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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.kh.veniatis0.blog.model.service.BlogService;
import com.kh.veniatis0.blog.model.service.MemberService;
import com.kh.veniatis0.blog.model.vo.BlogCate;
import com.kh.veniatis0.blog.model.vo.BlogPost;
import com.kh.veniatis0.blog.model.vo.Files;
import com.kh.veniatis0.blog.model.vo.Member;



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

			Member m=mService.selectOneMember(userId);
			
			//카테고리 목록 갖고오기
			ArrayList<BlogCate> cate = bService.selectCateList(userId);
			
			//포스트 목록 갖고오기
			ArrayList<BlogPost> post = bService.selectPostList(userId);
			
			System.out.println(post);
			
			mv.addObject("user",m);
			mv.addObject("cate",cate);
			mv.addObject("post",post);
			mv.setViewName("blogMain");
		 
		return mv;
	}
	
	//블로그 내용 상세보기
	@RequestMapping("blogDetail.do")
	public ModelAndView blogDetail(ModelAndView mv,
			@RequestParam(value="page", required=false) Integer page,HttpServletRequest request,
			 @RequestParam("mId") String userId,
			 @RequestParam("uniNo") Integer uniNo
			 ) {

			BlogPost b= new BlogPost();
			b.setUniNo(uniNo);
			b.setmId(userId);
			//포스트 내용 갖고오기
			BlogPost post = bService.selectPostDetail(b);
			
			Member m=mService.selectOneMember(userId);
			mv.addObject("user",m);
			mv.addObject("post",post);
			 mv.setViewName("blogDetail");
		 
		return mv;
	}	
	
	@RequestMapping("write2.do")
	public ModelAndView boardInsertView2(ModelAndView mv,HttpServletRequest request) {
        HttpSession session = request.getSession();
        Member m = (Member) session.getAttribute("loginUser");
        ArrayList<BlogCate> cate = bService.selectCateList(m.getmId());
        
        mv.addObject("cate",cate);
        mv.setViewName("blogWrite");
        
		return mv;
	}
	
	
	@RequestMapping("write.do")
	public String boardInsertView() {
		return "blogWrite";
	}
	
	
	@RequestMapping("blogInsert.do")
	public String boardInsert(BlogPost b,HttpServletRequest request,
								@RequestParam(value="represent", required=false) MultipartFile file) {
		
        HttpSession session = request.getSession();
        Member m = (Member) session.getAttribute("loginUser");
		b.setmId(m.getmId());
		//changeName이 DB에있는지 중복확인후
		System.out.println(b);
		
		boolean flag = false;
		
		int result = bService.insertPost(b); 
		System.out.println(file.getOriginalFilename());
		//썸네일 넣기...
		if(!file.getOriginalFilename().equals("")) {
			System.out.println("썸네일옴");
			String renameFileName = saveFile(file, request);
		}else {
			System.out.println("썸네일안옴");
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
			System.out.println(f);
			int result2 = bService.insertFiles(f); 	
			}
			
			//전역변수지워주기!!
			changeName.clear();
			originName.clear();
		}

		return "redirect:blogMain2.do?userId="+b.getmId();
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
	
}
