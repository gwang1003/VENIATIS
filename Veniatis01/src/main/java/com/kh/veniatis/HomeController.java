package com.kh.veniatis;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping("home.do")
	public String Home() {
		return "home";
	}
	
	@RequestMapping("projectIntroPage.do")
	public String PIP() {
		return "projectIntroPage";
	}
	
	@RequestMapping("projectStartPage.do")
	public String PSP() {
		return "projectStartPage";
	}
	
	@RequestMapping("projectStartPage2.do")
	public String PSP2() {
		return "projectStartPage2";
	}
	
	@RequestMapping("projectStartPage_reward.do")
	public String PSP_reward() {
		return "projectStartPage_reward";
	}
	
	@RequestMapping("projectStartPage_last.do")
	public String PSP_last() {
		return "projectStartPage_last";
	}

}
