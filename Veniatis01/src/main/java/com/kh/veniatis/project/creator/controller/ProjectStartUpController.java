package com.kh.veniatis.project.creator.controller;

import java.io.File;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.project.creator.model.exception.ProjectException;
import com.kh.veniatis.project.creator.model.service.CreatorService;
import com.kh.veniatis.project.creator.model.service.StartUpService;
import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.MultiRowReward;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.creator.model.vo.Reward;
import com.kh.veniatis.project.user.model.service.ProjectUserService;
import com.kh.veniatis.project.user.model.vo.ProjectView;
@Controller
public class ProjectStartUpController {

	@Autowired
	private CreatorService cService;
	
	@Autowired
	private StartUpService sService;
	
	@Autowired
	private ProjectUserService pus;
	
	@RequestMapping("startUpproject.do")
	public String ProjectStart() {
		return "project_creator/startUpproject_startPage";
	}
	
	@RequestMapping("startUpprojectPage1.do")
	public String startUpprojectPage1() {
		return "project_creator/startUpprojectPage1";
	}
	
	@RequestMapping("startUpInsert.do")
	public ModelAndView projectInfoInsert(HttpServletRequest request, Creator c, Model model,
			@RequestParam(value = "userPost") String post, @RequestParam(value = "userAddr1") String addr1,
			@RequestParam(value = "userAddr2") String addr2, @RequestParam(value = "mNo") int mNo) {
		c.setCreAddress(post + "#" + addr1 + "#" + addr2);
		c.setmNo(mNo);

		int creNo = sService.startUpCreatorInsert(c);

		

		
		
		Creator creator = cService.selectCreator(creNo);
	
		
		if (creNo > 0) {
			ModelAndView mv = new ModelAndView();
			mv.addObject("creator", creator);
			mv.setViewName("project_creator/startUpprojectPage2");
			return mv;
		} else {
			throw new ProjectException("창업 크리에이터 등록 실패!");
		}

	}
	
	@RequestMapping("startUpprojectInsert.do")
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
	
		int result = sService.startUpprojectInsert(p);
		
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
				mv.setViewName("project_creator/startUpprojectPage3");
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

		String savePath = root + "\\project_startUp";

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
				"resources/project_startUp/" + renameFilename);
		try {
			// 이 순간 서버에 파일이 저장 된다
			file.transferTo(new File(filePath));
		} catch (Exception e) {
			System.out.println("파일 전송 에러 : " + e.getMessage());
		}
		return files;
	}
	
	
	@RequestMapping("startUpInsertReward.do")
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

		int result = cService.rewardInsert(rewardInsertList);
		ModelAndView mv = new ModelAndView();
		
		// project 정보를 위해 담아서 다음페이지로 보내기
		Project project = cService.selectProject(pNo);
		mv.addObject("project", project);
		mv.setViewName("project_creator/startUpprojectPage4");

		return mv;
	}
	
	@RequestMapping("startUpFinishProject.do")
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
		
		ModelAndView mv = new ModelAndView();
		int result = cService.finishProject(project);
		
		if(result>0) {
			mv.addObject("msg","창업 프로젝트가 등록되었습니다. 승인여부는 마이페이지에서 확인해주세요");
			mv.setViewName("main");
			return mv;	
		}else {
			throw new ProjectException("프로젝트 등록에 실패했습니다!");
		}
				
	}
	
	@RequestMapping("startUpprojectAlt.do")
	public ModelAndView ProjectDetail(ModelAndView mv, int pNo) {
	
		ProjectView p = pus.selectProject(pNo);

		Creator c = cService.selectCreator(p.getCreNo());

		if(p != null) {
			
			ArrayList<Reward> rList = pus.selectRewardList(pNo);
	
			ArrayList<Files> fList = pus.selectFileList(pNo);

			System.out.println(fList);
			
			mv.addObject("project", p);
			mv.addObject("rewardList", rList);
			mv.addObject("fList", fList);
		
			mv.addObject("creator",c);
			mv.setViewName("project_creator/startUpprojectAlt");
		}		
		
		return mv;
	}
	
	@RequestMapping("startUpCreatorUpdate.do")
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
			
			mv.setViewName("project_creator/startUpprojectAlt2");
			return mv;
		} else {
			throw new ProjectException("크리에이터 등록 실패!");
		}

	}
	
	@RequestMapping("startUpprojectUpdate.do")
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
		
				ModelAndView mv = new ModelAndView();
				System.out.println(rewardList);
				mv.addObject("dList",dList);
				mv.addObject("rList",rewardList);
				mv.addObject("project", project);
				mv.setViewName("project_creator/startUpprojectAlt3");
				return mv;
			} else {
				throw new ProjectException("프로젝트 수정 실패!");
			}

		} else {
			throw new ProjectException("프로젝트 등록 실패!");
		}
	}
	
	public void deleteFile(String fileName, HttpServletRequest request) {
		String root = request.getSession().getServletContext().getRealPath("resources");
		String savePath = root + "\\project_startUp"; // 경로 수정
		
		File f = new File(savePath + "\\" + fileName);
		System.out.println(f);
		
		if(f.exists()) 
			f.delete();
	}
	
	@RequestMapping("startUpUpdateReward.do")
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
		mv.setViewName("project_creator/startUpprojectAlt4");

		return mv;
		
	}
	
	@RequestMapping("startUpFinishProjectUpdate.do")
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

	
	
}
