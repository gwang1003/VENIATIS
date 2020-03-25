package com.kh.veniatis.project.creator.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.veniatis.project.creator.model.dao.CreatorDao;
import com.kh.veniatis.project.creator.model.dao.StartUpDao;
import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.Project;
@Service("sService")
public class StartUpServiceImpl implements StartUpService {

	@Autowired
	private CreatorDao cDao;
	
	@Autowired
	private StartUpDao sDao;
	
	@Override
	public int startUpCreatorInsert(Creator c) {
		
		return sDao.startUpCreatorInsert(c);
	}

	@Override
	public int startUpprojectInsert(Project p) {
		
		return sDao.startUpprojectInsert(p);
	}
	

}
