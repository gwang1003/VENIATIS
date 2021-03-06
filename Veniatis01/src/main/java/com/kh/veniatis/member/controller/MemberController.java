package com.kh.veniatis.member.controller;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor.HSSFColorPredefined;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.kh.veniatis.blog.model.service.BlogService;
import com.kh.veniatis.blog.model.vo.Compet;
import com.kh.veniatis.common.Pagination;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.exception.MemberException;
import com.kh.veniatis.member.model.service.MemberService;
import com.kh.veniatis.member.model.vo.CreView;
import com.kh.veniatis.member.model.vo.Descending;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.ProjectTotal;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.member.model.vo.Revenue;
import com.kh.veniatis.member.model.vo.SupportView;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.user.model.vo.ProjectView;

@SessionAttributes({ "loginUser", "msg" })
@Controller
public class MemberController {
	@Autowired
	private MemberService mService;

	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private BlogService bService;

	// 마이페이지 로그인 폼
		@RequestMapping("memberLogin.do")
		public String Login() {
			return "myPage/My/memberLogin";
		}
	
	// 로그인 메소드, 방문자수 및 최근 접속일 업데이트
	@RequestMapping(value = "login.do", method = RequestMethod.POST)
	public ModelAndView memberLogin(Member m, Model model,
			HttpServletRequest request, HttpServletResponse response) {
		// HttpSession 커맨드 객체 생략
		Calendar cal = new GregorianCalendar();
		
		int hour = cal.get(Calendar.HOUR_OF_DAY);
		int minute = cal.get(Calendar.MINUTE);
		int second = cal.get(Calendar.SECOND);
		
		Member loginUser = mService.loginMember(m);
		if (loginUser != null) {
			int mNo = loginUser.getmNo();
			// 조회 성공 시 Model에 loginUser 정보를 담는다.
			model.addAttribute("loginUser", loginUser);
			mService.updateDate(mNo);
			boolean flag = false;
			Cookie[] cookies = request.getCookies();
			if(cookies != null) {
				for(Cookie c : cookies) {
					if(c.getName().equals("mNo"+mNo)) {
						// 해당 게시글에 대한 쿠키 존재(이미 읽은 게시글)
						flag = true;
					}
				}
				if(!flag) {
					// 처음 읽는 게시글일때
					Cookie c = new Cookie("mNo"+loginUser.getmNo(), String.valueOf(mNo));
					c.setMaxAge((1 * 24 * 60 * 60) - (hour * 3600 + minute * 60 + second)); // 자정까지
					response.addCookie(c);
					mService.updateDateCount();
				}
			}
			
			// -> 이렇게만 작성하면 requestScope에만 담김
			// 가장 위로 올라가서 @SessionAttributes라는 어노테이션을 추가한다.
			ModelAndView mv = new ModelAndView();
			mv.setViewName("main");
			return mv;
		} else {
			
			ModelAndView mv = new ModelAndView();
			mv.addObject("msg", "아이디와 비밀번호를 확인해주세요.");
			mv.setViewName("myPage/My/memberLogin");
			return mv;
		}

	}
	
	@RequestMapping("idFindForm.do")	
	public String idFindForm() {
		
		return "myPage/My/idFind";
	}
	
	@RequestMapping("idFind.do")
	@ResponseBody
	public String idFind(Member m) {
		Member member = mService.idFind(m);
		System.out.println(m);
		if(member != null) {
			return member.getmId();
		}else {
			return "fail";
		}
	}

	
	@RequestMapping("passFindForm.do")
	public String passFindForm() {
		
		return "myPage/My/passFind";
	}
	
	@RequestMapping("passFind.do")
	@ResponseBody
	public String passFind(HttpServletRequest request, Member m) {
		Member member = mService.passFind(m);

		if(member != null) {
			String pwd = mailSending2(request, m.getmEmail());
			if(pwd != null) {
				member.setmPwd(pwd);
				int result = mService.fakePwd(member);
			}
			return "suecces";
		}else {
			return "fail";
		}
	}

	// 로그아웃 메소드
	@RequestMapping("logout.do")
	public String logout(SessionStatus status) {
		// 로그아웃 처리를 위해 커맨드 객체로 세션의 상태를 관리할 수 있는 SessionStatus 객체가 필요

		status.setComplete();
		// 세션의 상태를 확정 지어주는 메소드 호출이 필요함.

		// return "home"; : forward 방식
		return "redirect:home.do"; // redirect 방식
	}

	// 관리자페이지 메인 이동 메소드
	@RequestMapping("managerMain.do")
	public ModelAndView managerMain() {
		int visitor = mService.toDayVisitor();
		int openProject = mService.toDayProject();
		int QnA = mService.toDayQnA();
		ArrayList mVisitor = mService.selectMVisitor();
		ArrayList mVisitor2 = mService.selectMVisitor2();
		int requestProject = mService.requestProject();
		int project = mService.selectProject();
		int endProject = mService.selectEndProject();
		ArrayList<Revenue> revenue = mService.mainRevenue();
		ArrayList<Revenue> revenue2 = mService.mainRevenue2();
		ArrayList<Revenue> revenueAll = mService.mainRevenueAll();		
		/*ArrayList<Revenue> revenue2 = new ArrayList<>();
		for(int i = 0; i < 12; i++) {
			if(revenue.get(i).equals(i+1)) {
				revenue2.add(revenue.get(i));
			}else {
				revenue2.add(new Revenue("0"+(i+1), 0));
			}
		}*/
		Map map = new HashMap();
		map.put("visitor", visitor);
		map.put("openProject", openProject);
		map.put("QnA", QnA);
		map.put("mVisitor", mVisitor);
		map.put("mVisitor2", mVisitor2);
		map.put("requestProject", requestProject);
		map.put("project", project);
		map.put("endProject", endProject);
		map.put("revenue", revenue);
		map.put("revenue2", revenue2);
		map.put("revenueAll", revenueAll);
		
		ModelAndView mv = new ModelAndView();
		mv.addAllObjects(map);
		mv.setViewName("myPage/Manager/managerMain");
		
		return mv;
	}
	
