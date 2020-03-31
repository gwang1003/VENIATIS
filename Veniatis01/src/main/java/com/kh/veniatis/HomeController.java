package com.kh.veniatis;


import java.util.ArrayList;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.kh.veniatis.blog.model.service.BlogService;
import com.kh.veniatis.blog.model.vo.BlogPost;
import com.kh.veniatis.blog.model.vo.Compet;
import com.kh.veniatis.member.model.service.MemberService;
import com.kh.veniatis.project.user.model.service.ProjectUserService;
import com.kh.veniatis.project.user.model.vo.ProjectView;

/**
 * Handles requests for the application home page.
 */
@SessionAttributes({"proList", "comList" })
@Controller
public class HomeController {
	 @Autowired
	   private ProjectUserService pus;
		@Autowired
		private BlogService bService;
		@Autowired
		private MemberService mService;
		
		
	 
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping("home.do")
	public String home(Locale locale, Model model) {
		// 프로젝트(개인)리스트 받아오기
		
		
		 ArrayList<ProjectView> list = new ArrayList<ProjectView>();
		 list = pus.selectMainList();
		 
	

		 
		 // 공모전 불러오기
			ArrayList<Compet> clist = bService.competMainView();
			
			model.addAttribute("proList", list);
			model.addAttribute("comList", clist);
		return "main";
	}

}
