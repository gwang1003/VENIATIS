package com.kh.veniatis.project.user.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.blog.model.vo.PageInfo;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.reply.model.vo.Reply;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.creator.model.vo.PNotice;
import com.kh.veniatis.project.creator.model.vo.Reward;
import com.kh.veniatis.project.user.model.vo.Funding;
import com.kh.veniatis.project.user.model.vo.Order;
import com.kh.veniatis.project.user.model.vo.ProjectView;

@Repository("pud")
public class ProjectUserDao {

	@Autowired
	SqlSessionTemplate sqlSession;

	public int getListCount() {
		return sqlSession.selectOne("puMapper.getListCount");
	}
	
	public int getListCount2(int currentCate) {
		return sqlSession.selectOne("puMapper.getListCount", currentCate);
	}
	
	// 테스트용 메소드
	public ProjectView selectProject(int pNo) {
		return sqlSession.selectOne("puMapper.selectProject", pNo);
	}
	
	// 전체 프로젝트 리스트 조회
	public ArrayList<ProjectView> selectList(PageInfo pi) {
		// 마이바티스에서 페이징처리는 RowBounds를 이용
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("puMapper.selectList", null, rowBounds);
	}
	
	public ArrayList<ProjectView> selectList2(PageInfo pi, int currentCate) {
		// 마이바티스에서 페이징처리는 RowBounds를 이용
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
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
		}
		return (ArrayList)sqlSession.selectList("puMapper.selectList2", cateName, rowBounds);
	}

	public ArrayList<Reward> selectRewardList(int pNo) {
		return (ArrayList)sqlSession.selectList("puMapper.selectRewardList", pNo);
	}

	// 크리에이터의 유저 넘버 가져오기
	public int selectCreatorNumber(int creNo) {
		return sqlSession.selectOne("puMapper.selectCreatorNumber", creNo);
	}
	// 크리에이터의 유저 정보 가져오기
	public Member selectCreatorInfo(int mNo) {
		return sqlSession.selectOne("puMapper.selectCreatorInfo", mNo);
	}

	public ArrayList<Files> selectFileList(int pNo) {
		// 프로젝트 사진 파일 가져오기
		return (ArrayList)sqlSession.selectList("puMapper.selectFileList", pNo);
	}

	public int insertFunding(Funding f) {
		// 후원 insert
		return sqlSession.insert("puMapper.insertFunding", f);
	}

	public int insertOrder(Order order) {
		// 주문 insert
		return sqlSession.insert("puMapper.insertOrder", order);
	}

	public ArrayList<Reply> selectCheerList(int pNo) {
		// 참여자 응원 목록 가져오기
		return (ArrayList)sqlSession.selectList("puMapper.selectCheerList", pNo);
	}

	public int insertCheer(Reply cheer) {
		// 참여자 응원 삽입
		return sqlSession.insert("puMapper.insertCheer", cheer);
	}

	public int selectSupportCount(int pNo) {
		// 참여자 수 조회
		return sqlSession.selectOne("puMapper.selectSupportCount", pNo);
	}

	public int updatePayStatus(Double orderNo) {
		// 결제 완료로 바꾸기
		return sqlSession.update("puMapper.updatePayStatus", orderNo);
	}

	public int updateSumAmount(ProjectView p) {
		// 프로젝트 수정
		return sqlSession.update("puMapper.updateSumAmount", p);
	}

	public int updaterCount(Reward r) {
		// 남은 수량 수정
		return sqlSession.update("puMapper.updaterCount", r);
	}

	public ArrayList<Funding> selectFundingList(Double oNo) {
		// 펀딩 리스트 조회
		return (ArrayList)sqlSession.selectList("puMapper.selectFundingList", oNo);
	}

	public Reward selectRewardOne(int rNo) {
		// 리워드 하나 조회
		return sqlSession.selectOne("puMapper.selectRewardOne", rNo);
	}

	public int insertProjectQna(QnA qa) {
		// 프로젝트 질문
		return sqlSession.insert("puMapper.insertProjectQna", qa);
	}

	public ArrayList<QnA> selectQnAList(int pNo) {
		// 프로젝트 QnA 목록 가져오기
		return (ArrayList)sqlSession.selectList("puMapper.selectQnAList", pNo);
	}

	public Member selectMember(int mNo) {
		return sqlSession.selectOne("puMapper.selectMember", mNo);
	}

	/*
	// 최근 소식 가져오기
	public ArrayList<PNotice> selectPNoticeList(int pNo) {
		// TODO Auto-generated method stub
		return null;
	}*/

	/*public ArrayList<Reply> selectReplyList(int pNo) {
		// 프로젝트 qna 댓글 목록 가져오기
		return (ArrayList)sqlSession.selectList("puMapper.selectReplyList", pNo);
	}*/

	/*public int insertReply(Reply r) {
		// 프로젝트 qna 댓글 등록
		return sqlSession.insert("puMapper.insertReply", r);
	}*/


	

}
