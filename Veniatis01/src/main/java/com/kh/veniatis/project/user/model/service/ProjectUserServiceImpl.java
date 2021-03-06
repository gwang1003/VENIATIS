package com.kh.veniatis.project.user.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.veniatis.common.PageInfo;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.common.reply.model.vo.Reply;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.creator.model.vo.Reward;
import com.kh.veniatis.project.user.model.dao.ProjectUserDao;
import com.kh.veniatis.project.user.model.vo.Funding;
import com.kh.veniatis.project.user.model.vo.Order;
import com.kh.veniatis.project.user.model.vo.ProjectPagination;
import com.kh.veniatis.project.user.model.vo.ProjectView;

@Service("pus")
public class ProjectUserServiceImpl implements ProjectUserService {
	@Autowired
	ProjectUserDao pud;
	
	// 개인 프로젝트 리스트 조회
	@Override
	public ArrayList<ProjectView> selectList(int currentPage, int currentCate, int currentArrange) {
		// 1. 게시글 개수 조회
		String cateName = "";
		switch(currentCate) {
		case 1: cateName="공간/리빙"; break;
		case 2: cateName="사회이슈"; break;
		case 3: cateName="교육/출판"; break;
		case 4: cateName="문화예술"; break;
		case 5: cateName="지역재생"; break;
		case 6: cateName="푸드"; break;
		case 7: cateName="테크"; break;
		case 8: cateName="뷰티/패션"; break;
		case 9: cateName="여행"; break;
		default: cateName=null; break;
		}
		int listCount = pud.getListCount(cateName);
		
		// 페이지 정보 저장
		PageInfo pi = ProjectPagination.getPageInfo(currentPage, listCount);
		// 2. 게시글 리스트 조회
		return pud.selectList(pi, cateName, currentArrange);
	}
	
	// 창업 프로젝트 리스트 조회
	@Override
	public ArrayList<ProjectView> selectList2(int currentPage, int currentCate, int currentArrange) {
		// 1. 게시글 개수 조회
		String cateName = "";
		switch(currentCate) {
		case 1: cateName="공간/리빙"; break;
		case 2: cateName="사회이슈"; break;
		case 3: cateName="교육/출판"; break;
		case 4: cateName="문화예술"; break;
		case 5: cateName="지역재생"; break;
		case 6: cateName="푸드"; break;
		case 7: cateName="테크"; break;
		case 8: cateName="뷰티/패션"; break;
		case 9: cateName="여행"; break;
		default: cateName=null; break;
		}
		int listCount = pud.getListCount2(cateName);
		
		// 페이지 정보 저장
		PageInfo pi = ProjectPagination.getPageInfo(currentPage, listCount);
		// 2. 게시글 리스트 조회
		return pud.selectList2(pi, cateName, currentArrange);
	}

	@Override
	public ProjectView selectProject(int pNo) {
		return pud.selectProject(pNo);
	}

	@Override
	public ArrayList<Reward> selectRewardList(int pNo) {
		return pud.selectRewardList(pNo);
	}

	@Override
	public Member selectCreatorInfo(int creNo) {
		// 크리에이터의 유저 정보 가져오기
		int mNo = pud.selectCreatorNumber(creNo);
		if(mNo == 0) {
			return new Member();
		}else {
			return pud.selectCreatorInfo(mNo);
		}
	}

	@Override
	public ArrayList<Files> selectFileList(int pNo) {
		// 사진 파일 가져오기
		return pud.selectFileList(pNo);
	}
	/*
	@Override
	public ArrayList<Reply> selectReplyList(int pNo) {
		// 프로젝트 qna 댓글 목록 가져오기
		return pud.selectReplyList(pNo);
	}

	@Override
	public int insertReply(Reply r) {
		// 프로젝트 qna 댓글 등록
		return pud.insertReply(r);
	}*/

	// 후원 insert
	@Override
	public int insertFunding(Funding f) {
		return pud.insertFunding(f);
	}

	@Override
	public int insertOrder(Order order) {
		// 주문 insert
		return pud.insertOrder(order);
	}

	@Override
	public ArrayList<Reply> selectCheerList(int pNo) {
		// 참여자 목록 가져오기
		return pud.selectCheerList(pNo);
	}

	@Override
	public int insertCheer(Reply cheer) {
		// 참여자 응원 삽입
		return pud.insertCheer(cheer);
	}

	@Override
	public int selectSupportCount(int pNo) {
		// 참여자 수 조회
		return pud.selectSupportCount(pNo);
	}

	@Override
	public int updatePayStatus(Double orderNo) {
		// 결제 완료로 바꾸기
		return pud.updatePayStatus(orderNo);
	}

	@Override
	public int updateSumAmount(ProjectView p) {
		// 프로젝트 수정
		return pud.updateSumAmount(p);
	}

	@Override
	public int updaterCount(Reward r) {
		// 남은 수량 수정
		return pud.updaterCount(r);
	}

	@Override
	public ArrayList<Funding> selectFundingList(Double oNo) {
		// 펀딩 리스트 조회
		return pud.selectFundingList(oNo);
	}

	@Override
	public Reward selectRewardOne(int rNo) {
		// 리워드 하나 조회
		return pud.selectRewardOne(rNo);
	}

	@Override
	public int insertProjectQna(QnA qa) {
		// 프로젝트 QnA 질문하기
		return pud.insertProjectQna(qa);
	}

	@Override
	public ArrayList<QnA> selectQnAList(int pNo) {
		// Qna 목록 가져오기
		return pud.selectQnAList(pNo);
	}

	@Override
	public Member selectMemeber(int mNo) {
		return pud.selectMember(mNo);
	}

	@Override
	public int likeProjectCheck(Likes pLike) {
		// 관심프로젝트인지 조회
		return pud.likeProjectCheck(pLike);
	}

	@Override
	public int deleteLikes(Likes plike) {
		// 삭제
		return pud.deleteLikes(plike);
	}

	@Override
	public int insertLikes(Likes plike) {
		// 삽입
		return pud.insertLikes(plike);
	}

	@Override
	public int deleteProjectQna(int qNo) {
		return pud.deleteProjectQna(qNo);
	}

	@Override
	public int updateProjectQna(QnA q) {
		//  QnA 답변 업데이트
		return pud.updateProjectQna(q);
	}

	@Override
	public QnA selectQnAOne(int qNo) {
		return pud.selectQnAOne(qNo);
	}

	@Override
	public ArrayList<ProjectView> selectMainList() {
	
		return pud.selectMainList();
	}
	

}
