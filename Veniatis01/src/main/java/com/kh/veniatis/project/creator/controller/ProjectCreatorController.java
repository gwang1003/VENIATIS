package com.kh.veniatis.project.creator.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProjectCreatorController {
	@RequestMapping("projectStart.do")
	public String ProjectStart() {
		return "project_creator/projectStart";
	}
	
	@RequestMapping("projectSelect.do")
	public String ProjectSelect() {
		return "project_creator/projectSelect";
	}
	
	@RequestMapping("projectStartPage.do")
	public String ProjectStartPage() {
		return "project_creator/projectStartPage";
	}
	
	@RequestMapping("projectStartPage2.do")
	public String ProjectStartPage2() {
		return "project_creator/projectStartPage2";
	}
	
	@RequestMapping("projectStartPage_reward.do")
	public String ProjectStartPage_reward() {
		return "project_creator/projectStartPage_reward";
	}
	
	@RequestMapping("projectStartPage_last.do")
	public String ProjectStartPage_last() {
		return "project_creator/projectStartPage_last";
	}
	
}
