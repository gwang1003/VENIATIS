package com.kh.veniatis.project.creator.model.dao;

import java.util.ArrayList;
import java.util.List;

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
	
		sqlSession.insert("creatorMapper.creatorInsert",c);
		return c.getCreNo();
	}
	public Creator selectCreNo(int creNo) {
		
		
		return sqlSession.selectOne("creatorMapper.selectCreNo", creNo);
	}
	public int projectInsert(Project p) {
		sqlSession.insert("creatorMapper.projectInsert",p);
		return p.getpNo();
	}
	public int projectUpdate(int pNo) {
		
		return sqlSession.update("creatorMapper.projectUpdate",pNo);
	}
	public int projectDelete(int pNo) {
		int creNo = sqlSession.selectOne("creatorMapper.creNoforDel",pNo);
		sqlSession.delete("creatorMapper.CreatorDelete",creNo);
		sqlSession.delete("creatorMapper.deleteFiles",pNo);
		
		return sqlSession.delete("creatorMapper.projectDelete",pNo);
	}

	public int CreatorDelete(int creNo) {
		
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
	public Creator selectCreator(int creNo) {
		
		return sqlSession.selectOne("creatorMapper.selectCreator",creNo);
	}
	public int creatorUpdate(Creator c) {
		
		return sqlSession.update("creatorMapper.updateCreator",c);
	}
	public int selectProjectNo(int creNo) {
		
		return sqlSession.selectOne("creatorMapper.selectProjectNo",creNo);
	}
	public int selectCurCreNo() {
		
		return sqlSession.selectOne("creatorMapper.selectCurCreNo");
	}
	public List<Files> selectFiles(int pNo) {
		
		return sqlSession.selectList("creatorMapper.selectFiles",pNo);
	}
	

}
