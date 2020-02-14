package com.kh.veniatis.project.user.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.user.model.service.ProjectUserService;

@Controller
public class ProjectUserController {
	@Autowired
	private ProjectUserService pus;
	
	
	@RequestMapping("projectList.do")
	public String ProjectList() {
//		int pNo = 1;
//		Project p = pus.selectProject(pNo);
//		System.out.println("db확인 프로젝트 조회 : " + p);
		return "project_user/projectList";
	}
	
	/*@RequestMapping("projectList.do")
	public ModelAndView ProjectList(ModelAndView mv) {
		
		int currentPage = 1;
		
		ArrayList<Project> list = pus.selectList(currentPage);
		
		//System.out.println(list);
		
		if(list != null) {
			mv.addObject("list", list);
			//mv.addObject("pi", Pagination.getPageInfo());
			mv.setViewName("board/boardListView");
		}else {
			//throw new BoardException("게시글 전체 조회 실패!!");
		}
		return mv;
		//return "project_user/projectList";
	}*/
	
	@RequestMapping("projectDetail.do")
	public ModelAndView ProjectDetail(ModelAndView mv) {
		//"project_user/projectDetail"
		
		int pNo = 1;
		Project p = pus.selectProject(pNo);
		System.out.println("db확인 프로젝트 조회 : " + p);
		
		if(p != null) {
			mv.addObject("project", p);
			mv.setViewName("project_user/projectDetail");
		}
		
		
		return mv;
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
