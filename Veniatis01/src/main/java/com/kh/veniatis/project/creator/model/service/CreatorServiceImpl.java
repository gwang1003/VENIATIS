package com.kh.veniatis.project.creator.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.veniatis.project.creator.model.dao.CreatorDao;
import com.kh.veniatis.project.creator.model.vo.Creator;

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

	

	
}
