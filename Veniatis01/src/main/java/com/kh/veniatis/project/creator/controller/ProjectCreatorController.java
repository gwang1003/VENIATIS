package com.kh.veniatis.project.creator.controller;

import java.io.File;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.creator.model.exception.ProjectException;
import com.kh.veniatis.project.creator.model.service.CreatorService;
import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.MultiRowReward;
import com.kh.veniatis.project.creator.model.vo.PNotice;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.creator.model.vo.Reward;
import com.kh.veniatis.project.user.model.service.ProjectUserService;
import com.kh.veniatis.project.user.model.vo.ProjectView;

@Controller
public class ProjectCreatorController {
	@Autowired
	private CreatorService cService;
	
	@Autowired
	private ProjectUserService pus;
 
	@RequestMapping("creatorInsert.do")
	public ModelAndView projectInfoInsert(HttpServletRequest request, Creator c, Model model,
			@RequestParam(value = "userPost") String post, @RequestParam(value = "userAddr1") String addr1,
			@RequestParam(value = "userAddr2") String addr2, @RequestParam(value = "mNo") int mNo) {
		c.setCreAddress(post + "#" + addr1 + "#" + addr2);
		c.setmNo(mNo);

		int result = cService.creatorInsert(c);
		
		System.out.println(result);
		
		
		Creator creator = cService.selectCreNo(result);
		
		if (result > 0) {
			ModelAndView mv = new ModelAndView();
			mv.addObject("creator", creator);
			mv.setViewName("project_creator/projectStartPage2");
			return mv;
		} else {
			throw new ProjectException("크리에이터 등록 실패!");
		}

	}


	@RequestMapping("projectInsert.do")
	public ModelAndView projectInsert(Project p, Model model, HttpServletRequest request,
			@RequestParam(value = "creUrl") String creUrl,
			@RequestParam(value="creNum") String creNum,
			@RequestParam(value = "mainImage", required = true) MultipartFile image1,
			@RequestParam(value = "subImage1", required = false) MultipartFile image2,
			@RequestParam(value = "subImage2", required = false) MultipartFile image3,
			@RequestParam(value = "subImage3", required = false) MultipartFile image4,
			@RequestParam(value = "subImage4", required = false) MultipartFile image5) {
		p.setpUrl(creUrl);
		p.setCreNo(Integer.parseInt(creNum));
		System.out.println(p);
		int result = cService.projectInsert(p);
		
		Project project = cService.selectProject(result);
		
		
		ArrayList<Files> files = new ArrayList<Files>();
		
		
		
		
		if (result > 0) {
			
			if (image1 != null) {
				Files file = new Files();
				
				
				file = saveFile(image1, request,1);
				
				files.add(file);
			}
			if (image2 != null) {
				Files file = new Files();
				
				
				file = saveFile(image2, request,2);
				
				files.add(file);
			}
			if (image3 != null) {
				Files file = new Files();
				
				file = saveFile(image3, request,3);
				
				files.add(file);
			}
			if (image4 != null) {
				Files file = new Files();
				
				
				file = saveFile(image4, request,4);
				
				files.add(file);
			}
			if (image5 != null) {
				Files file = new Files();
				
				
				file = saveFile(image5, request,5);
				
				files.add(file);
			}
			
			for(int i=0;i<files.size();i++) {
				files.get(i).setpNo(project.getpNo());
			}
			int result2 = cService.pPhotoInsert(files);
			
			if (result2 > 0) {
				ModelAndView mv = new ModelAndView();
				mv.addObject("project", project);
				mv.setViewName("project_creator/projectStartPage_reward");
				return mv;
			} else {
				throw new ProjectException("프로젝트 등록 실패!");
			}
			
		} else {
			throw new ProjectException("프로젝트 등록 실패!");
		}
		
	}
	private Files saveFile(MultipartFile file, HttpServletRequest request,int num) {
		String root = request.getSession().getServletContext().getRealPath("resources");

		String savePath = root + "\\project_creator";

		File folder = new File(savePath);

		// 해당 폴더 위치가 존재하지 않는다면
		if (!folder.exists()) {
			folder.mkdirs(); // 해당 디렉토리들을 만든다
		}
		int index = file.getOriginalFilename().indexOf(".");

		String extend = file.getOriginalFilename().substring(index);

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhhmmss");
		Calendar c = Calendar.getInstance();
		String renameFilename = sdf.format(c.getTime())+ num + extend ;

		String filePath = folder + "\\" + renameFilename;
		Files files = new Files(3, file.getOriginalFilename(), renameFilename,
				"resources/project_creator/" + renameFilename);
		try {
			// 이 순간 서버에 파일이 저장 된다
			file.transferTo(new File(filePath));
		} catch (Exception e) {
			System.out.println("파일 전송 에러 : " + e.getMessage());
		}
		return files;
	}

