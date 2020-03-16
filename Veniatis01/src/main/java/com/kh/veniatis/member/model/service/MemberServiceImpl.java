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

import com.kh.veniatis.blog.model.vo.Compet;
import com.kh.veniatis.common.PageInfo;
import com.kh.veniatis.common.Pagination;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.dao.MemberDao;
import com.kh.veniatis.member.model.vo.CreView;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.user.model.vo.ProjectView;

@Service("mService")
public class MemberServiceImpl implements MemberService {
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
			// FileSystemResource file = new FileSystemResource(new
			// File("D:/emailPic.png"));
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
	public int memberUpdate(Member m) {
		return mDao.memberUpdate(m);
	}

	@Override
	public int mPhotoDelete(Member m) {
		return mDao.mPhotoDelete(m);
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
	public ArrayList<ProjectView> selectAttend(int currentPage, Map map) {
		int listCount = mDao.attendListCount(map);

		// 페이지 정보 저장
		PageInfo pi = Pagination.getPageInfo(currentPage, listCount, 4, 5);

		return mDao.selectAttend(pi, map);
	}

	@Override
	public ArrayList<ProjectView> myInterestProject(int currentPage, Map map) {
		int listCount = mDao.interestListCount(map);

		// 페이지 정보 저장
		PageInfo pi = Pagination.getPageInfo(currentPage, listCount, 2, 5);

		return mDao.myInterestProject(pi, map);
	}

	@Override
	public ArrayList<ProjectView> myOpenProject(int currentPage, Map map) {
		int listCount = mDao.openListCount(map);

		PageInfo pi = Pagination.getPageInfo(currentPage, listCount, 4, 5);
		return mDao.myOpenProject(map, pi);
	}

	@Override
	public ArrayList<ProjectView> selectAttendList(int getmNo) {
		return mDao.selectAttendList(getmNo);
	}

	@Override
	public ArrayList<ProjectView> selectInterestList(int getmNo) {
		return mDao.selectInterestList(getmNo);
	}

	@Override
	public ArrayList<ProjectView> selectOpenList(int getmNo) {
		return mDao.selectOpenList(getmNo);
	}

	@Override
	public void updateDate(int getmNo) {
		mDao.updateDate(getmNo);
	}

	@Override
	public int toDayVisitor() {
		return mDao.toDayVisitor();
	}

	@Override
	public int toDayProject() {
		return mDao.toDayProject();
	}

	@Override
	public void updateDateCount() {
		mDao.updateDateCount();
	}

	@Override
	public int toDayQnA() {
		return mDao.toDayQnA();
	}

	@Override
	public ArrayList selectMVisitor() {
		return mDao.selectMVisitor();
	}

	@Override
	public ArrayList selectMVisitor2() {
		return mDao.selectMVisitor2();
	}

	@Override
	public int requestProject() {
		return mDao.requestProject();
	}

	@Override
	public int selectProject() {
		return mDao.selectProject();
	}

	@Override
	public int selectEndProject() {
		return mDao.selectEndProject();
	}

	@Override
	public ArrayList<CreView> selectCreatorList() {
		return mDao.selectCreatorList();
	}

	@Override
	public ArrayList<ProjectView> selectOkProject() {
		return mDao.selectOkProject();
	}

	@Override
	public ArrayList<ProjectView> selectProjectList() {
		return mDao.selectProjectList();
	}

	@Override
	public int competitionInsert(Compet c) {
		return mDao.competitionInsert(c);
	}

	@Override
	public Compet selectOneCompet(String conName) {
		return mDao.selectOneCompet(conName);
	}

	@Override
	public int conPhotoInsert(Files files) {
		return mDao.conPhotoInsert(files);
	}

	@Override
	public ArrayList<QnA> selectQAList() {
		return mDao.selectQAList();
	}

	@Override
	public int okProject(int pNo) {
		return mDao.okProject(pNo);
	}

}