	@RequestMapping("todayMember.do")
	public ModelAndView todayMemberList() {
		ArrayList<Member> mList = mService.toDayMemberList();
		if(mList != null) {
			ModelAndView mv = new ModelAndView();
			
			mv.addObject("mList", mList);
			mv.setViewName("myPage/Manager/memberList");
			
			return mv;
		}else {
			throw new MemberException("유저 정보 조회 실패!!");
		}
	}
	
	@RequestMapping("todayProject.do")
	public ModelAndView todayProjectList() {
		ArrayList<Member> pList = mService.toDayProjectList();
		if(pList != null) {
			ModelAndView mv = new ModelAndView();
			
			mv.addObject("pList", pList);
			mv.setViewName("myPage/Manager/okProject");
			
			return mv;
		}else {
			throw new MemberException("프로젝트 정보 조회 실패!!");
		}
	}
	
	@RequestMapping("todayQnA.do")
	public ModelAndView todayQnAList() {
		ArrayList<Member> qaList = mService.toDayQnAList();
		if(qaList != null) {
			ModelAndView mv = new ModelAndView();
			
			mv.addObject("qaList", qaList);
			mv.setViewName("myPage/Manager/QnAList");
			
			return mv;
		}else {
			throw new MemberException("유저 정보 조회 실패!!");
		}
	}

	// 관리자페이지 유저 정보 메소드
	@RequestMapping("selectMemberList.do")
	public ModelAndView selectMemberList() {
		ArrayList<Member> mList = mService.selectMemberList();
		
		
		if(mList != null) {
			for(int i = 0; i < mList.size(); i++) {
				if(mList.get(i).getcStatus() != null) {
					mList.get(i).setcStatus("크리에이터");
				}else {
					mList.get(i).setcStatus("일반 회원");
				}
			}
			ModelAndView mv = new ModelAndView();
			mv.addObject("mList", mList);
			mv.setViewName("myPage/Manager/memberList");
			return mv;
		}else {
			throw new MemberException("유저 정보 조회 실패!!");
		}

		
	}
	
	@RequestMapping("searchMember.do")
	   public ModelAndView searchMember(@RequestParam(value="power", required=false) String power,
	         @RequestParam(value="gender", required=false) String gender,
	         @RequestParam(value="id", required=false) String id,
	         @RequestParam(value="name", required=false) String name) {
	      
	      Map map = new HashMap();
	      
	      map.put("power", power);
	      map.put("gender", gender);
	      map.put("id", id);
	      map.put("name", name);

	      ArrayList<Member> mList = mService.selectSearchMember(map);
	      System.out.println("mList : " + mList);
	      if(mList != null) {
	         for(int i = 0; i < mList.size(); i++) {
	            if(mList.get(i).getcStatus() != null) {
	               mList.get(i).setcStatus("크리에이터");
	            }else {
	               mList.get(i).setcStatus("일반 회원");
	            }
	         }
	         ModelAndView mv = new ModelAndView();
	         mv.addObject("mList", mList);
	         mv.setViewName("myPage/Manager/memberList");
	         return mv;
	      }else {
	         throw new MemberException("유저 정보 조회 실패!!");
	      }
	   }

	// 관리자페이지 크리에이터 정보 메소드
	@RequestMapping("selectCreatorList.do")
	public ModelAndView selectCreatorList() {
		ModelAndView mv = new ModelAndView();
		
		ArrayList<CreView> cList = mService.selectCreatorList();
		if(cList != null) {
			for(CreView c:cList) {
				if(c.getCreType().equals("1")) {
					c.setCreType("펀딩");
				}else {
					c.setCreType("창업");
				}
			}
			mv.addObject("cList", cList);
			mv.setViewName("myPage/Manager/creatorList");

			return mv;
		}else {
			throw new MemberException("크리에이터 정보 조회 실패!!");
		}
	}
	
	// 관리자페이지 크리에이터 검색
	@RequestMapping("searchCreator.do")
	   public ModelAndView searchCreator(@RequestParam(value="type", required=false) String type,
	         @RequestParam(value="id", required=false) String id,
	         @RequestParam(value="name", required=false) String name) {
	      
	      Map map = new HashMap();
	      
	      map.put("type", type);
	      map.put("id", id);
	      map.put("name", name);

	      ArrayList<CreView> cList = mService.selectSearchCreator(map);
	      System.out.println("cList : " + cList);
	      if(cList != null) {
	    	  for(CreView c:cList) {
					if(c.getCreType().equals("1")) {
						c.setCreType("펀딩");
					}else {
						c.setCreType("창업");
					}
				}
	         ModelAndView mv = new ModelAndView();
	         mv.addObject("cList", cList);
	         mv.setViewName("myPage/Manager/creatorList");
	         return mv;
	      }else {
	         throw new MemberException("크리에이터 정보 조회 실패!!");
	      }
	   }


	// 관리자페이지 승인 대기 프로젝트 리스트
	@RequestMapping("joinProject.do")
	public ModelAndView joinProject() {
		ArrayList<ProjectView> pList = mService.selectOkProject();
		ModelAndView mv = new ModelAndView();
		
		if(pList != null) {
		mv.addObject("pList", pList);
		mv.setViewName("myPage/Manager/okProject");
		return mv;
		}else {
			throw new MemberException("프로젝트 조회 실패!");
		}
	}
	
	// 프로젝트 승인
	@RequestMapping("okProject.do")
	public String okProject(@RequestParam(value="pNo") int pNo) {
		int result = mService.okProject(pNo);
		if(result > 0) {
			return "redirect:joinProject.do";
		}else {
			throw new MemberException("프로젝트 승인 실패!");
		}
		
		
	}

	// 관리자페이지 전체 프로젝트 리스트
	@RequestMapping("selectProjectList.do")
	public ModelAndView selectProjectList() {
		ArrayList<ProjectView> pList = mService.selectProjectList();
		ModelAndView mv = new ModelAndView();
		
		if(pList != null) {
		Date date = new Date();
		for (int i = 0; i < pList.size(); i++) {
			if (pList.get(i).getpStatus().equals("N")) {
				pList.get(i).setProgress("등업대기");
			}else if (pList.get(i).getEndDate().getTime() > date.getTime()
					&& pList.get(i).getSumAmount() >= pList.get(i).getTargetAmount()) {
				pList.get(i).setProgress("진행중(성공)");
			} else if (pList.get(i).getEndDate().getTime() > date.getTime()
					&& pList.get(i).getSumAmount() < pList.get(i).getTargetAmount()) {
				pList.get(i).setProgress("진행중");
			} else if (pList.get(i).getEndDate().getTime() < date.getTime()
					&& pList.get(i).getSumAmount() >= pList.get(i).getTargetAmount()) {
				pList.get(i).setProgress("종료(성공)");
			} else {
				pList.get(i).setProgress("종료(실패)");
			}
		}
		
		mv.addObject("pList", pList);
		mv.setViewName("myPage/Manager/projectList");
		return mv;
		}else {
			throw new MemberException("프로젝트 조회 실패!");
		}
	}
	
