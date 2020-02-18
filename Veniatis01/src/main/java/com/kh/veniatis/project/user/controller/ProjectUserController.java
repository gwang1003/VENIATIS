package com.kh.veniatis.project.user.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.user.model.service.ProjectUserService;
import com.kh.veniatis.project.user.model.vo.News;
import com.kh.veniatis.project.user.model.vo.Reward;

@Controller
public class ProjectUserController {
	@Autowired
	private ProjectUserService pus;
	
	
	@RequestMapping("projectList.do")
	public String ProjectList() {
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
		
		int pNo = 4;
		Project p = pus.selectProject(pNo);
		//System.out.println("db확인 프로젝트 조회 : " + p);
		
		if(p != null) {
			
			// 리워드 목록
			ArrayList<Reward> rList = pus.selectRewardList(pNo);
			//System.out.println(rList);
			
			// 크리에이터 정보(크리에이터명, 이메일)
			//int mNo = pus.selectCreatorNumber(p.getCreNo());
			Member creator = pus.selectCreatorInfo(p.getCreNo());
			
			// 참여율(프로젝트 진행율)
			int supportRate = 0;
			if(p.getpSumAmount()!=0) {
				supportRate = p.getpSumAmount()*100/p.getpTargetAmount();
			}
						
			mv.addObject("project", p);
			mv.addObject("rewardList", rList);
			mv.addObject("creator", creator);
			mv.addObject("supportRate", supportRate);
			mv.setViewName("project_user/projectDetail");
		}		
		
		return mv;
	}
	
	// 프로젝트 상세보기에서 최근소식, QnA, 참여자 응원 관련 메소드 만들어야 함
	
	@RequestMapping("test1.do")
	public void test1Method(
			HttpServletResponse response, int pNo){
		System.out.println("매개변수 : " + pNo);
		// news를 못가져옴.. 어디서 문제일까..
		News notice = pus.selectNews(pNo);
		System.out.println("controller에서 : " + notice);
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
