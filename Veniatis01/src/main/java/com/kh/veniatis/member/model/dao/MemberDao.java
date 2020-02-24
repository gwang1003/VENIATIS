package com.kh.veniatis.member.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.common.PageInfo;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.user.model.vo.ProjectView;


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


	public Files selectPhoto(int getmNo) {
		return sqlSession.selectOne("memberMapper.selectPhoto", getmNo);
	}


	public int memberUpdate(Member m) {

		return sqlSession.update("memberMapper.memberUpdate", m);
	}


	public int mPhotoDelete(Member m) {
		return sqlSession.delete("memberMapper.mPhotoDelete", m);
	}


	public ArrayList<ProjectView> myOpenProject(int getCreNo, PageInfo pi) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("memberMapper.myOpenProject", getCreNo, rowBounds);
	}


	public int selectpNo(int getmNo) {
		return sqlSession.selectOne("memberMapper.selectpNo", getmNo);
	}


	public int question(QnA qa) {
		return sqlSession.insert("memberMapper.question", qa);
	}


	public ArrayList<Member> selectMemberList() {
		return (ArrayList)sqlSession.selectList("memberMapper.selectMemberList");
	}


	public Creator selectCreator(int getmNo) {
		return sqlSession.selectOne("memberMapper.selectCreator", getmNo);
	}


	public ArrayList<ProjectView> selectLikes(int getmNo, PageInfo pi) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("memberMapper.selectLikes", getmNo, rowBounds);
	}


	public ArrayList<ProjectView> myInterestProject(int getmNo, PageInfo pi) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("memberMapper.myInterestProject", getmNo, rowBounds);
	}


	public int likesListCount(int getmNo) {
		return sqlSession.selectOne("memberMapper.likesListCount", getmNo);
	}


	public int openListCount(int getCreNo) {
		return sqlSession.selectOne("memberMapper.openListCount", getCreNo);
	}


	public int interestListCount(int getmNo) {
		return sqlSession.selectOne("memberMapper.interestListCount", getmNo);
	}
}
