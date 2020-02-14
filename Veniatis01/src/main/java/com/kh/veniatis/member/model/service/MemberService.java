package com.kh.veniatis.member.model.service;

import com.kh.veniatis.member.model.vo.Member;

public interface MemberService {
	//로그인용
	Member loginMember(Member m);
	
	//아이디를 통해서 멤버 골라온다
	Member selectOneMember(String userId);
}
