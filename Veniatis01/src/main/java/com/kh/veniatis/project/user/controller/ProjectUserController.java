package com.kh.veniatis.project.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProjectUserController {
	
	@RequestMapping("projectList.do")
	public String ProjectList() {
		return "project_user/projectList";
	}
	
	@RequestMapping("projectDetail.do")
	public String ProjectDetail() {
		return "project_user/projectDetail";
	}
	
	@RequestMapping("rewardSelect.do")
	public String RewardSelectView() {
		return "project_user/rewardSelect";
	}
	
	@RequestMapping("rewardOrder.do")
	public String RewardOrderView() {
		return "project_user/rewardOrder";
	}
	
	@RequestMapping("rewardSuccess.do")
	public String RewardSuccessView() {
		return "project_user/rewardSuccess";
	}
}
