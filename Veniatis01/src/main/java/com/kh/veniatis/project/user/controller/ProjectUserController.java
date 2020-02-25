package com.kh.veniatis.project.user.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.project.creator.model.vo.Reward;
import com.kh.veniatis.project.user.model.service.ProjectUserService;
import com.kh.veniatis.project.user.model.vo.Funding;
import com.kh.veniatis.project.user.model.vo.MultiRowFunding;
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
			for(ProjectView p : list) {
				System.out.println(p);
				// 참여율(프로젝트 진행율)
				/*int supportRate = 0;
				if(p.getSumAmount()!=0) {
					supportRate = p.getSumAmount()*100/p.getTargetAmount();
				}
				System.out.println("참여율:"+supportRate);*/
			}
			
			mv.addObject("projectList", list);
			mv.addObject("pi", ProjectPagination.getPageInfo());
			mv.setViewName("project_user/projectList");
			
		}else {
			//throw new BoardException("게시글 전체 조회 실패!!");
		}
		return mv;
	}


	@RequestMapping("projectDetail.do")
	public ModelAndView ProjectDetail(ModelAndView mv, int pNo) {
		//"project_user/projectDetail"
		
		ProjectView p = pus.selectProject(pNo);
		
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
	public ModelAndView RewardSelectView(ModelAndView mv, int pNo) {
		//System.out.println("리워드 목록 조회를 위한 pNo : "+pNo);
		ProjectView p = pus.selectProject(pNo);
		ArrayList<Reward> rList = pus.selectRewardList(pNo);
		
		mv.addObject("project", p);
		mv.addObject("rewardList", rList);
		mv.setViewName("project_user/rewardSelect");
		return mv;
	}
	
	@RequestMapping("rewardOrder.do")
	public ModelAndView RewardOrderView(ModelAndView mv,
			@RequestParam("totalAmt") int totalAmt,
			@RequestParam("addAmt") int addAmt,
			@ModelAttribute("selectedReward") MultiRowFunding fundings) {
		
		System.out.println("합계 : "+totalAmt);
		ArrayList<Funding> sList = new ArrayList<Funding>();
		
		List<Funding> fundingList = fundings.getFundings();
		int listSize = fundingList.size();
		
		System.out.println("list 사이즈 : "+listSize);
		
		for(int i = 0; i<listSize; i++) {
			System.out.println(fundingList.get(i));
			sList.add(fundingList.get(i));
		}
		
		mv.addObject("sList", sList);
		mv.addObject("totalAmt", totalAmt);
		mv.addObject("addAmt", addAmt);
		mv.setViewName("project_user/rewardOrder");
		return mv;
	}
	
	@RequestMapping("rewardSuccess.do")
	public ModelAndView RewardSuccessView(ModelAndView mv) {
		mv.setViewName("project_user/rewardSuccess");
		return mv;
	}
	
	
}
