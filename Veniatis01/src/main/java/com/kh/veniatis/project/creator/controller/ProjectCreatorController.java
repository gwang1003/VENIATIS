package com.kh.veniatis.project.creator.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.kh.veniatis.project.creator.model.exception.ProjectException;
import com.kh.veniatis.project.creator.model.service.CreatorService;
import com.kh.veniatis.project.creator.model.vo.Creator;



@Controller
public class ProjectCreatorController {
	@Autowired
	private CreatorService cService;
	
	
	@RequestMapping("creatorInsert.do")
	public ModelAndView projectInfoInsert(HttpServletRequest request,Creator c,Model model,
			@RequestParam(value="userPost")String post, @RequestParam(value="userAddr1")String addr1,
			@RequestParam(value="userAddr2")String addr2,@RequestParam(value="mNo")int mNo
			){
		c.setCreAddress(post+"#"+addr1+"#"+addr2);
		c.setmNo(mNo);
		System.out.println(c);
		int result = cService.creatorInsert(c);
		
		Creator creator = cService.selectCreNo(c);
		if(result>0) {
			ModelAndView mv = new ModelAndView();
			mv.addObject("creator", creator);
			mv.setViewName("project_creator/projectStartPage2");
			return mv;
		}else {
			throw new ProjectException("크리에이터 등록 실패!");
		}
		
		
	}
	
	
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
	
	@RequestMapping("test.do")
	public String test() {
		return "project_creator/test";
	}
	
}
