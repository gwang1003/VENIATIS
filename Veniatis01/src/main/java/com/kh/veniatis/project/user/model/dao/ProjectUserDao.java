package com.kh.veniatis.project.user.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.common.PageInfo;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.common.reply.model.vo.Reply;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.creator.model.vo.Reward;
import com.kh.veniatis.project.user.model.vo.Funding;
import com.kh.veniatis.project.user.model.vo.Order;
import com.kh.veniatis.project.user.model.vo.ProjectView;

@Repository("pud")
public class ProjectUserDao {

	@Autowired
	SqlSessionTemplate sqlSession;

	public int getListCount(String cateName) {
		return sqlSession.selectOne("puMapper.getListCount", cateName);
	}
	
	public int getListCount2(String cateName) {
		return sqlSession.selectOne("puMapper.getListCount2", cateName);
	}
	
	// 테스트용 메소드
	public ProjectView selectProject(int pNo) {
		return sqlSession.selectOne("puMapper.selectProject", pNo);
	}
	
	// 전체 프로젝트 리스트 조회
	public ArrayList<ProjectView> selectList(PageInfo pi, String cateName, int currentArrange) {
		// 마이바티스에서 페이징처리는 RowBounds를 이용
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		switch(currentArrange) {
		case 1:return (ArrayList)sqlSession.selectList("puMapper.selectList01", cateName, rowBounds);
		case 2:return (ArrayList)sqlSession.selectList("puMapper.selectList02", cateName, rowBounds);
		case 3:return (ArrayList)sqlSession.selectList("puMapper.selectList03", cateName, rowBounds);
		/*case 4:return (ArrayList)sqlSession.selectList("puMapper.selectList04", cateName, rowBounds);*/
		default:return (ArrayList)sqlSession.selectList("puMapper.selectList", cateName, rowBounds);
		}
		
	}
	
	public ArrayList<ProjectView> selectList2(PageInfo pi, String cateName, int currentArrange) {
		// 마이바티스에서 페이징처리는 RowBounds를 이용
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		switch(currentArrange) {
		case 1:return (ArrayList)sqlSession.selectList("puMapper.selectList11", cateName, rowBounds);
		case 2:return (ArrayList)sqlSession.selectList("puMapper.selectList12", cateName, rowBounds);
		case 3:return (ArrayList)sqlSession.selectList("puMapper.selectList13", cateName, rowBounds);
		/*case 4:return (ArrayList)sqlSession.selectList("puMapper.selectList04", cateName, rowBounds);*/
		default:return (ArrayList)sqlSession.selectList("puMapper.selectList2", cateName, rowBounds);
		}
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

	public int likeProjectCheck(Likes pLike) {
		// 관심프로젝트인지 조회
		return sqlSession.selectOne("puMapper.likeProjectCheck", pLike);
	}

	public int deleteLikes(Likes plike) {
		// 관심 프로젝트 삭제
		return sqlSession.delete("puMapper.deleteLikes", plike);
	}

	public int insertLikes(Likes plike) {
		// 관심프로젝트 삽입
		return sqlSession.insert("puMapper.insertLikes", plike);
	}

	public int deleteProjectQna(int qNo) {
		return sqlSession.delete("puMapper.deleteProjectQna", qNo);
	}

	public QnA selectQnAOne(int qNo) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("puMapper.selectQnAOne", qNo);
	}

	public int updateProjectQna(QnA q) {
		// TODO Auto-generated method stub
		return sqlSession.update("puMapper.updateProjectQna", q);
	}

	public ArrayList<ProjectView> selectMainList() {
		// TODO Auto-generated method stub
		return (ArrayList)sqlSession.selectList("puMapper.selectMainList");
	}

	

}
