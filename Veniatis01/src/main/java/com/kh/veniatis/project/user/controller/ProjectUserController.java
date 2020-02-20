package com.kh.veniatis.project.user.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.project.creator.model.vo.Reward;
import com.kh.veniatis.project.user.model.service.ProjectUserService;
import com.kh.veniatis.project.user.model.vo.ProjectPagination;
import com.kh.veniatis.project.user.model.vo.ProjectView;

@Controller
public class ProjectUserController {
	@Autowired
	private ProjectUserService pus;
	
	
	/*@RequestMapping("projectList.do")
	public String ProjectList() {
		return "project_user/projectList";
	}*/
	
	// 카테고리 없는 경우
	@RequestMapping("projectList.do")
	public ModelAndView ProjectList(ModelAndView mv,
			@RequestParam(value="page", required = false) Integer page) {

		int currentPage = page != null ? page : 1;
		
		ArrayList<ProjectView> list = pus.selectList(currentPage);
		
		//System.out.println(list);
		
		if(list != null) {
			mv.addObject("projectList", list);
			mv.addObject("pi", ProjectPagination.getPageInfo());
			mv.setViewName("project_user/projectList");
			for(ProjectView p : list) {
				System.out.println(p);
			}
		}else {
			//throw new BoardException("게시글 전체 조회 실패!!");
		}
		return mv;
	}


	@RequestMapping("projectDetail.do")
	public ModelAndView ProjectDetail(ModelAndView mv) {
		//"project_user/projectDetail"
		
		int pNo = 4;
		ProjectView p = pus.selectProject(pNo);
		System.out.println("프로젝트 : " + p);
		
		if(p != null) {
			
			// 리워드 목록
			ArrayList<Reward> rList = pus.selectRewardList(pNo);
			//System.out.println(rList);
			
			// 프로젝트 사진 목록 가져오기(ArrayList<Files>)
			ArrayList<Files> fList = pus.selectFileList(pNo);
			//System.out.println(fList);
			
			// 참여율(프로젝트 진행율)
			int supportRate = 0;
			if(p.getSumAmount()!=0) {
				supportRate = p.getSumAmount()*100/p.getTargetAmount();
			}
						
			mv.addObject("project", p);
			mv.addObject("rewardList", rList);
			mv.addObject("filesList", fList);
			mv.addObject("supportRate", supportRate);
			mv.setViewName("project_user/projectDetail");
		}		
		
		return mv;
	}
	
	// 프로젝트 상세보기에서 최근소식, QnA, 참여자 응원 관련 메소드 만들어야 함
	
	/*@RequestMapping(value="/test1.do", method=RequestMethod.POST)
    @ResponseBody
    public String selectNewsList(int pNo) {
        //인코딩이 안된듯..?
        return "프로젝트 번호는 " + pNo;
    }*/
	
	/*
	// 댓글 리스트 불러오기
	@RequestMapping(value="projectRList.do", produces="application/json; charset=utf-8")
	@ResponseBody
	public String getReplyList(int pNo) {
		ArrayList<Reply> rList = pus.selectReplyList(pNo);
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		// 시분초 다루고 싶다면 java.util.Date 사용
		return gson.toJson(rList);
	}
	
	// 댓글 등록하기
	@RequestMapping("addReply.do")
	@ResponseBody
	public String addReply(Reply r, HttpSession session) {
		// 프로젝트 작성자는 답글로 작성되어야한다..
		
		//Member loginUser = (Member)session.getAttribute("loginUser");
		Member m = new Member();
		m.setmId("댓글작성자 아이디");
		
		//String rWriter = loginUser.getmId();
		//r.setrWriter(rWriter);
		
		int result = pus.insertReply(r);
		
		if(result > 0) {
			return "success";
		}else {
			//throw new BoardException("댓글 등록 실패!!");
			return "fail";
		}
	}
	*/
	
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
