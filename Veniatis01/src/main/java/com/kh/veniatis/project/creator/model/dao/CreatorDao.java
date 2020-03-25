package com.kh.veniatis.project.creator.model.dao;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.PNotice;
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
	
	public int projectUpdate(Project p) {
		sqlSession.update("creatorMapper.projectUpdate",p);
		return p.getpNo();
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

		return sqlSession.selectOne("creatorMapper.selectOneProject", p);
	}
	
	public int pPhotoInsert(ArrayList<Files> files) {
		int result = 0;
		sqlSession.insert("creatorMapper.pPhotoMainInsert",files.get(0));
		for(int i=1;i<=files.size()-1;i++) {
	
			result = sqlSession.insert("creatorMapper.pPhotoInsert",files.get(i));
		
		}
		
		return result;
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
	public int pPhotoUpdate(ArrayList<Files> files) {
	
		
		
				
		
		sqlSession.delete("creatorMapper.deleteFiles", files.get(0).getpNo());
		
		
		int result = 0;
		sqlSession.insert("creatorMapper.pPhotoMainInsert",files.get(0));
		for(int i=1;i<=files.size()-1;i++) {
	
			result = sqlSession.insert("creatorMapper.pPhotoInsert",files.get(i));
		
		}
		
	
		
		
		return result;
	
	

}
	public int fileDelete(int fileNo) {
		
		return sqlSession.delete("creatorMapper.deleteFile",fileNo);
	}
	public int pNoticeInsert(PNotice pn) {
		
		return sqlSession.insert("creatorMapper.pNoticeInsert",pn);
	}
	public List<Reward> rewardSelect(String pNo) {
		
		return sqlSession.selectList("creatorMapper.rewardSelect",pNo);
	}
	public int rewardUpdate(ArrayList<Reward> rewardUpdateList) {
		
		int pNo = rewardUpdateList.get(0).getpNo();
		List<Reward> oldList = sqlSession.selectList("creatorMapper.rewardSelect",pNo);
		for(int i=0;i<oldList.size();i++) {
			sqlSession.delete("creatorMapper.deleteReward",oldList.get(i));
		}
		
		int num = 0;
		for(int i=0;i<rewardUpdateList.size();i++) {
			System.out.println(rewardUpdateList.get(i));
			num = sqlSession.insert("creatorMapper.rewardInsert",rewardUpdateList.get(i));
		}
		
		return num;
	}
	public List<PNotice> selectPnoticeLiist(int pNo) {
		
		return sqlSession.selectList("creatorMapper.pnoticeSelect",pNo);
	}
	public int deletepNotice(int pnNo) {
		
		return sqlSession.delete("creatorMapper.pnoticeDelete",pnNo);
	}
	public int finishProjectUpdate(Project project) {
		
		return sqlSession.update("creatorMapper.finishProjectUpdate",project);
	}
	
}
