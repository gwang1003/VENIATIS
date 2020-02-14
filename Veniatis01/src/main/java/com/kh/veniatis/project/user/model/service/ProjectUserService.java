package com.kh.veniatis.project.user.model.service;

import java.util.ArrayList;

import com.kh.veniatis.project.creator.model.vo.Project;

public interface ProjectUserService {
	
	// 프로젝트 리스트 조회
	ArrayList<Project> selectList(int currentPage);

	// 프로젝트 1개 선택
	Project selectProject(int pNo);
	
	// 리워드 목록 조회(프로젝트 번호)
	
	// 후원하기(insert)
	
	
	
}
