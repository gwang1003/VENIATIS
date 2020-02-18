package com.kh.veniatis.project.user.model.dao;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.user.model.vo.News;
import com.kh.veniatis.project.user.model.vo.Reward;

@Repository("pud")
public class ProjectUserDao {

	@Autowired
	SqlSessionTemplate sqlSession;

	// 테스트용 메소드
	public Project selectBoard(int pNo) {
		return sqlSession.selectOne("puMapper.selectProject", pNo);
	}
	
	// 테스트용 메소드
	public ArrayList<Project> selectList() {
		return (ArrayList)sqlSession.selectList("puMapper.selectList");
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

	// 최근 소식 가져오기
	public News selectNews(int pNo) {
		News n = sqlSession.selectOne("puMapper.selectNews", pNo);
		System.out.println("dao에서 " + n);
		return new News();
	}

}