	//관리자페이지 프로젝트 검색
	@RequestMapping("searchProject.do")
	   public ModelAndView searchProject(@RequestParam(value="pType", required=false) String pType,
	         @RequestParam(value="pStatus", required=false) String pStatus,
	         @RequestParam(value="id", required=false) String id,
	         @RequestParam(value="name", required=false) String name,
	         @RequestParam(value="pName", required=false) String pName,
	         @RequestParam(value="pDate", required=false) String pDate) {
	      System.out.println(pType);
	      Map map = new HashMap();
	      
	      map.put("pType", pType);
	      map.put("pStatus", pStatus);
	      map.put("id", id);
	      map.put("name", name);
	      map.put("pName", pName);
	      map.put("pDate", pDate);
	      System.out.println("map : " + map);
	      ArrayList<ProjectView> pList = mService.selectSearchProject(map);
	      System.out.println("pList : " + pList);
	      if(pList != null) {
	    	  Date date = new Date();
	  		for (int i = 0; i < pList.size(); i++) {
	  			if (pList.get(i).getpStatus().equals("N")) {
	  				pList.get(i).setProgress("등업대기");
	  			}else if (pList.get(i).getEndDate().getTime() > date.getTime()
	  					&& pList.get(i).getSumAmount() >= pList.get(i).getTargetAmount()) {
	  				pList.get(i).setProgress("진행중(성공)");
	  			} else if (pList.get(i).getEndDate().getTime() > date.getTime()
	  					&& pList.get(i).getSumAmount() < pList.get(i).getTargetAmount()) {
	  				pList.get(i).setProgress("진행중");
	  			} else if (pList.get(i).getEndDate().getTime() < date.getTime()
	  					&& pList.get(i).getSumAmount() >= pList.get(i).getTargetAmount()) {
	  				pList.get(i).setProgress("종료(성공)");
	  			} else {
	  				pList.get(i).setProgress("종료(실패)");
	  			}
	  		}
	         ModelAndView mv = new ModelAndView();
	         mv.addObject("pList", pList);
	         mv.setViewName("myPage/Manager/projectList");
	         return mv;
	      }else {
	         throw new MemberException("프로젝트 정보 조회 실패!!");
	      }
	   }

