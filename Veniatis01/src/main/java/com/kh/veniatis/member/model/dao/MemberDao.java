package com.kh.veniatis.member.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.vo.Member;


@Repository("mDao") 
public class MemberDao {
	@Autowired
	SqlSessionTemplate sqlSession; 
	
	public Member selectMember(Member m) {

		return sqlSession.selectOne("memberMapper.selectOne", m);
	}

	
	public Member selectOneMember(String userId) {
		return sqlSession.selectOne("memberMapper.selectOneUserId",userId);
	}


	public int memberInsert(Member m) {
		return sqlSession.insert("memberMapper.memberInsert", m);
	}


	public int mPhotoInsert(Files files) {
		return sqlSession.insert("memberMapper.mPhotoInsert", files);
	}
}
