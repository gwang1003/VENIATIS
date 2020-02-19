package com.kh.veniatis.member.controller;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Random;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.exception.MemberException;
import com.kh.veniatis.member.model.service.MemberService;
import com.kh.veniatis.member.model.vo.Member;



@SessionAttributes({"loginUser","msg"})
@Controller 
public class MemberController {
	@Autowired
	private MemberService mService;
	
	@Autowired
	  private JavaMailSender mailSender;
		
	@RequestMapping("loginView.do")
	public String loginView() {
		return "myPage/My/memberLogin";
	}
	
	@RequestMapping(value="login.do", method=RequestMethod.POST)
	public String memberLogin(Member m, Model model) { 
		// HttpSession 커맨드 객체 생략
		Member loginUser = mService.loginMember(m);
		
		if(loginUser != null) {

			// 조회 성공 시 Model에 loginUser 정보를 담는다.
			model.addAttribute("loginUser", loginUser);
			// -> 이렇게만 작성하면 requestScope에만 담김
			// 가장 위로 올라가서 @SessionAttributes라는 어노테이션을 추가한다. 
			
			return "main";
		} else {
			// Exception을 이용하여 errorPage 연결

			// RuntimeException으로 상속 받았을 때의 차이점
			// -> throws를 넘길 필요 없으며 try-catch로 잡을 필요도 없음
			throw new MemberException("로그인 실패!!");
			// 에러페이지로 연결하는 방법 -> web.xml에 공용 에러 페이지를 등록하여
			// 모든 예외가 발생 시 그 페이지가 뜨게끔 설정
		}
		
	}
	
	@RequestMapping("logout.do")
	public String logout(SessionStatus status) {
		// 로그아웃 처리를 위해 커맨드 객체로 세션의 상태를 관리할 수 있는 SessionStatus 객체가 필요
		
		status.setComplete();
		// 세션의 상태를 확정 지어주는 메소드 호출이 필요함.
		
		// return "home"; : forward 방식
		return "redirect:home.do"; // redirect 방식
	}	
	
	@RequestMapping("managerMain.do")
	public String managerMain() {
		return "myPage/Manager/ManagerMain";
	}
	
	@RequestMapping("selectMemberList.do")
	public String selectMemberList() {
		return "myPage/Manager/allMember";
	}
	
	@RequestMapping("selectCreatorList.do")
	public String selectCreatorList() {
		return "myPage/Manager/allCreator";
	}
	
	@RequestMapping("joinCreator.do")
	public String joinCreator() {
		return "myPage/Manager/joinCreator";
	}
	
	@RequestMapping("joinProject.do")
	public String joinProject() {
		return "myPage/Manager/joinProject";
	}
	
	@RequestMapping("selectProjectList.do")
	public String selectProjectList() {
		return "myPage/Manager/allProject";
	}
	
	@RequestMapping("selectCompetitionList.do")
	public String selectCompetitionList() {
		return "myPage/Manager/allCompetition";
	}
	
	@RequestMapping("joinCompetition.do")
	public String joinCompetition() {
		return "myPage/Manager/insertCompetition";
	}
	
	@RequestMapping("Answer.do")
	public String Answer() {
		return "myPage/Manager/Answer";
	}
	
	@RequestMapping("memberUpdateForm.do")
	public ModelAndView memberUpdateForm(
			HttpSession session, ModelAndView mv) {		
		Member m = (Member) session.getAttribute("loginUser");
		mv.addObject("Member", m);
		mv.setViewName("myPage/My/memberUpdate");
		return mv;
	}
	
	@RequestMapping("memberUpdate.do")
	public ModelAndView memberUpdate(
			Member m,@RequestParam(value="post") String post, Model model,
			@RequestParam(value="address1") String address1, @RequestParam(value="address2") String address2) {
		m.setmAddress(post + "#" + address1 + "#" + address2);
		int result = mService.memberUpdate(m);
		
		if(result > 0) {
			Member loginUser = mService.loginMember(m);
			model.addAttribute("loginUser", loginUser);
			ModelAndView mv = new ModelAndView();
			mv.addObject("Member", loginUser);
			mv.setViewName("myPage/My/memberUpdate");
			System.out.println("m : " + m);
			System.out.println("loginUser : " + loginUser);
			return mv;
		}else {
			throw new MemberException("회원정보 업데이트 실패!!");
		}
		
		
		
	}
	
	@RequestMapping("memberLogin.do")
	public String Login() {
		return "myPage/My/memberLogin";
	}
	@RequestMapping("memberInsertForm.do")
	public String memberInsertForm() {
		return "myPage/My/memberInsert";
	}
	@RequestMapping("memberInsertInfo.do")
	public String memberInsertInfo() {
		return "myPage/My/memberInsertInfo";
	}
	@RequestMapping("attendProject.do")
	public String attendProject() {
		return "myPage/My/attendProject";
	}
	@RequestMapping("myInterestProject.do")
	public String myInterestProject() {
		return "myPage/My/myInterestProject";
	}
	@RequestMapping("myOpenProject.do")
	public String myOpenProject() {
		return "myPage/My/myOpenProject";
	}
	@RequestMapping("question.do")
	public String question() {
		return "myPage/My/question";
	}
	
