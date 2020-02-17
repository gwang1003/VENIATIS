package com.kh.veniatis.member.model.service;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.dao.MemberDao;
import com.kh.veniatis.member.model.vo.Member;



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
	
	

}
