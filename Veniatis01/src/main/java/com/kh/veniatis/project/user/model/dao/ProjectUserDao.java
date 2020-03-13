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
