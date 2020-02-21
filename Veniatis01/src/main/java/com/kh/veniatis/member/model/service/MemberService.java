package com.kh.veniatis.member.model.service;

import java.util.ArrayList;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.Project;
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

	ArrayList<ProjectView> myOpenProject(int getCreNo);

	int selectpNo(int getmNo);

	int question(QnA qa);

	ArrayList<Member> selectMemberList();

	Creator selectCreator(int getmNo);

	ArrayList<ProjectView> selectLikes(int getmNo);
}