	@RequestMapping("insertReward.do")
	public ModelAndView insertReward(@ModelAttribute MultiRowReward rewards,
			@RequestParam(value = "rDelivery0") String rDelivery0,
			@RequestParam(value = "rDelivery1", required = false) String rDelivery1,
			@RequestParam(value = "rDelivery2", required = false) String rDelivery2,
			@RequestParam(value="pNo")Integer pNo) throws ParseException {
		

		ArrayList<Reward> rewardInsertList = new ArrayList<Reward>(); 
		// 첫번째 리워드 설정
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyyMMdd");

		List<Reward> rewardList = rewards.getRewards();
		int listSize = rewardList.size();
		Date rDeliveryDate0 = sdf1.parse(rDelivery0);
		rewardList.get(0).setrDelivery(rDeliveryDate0);
		rewardList.get(0).setrSeq(1);
		rewardList.get(0).setpNo(pNo);
		if (rewardList.get(0).getrCount() != 0) {
			rewardList.get(0).setrLimit("Y");
		} else {
			rewardList.get(0).setrLimit("N");
		}
		
		if(rewardList.get(0).getrOption().equals("")) {
			rewardList.get(0).setrOption(null);
		}
	
		System.out.println(rewardList.get(0));
		rewardInsertList.add(rewardList.get(0));
		
		if (listSize != 1) {
			// 리워드가 2개일 때 2번 설정
			if (listSize == 2) {
				if (rDelivery1 != null) {
					Date rDeliveryDate1 = sdf1.parse(rDelivery1);
					rewardList.get(1).setrDelivery(rDeliveryDate1);
					rewardList.get(1).setrSeq(2);
					rewardList.get(1).setpNo(pNo);
					if (rewardList.get(1).getrCount() != 0) {
						rewardList.get(1).setrLimit("Y");
					} else {
						rewardList.get(1).setrLimit("N");
					}
					if(rewardList.get(1).getrOption().equals("")) {
						rewardList.get(1).setrOption(null);
					}
					System.out.println(rewardList.get(1)); 
					rewardInsertList.add(rewardList.get(1));
					
				}
			}
			// 리워드가 3개일떄 2,3번 설정
			else if (listSize == 3) {

				if (rDelivery1 != null) {
					Date rDeliveryDate1 = sdf1.parse(rDelivery1);
					rewardList.get(1).setrDelivery(rDeliveryDate1);
					rewardList.get(1).setrSeq(2);
					rewardList.get(1).setpNo(pNo);
					if (rewardList.get(1).getrCount() != 0) {
						rewardList.get(1).setrLimit("Y");
					} else {
						rewardList.get(1).setrLimit("N");
					}
					if(rewardList.get(1).getrOption().equals("")) {
						rewardList.get(1).setrOption(null);
					}
					System.out.println(rewardList.get(1)); 
					rewardInsertList.add(rewardList.get(1));
				}

				if (rDelivery2 != null) {
					Date rDeliveryDate2 = sdf1.parse(rDelivery2);
					rewardList.get(2).setrDelivery(rDeliveryDate2);
					rewardList.get(2).setrSeq(3);
					rewardList.get(2).setpNo(pNo);
					if (rewardList.get(2).getrCount() != 0) {
						rewardList.get(2).setrLimit("Y");
					} else {
						rewardList.get(2).setrLimit("N");
					}
					if(rewardList.get(2).getrOption().equals("")) {
						rewardList.get(2).setrOption(null);
					}
					System.out.println(rewardList.get(2)); 
					rewardInsertList.add(rewardList.get(2));
				}
			}
		}
		

		

	
	

		System.out.println(rewards);
		System.out.println(rewardInsertList);
		int result = cService.rewardInsert(rewardInsertList);
		System.out.println(result);
		ModelAndView mv = new ModelAndView();
		
		// project 정보를 위해 담아서 다음페이지로 보내기
		Project project = cService.selectProject(pNo);
		mv.addObject("project", project);
		mv.setViewName("project_creator/projectStartPage_last");

		return mv;
	}

	
	@RequestMapping("finishProject.do")
	public ModelAndView finishProject(Project project,@RequestParam(value="pNo") Integer pNo,
			@RequestParam(value="pStartDate_str") String pStartDate_str,
			@RequestParam(value="pEndDate_str") String pEndDate_str,
			@RequestParam(value="pAccount_num") String pAccount_num,
			@RequestParam(value="pAccount_bank") String pAccount_bank
			) throws ParseException {
		
		SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd");
		
		
		Date pStartDate = sdf2.parse(pStartDate_str);
		Date pEndDate = sdf2.parse(pEndDate_str);
		String pAccount=pAccount_num+", "+pAccount_bank;
		project.setpNo(pNo);
		project.setpStartDate(pStartDate);
		project.setpEndDate(pEndDate);
		project.setpAccount(pAccount);
		
		
		System.out.println(project);
		
		ModelAndView mv = new ModelAndView();
		int result = cService.finishProject(project);
		System.out.println("finishProject int result : "+result);
		
		if(result>0) {
			mv.addObject("msg","프로젝트가 등록되었습니다. 승인여부는 마이페이지에서 확인해주세요");
			mv.setViewName("main");
			return mv;	
		}else {
			throw new ProjectException("프로젝트 등록에 실패했습니다!");
		}
				
	}
	
	
	/*-------------- 프로젝트 수정하기 -----------------*/
	
