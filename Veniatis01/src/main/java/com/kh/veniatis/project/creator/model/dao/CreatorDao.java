package com.kh.veniatis.project.creator.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.project.creator.model.vo.Creator;

@Repository("cDao")
public class CreatorDao {

	@Autowired
	SqlSessionTemplate sqlSession;
	public int CreatorInsert(Creator c) {
		
		return sqlSession.insert("creatorMapper.creatorInsert",c);
	}
	public Creator selectCreNo(Creator c) {
		
		return sqlSession.selectOne("creatorMapper.selectCreNo", c);
	}
	

}
