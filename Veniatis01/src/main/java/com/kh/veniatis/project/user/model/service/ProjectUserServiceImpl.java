package com.kh.veniatis.project.user.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.user.model.dao.ProjectUserDao;

@Service("pus")
public class ProjectUserServiceImpl implements ProjectUserService {
	@Autowired
	ProjectUserDao pud;
	
	@Override
	public ArrayList<Project> selectList(int currentPage) {
		return pud.selectList();
	}

	@Override
	public Project selectProject(int pNo) {
		return pud.selectBoard(pNo);
	}
	
}
