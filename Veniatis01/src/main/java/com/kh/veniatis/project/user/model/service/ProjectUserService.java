package com.kh.veniatis.project.user.model.service;

import java.util.ArrayList;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.reply.model.vo.Reply;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.creator.model.vo.PNotice;
import com.kh.veniatis.project.creator.model.vo.Reward;
import com.kh.veniatis.project.user.model.vo.Funding;
import com.kh.veniatis.project.user.model.vo.Order;
import com.kh.veniatis.project.user.model.vo.ProjectView;

public interface ProjectUserService {
	
	// 프로젝트 리스트 조회
	ArrayList<ProjectView> selectList(int currentPage);
	// 프로젝트 리스트 조회
	ArrayList<ProjectView> selectList2(int currentPage, int currentCate);

	// 프로젝트 1개 선택
	ProjectView selectProject(int pNo);
	
	// 리워드 목록 조회(프로젝트 번호)
	ArrayList<Reward> selectRewardList(int pNo);

	// 크리에이터 정보 가져오기
	//int selectCreatorNumber(int creNo);
	//Member selectCreatorInfo(int mNo);
	Member selectCreatorInfo(int creNo);

	// 프로젝트 사진 파일 가져오기
	ArrayList<Files> selectFileList(int pNo);

	// 후원하기(insert)
	int insertFunding(Funding f);

	// 주문 내역 insert
	int insertOrder(Order insertOrder);

	// 참여자 응원 목록 가져오기
	ArrayList<Reply> selectCheerList(int pNo);

	// 참여자 응원 삽입
	int insertCheer(Reply cheer);

	// 참여자 수 조회
	int selectSupportCount(int pNo);

	// 결제 완료로 바꾸기
	int updatePayStatus(Double orderNo1);

	// 프로젝트 수정
	int updateSumAmount(ProjectView p);

	// 남은 수량 수정
	int updaterCount(Reward r);

	// 펀딩 리스트 조회
	ArrayList<Funding> selectFundingList(Double oNo);

	// 리워드 하나 조회
	Reward selectRewardOne(int rNo);

	// 프로젝트 QnA 질문하기
	int insertProjectQna(QnA qa);

	// QnA 목록 가져오기
	ArrayList<QnA> selectQnAList(int pNo);

	// member 조회
	Member selectMemeber(int getmNo);
		
}
