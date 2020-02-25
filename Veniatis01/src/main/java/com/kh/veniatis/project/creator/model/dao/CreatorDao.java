package com.kh.veniatis.project.creator.model.dao;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.creator.model.vo.Reward;

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
	public int projectInsert(Project p) {
		// TODO Auto-generated method stub
		return sqlSession.insert("creatorMapper.projectInsert",p);
	}
	public int projectUpdate(int pNo) {
		
		return sqlSession.update("creatorMapper.projectUpdate",pNo);
	}
	public int projectDelete(int pNo) {
		
		return sqlSession.delete("creatorMapper.projectDelete",pNo);
	}
	public int creatorUpdate(int creNo) {
		// TODO Auto-generated method stub
		return sqlSession.update("creatorMapper.creatorUpdate",creNo);
	}
	public int CreatorDelete(int creNo) {
		// TODO Auto-generated method stub
		return sqlSession.delete("creatorMapper.creatorDelete",creNo);
	}
	public Project selectOneProject(Project p) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("creatorMapper.selectOneProject", p);
	}
	public int pPhotoInsert(ArrayList<Files> files) {
		
		for(int i=1;i<=files.size()-1;i++) {
			System.out.println(files.get(i));
			sqlSession.insert("creatorMapper.pPhotoInsert",files.get(i));
		
		}
		
		return sqlSession.insert("creatorMapper.pPhotoMainInsert",files.get(0));
	}
	public int rewardInsert(ArrayList<Reward> rewardInsertList) {
		int num = 0;
		for(int i=0;i<rewardInsertList.size();i++) {
			System.out.println(rewardInsertList.get(i));
			num = sqlSession.insert("creatorMapper.rewardInsert",rewardInsertList.get(i));
		}
		
		return num;
	}
	public Project selectOneProject(Integer pNo) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("creatorMapper.selectProject",pNo);
	}
	public int finishProject(Project project) {
		
		return sqlSession.update("creatorMapper.finishProject",project);
	}
	

}
