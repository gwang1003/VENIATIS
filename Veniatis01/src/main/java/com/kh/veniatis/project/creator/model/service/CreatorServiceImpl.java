package com.kh.veniatis.project.creator.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.project.creator.model.dao.CreatorDao;
import com.kh.veniatis.project.creator.model.vo.Creator;
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
	public Creator selectCreNo(Creator c) {
		
		return cDao.selectCreNo(c);
	}

	@Override
	public int projectInsert(Project p) {
		// TODO Auto-generated method stub
		return cDao.projectInsert(p);
	}

	@Override
	public int projectUpdate(int pNo) {
		// TODO Auto-generated method stub
		return cDao.projectUpdate(pNo);
	}

	@Override
	public int projectDelete(int pNo) {
		// TODO Auto-generated method stub
		return cDao.projectDelete(pNo);
	}

	@Override
	public int creatorUpdate(int creNo) {
		// TODO Auto-generated method stub
		return cDao.creatorUpdate(creNo);
	}

	@Override
	public int creatorDelete(int creNo) {
		// TODO Auto-generated method stub
		return cDao.CreatorDelete(creNo);
	}

	@Override
	public Project selectOneProject(Project p) {
		// TODO Auto-generated method stub
		return cDao.selectOneProject(p);
	}

	@Override
	public int pPhotoInsert(ArrayList<Files> files) {
		// TODO Auto-generated method stub
		return cDao.pPhotoInsert(files);
	}

	@Override
	public int rewardInsert(ArrayList<Reward> rewardInsertList) {
		
		return cDao.rewardInsert(rewardInsertList);
	}

	@Override
	public Project selectProject(Integer pNo) {
		// TODO Auto-generated method stub
		return cDao.selectOneProject(pNo);
	}

	@Override
	public int finishProject(Project project) {
		// TODO Auto-generated method stub
		return cDao.finishProject(project);
	}



	
}
