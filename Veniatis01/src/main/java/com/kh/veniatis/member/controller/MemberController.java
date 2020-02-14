package com.kh.veniatis.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.kh.veniatis.member.model.exception.MemberException;
import com.kh.veniatis.member.model.service.MemberService;
import com.kh.veniatis.member.model.vo.Member;



@SessionAttributes({"loginUser","msg"})
@Controller 
public class MemberController {
   @Autowired
   private MemberService mService;
   
   
   
   @RequestMapping(value="login.do", method=RequestMethod.POST)
   public String memberLogin(Member m, Model model) { 
      // HttpSession 커맨드 객체 생략
      System.out.println("member : " + m);
      Member loginUser = mService.loginMember(m);
      
      System.out.println("loginUser : " + loginUser);
      
      if(loginUser != null) {

         // 조회 성공 시 Model에 loginUser 정보를 담는다.
         model.addAttribute("loginUser", loginUser);
         // -> 이렇게만 작성하면 requestScope에만 담김
         // 가장 위로 올라가서 @SessionAttributes라는 어노테이션을 추가한다. 
         
         return "index";
      } else {
         // Exception을 이용하여 errorPage 연결

         // RuntimeException으로 상속 받았을 때의 차이점
         // -> throws를 넘길 필요 없으며 try-catch로 잡을 필요도 없음
         throw new MemberException("로그인 실패!!");
         // 에러페이지로 연결하는 방법 -> web.xml에 공용 에러 페이지를 등록하여
         // 모든 예외가 발생 시 그 페이지가 뜨게끔 설정
      }
      
   }
   /*
   @RequestMapping("logout.do")
   public String logout(SessionStatus status) {
      // 로그아웃 처리를 위해 커맨드 객체로 세션의 상태를 관리할 수 있는 SessionStatus 객체가 필요
      
      status.setComplete();
      // 세션의 상태를 확정 지어주는 메소드 호출이 필요함.
      
      // return "home"; : forward 방식
      return "redirect:home.do"; // redirect 방식
   }*/
   
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
   
   @RequestMapping("memberUpdate.do")
   public String memberUpdate() {
      return "myPage/My/memberUpdate";
   }
   @RequestMapping("memberLogin.do")
   public String Login() {
      return "myPage/My/memberLogin";
   }
   @RequestMapping("memberJoin.do")
   public String insertMember() {
      return "myPage/My/memberJoin";
   }
   @RequestMapping("memberJoinInfo.do")
   public String insertMemberInfo() {
      return "myPage/My/memberJoinInfo";
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
   @RequestMapping("Question.do")
   public String Question() {
      return "myPage/My/Question";
   }
   
   @RequestMapping("revenue.do")
   public String revenue() {
      return "myPage/Manager/revenue";
   }
   
   
   
}