	@RequestMapping("projectAlt.do")
	public ModelAndView ProjectDetail(ModelAndView mv, int pNo) {
		System.out.println(pNo);
		ProjectView p = pus.selectProject(pNo);
		System.out.println(p);
		Creator c = cService.selectCreator(p.getCreNo());
		System.out.println(c);

		
		if(p != null) {
			
			// 리워드 목록
			ArrayList<Reward> rList = pus.selectRewardList(pNo);
			//System.out.println(rList);
			
			// 프로젝트 사진 목록 가져오기(ArrayList<Files>)
			ArrayList<Files> fList = pus.selectFileList(pNo);
			//System.out.println(fList);
			System.out.println(fList);
			
			mv.addObject("project", p);
			mv.addObject("rewardList", rList);
			mv.addObject("fList", fList);
		
			mv.addObject("creator",c);
			mv.setViewName("project_creator/projectAlt");
		}		
		
		return mv;
	}
	
	@RequestMapping("creatorUpdate.do")
	public ModelAndView creatorUpdate(HttpServletRequest request, Creator c, Model model,
			@RequestParam(value = "userPost") String post, @RequestParam(value = "userAddr1") String addr1,
			@RequestParam(value = "userAddr2") String addr2, @RequestParam(value = "mNo") int mNo,
			@RequestParam(value="pNo")int pNo) {
		c.setCreAddress(post + "#" + addr1 + "#" + addr2);
	
		c.setCreNo(mNo);

		int result = cService.creatorUpdate(c);
		
		
		ProjectView p = pus.selectProject(pNo);

		ArrayList<Files> fList = pus.selectFileList(pNo);
		
		List<String> hashList = new ArrayList<String>();
		
		String[] hashStr = p.getHashtag().split(",");
		for(int i=0; i<hashStr.length;i++) {
			hashList.add(hashStr[i]);
		}
		
		System.out.println(hashList);
		
		Creator creator = cService.selectCreNo(mNo);
		
		if (result > 0) {
			ModelAndView mv = new ModelAndView();
			
			mv.addObject("creator", creator);
			mv.addObject("project",p);
			mv.addObject("fList",fList);
			mv.addObject("pNo",pNo);
			mv.addObject("hashList",hashList);
			mv.addObject("creNum",c.getCreNo());
			
			mv.setViewName("project_creator/projectAlt2");
			return mv;
		} else {
			throw new ProjectException("크리에이터 등록 실패!");
		}

	}
	
