package com.kh.veniatis.member.model.service;

import java.util.ArrayList;
import java.util.Map;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.vo.CreView;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.user.model.vo.ProjectView;

public interface MemberService {
	//로그인용
	Member loginMember(Member m);
	
	//아이디를 통해서 멤버 골라온다
	Member selectOneMember(String userId);
	
	public boolean send(String subject, String text, String from, String to, String filePath);

	int memberInsert(Member m);

	int mPhotoInsert(Files files);

	Files selectPhoto(int getmNo);

	int memberUpdate(Member m);

	int mPhotoDelete(Member m);

	ArrayList<ProjectView> myOpenProject(int currentPage, Map map);

	int question(QnA qa);

	ArrayList<Member> selectMemberList();

	ArrayList<ProjectView> selectLikes(int currentPage, Map map);

	ArrayList<ProjectView> myInterestProject(int getmNo, Map map);

	ArrayList<ProjectView> selectLikesList(int getmNo);

	ArrayList<ProjectView> selectInterestList(int getmNo);

	ArrayList<ProjectView> selectOpenList(int getmNo);

	void updateDate(int getmNo);

	int toDayVisitor();

	int toDayProject();

	void updateDateCount();

	int toDayQnA();

	ArrayList selectMVisitor();

	ArrayList selectMVisitor2();

	int requestProject();

	int selectProject();

	int selectEndProject();

	ArrayList<CreView> selectCreatorList();
}
