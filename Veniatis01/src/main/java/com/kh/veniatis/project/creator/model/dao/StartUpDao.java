package com.kh.veniatis.project.creator.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.Project;

@Repository("sDao")
public class StartUpDao {
	
	@Autowired
	SqlSessionTemplate sqlSession;

	public int startUpCreatorInsert(Creator c) {
		sqlSession.insert("startUpMapper.startUpCreatorInsert",c);
		return c.getCreNo();
	}

	public int startUpprojectInsert(Project p) {
		sqlSession.insert("startUpMapper.startUpprojectInsert",p);
		return p.getpNo();
	}


}
