package com.kh.veniatis.project.user.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.reply.model.vo.Reply;
import com.kh.veniatis.member.model.service.MemberService;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.project.creator.model.vo.Reward;
import com.kh.veniatis.project.user.model.service.ProjectUserService;
import com.kh.veniatis.project.user.model.vo.Funding;
import com.kh.veniatis.project.user.model.vo.MultiRowFunding;
import com.kh.veniatis.project.user.model.vo.Order;
import com.kh.veniatis.project.user.model.vo.ProjectPagination;
import com.kh.veniatis.project.user.model.vo.ProjectView;

@Controller
public class ProjectUserController {
	@Autowired
	private ProjectUserService pus;
	@Autowired
	private MemberService mService;
	
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
			}
			
			mv.addObject("projectList", list);
			mv.addObject("pi", ProjectPagination.getPageInfo());
			mv.setViewName("project_user/projectList");
			
		}else {
			//throw new BoardException("게시글 전체 조회 실패!!");
		}
		return mv;
	}
	
	// 카테고리 있는 경우
	/*@RequestMapping("projectList2.do")
	public ModelAndView ProjectList(ModelAndView mv,
			@RequestParam("cate") int cate,
			@RequestParam(value="page", required = false) Integer page) {

		int currentPage = page != null ? page : 1;
		
		ArrayList<ProjectView> list = pus.selectList(currentPage);
		
		//System.out.println(list);
		
		if(list != null) {
			for(ProjectView p : list) {
				System.out.println("카테고리 확인 : " + cate);
				
			}
			mv.addObject("cate", cate);
			mv.addObject("projectList", list);
			mv.addObject("pi", ProjectPagination.getPageInfo());
			mv.setViewName("project_user/projectList2");
			
		}else {
			//throw new BoardException("게시글 전체 조회 실패!!");
		}
		return mv;
	}*/


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
	
	
	// 댓글 리스트 불러오기
	@RequestMapping(value="cheerList.do", produces="application/json; charset=utf-8")
	@ResponseBody
	public String getCheerList(int pNo) {
		ArrayList<Reply> cList = pus.selectCheerList(pNo);
		for(int i=0; i<cList.size(); i++) {
			System.out.println(cList.get(i));
		}
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		// 시분초 다루고 싶다면 java.util.Date 사용
		return gson.toJson(cList);
	}
	
	// 댓글 등록하기
	/*@RequestMapping("addReply.do")
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
	}*/
	
	
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
			@RequestParam("pNo") int pNo,
			@RequestParam("mNo") int mNo,
			@RequestParam("totalAmt") int totalAmt,
			@RequestParam("addAmt") String addAmt,
			@ModelAttribute("selectedReward") MultiRowFunding fundings) {
		
		ProjectView p = pus.selectProject(pNo);
		
		System.out.println("합계 : "+totalAmt);
		ArrayList<Funding> sList = new ArrayList<Funding>();
		
		List<Funding> fundingList = fundings.getFundings();
		int listSize = fundingList.size();
		
		System.out.println("list 사이즈 : "+listSize);
		
		// 리워드 번호로 리워드 정보 조회해서 리스트에 넣자
		for(int i = 0; i<listSize; i++) {
			System.out.println(fundingList.get(i));
			if(fundingList.get(i).getrItem() != null && fundingList.get(i).getQuantity() != 0) {
				sList.add(fundingList.get(i));
			}
		}
		
		mv.addObject("project", p);
		mv.addObject("sList", sList);
		mv.addObject("totalAmt", totalAmt);
		mv.addObject("addAmt", addAmt);
		mv.setViewName("project_user/rewardOrder");
		return mv;
	}
	
	@RequestMapping("insertFunding.do")
	public ModelAndView insertFunding(ModelAndView mv, HttpSession session,
			@RequestParam("pNo") int pNo,
			@RequestParam("totalPrice") String totalAmt,
			@RequestParam("addPrice") String addAmt,
			@RequestParam("tfName") String tfName,
			@RequestParam("tfPhone") String tfPhone,
			@RequestParam("roadFullAddr") String address,
			@RequestParam("tfMemo") String tfMemo,
			@RequestParam("supportComment") String supportComment,
			@ModelAttribute MultiRowFunding fundings) {
		
		ProjectView p = pus.selectProject(pNo);
		Member loginUser = (Member)session.getAttribute("loginUser");
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss"); //년월일시분초
		String orderstr = sdf.format(new Date()) + loginUser.getmNo();
		Double orderNo = Double.parseDouble(orderstr);
		/*System.out.println("주문번호 : " + orderNo + ", 로그인 유저 번호 : " + loginUser.getmNo() 
				+ ", 참여금 : " + addAmt + ", \n수령인 : " + tfName + ", 연락처 : " + tfPhone 
				+ ", 주소 : " + address + ", \n배송메모 : " + tfMemo);*/
		
		// 주문 정보 저장하기
		int addAmount = Integer.parseInt(addAmt);
		int totalAmount = Integer.parseInt(totalAmt);
		
		Order insertOrder = new Order(orderNo, loginUser.getmNo(), 
								addAmount, tfName, tfPhone, address, tfMemo, totalAmount);
		int result = pus.insertOrder(insertOrder);
		
		if(result > 0) {
			// 펀딩 하나씩 데이터베이스에 저장하기
			List<Funding> paramList = fundings.getFundings();
			for(int i=0; i<paramList.size(); i++) {
				Funding f = paramList.get(i);
				f.setoNo(orderNo);
				pus.insertFunding(f);
			}
			
			//참여자 응원 저장하기(댓글 형식)
			Reply cheer = new Reply();
			cheer.setmNo(loginUser.getmNo());
			cheer.setpNo(pNo);
			cheer.setrContent(supportComment);
			/*int cheerResult = pus.insertCheer(cheer);
			if(cheerResult <= 0){
				System.out.println("참여자 응원 저장 실패");
			}*/
			
			
			//returnStr = "redirect:rewardSuccess.do";
			mv.addObject("oNo", orderNo);
			mv.addObject("project", p);
			mv.setViewName("rewardSuccess.do");
		}else {
			// 주문 실패!!
			System.out.println("주문 실패!!");
		}
		
		return mv;
	}
	
	@RequestMapping("rewardSuccess.do")
	public ModelAndView RewardSuccessView(ModelAndView mv) {
		mv.setViewName("project_user/rewardSuccess");
		return mv;
	}
	
}
