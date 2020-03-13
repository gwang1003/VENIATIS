package com.kh.veniatis.member.model.service;

import java.util.ArrayList;
import java.util.Map;

import com.kh.veniatis.blog.model.vo.Compet;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.vo.CreView;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.user.model.vo.ProjectView;

public interface MemberService {
	//로그인용
	Member loginMember(Member m);

	// 유저 최근 접속일 업데이트
	void updateDate(int getmNo);
	
	//아이디를 통해서 멤버 골라온다
	Member selectOneMember(String userId);
	
	// 이메일 인증
	public boolean send(String subject, String text, String from, String to, String filePath);

	// 회원가입
	int memberInsert(Member m);

	// 회원 프로필사진 저장
	int mPhotoInsert(Files files);

	// 회원 정보 수정
	int memberUpdate(Member m);

	// 회원 프로필 사진 삭제
	int mPhotoDelete(Member m);

	// 나의 개설 프로젝트 리스트(페이징 및 정렬 기준)
	ArrayList<ProjectView> myOpenProject(int currentPage, Map map);

	// 참여프로젝트 리스트(페이징 및 정렬 기준)
	ArrayList<ProjectView> selectAttend(int currentPage, Map map);

	// 관심 프로젝트 리스트(페이징 및 정렬 기준)
	ArrayList<ProjectView> myInterestProject(int getmNo, Map map);

	// 관심 프로젝트 전체 리스트
	ArrayList<ProjectView> selectAttendList(int getmNo);

	// 참여 프로젝트 전체 리스트
	ArrayList<ProjectView> selectInterestList(int getmNo);

	// 개설 프로젝트 전체 리스트
	ArrayList<ProjectView> selectOpenList(int getmNo);

	// 문의하기
	int question(QnA qa);
	
	// 유저 정보 리스트
	ArrayList<Member> selectMemberList();
	

	// 금일 방문자수
	int toDayVisitor();

	// 금일 개설 프로젝트수
	int toDayProject();

	// 요일별 방문자수 업데이트
	void updateDateCount();

	// 금일 문의수
	int toDayQnA();

	// 전달 방문자수
	ArrayList selectMVisitor();

	// 이번달 방문자수
	ArrayList selectMVisitor2();

	// 승인대기 프로젝트 수
	int requestProject();

	// 전체 프로젝트 수
	int selectProject();

	// 종료된 프로젝트 수
	int selectEndProject();

	// 전체 크리에이터 리스트
	ArrayList<CreView> selectCreatorList();

	// 승인대기 프로젝트 리스트
	ArrayList<ProjectView> selectOkProject();

	// 전체 프로젝트 리스트
	ArrayList<ProjectView> selectProjectList();

	// 공모전 등록
	int competitionInsert(Compet c);

	// 공모전 리스트
	Compet selectOneCompet(String conName);

	// 공모전 사진 저장
	int conPhotoInsert(Files files);

	// 전체 문의내역
	ArrayList<QnA> selectQAList();
}
