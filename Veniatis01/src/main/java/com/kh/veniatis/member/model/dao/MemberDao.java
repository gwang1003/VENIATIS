package com.kh.veniatis.member.model.dao;

import java.util.ArrayList;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.common.PageInfo;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.vo.CreView;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.project.creator.model.vo.Creator;
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


	public ArrayList<ProjectView> myOpenProject(Map map, PageInfo pi) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("memberMapper.myOpenProject", map, rowBounds);
	}

	public int question(QnA qa) {
		return sqlSession.insert("memberMapper.question", qa);
	}


	public ArrayList<Member> selectMemberList() {
		return (ArrayList)sqlSession.selectList("memberMapper.selectMemberList");
	}
	
	public ArrayList<ProjectView> selectLikes(PageInfo pi, Map map) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("memberMapper.selectLikes", map, rowBounds);
	}


	public ArrayList<ProjectView> myInterestProject(PageInfo pi, Map map) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("memberMapper.myInterestProject", map, rowBounds);
	}


	public int likesListCount(Map map) {
		return sqlSession.selectOne("memberMapper.likesListCount", map);
	}


	public int openListCount(Map map) {
		return sqlSession.selectOne("memberMapper.openListCount", map);
	}


	public int interestListCount(Map map) {
		return sqlSession.selectOne("memberMapper.interestListCount", map);
	}


	public ArrayList<ProjectView> selectLikesList(int getmNo) {
		return (ArrayList)sqlSession.selectList("memberMapper.selectLikesList", getmNo);
	}


	public ArrayList<ProjectView> selectInterestList(int getmNo) {
		return (ArrayList)sqlSession.selectList("memberMapper.selectInterestList", getmNo);
	}


	public ArrayList<ProjectView> selectOpenList(int getmNo) {
		return (ArrayList)sqlSession.selectList("memberMapper.selectOpenList", getmNo);
	}


	public void updateDate(int getmNo) {
		sqlSession.update("memberMapper.updateDate", getmNo);
	}


	public int toDayVisitor() {
		return sqlSession.selectOne("memberMapper.toDayVisitor");
	}


	public int toDayProject() {
		return sqlSession.selectOne("memberMapper.toDayProject");
	}

	public void updateDateCount() {
		int count = sqlSession.selectOne("memberMapper.selectLog");
		
		if(count == 0) {
			sqlSession.insert("memberMapper.insertDate");
		}
		sqlSession.update("memberMapper.updateDateCount");			
	}


	public int toDayQnA() {
		return sqlSession.selectOne("memberMapper.toDayQnA");
	}


	public ArrayList selectMVisitor() {
		return (ArrayList)sqlSession.selectList("memberMapper.selectMVisitor");
	}


	public ArrayList selectMVisitor2() {
		return (ArrayList)sqlSession.selectList("memberMapper.selectMVisitor2");
	}


	public int requestProject() {
		return sqlSession.selectOne("memberMapper.requestProject");
	}


	public int selectProject() {
		return sqlSession.selectOne("memberMapper.selectProject");
	}


	public int selectEndProject() {
		return sqlSession.selectOne("memberMapper.selectEndProject");
	}


	public ArrayList<CreView> selectCreatorList() {
		return (ArrayList)sqlSession.selectList("memberMapper.selectCreatorList");
	}
}
