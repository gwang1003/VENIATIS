package com.kh.veniatis.project.creator.model.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.project.creator.model.dao.CreatorDao;
import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.PNotice;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.creator.model.vo.Reward;

@Service("cService")
public class CreatorServiceImpl implements CreatorService {

	@Autowired
	private CreatorDao cDao;
	
	@Override
	public int creatorInsert(Creator c) {
		
		return cDao.CreatorInsert(c);
	}

	@Override
	public Creator selectCreNo(int creNo) {
		
		return cDao.selectCreNo(creNo);
	}

	@Override
	public int projectInsert(Project p) {
		return cDao.projectInsert(p);
	}


	@Override
	public int projectDelete(int pNo) {
	
		return cDao.projectDelete(pNo);
	}


	@Override
	public int creatorDelete(int creNo) {
	
		return cDao.CreatorDelete(creNo);
	}

	@Override
	public Project selectOneProject(Project p) {
		
		return cDao.selectOneProject(p);
	}

	@Override
	public int pPhotoInsert(ArrayList<Files> files) {
	
		return cDao.pPhotoInsert(files);
	}

	@Override
	public int rewardInsert(ArrayList<Reward> rewardInsertList) {
		
		return cDao.rewardInsert(rewardInsertList);
	}

	@Override
	public Project selectProject(Integer pNo) {
		
		return cDao.selectOneProject(pNo);
	}

	@Override
	public int finishProject(Project project) {
		
		return cDao.finishProject(project);
	}

	@Override
	public Creator selectCreator(int creNo) {
	
		return cDao.selectCreator(creNo);
	}

	@Override
	public int creatorUpdate(Creator c) {
		
		return cDao.creatorUpdate(c);
	}

	@Override
	public int selectProjectNo(int creNo) {
		return cDao.selectProjectNo(creNo);
	}

	@Override
	public int selectCurCreNo() {

		return cDao.selectCurCreNo();
	}

	@Override
	public List<Files> selectFiles(int pNo) {
		
		return cDao.selectFiles(pNo);
	}

	@Override
	public int projectUpdate(Project p) {
	
		return cDao.projectUpdate(p);
	}

	@Override
	public int pPhotoUpdate(ArrayList<Files> files) {
		
		return cDao.pPhotoUpdate(files);
	}

	@Override
	public int fileDelete(int fileNo) {
		
		return cDao.fileDelete(fileNo);
	}

	@Override
	public int pNoticeInsert(PNotice pn) {
	
		return cDao.pNoticeInsert(pn);
	}

	@Override
	public List<Reward> selectReward(String pNo) {
		
		return cDao.rewardSelect(pNo);
	}

	@Override
	public int rewardUpdate(ArrayList<Reward> rewardUpdateList) {
		
		return cDao.rewardUpdate(rewardUpdateList);
	}

	




	
}