	@RequestMapping("projectUpdate.do")
	public ModelAndView projectUpdate(Project p, Model model, HttpServletRequest request,
			@RequestParam(value = "creUrl") String creUrl,
			@RequestParam(value = "pNo") String pNo,
			@RequestParam(value="creNo") String creNum,
			@RequestParam(value = "mainImage", required = false) MultipartFile image1,
			@RequestParam(value = "subImage1", required = false) MultipartFile image2,
			@RequestParam(value = "subImage2", required = false) MultipartFile image3,
			@RequestParam(value = "subImage3", required = false) MultipartFile image4,
			@RequestParam(value = "subImage4", required = false) MultipartFile image5) {
		p.setpNo(Integer.parseInt(pNo));
		p.setpUrl(creUrl);
		p.setCreNo(Integer.parseInt(creNum));
		
		int result = cService.projectUpdate(p);
		
		Project project = cService.selectProject(p.getpNo());
	
		List<Files> oldFiles = cService.selectFiles(p.getpNo());
				
		ArrayList<Files> files = new ArrayList<Files>();
				
		/*if (result > 0) {
						
			if (image1 != null && image1.getOriginalFilename() != "") {
				Files file = new Files();
				
				
				file.setOriginName(oldFiles.get(0).getOriginName());
				
				deleteFile(oldFiles.get(0).getChangeName(),request);
				
				file = saveFile(image1, request,1);
				file.setFileNo(oldFiles.get(0).getFileNo());
				file.setFileLevel(oldFiles.get(0).getFileLevel());
				files.add(file);
			}else if(image1 != null && image1.getOriginalFilename() == "") {
				files.add(oldFiles.get(0));
			}
			
			--------------------------------------------
			if ( image2 != null && image2.getOriginalFilename() != "") {
				Files file = new Files();
				
				if(oldFiles.size()==1) {
					file = saveFile(image2, request,2);
					file.setFileLevel(2);
					files.add(file);
				}else {
				
				file.setOriginName(oldFiles.get(1).getOriginName());
				
				deleteFile(oldFiles.get(1).getChangeName(),request);

				file = saveFile(image2, request,3);
				file.setFileLevel(oldFiles.get(1).getFileLevel());
				files.add(file);
				}
			}else if(image2 != null && image2.getOriginalFilename() == "") {
				files.add(oldFiles.get(1));
			}
			
			if (image3 != null && image3.getOriginalFilename() != "") {
				Files file = new Files();
				if(oldFiles.size()==2) {
					file = saveFile(image3, request,3);
					file.setFileLevel(2);
					files.add(file);
				}else {
				
				file.setOriginName(oldFiles.get(2).getOriginName());
				
				deleteFile(oldFiles.get(2).getChangeName(),request);
				file = saveFile(image3, request,4);
				file.setFileNo(oldFiles.get(2).getFileNo());
				file.setFileLevel(oldFiles.get(2).getFileLevel());
				files.add(file);
				}
			}else if(image3 != null && image3.getOriginalFilename() == "") {
				files.add(oldFiles.get(2));
			}
			----------------------------------------
			if (image4 != null && image4.getOriginalFilename() != ""  ) {
				Files file = new Files();
				if(oldFiles.size()==3) {
					file = saveFile(image4, request,4);
					file.setFileLevel(2);
					files.add(file);
				}else {				
				file.setOriginName(oldFiles.get(3).getOriginName());
				
				deleteFile(oldFiles.get(3).getChangeName(),request);

				file = saveFile(image4, request,4);
				file.setFileNo(oldFiles.get(3).getFileNo());
				file.setFileLevel(oldFiles.get(3).getFileLevel());
				files.add(file);
				}
			}else if(image4 != null && image4.getOriginalFilename() == "") {
				files.add(oldFiles.get(3));
			}
			----------------------------------------------
			
			if ( image5 != null && image5.getOriginalFilename() != ""  ) {
				Files file = new Files();
				if(oldFiles.size()==4) {
					file = saveFile(image5, request,5);
					file.setFileLevel(2);
					files.add(file);
				}else {
				
				file.setOriginName(oldFiles.get(4).getOriginName());
				
				deleteFile(oldFiles.get(4).getChangeName(),request);

				file = saveFile(image5, request,5);
				file.setFileNo(oldFiles.get(4).getFileNo());
				file.setFileLevel(oldFiles.get(4).getFileLevel());
				files.add(file);
				}
			}else if(image5 != null && image5.getOriginalFilename() == "") {
				files.add(oldFiles.get(4));
			}

			for(int i=0;i<files.size();i++) {
				files.get(i).setpNo(project.getpNo());
			}
			
			System.out.println(files);*/
		
if (result > 0) {
			
			if (image1 != null) {
				Files file = new Files();
				
				deleteFile(oldFiles.get(0).getChangeName(),request);
				file = saveFile(image1, request,1);

				files.add(file);
			}
			if (image2 != null) {
				Files file = new Files();
				if(oldFiles.size()>1) {
				deleteFile(oldFiles.get(1).getChangeName(),request);
				}
				file = saveFile(image2, request,2);

				files.add(file);
			}
			if (image3 != null) {
				Files file = new Files();
				if(oldFiles.size()>2) {
				deleteFile(oldFiles.get(2).getChangeName(),request);
				}
				file = saveFile(image3, request,3);

				files.add(file);
			}
			if (image4 != null) {
				Files file = new Files();
				if(oldFiles.size()>3) {
				deleteFile(oldFiles.get(3).getChangeName(),request);}
				file = saveFile(image4, request,4);

				files.add(file);
			}
			if (image5 != null) {
				Files file = new Files();
				if(oldFiles.size()>4) {
				deleteFile(oldFiles.get(4).getChangeName(),request);
				}
				file = saveFile(image5, request,5);

				files.add(file);
			}

			for(int i=0;i<files.size();i++) {
				files.get(i).setpNo(project.getpNo());
			}
			int result2 = cService.pPhotoUpdate(files);

			if (result2 > 0) {
				
				List<Reward> rewardList = cService.selectReward(pNo);
				ArrayList<String> dList =new ArrayList<String>();
				for(int i=0;i<rewardList.size();i++) {
					
					SimpleDateFormat transFormat = new SimpleDateFormat("yyyyMMdd");

					String to = transFormat.format(rewardList.get(i).getrDelivery());
				dList.add(to);
				}
				
				System.out.println("dList : "+dList);
				
				
				
				
				ModelAndView mv = new ModelAndView();
				System.out.println(rewardList);
				mv.addObject("dList",dList);
				mv.addObject("rList",rewardList);
				mv.addObject("project", project);
				mv.setViewName("project_creator/projectAlt3");
				return mv;
			} else {
				throw new ProjectException("프로젝트 수정 실패!");
			}

		} else {
			throw new ProjectException("프로젝트 등록 실패!");
		}
	}
	
	
	@RequestMapping("updateReward.do")
	public ModelAndView updateReward(@ModelAttribute MultiRowReward rewards,
			@RequestParam(value = "pNo") int pNo,
			@RequestParam(value = "rDelivery0") String rDelivery0,
			@RequestParam(value = "rDelivery1", required = false) String rDelivery1,
			@RequestParam(value = "rDelivery2", required = false) String rDelivery2
			) throws ParseException {
				
		
		ArrayList<Reward> rewardUpdateList = new ArrayList<Reward>(); 
		
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyyMMdd");

		List<Reward> rewardList = rewards.getRewards();
		int listSize = rewardList.size();
		Date rDeliveryDate0 = sdf1.parse(rDelivery0);
		rewardList.get(0).setrDelivery(rDeliveryDate0);
		rewardList.get(0).setrSeq(1);
		rewardList.get(0).setpNo(pNo);
		if (rewardList.get(0).getrCount() != 0) {
			rewardList.get(0).setrLimit("Y");
		} else {
			rewardList.get(0).setrLimit("N");
		}
		
		if(rewardList.get(0).getrOption().equals("")) {
			rewardList.get(0).setrOption(null);
		}
		rewardUpdateList.add(rewardList.get(0));
		
		if (listSize != 1) {
			// 리워드가 2개일 때 2번 설정
			if (listSize == 2) {
				if (rDelivery1 != null) {
					Date rDeliveryDate1 = sdf1.parse(rDelivery1);
					rewardList.get(1).setrDelivery(rDeliveryDate1);
					rewardList.get(1).setrSeq(2);
					rewardList.get(1).setpNo(pNo);
					if (rewardList.get(1).getrCount() != 0) {
						rewardList.get(1).setrLimit("Y");
					} else {
						rewardList.get(1).setrLimit("N");
					}
					if(rewardList.get(1).getrOption().equals("")) {
						rewardList.get(1).setrOption(null);
					}
					System.out.println(rewardList.get(1)); 
					rewardUpdateList.add(rewardList.get(1));
					
				}
			}
			// 리워드가 3개일떄 2,3번 설정
			else if (listSize == 3) {

				if (rDelivery1 != null) {
					Date rDeliveryDate1 = sdf1.parse(rDelivery1);
					rewardList.get(1).setrDelivery(rDeliveryDate1);
					rewardList.get(1).setrSeq(2);
					rewardList.get(1).setpNo(pNo);
					if (rewardList.get(1).getrCount() != 0) {
						rewardList.get(1).setrLimit("Y");
					} else {
						rewardList.get(1).setrLimit("N");
					}
					if(rewardList.get(1).getrOption().equals("")) {
						rewardList.get(1).setrOption(null);
					}
					System.out.println(rewardList.get(1)); 
					rewardUpdateList.add(rewardList.get(1));
				}

				if (rDelivery2 != null) {
					Date rDeliveryDate2 = sdf1.parse(rDelivery2);
					rewardList.get(2).setrDelivery(rDeliveryDate2);
					rewardList.get(2).setrSeq(3);
					rewardList.get(2).setpNo(pNo);
					if (rewardList.get(2).getrCount() != 0) {
						rewardList.get(2).setrLimit("Y");
					} else {
						rewardList.get(2).setrLimit("N");
					}
					if(rewardList.get(2).getrOption().equals("")) {
						rewardList.get(2).setrOption(null);
					}
					System.out.println(rewardList.get(2)); 
					rewardUpdateList.add(rewardList.get(2));
				}
			}
		}
		
		System.out.println(rewards);
		System.out.println(rewardUpdateList);
		int result = cService.rewardUpdate(rewardUpdateList);
		ModelAndView mv = new ModelAndView();
		
		// project 정보를 위해 담아서 다음페이지로 보내기
		Project project = cService.selectProject(pNo);
		
		SimpleDateFormat transFormat = new SimpleDateFormat("yyyy-MM-dd");

		String sDate = transFormat.format(project.getpStartDate());
		String eDate = transFormat.format(project.getpEndDate());
		
		String[] account = project.getpAccount().split(", ");
		String accountNum = account[0];
		String accountBank = account[1];
		System.out.println(accountNum+", "+accountBank);
		
		
		mv.addObject("project", project);
		mv.addObject("sDate",sDate);
		mv.addObject("eDate",eDate);
		mv.addObject("accountNum",accountNum);
		mv.addObject("accountBank",accountBank);
		mv.setViewName("project_creator/projectAlt4");

		return mv;
		
	}
	