	// 관리자페이지 전체 공모전 리스트
	@RequestMapping("selectCompetitionList.do")
	public ModelAndView selectCompetitionList() {
		ArrayList<Compet> cList = mService.competList();
		System.out.println(cList);
		if(cList != null) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("cList", cList);
		mv.setViewName("myPage/Manager/competitionList");
		return mv;
		}else {
			throw new MemberException("공모전 리스트 조회 실패!");
		}
	}
	
	// 관리자페이지 공모전 삭제
	@RequestMapping("deleteCon.do")
	public ModelAndView deleteCon(@RequestParam(value="conNo") String conNo) {
		String[] conNos = conNo.split(" ");
		int[] conNumber = new int[conNos.length];
		for(int i = 0; i < conNos.length; i++) {
			System.out.println(Integer.parseInt(conNos[i]));
			conNumber[i] = Integer.parseInt(conNos[i]);
		}
		int result = mService.deleteCon(conNumber);
		if(result > 0) {
			ArrayList<Compet> cList = mService.competList();
			ModelAndView mv = new ModelAndView();
			mv.addObject("msg", "공모전 삭제 완료!");
			mv.addObject("cList", cList);
			mv.setViewName("myPage/Manager/competitionList");
			return mv;
		}else {
			throw new MemberException("공모전 삭제 실패!!");
		}
	}
	
	// 관리자페이지 공모전 등록 폼
	@RequestMapping("joinCompetitionForm.do")
	public String joinCompetitionForm() {
		return "myPage/Manager/competitionInsert";
	}

	// 관리자페이지 공모전 등록
	@RequestMapping("joinCompetition.do")
	public ModelAndView joinCompetition(Compet c, HttpServletRequest request,
			@RequestParam(value = "cFile", required = false) MultipartFile file) {
		int result = mService.competitionInsert(c);
		Compet compet = mService.selectOneCompet(c.getConName());
		ModelAndView mv = new ModelAndView();
		if (result > 0) {
			Files files = saveFile2(file, request);
			
			files.setConNo(compet.getConNo());
			int result2 = mService.conPhotoInsert(files);
			
			mv.addObject("msg", "공모전 등록 성공!!");
			mv.setViewName("redirect:selectCompetitionList.do");
			return mv;
		} else {
			throw new MemberException("공모전 등록 실패!!");

		}
	}
	
	// 공모전 사진 저장 메소드
	private Files saveFile2(MultipartFile file, HttpServletRequest request) {
		String root = request.getSession().getServletContext().getRealPath("resources");

		String savePath = root + "\\compet";

		File folder = new File(savePath);

		// 해당 폴더 위치가 존재하지 않는다면
		if (!folder.exists()) {
			folder.mkdirs(); // 해당 디렉토리들을 만든다
		}
		int index = file.getOriginalFilename().indexOf(".");

		String extend = file.getOriginalFilename().substring(index);

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhhmmss");
		Calendar c = Calendar.getInstance();
		String renameFilename = sdf.format(c.getTime()) + extend;

		String filePath = folder + "\\" + renameFilename;
		Files files = new Files(4, file.getOriginalFilename(), renameFilename,
				"resources/compet/" + renameFilename);
		try {
			// 이 순간 서버에 파일이 저장 된다
			file.transferTo(new File(filePath));
		} catch (Exception e) {
			System.out.println("파일 전송 에러 : " + e.getMessage());
		}
		return files;
	}

	// 관리자페이지 문의 리스트
	@RequestMapping("QnAList.do")
	public ModelAndView QnAList() {
		ArrayList<QnA> qaList = mService.selectQAList();
		if(qaList != null) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("qaList", qaList);
		mv.setViewName("myPage/Manager/QnAList");		
		return mv;
		}else {
			throw new MemberException("문의 리스트 조회 실패!");
		}
	}
	
	// 관리자페이지 문의 답변
	@RequestMapping("Answer.do")
	public ModelAndView Answer(QnA QnA) {
		int result = mService.insertAnswer(QnA);
		if(result > 0) {
			ArrayList<QnA> qaList = mService.selectQAList();
			ModelAndView mv = new ModelAndView();
			mv.addObject("qaList", qaList);
			mv.setViewName("myPage/Manager/QnAList");
			return mv;
		}else {
			throw new MemberException("문의 답변 실패!");
		}
	}
	

	   // 프로젝트 통계
	   @RequestMapping("projectTotal.do")
	   public ModelAndView projectTotal() {
	       Descending descending = new Descending();
	      ArrayList<ProjectTotal> pTotal = mService.pTotalList();
	      ArrayList<ProjectTotal> pTotalSuccess = mService.pTotalSuccessList();
	      System.out.println("pTotal : " + pTotal);
	      System.out.println("pTotalSuccess : " + pTotalSuccess);
	      for(int i = 0; i < pTotal.size(); i++) {
	         for(int j = 0; j < pTotalSuccess.size(); j++) {
	            if(pTotal.get(i).getPcNo() == pTotalSuccess.get(j).getPcNo()) {
	               int percent = (int) (Math.round(((double)pTotalSuccess.get(j).getAmount()/pTotal.get(i).getAmount())*10000)/100);
	               pTotal.get(i).setPercent(percent); 
	            }
	         }
	      }
	      System.out.println("pTotal : " + pTotal);
	      System.out.println("pTotalSuccess : " + pTotalSuccess);
	      
	      ArrayList<ProjectTotal> pSolo = mService.pSoloList();
	      ArrayList<ProjectTotal> pSoloSuccess = mService.pSoloSuccessList();
	      
	      for(int i = 0; i < pSolo.size(); i++) {
	         for(int j = 0; j < pSoloSuccess.size(); j++) {
	            if(pSolo.get(i).getPcNo() == pSoloSuccess.get(j).getPcNo()) {
	               int percent = (int) (Math.round(((double)pSoloSuccess.get(j).getAmount()/pSolo.get(i).getAmount())*10000)/100);
	               pSolo.get(i).setPercent(percent); 
	            }
	         }
	      }
	      Collections.sort(pSolo, descending);

	      ArrayList<ProjectTotal> pCompany = mService.pCompanyList();
	      ArrayList<ProjectTotal> pCompanySuccess = mService.pCompanySuccessList();   
	      for(int i = 0; i < pCompany.size(); i++) {
	         for(int j = 0; j < pCompanySuccess.size(); j++) {
	            if(pCompany.get(i).getPcNo() == pCompanySuccess.get(j).getPcNo()) {
	               int percent = (int) (Math.round(((double)pCompanySuccess.get(j).getAmount()/pCompany.get(i).getAmount())*10000)/100);
	               pCompany.get(i).setPercent(percent); 
	            }
	         }
	      }
	      
	      Collections.sort(pCompany, descending);
	      if(pTotal != null && pSolo != null && pCompany != null) {
	         ModelAndView mv = new ModelAndView();
	         
	         
	         //추가내역
	            ArrayList<ProjectView> list = new ArrayList<ProjectView>();
	            list = bService.AllProjectList();
	            
	            mv.addObject("projectList", list);
	            mv.addObject("projectListSize", list.size());
	         
	         mv.addObject("pTotal", pTotal);
	         mv.addObject("pSolo", pSolo);
	         mv.addObject("pCompany", pCompany);
	         mv.setViewName("myPage/Manager/projectTotal");
	         System.out.println("pCom : " + pCompany.size());
	         
	         return mv;
	      }else {
	         throw new MemberException("프로젝트 통계 조회 실패!!");
	      }
	   }
	
	// 통계
	@RequestMapping("revenue.do")
	public ModelAndView revenue(@RequestParam(value="startDate", required=false) String sDate,
			@RequestParam(value="endDate", required=false) String eDate,
			@RequestParam(value="type", required=false) String type,
			@RequestParam(value="cate", required=false) String cate) {
		if(sDate == null || sDate.length() < 5) {
			sDate = null;
		}if(eDate == null || eDate.length() < 5) {
			eDate = null;
		}if(cate == null || cate.equals("All")) {
			cate = null;
		}if(type == null || type.equals("All")) {
			type = null;
		}
		Map map = new HashMap();
		
		map.put("sDate", sDate);
		map.put("eDate", eDate);
		map.put("type", type);
		map.put("cate", cate);
		System.out.println("Map : " + map);
		ArrayList<Project> pList = mService.projectList(map);
		ArrayList<Revenue> revenueChart = mService.revenueChart(map);
		System.out.println(revenueChart);
		if(pList != null) {
			ArrayList<Revenue> rList = mService.revenue(map);
			int sumMoney = 0;
			for(int i = 0; i < pList.size(); i++) {
				sumMoney += pList.get(i).getpSumAmount();
			}
			
			int revenue = (int) (sumMoney * 0.05);
			int successNo = pList.size();
			int[] index = new int[3];
			index[0] = sumMoney;
			index[1] = revenue;
			index[2] = successNo;
			
			ModelAndView mv = new ModelAndView();
			mv.addAllObjects(map);
			mv.addObject("revenue", revenueChart);
			mv.addObject("index", index);
			mv.addObject("pList", pList);
			mv.addObject("rList", rList);
			mv.setViewName("myPage/Manager/revenue");
			return mv;
		}else {
			throw new MemberException("통계 검색 실패!!");
		}
	}

	// 마이페이지 내 정보 수정 폼
	@RequestMapping("memberUpdateForm.do")
	public String memberUpdateForm() {
		return "myPage/My/memberUpdate";
	}

	// 마이페이지 내 정보 수정 
	@RequestMapping("memberUpdate.do")
	public ModelAndView memberUpdate(Member m, @RequestParam(value = "post") String post, Model model,
			@RequestParam(value = "address1") String address1, @RequestParam(value = "address2") String address2) {
		m.setmAddress(post + "#" + address1 + "#" + address2);
		int result = mService.memberUpdate(m);

		if (result > 0) {
			Member loginUser = mService.loginMember(m);
			model.addAttribute("loginUser", loginUser);
			ModelAndView mv = new ModelAndView();
			mv.addObject("Member", loginUser);
			mv.addObject("msg", "회원정보가 변경되었습니다.");
			mv.setViewName("redirect:memberUpdateForm.do");
			return mv;
		} else {
			throw new MemberException("회원정보 업데이트 실패!!");
		}
	}
	
	@RequestMapping("passConfirm.do")
	public String passConfirm() {
		return "myPage/My/passConfirm";
	}
	
	@RequestMapping("passUpdate.do")
	public ModelAndView passUpdate(HttpSession session, Model model, String newPwd) {
		Member loginUser = (Member) session.getAttribute("loginUser");
		System.out.println(loginUser);
		loginUser.setmPwd(newPwd);
		int result = mService.fakePwd(loginUser);
		System.out.println(loginUser);
		
		if (result > 0) {
			model.addAttribute("loginUser", loginUser);
			ModelAndView mv = new ModelAndView();
			mv.addObject("Member", loginUser);
			mv.addObject("msg", "회원정보가 변경되었습니다.");
			mv.setViewName("redirect:memberUpdateForm.do");
			return mv;
		} else {
			throw new MemberException("비밀번호 변경 실패!!");
		}
	}
	
	// 회원 탈퇴
	@RequestMapping(value="memberDelete.do")
	public ModelAndView memberDelete(HttpSession session, SessionStatus status) {
		Member loginUser = (Member)session.getAttribute("loginUser");
		
		int result = mService.memberDelete(loginUser.getmNo());
		
		if(result > 0) {
			status.setComplete();
			
			ModelAndView mv = new ModelAndView();
			mv.addObject("msg", "회원탈퇴가 되었습니다.");
			mv.setViewName("redirect:home.do");
			
			return mv;
		}else {
			throw new MemberException("회원탈퇴 실패!!");
		}
	}
	
	// 마이페이지 프로필 사진 수정 ajax
	@RequestMapping(value = "mPhotoUpdate.do")
	@ResponseBody
	public String mPhotoUpdatedo(HttpServletRequest request, HttpSession session,
			@RequestParam(value = "file", required = false) MultipartFile file, Model model) {
		Member m = (Member) session.getAttribute("loginUser");
		if (file != null && !file.isEmpty()) {
			// 원래 파일 삭제
			deleteFile(m.getFilePath(), request);
			int result3 = mService.mPhotoDelete(m);

			// 새로운 사진 파일로 저장
			Files files = new Files();
			if (!file.getOriginalFilename().equals("")) {
				files = saveFile(file, request);
			}
			files.setmNo(m.getmNo());

			// DB에 저장
			int result2 = mService.mPhotoInsert(files);
			if (result2 > 0) {
				// DB에 저장이 되면 DB에 있는 원래 데이터를 삭제 loginUser에 새로 담아줌

				m.setFilePath(files.getFilePath());
				model.addAttribute("loginUser", m);
			}

		}
		return m.getFilePath();

	}

	

	// 회원가입 폼
	@RequestMapping("memberInsertForm.do")
	public String memberInsertForm() {
		return "myPage/My/memberInsert";
	}

	// 회원가입 인포 폼
	@RequestMapping("memberInsertInfo.do")
	public String memberInsertInfo() {
		return "myPage/My/memberInsertInfo";
	}
	
	// 회원가입
	@RequestMapping("memberInsert.do")
	public ModelAndView memberInsert(Member m, HttpServletRequest request,
			@RequestParam(value = "UserImg", required = false) MultipartFile file,
			@RequestParam(value = "post") String post, @RequestParam(value = "address1") String address1,
			@RequestParam(value = "address2") String address2) {
		m.setmAddress(post + "#" + address1 + "#" + address2);
		int result = mService.memberInsert(m);
		Member member = mService.selectOneMember(m.getmId());
		Files files = new Files(3, "basicImg.jpg", "basicImg.jpg", "resources/memberPhoto/basicImg.jpg");
		ModelAndView mv = new ModelAndView();
		if (result > 0) {
			if (!file.getOriginalFilename().equals("")) {
				files = saveFile(file, request);
			}
			files.setmNo(member.getmNo());
			int result2 = mService.mPhotoInsert(files);

			mv.addObject("msg", "회원가입에 성공했습니다!");
			mv.setViewName("redirect:home.do");
			return mv;
		} else {
			throw new MemberException("회원가입 실패!!");

		}

	}

	// 유저 프로필 사진 저장
	private Files saveFile(MultipartFile file, HttpServletRequest request) {
		String root = request.getSession().getServletContext().getRealPath("resources");

		String savePath = root + "\\memberPhoto";

		File folder = new File(savePath);

		// 해당 폴더 위치가 존재하지 않는다면
		if (!folder.exists()) {
			folder.mkdirs(); // 해당 디렉토리들을 만든다
		}
		int index = file.getOriginalFilename().indexOf(".");

		String extend = file.getOriginalFilename().substring(index);

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhhmmss");
		Calendar c = Calendar.getInstance();
		String renameFilename = sdf.format(c.getTime()) + extend;

		String filePath = folder + "\\" + renameFilename;
		Files files = new Files(3, file.getOriginalFilename(), renameFilename,
				"resources/memberPhoto/" + renameFilename);
		try {
			// 이 순간 서버에 파일이 저장 된다
			file.transferTo(new File(filePath));
		} catch (Exception e) {
			System.out.println("파일 전송 에러 : " + e.getMessage());
		}
		return files;
	}

	// 참여 프로젝트 리스트
	@RequestMapping("attendProject.do")
	public ModelAndView attendProject(HttpSession session, @RequestParam(value = "page", required = false) Integer page,
			@RequestParam(value = "align", required = false) String align) {

		
		int currentPage = page != null ? page : 1;
		String sort = align != null ? align : "All";
		Member loginUser = (Member) session.getAttribute("loginUser");

		Map map = new HashMap();
		map.put("getmNo", loginUser.getmNo());
		map.put("sort", sort);
		ArrayList<ProjectView> allList = mService.selectAttendList(loginUser.getmNo());
		ArrayList<SupportView> attendProject = mService.selectAttend(currentPage, map);
		System.out.println("이거 " + attendProject);
		int[] index = new int[3];
		int allIndex = 0;
		int ingIndex = 0;
		int endIndex = 0;
		Date date = new Date();
		ModelAndView mv = new ModelAndView();
		if (allList != null) {
			allIndex = allList.size();
			for (int i = 0; i < allList.size(); i++) {
				if (allList.get(i).getEndDate().getTime() > date.getTime()) {
					ingIndex++;
				} else {
					endIndex++;
				}
			}
			for (int i = 0; i < attendProject.size(); i++) {
				if (attendProject.get(i).getEndDate().getTime() >= date.getTime()
						&& attendProject.get(i).getSumAmount() >= attendProject.get(i).getTargetAmount()) {
					attendProject.get(i).setProgress("진행중(성공)");
				} else if (attendProject.get(i).getEndDate().getTime() >= date.getTime()
						&& attendProject.get(i).getSumAmount() < attendProject.get(i).getTargetAmount()) {
					attendProject.get(i).setProgress("진행중");
				} else if (attendProject.get(i).getEndDate().getTime() < date.getTime()
						&& attendProject.get(i).getSumAmount() >= attendProject.get(i).getTargetAmount()) {
					attendProject.get(i).setProgress("종료(성공)");
				} else {
					attendProject.get(i).setProgress("종료(실패)");
				}
			}
			int attendMoney = mService.attendMoney(loginUser.getmNo());
			int attendAllMoney = mService.attendAllMoney(loginUser.getmNo());
			index = new int[] { allIndex, ingIndex, endIndex, attendMoney, attendAllMoney };
			mv.addObject("attendProject", attendProject);
			mv.addObject("pi", Pagination.getPageInfo());
			if (align != null)
				mv.addObject("align", align);
			mv.addObject("index", index);
			mv.setViewName("myPage/My/attendProject");

			return mv;

		} else {
			throw new MemberException("프로젝트 조회 실패!!");
		}

	}
	
	// 후원 취소하기
	@RequestMapping("deleteAttend.do")
	public ModelAndView deleteAttend(@RequestParam(value="oNo")String oNo,
			@RequestParam(value="pNo")String pNo,
			@RequestParam(value="aMoney")int aMoney) {
		Map map = new HashMap();
		map.put("pNo", pNo);
		map.put("aMoney", aMoney);
		int result = mService.deleteOrder(oNo);
		int result2 = mService.deleteFunding(oNo);
		int result3 = mService.updateProject(map);
		
		if(result > 0 && result2 > 0 && result3 > 0) {
		
		ModelAndView mv = new ModelAndView();
		mv.addObject("msg", "후원 취소 완료");
		mv.setViewName("main");

		return mv;
		}else {
			throw new MemberException("후원 취소 실패!!");
		}
		
	}

	// 관심 프로젝트 리스트
	@RequestMapping("myInterestProject.do")
	public ModelAndView myInterestProject(HttpSession session,
			@RequestParam(value = "page", required = false) Integer page,
			@RequestParam(value = "align", required = false) String align) {

		int currentPage = page != null ? page : 1;
		String sort = align != null ? align : "All";
		Member loginUser = (Member) session.getAttribute("loginUser");
		
		Map map = new HashMap();
		map.put("getmNo", loginUser.getmNo());
		map.put("sort", sort);
		
		ArrayList<ProjectView> allList = mService.selectInterestList(loginUser.getmNo());
		ArrayList<ProjectView> interestList = mService.myInterestProject(currentPage, map);
		int[] index = new int[3];
		int allIndex = 0;
		int ingIndex = 0;
		int endIndex = 0;
		Date date = new Date();
		ModelAndView mv = new ModelAndView();
		if (allList != null) {
			allIndex = allList.size();
			for (int i = 0; i < allList.size(); i++) {
				if (allList.get(i).getEndDate().getTime() > date.getTime()) {
					ingIndex++;
				} else {
					endIndex++;
				}
			}
			for (int i = 0; i < interestList.size(); i++) {
				if (interestList.get(i).getEndDate().getTime() > date.getTime()
						&& interestList.get(i).getSumAmount() >= interestList.get(i).getTargetAmount()) {
					interestList.get(i).setProgress("진행중(성공)");
				} else if (interestList.get(i).getEndDate().getTime() > date.getTime()
						&& interestList.get(i).getSumAmount() < interestList.get(i).getTargetAmount()) {
					interestList.get(i).setProgress("진행중");
				} else if (interestList.get(i).getEndDate().getTime() < date.getTime()
						&& interestList.get(i).getSumAmount() >= interestList.get(i).getTargetAmount()) {
					interestList.get(i).setProgress("종료(성공)");
				} else {
					interestList.get(i).setProgress("종료(실패)");
				}
			}
			index = new int[] { allIndex, ingIndex, endIndex };
			mv.addObject("interestList", interestList);
			mv.addObject("pi", Pagination.getPageInfo());
			if (align != null)
				mv.addObject("align", align);
			mv.addObject("index", index);
			mv.setViewName("myPage/My/myInterestProject");

			return mv;

		} else {
			throw new MemberException("프로젝트 조회 실패!!");
		}
	}
	
	// 관심 프로젝트 삭제
	@RequestMapping("deleteInterest.do")
	public ModelAndView deleteInterest(@RequestParam(value="pNo") String pNo,
			HttpSession session) {
		Member loginUser = (Member) session.getAttribute("loginUser");
		String[] pNos = pNo.split(" ");
		int[] pNumber = new int[pNos.length];
		for(int i = 0; i < pNos.length; i++) {
			System.out.println(Integer.parseInt(pNos[i]));
			pNumber[i] = Integer.parseInt(pNos[i]);
		}
		
		Map map = new HashMap();
		map.put("pNo", pNumber);
		map.put("mNo", loginUser.getmNo());
		int result = mService.deleteInterest(map);
		if(result > 0) {		
			ModelAndView mv = new ModelAndView();
			mv.addObject("msg", "관심프로젝트 삭제 완료!");
			mv.setViewName("redirect:myInterestProject.do");
			return mv;
		}else {
			throw new MemberException("관심프로젝트 삭제 실패!!");
		}
	}

	// 나의 개설 프로젝트 리스트
	@RequestMapping("myOpenProject.do")
	public ModelAndView myOpenProject(HttpSession session,
			@RequestParam(value = "page", required = false) Integer page,
			@RequestParam(value = "align", required = false) String align) {

		int currentPage = page != null ? page : 1;
		String sort = align != null ? align : "All";
		Member loginUser = (Member) session.getAttribute("loginUser");
		
		Map map = new HashMap();
		map.put("getmNo", loginUser.getmNo());
		map.put("sort", sort);

		ArrayList<ProjectView> allList = mService.selectOpenList(loginUser.getmNo());
		ArrayList<ProjectView> alignList = mService.myOpenProject(currentPage, map);
		System.out.println(alignList);
		ModelAndView mv = new ModelAndView();
		int[] index = new int[4];
		int allIndex = 0;
		int ingIndex = 0;
		int endIndex = 0;
		int waitIndex = 0;
		Date date = new Date();
		if(allList != null) {
			allIndex = allList.size();
			for (int i = 0; i < allList.size(); i++) {
				if (allList.get(i).getpStatus().equals("N") && allList.get(i).getEndDate().getTime() > date.getTime()) {
					waitIndex++;
				} else if(allList.get(i).getEndDate().getTime() > date.getTime()){
					ingIndex++;
				}else {
					endIndex++;
				}
			}
			for (int i = 0; i < alignList.size(); i++) {
				if (alignList.get(i).getpStatus().equals("N") && alignList.get(i).getEndDate().getTime() > date.getTime()) {
					alignList.get(i).setProgress("승인대기");
				}else if (alignList.get(i).getEndDate().getTime() > date.getTime()
						&& alignList.get(i).getSumAmount() >= alignList.get(i).getTargetAmount()) {
					alignList.get(i).setProgress("진행중(성공)");
				} else if (alignList.get(i).getEndDate().getTime() > date.getTime()
						&& alignList.get(i).getSumAmount() < alignList.get(i).getTargetAmount()) {
					alignList.get(i).setProgress("진행중");
				} else if (alignList.get(i).getEndDate().getTime() < date.getTime()
						&& alignList.get(i).getSumAmount() >= alignList.get(i).getTargetAmount()) {
					alignList.get(i).setProgress("종료(성공)");
				} else {
					alignList.get(i).setProgress("종료(실패)");
				}
			}
		index = new int[] { allIndex, ingIndex, endIndex, waitIndex };
			mv.addObject("alignList", alignList);
			mv.addObject("pi", Pagination.getPageInfo());
			if (align != null)
				mv.addObject("align", align);
			mv.addObject("index", index);
			mv.setViewName("myPage/My/myOpenProject");

			return mv;
		}else {
			throw new MemberException("프로젝트 조회 실패!!");
		}
			

	}
	
	// 문의리스트
	@RequestMapping("myQnAList.do")
	public ModelAndView QnAList(HttpSession session) {
		Member loginUser = (Member) session.getAttribute("loginUser");
		
		ArrayList<QnA> qList = mService.QnAList(loginUser.getmNo());
		if(qList != null) {
			ModelAndView mv = new ModelAndView();
			System.out.println(qList);
			mv.addObject("qList", qList);
			mv.setViewName("myPage/My/QnAList");
			
			return mv;
		}else {
			throw new MemberException("문의리스트 조회 실패!");
		}
	}

	// 문의하기 폼
	@RequestMapping("questionForm.do")
	public String questionForm() {
		return "myPage/My/question";
	}

	// 문의하기
	@RequestMapping("question.do")
	public ModelAndView question(QnA qa, HttpSession session) {
		qa.setmNo(((Member) session.getAttribute("loginUser")).getmNo());
		int result = mService.question(qa);
		if( result > 0) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("msg", "문의 완료");
		mv.setViewName("redirect:myQnAList.do");
		return mv;
		}else {
			throw new MemberException("문의 실패!");
		}
	}
	
	@RequestMapping("QnADetail.do")
	public ModelAndView QnADetail(int qNo) {
		QnA QnA = mService.QnADetail(qNo);
		
		if(QnA != null) {
			ModelAndView mv = new ModelAndView();
			
			mv.addObject("QnA", QnA);
			mv.setViewName("myPage/My/QnADetail");
			
			return mv;
		}else {
			throw new MemberException("문의 조회 실패!");
		}
	}
	
	@RequestMapping("QnADelete.do")
	public ModelAndView QnADelete(int qNo) {
		int result = mService.QnADelete(qNo);
		
		if(result > 0) {
			ModelAndView mv = new ModelAndView();
			
			mv.addObject("msg", "문의 삭제 완료");
			mv.setViewName("redirect:myQnAList.do");
			
			return mv;
		}else {
			throw new MemberException("문의 삭제 실패!");
		}
	}

	// 회원가입 이메일 인증
	@RequestMapping(value = "email.do")
	@ResponseBody
	public String mailSending(HttpServletRequest request, String email) {
		String setfrom = "VENIATIS";
		String tomail = email; // 받는 사람 이메일
		String title = "회원가입 정보 인증메일입니다(VENIATIS)"; // 제목

		StringBuffer temp = new StringBuffer();
		Random rnd = new Random();
		for (int i = 0; i < 10; i++) {
			int rIndex = rnd.nextInt(3);
			switch (rIndex) {
			case 0:
				// a-z
				temp.append((char) ((int) (rnd.nextInt(26)) + 97));
				break;
			case 1:
				// A-Z
				temp.append((char) ((int) (rnd.nextInt(26)) + 65));
				break;
			case 2:
				// 0-9
				temp.append((rnd.nextInt(10)));
				break;
			}
		}

		String content = temp.toString(); // 내용
		try {
			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");

			messageHelper.setFrom(new InternetAddress(setfrom, "VENIATIS")); // 보내는사람 생략하거나 하면 정상작동을 안함
			messageHelper.setTo(tomail); // 받는사람 이메일
			messageHelper.setSubject(title); // 메일제목은 생략이 가능하다
			messageHelper.setText(content); // 메일 내용
			mailSender.send(message);
		} catch (Exception e) {
			System.out.println(e);
		}

		return content;
	}
	
	// 회원 임시비밀번호 발송
		@RequestMapping(value = "email2.do")
		@ResponseBody
		public String mailSending2(HttpServletRequest request, String email) {
			String setfrom = "VENIATIS";
			String tomail = email; // 받는 사람 이메일
			String title = "임시비밀번호를 발송해드렸습니다(VENIATIS)"; // 제목

			StringBuffer temp = new StringBuffer();
			Random rnd = new Random();
			for (int i = 0; i < 10; i++) {
				int rIndex = rnd.nextInt(3);
				switch (rIndex) {
				case 0:
					// a-z
					temp.append((char) ((int) (rnd.nextInt(26)) + 97));
					break;
				case 1:
					// A-Z
					temp.append((char) ((int) (rnd.nextInt(26)) + 65));
					break;
				case 2:
					// 0-9
					temp.append((rnd.nextInt(10)));
					break;
				}
			}

			String content = temp.toString(); // 내용
			try {
				MimeMessage message = mailSender.createMimeMessage();
				MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");

				messageHelper.setFrom(new InternetAddress(setfrom, "VENIATIS")); // 보내는사람 생략하거나 하면 정상작동을 안함
				messageHelper.setTo(tomail); // 받는사람 이메일
				messageHelper.setSubject(title); // 메일제목은 생략이 가능하다
				messageHelper.setText(content); // 메일 내용
				mailSender.send(message);
			} catch (Exception e) {
				System.out.println(e);
			}

			return content;
		}

	
	// 파일 삭제 메소드
	private void deleteFile(String filePath, HttpServletRequest request) {
		String root = request.getSession().getServletContext().getRealPath(filePath);

		File deleteFile = new File(root);

		if (deleteFile != null) {
			deleteFile.delete();
		}

	}
	
	// 아이디 중복체크 메소드
	@RequestMapping(value = "checkId.do")
	@ResponseBody
	public String checkId(String userId) {
		Member m = mService.selectOneMember(userId);
		
		if(m != null) {
			return "fail";
		}else {
			return "success";
		}
	}
	
	@RequestMapping(value = "excelDown.do")
	public void excelDown(HttpServletResponse response,
			@RequestParam(value="sDate", required=false) String sDate,
			@RequestParam(value="eDate", required=false) String eDate,
			@RequestParam(value="type", required=false) String type,
			@RequestParam(value="cate", required=false) String cate) throws Exception {
		if(sDate == null || sDate.length() < 5) {
			sDate = null;
		}if(eDate == null || eDate.length() < 5) {
			eDate = null;
		}if(cate == null || cate.equals("All") || cate.equals("")) {
			cate = null;
		}if(type == null || type.equals("All") || type.equals("")) {
			type = null;
		}
		Map map = new HashMap();
		
		map.put("sDate", sDate);
		map.put("eDate", eDate);
		map.put("type", type);
		map.put("cate", cate);
		ArrayList<Revenue> rList = mService.revenue(map);


	    // 워크북 생성
	    Workbook wb = new HSSFWorkbook();
	    Sheet sheet = wb.createSheet("VENIATIS수익");
	    Row row = null;
	    Cell cell = null;
	    int rowNo = 0;


	    // 테이블 헤더용 스타일
	    CellStyle headStyle = wb.createCellStyle();
	    
	    // 가는 경계선을 가집니다.
	    headStyle.setBorderTop(BorderStyle.THIN);
	    headStyle.setBorderBottom(BorderStyle.THIN);
	    headStyle.setBorderLeft(BorderStyle.THIN);
	    headStyle.setBorderRight(BorderStyle.THIN);


	    // 배경색은 노란색입니다.
	    headStyle.setFillForegroundColor(HSSFColorPredefined.YELLOW.getIndex());
	    headStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

	    // 데이터는 가운데 정렬합니다.
	    headStyle.setAlignment(HorizontalAlignment.CENTER);


	    // 데이터용 경계 스타일 테두리만 지정
	    CellStyle bodyStyle = wb.createCellStyle();
	    bodyStyle.setBorderTop(BorderStyle.THIN);
	    bodyStyle.setBorderBottom(BorderStyle.THIN);
	    bodyStyle.setBorderLeft(BorderStyle.THIN);
	    bodyStyle.setBorderRight(BorderStyle.THIN);
	    
	    sheet.setColumnWidth(2, 4500);
        sheet.setColumnWidth(3, 3500);
        sheet.setColumnWidth(4, 4500);
        sheet.setColumnWidth(5, 4500);


	    // 헤더 생성
	    row = sheet.createRow(rowNo++);
	    row = sheet.createRow(rowNo++);
	    row = sheet.createRow(rowNo++);
	    cell = row.createCell(0);
	    cell.setCellValue("");
	    cell = row.createCell(1);
	    cell.setCellValue("");
	    cell = row.createCell(2);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("후원 성공일");
	    cell = row.createCell(3);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("결제건수");
	    cell = row.createCell(4);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("실 결제금액");
	    cell = row.createCell(5);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("수익");
	    // 데이터 부분 생성
	    
	    for(Revenue vo : rList) {
	        row = sheet.createRow(rowNo++);
	        cell = row.createCell(0);
	        cell.setCellValue("");
	        cell = row.createCell(1);
	        cell.setCellValue("");
	        cell = row.createCell(2);
	        cell.setCellStyle(bodyStyle);
	        cell.setCellValue(vo.getDay());
	        cell = row.createCell(3);
	        cell.setCellStyle(bodyStyle);
	        cell.setCellValue(vo.getAmount());
	        cell = row.createCell(4);
	        cell.setCellStyle(bodyStyle);
	        cell.setCellValue(vo.getRealMoney());
	        cell = row.createCell(5);
	        cell.setCellStyle(bodyStyle);
	        cell.setCellValue(vo.getRevenue());
	    }

	    // 컨텐츠 타입과 파일명 지정
	    response.setContentType("ms-vnd/excel");
	    response.setHeader("Content-Disposition", "attachment;filename=test.xls");

	    // 엑셀 출력
	    wb.write(response.getOutputStream());
	    wb.close();
	}
}
