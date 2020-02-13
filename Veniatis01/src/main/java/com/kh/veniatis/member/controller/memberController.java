package com.kh.veniatis.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class memberController {
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
	
	
}
