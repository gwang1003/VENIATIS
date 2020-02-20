package com.kh.veniatis.member.model.service;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.vo.Member;

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
}