	/* ================= 프로젝트 삭제 =============================*/
	@RequestMapping("projectDelete.do")
	public ModelAndView projectDelete(@RequestParam(value = "pNo") int pNo,
			HttpServletRequest request) {
		List<Files> f = cService.selectFiles(pNo);


		for(int i=0;i<f.size();i++) {
		if(!f.get(i).getOriginName().isEmpty()) {
			deleteFile(f.get(i).getChangeName(),request);
		}
		
		}
		
	
		
		
		int result = cService.projectDelete(pNo);
		
		if(result>0) {
			ModelAndView mv = new ModelAndView();
			mv.setViewName("myPage/My/myOpenProject");
			return mv;
		}else {
			throw new ProjectException("프로젝트 삭제 실패!");
		}
		

	}
	
	public void deleteFile(String fileName, HttpServletRequest request) {
		String root = request.getSession().getServletContext().getRealPath("resources");
		String savePath = root + "\\project_creator"; // 경로 수정
		
		File f = new File(savePath + "\\" + fileName);
		System.out.println(f);
		
		if(f.exists()) 
			f.delete();
	}
	
	@RequestMapping("finishProjectUpdate.do")
	public ModelAndView finishProjectUpdate(Project project,@RequestParam(value="pNo") Integer pNo,
			@RequestParam(value="pStartDate_str") String pStartDate_str,
			@RequestParam(value="pEndDate_str") String pEndDate_str,
			@RequestParam(value="pAccount_num") String pAccount_num,
			@RequestParam(value="pAccount_bank") String pAccount_bank
			) throws ParseException {
		
		SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd");
		
		
		Date pStartDate = sdf2.parse(pStartDate_str);
		Date pEndDate = sdf2.parse(pEndDate_str);
		String pAccount=pAccount_num+", "+pAccount_bank;
		project.setpNo(pNo);
		project.setpStartDate(pStartDate);
		project.setpEndDate(pEndDate);
		project.setpAccount(pAccount);
		
	
		
		ModelAndView mv = new ModelAndView();
		int result = cService.finishProjectUpdate(project);
		System.out.println("finishProject int result : "+result);
		
		if(result>0) {
			mv.addObject("msg","프로젝트가 수정되었습니다. 자세한 사항은 마이페이지에서 확인해주세요");
			mv.setViewName("main");
			return mv;	
		}else {
			throw new ProjectException("프로젝트 수정에 실패했습니다!");
		}
				
	}
			
	
	
