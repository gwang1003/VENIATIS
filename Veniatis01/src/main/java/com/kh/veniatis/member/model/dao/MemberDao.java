package com.kh.veniatis.member.model.dao;

import java.util.ArrayList;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.blog.model.vo.Compet;
import com.kh.veniatis.common.PageInfo;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.member.model.vo.CreView;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.member.model.vo.ProjectTotal;
import com.kh.veniatis.member.model.vo.QnA;
import com.kh.veniatis.member.model.vo.Revenue;
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
	
	public ArrayList<ProjectView> selectAttend(PageInfo pi, Map map) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		System.out.println("참여프로젝트 맞는데");
		return (ArrayList)sqlSession.selectList("memberMapper.selectAttend", map, rowBounds);
	}


	public ArrayList<ProjectView> myInterestProject(PageInfo pi, Map map) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("memberMapper.myInterestProject", map, rowBounds);
	}


	public int attendListCount(Map map) {
		return sqlSession.selectOne("memberMapper.attendListCount", map);
	}


	public int openListCount(Map map) {
		return sqlSession.selectOne("memberMapper.openListCount", map);
	}


	public int interestListCount(Map map) {
		return sqlSession.selectOne("memberMapper.interestListCount", map);
	}


	public ArrayList<ProjectView> selectAttendList(int getmNo) {
		return (ArrayList)sqlSession.selectList("memberMapper.selectAttendList", getmNo);
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


	public ArrayList<ProjectView> selectOkProject() {
		return (ArrayList)sqlSession.selectList("memberMapper.selectOkProject");
	}


	public ArrayList<ProjectView> selectProjectList() {
		return (ArrayList)sqlSession.selectList("memberMapper.selectProjectList");
	}


	public int competitionInsert(Compet c) {
		return sqlSession.insert("memberMapper.competitionInsert", c);
	}


	public Compet selectOneCompet(String conName) {
		return sqlSession.selectOne("memberMapper.selectOneCompet", conName);
	}


	public int conPhotoInsert(Files files) {
		return sqlSession.insert("memberMapper.conPhotoInsert", files);
	}


	public ArrayList<QnA> selectQAList() {
		return (ArrayList)sqlSession.selectList("memberMapper.selectQAList");
	}


	public int okProject(int pNo) {
		return sqlSession.update("memberMapper.okProject", pNo);
	}


	public ArrayList<Member> selectSearchMember(Map map) {
		return (ArrayList)sqlSession.selectList("memberMapper.selectSearchMember", map);
	}


	public ArrayList<CreView> selectSearchCreator(Map map) {
		return (ArrayList)sqlSession.selectList("memberMapper.selectSearchCreator", map);
	}


	public ArrayList<ProjectView> selectSearchProject(Map map) {
		return (ArrayList)sqlSession.selectList("memberMapper.selectSearchProject", map);
	}


	public int deleteCon(int[] conNumber) {
		int result = 0;
		for(int i = 0; i < conNumber.length; i++) {
			int no = conNumber[i];
			result = sqlSession.update("memberMapper.deleteCon", no);
		}
		return result;
	}


	public ArrayList<Compet> competList() {
		return (ArrayList)sqlSession.selectList("memberMapper.competList");
	}


	public ArrayList<Member> toDayMemberList() {
		return (ArrayList)sqlSession.selectList("memberMapper.toDayMemberList");
	}


	public ArrayList<Member> toDayProjectList() {
		return (ArrayList)sqlSession.selectList("memberMapper.toDayProjectList");
	}


	public ArrayList<Member> toDayQnAList() {
		return (ArrayList)sqlSession.selectList("memberMapper.toDayQnAList");
	}


	public Member idFind(Member m) {
		return sqlSession.selectOne("memberMapper.idFind", m);
	}


	public Member passFind(Member m) {
		return sqlSession.selectOne("memberMapper.passFind", m);
	}


	public int fakePwd(Member member) {
		return sqlSession.update("memberMapper.fakePwd", member);
	}


	public ArrayList<QnA> QnAList(int getmNo) {
		return (ArrayList)sqlSession.selectList("memberMapper.QnAList", getmNo);
	}


	public QnA QnADetail(int qNo) {
		return sqlSession.selectOne("memberMapper.QnADetail", qNo);
	}


	public int QnADelete(int qNo) {
		return sqlSession.delete("memberMapper.QnADelete", qNo);
	}


	public int insertAnswer(QnA QnA) {
		return sqlSession.update("memberMapper.insertAnswer", QnA);
	}


	public ArrayList<Project> projectList(Map map) {
		return (ArrayList)sqlSession.selectList("memberMapper.projectList", map);
	}


	public ArrayList<Revenue> revenue(Map map) {
		return (ArrayList)sqlSession.selectList("memberMapper.revenue", map);
	}


	public ArrayList<ProjectTotal> pTotalList() {
		return (ArrayList)sqlSession.selectList("memberMapper.pTotalList");
	}


	public ArrayList<ProjectTotal> pTotalSuccessList() {
		return (ArrayList)sqlSession.selectList("memberMapper.pTotalSuccessList");
	}


	public ArrayList<ProjectTotal> pSoloList() {
		return (ArrayList)sqlSession.selectList("memberMapper.pSoloList");
	}


	public ArrayList<ProjectTotal> pSoloSuccessList() {
		return (ArrayList)sqlSession.selectList("memberMapper.pSoloSuccessList");
	}


	public ArrayList<ProjectTotal> pCompanyList() {
		return (ArrayList)sqlSession.selectList("memberMapper.pCompanyList");
	}


	public ArrayList<ProjectTotal> pCompanySuccessList() {
		return (ArrayList)sqlSession.selectList("memberMapper.pCompanySuccessList");
	}
}