	@RequestMapping("revenue.do")
	public String revenue() {
		return "myPage/Manager/revenue";
	}
	@RequestMapping("memberInsert.do")
	public String memberInsert(Member m, HttpServletRequest request,
			@RequestParam(value="UserImg", required=false) MultipartFile file,
			@RequestParam(value="post") String post, @RequestParam(value="address1") String address1,
			@RequestParam(value="address2") String address2) {
		m.setmAddress(post + "#" + address1 + "#" + address2);
		int result = mService.memberInsert(m);
		Member member = mService.selectOneMember(m.getmId());
		System.out.println("dl Member : " + member);
		Files files = new Files(3, "basicImg.jpg", "basicImg.jpg", "resources/memberPhoto/basicImg.jpg");
		
		if(result > 0) {
			if(!file.getOriginalFilename().equals("")) {
				files = saveFile(file, request);
			}
			files.setmNo(member.getmNo());
			int result2 = mService.mPhotoInsert(files);
				return "main";
		}else {
			throw new MemberException("회원가입 실패!!");
		}
	}

	private Files saveFile(MultipartFile file, HttpServletRequest request) {
		String root = request.getSession().getServletContext().getRealPath("resources");
		
		String savePath = root + "\\memberPhoto";
		
		File folder = new File(savePath);
		
		// 해당 폴더 위치가 존재하지 않는다면
		if(!folder.exists()) {
			folder.mkdirs(); // 해당 디렉토리들을 만든다
		}
		int index = file.getOriginalFilename().indexOf(".");
		
		String extend = file.getOriginalFilename().substring(index);

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhhmmss");
		Calendar c = Calendar.getInstance();
		String renameFilename = sdf.format(c.getTime()) + extend;

		String filePath = folder + "\\" + renameFilename;  
		Files files = new Files(3, file.getOriginalFilename(), renameFilename, "resources/memberPhoto/" + renameFilename);
		try {
			// 이 순간 서버에 파일이 저장 된다
			file.transferTo(new File(filePath));
		} catch (Exception e) {
			System.out.println("파일 전송 에러 : " + e.getMessage());
		}
		return files;
	}

	@RequestMapping(value = "email.do")
	@ResponseBody
	  public String mailSending(HttpServletRequest request,
			  String email) {
	    String setfrom = "VENIATIS";         
	    String tomail  = email;     // 받는 사람 이메일
	    String title   = "회원가입 정보 인증메일입니다(VENIATIS)";      // 제목
	    
	    StringBuffer temp =new StringBuffer();
        Random rnd = new Random();
        for(int i=0;i<10;i++)
        {
            int rIndex = rnd.nextInt(3);
            switch (rIndex) {
            case 0:
                // a-z
                temp.append((char) ((int) (rnd.nextInt(26)) + 97));
                break;
            case 1:
                // A-Z
                temp.append((char) ((int) (rnd.nextInt(26)) + 65));
                break;
            case 2:
                // 0-9
                temp.append((rnd.nextInt(10)));
                break;
            }
        }    
	    
	    String content = temp.toString();    // 내용
	    try {
	      MimeMessage message = mailSender.createMimeMessage();
	      MimeMessageHelper messageHelper 
	                        = new MimeMessageHelper(message, true, "UTF-8");
	      
	      messageHelper.setFrom(new InternetAddress(setfrom, "VENIATIS"));  // 보내는사람 생략하거나 하면 정상작동을 안함
	      messageHelper.setTo(tomail);     // 받는사람 이메일
	      messageHelper.setSubject(title); // 메일제목은 생략이 가능하다
	      messageHelper.setText(content);  // 메일 내용
	      mailSender.send(message);
	    } catch(Exception e){
	      System.out.println(e);
	    }
	   
	    return content;
	  }
	
	@RequestMapping(value="mPhotoUpdate.do")
	@ResponseBody
	public String mPhotoUpdatedo(HttpServletRequest request, HttpSession session,
			@RequestParam(value="file", required=false) MultipartFile file, Model model) {
		Member m = (Member) session.getAttribute("loginUser");
		if(file != null && !file.isEmpty()) {
			// 원래 파일 삭제
			deleteFile(m.getFilePath(), request);
			int result3 = mService.mPhotoDelete(m);
			
			// 새로운 사진 파일로 저장
			Files files = new Files();
			if(!file.getOriginalFilename().equals("")) {
				files = saveFile(file, request);
			}
			files.setmNo(m.getmNo());
			
			// DB에 저장
			int result2 = mService.mPhotoInsert(files);
			if(result2 > 0) {
				//DB에 저장이 되면 DB에 있는 원래 데이터를 삭제 loginUser에 새로 담아줌
				
				m.setFilePath(files.getFilePath());				
				model.addAttribute("loginUser", m);
			}
			
		}
		return m.getFilePath();
	
	}

	private void deleteFile(String filePath, HttpServletRequest request) {
		String root = request.getSession().getServletContext().getRealPath(filePath);
		
		File deleteFile = new File(root);
		
		if(deleteFile != null) {
			deleteFile.delete();
		}
		
	}
	
	
}