	 // 최근소식 추가
	   @RequestMapping(value="pNoticeInsert.do", produces="application/json; charset=utf-8")
	   @ResponseBody
	   public String pNoticeInsert(HttpSession session,
	         @RequestParam("pNo") int pNo,
	         @RequestParam("pnTitle")String pnTitle,
	         @RequestParam("pnContent")String pnContent) {
		   PNotice pn = new PNotice();
		   pn.setpNo(pNo);
		   pn.setPnTitle(pnTitle);
		   pn.setPnContent(pnContent);

	      
		int result = cService.pNoticeInsert(pn);

	      return "프로젝트 PNotice insert";
	   }
	   
	   /*최근소식 리스트*/
	@RequestMapping(value="getpNoticeList.do",produces="application/json; charset=utf-8")
	@ResponseBody
	public String getpNoticeList(int pNo) {
		List<PNotice> pnList = cService.selectPnoticeList(pNo);
		Gson gson = new Gson();
		return gson.toJson(pnList);
	}
	
	// 최근소식 삭제
	   @RequestMapping(value="deletepNotice.do", produces="application/json; charset=utf-8")
	   @ResponseBody
	   public String deletepNotice(HttpSession session,
	         @RequestParam("pnNo") int pnNo) {
	      
	      int result = cService.deletepNotice(pnNo);
	      String str = "";
	      if(result>0) {
	    	  str="success";
	      }else {
	    	  str="fail";
	      }
	      return str;
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
