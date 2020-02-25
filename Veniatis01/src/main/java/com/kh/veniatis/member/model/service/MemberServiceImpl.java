package com.kh.veniatis.member.model.service;

import java.io.File;
import java.util.ArrayList;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.kh.veniatis.common.PageInfo;
import com.kh.veniatis.common.Pagination;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.dao.MemberDao;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.user.model.vo.ProjectView;



@Service("mService")
public class MemberServiceImpl implements MemberService{
	@Autowired
	private MemberDao mDao;
	private Log log = LogFactory.getLog(MemberServiceImpl.class);

	@Autowired
	private JavaMailSender javaMailSender;
	
	public void setJavaMailSender(JavaMailSender javaMailSender) {
	this.javaMailSender = javaMailSender;
	}
	
	
	@Override
	public Member loginMember(Member m) {
		Member loginUser = mDao.selectMember(m);
		return loginUser;
	}
	@Override
	public Member selectOneMember(String userId) {
		Member selectMember = mDao.selectOneMember(userId);
		return selectMember;
	}
	
	@Override
	public boolean send(String subject, String text, String from, String to, String filePath) {
		MimeMessage message = javaMailSender.createMimeMessage();
		try {
		// org.springframework.mail.javamail.MimeMessageHelper
		MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
		helper.setSubject(subject);
		helper.setText(text, true);
		helper.setFrom(from);
		helper.setTo(to);
		// 첨부 파일 처리
		if (filePath != null) {
		File file = new File(filePath);
		if (file.exists()) {
		helper.addAttachment(file.getName(), new File(filePath));
		}
		}
		// 첨부 파일 처리 다른방법(이건 확인함)
		// FileSystemResource file = new FileSystemResource(new File("D:/load.gif"));
		// helper.addAttachment("load.gif", file);
		// 메일에 이미지 심어서 보낸는 방법(한글파일은 안됨)
		// String contents = text + "<br><br><img src=\"cid:emailPic.png \">";
		// helper.setText(contents, true);
		// FileSystemResource file = new FileSystemResource(new File("D:/emailPic.png"));
		// helper.addInline("emailPic.png", file);
		javaMailSender.send(message);
		return true;
		} catch (MessagingException e) {
		e.printStackTrace();
		}
		return false;
	}


	@Override
	public int memberInsert(Member m) {
		return mDao.memberInsert(m);
	}


	@Override
	public int mPhotoInsert(Files files) {
		return mDao.mPhotoInsert(files);
	}


	@Override
	public Files selectPhoto(int getmNo) {
		return mDao.selectPhoto(getmNo);
	}


	@Override
	public int memberUpdate(Member m) {
		return mDao.memberUpdate(m);
	}


	@Override
	public int mPhotoDelete(Member m) {
		return mDao.mPhotoDelete(m);
	}


	@Override
	public ArrayList<ProjectView> myOpenProject(int getmNo, int currentPage) {
		int listCount = mDao.openListCount(getmNo);
		
		// 페이지 정보 저장
		PageInfo pi = Pagination.getPageInfo(currentPage, listCount, 3, 5);
		
		return mDao.myOpenProject(getmNo, pi);
	}


	@Override
	public int selectpNo(int getmNo) {
		return mDao.selectpNo(getmNo);
	}


	@Override
	public int question(QnA qa) {
		return mDao.question(qa);
	}


	@Override
	public ArrayList<Member> selectMemberList() {
		return mDao.selectMemberList();
	}


	@Override
	public Creator selectCreator(int getmNo) {
		return mDao.selectCreator(getmNo);
	}


	@Override
	public ArrayList<ProjectView> selectLikes(int currentPage, Map map) {
		int listCount = mDao.likesListCount(map);
		
		// 페이지 정보 저장
		PageInfo pi = Pagination.getPageInfo(currentPage, listCount, 4, 5);
		
		return mDao.selectLikes(pi, map);
	}


	@Override
	public ArrayList<ProjectView> myInterestProject(int currentPage, Map map) {
		int listCount = mDao.interestListCount(map);
		
		// 페이지 정보 저장
		PageInfo pi = Pagination.getPageInfo(currentPage, listCount, 2, 5);
		
		return mDao.myInterestProject(pi, map);
	}


	@Override
	public ArrayList<ProjectView> selectLikesList(int getmNo) {
		return mDao.selectLikesList(getmNo);
	}


	@Override
	public ArrayList<ProjectView> selectInterestList(int getmNo) {
		return mDao.selectInterestList(getmNo);
	}





	
	

}
