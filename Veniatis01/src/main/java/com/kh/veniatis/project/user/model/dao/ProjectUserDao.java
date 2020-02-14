package com.kh.veniatis.project.user.model.dao;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.project.creator.model.vo.Project;

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

}
