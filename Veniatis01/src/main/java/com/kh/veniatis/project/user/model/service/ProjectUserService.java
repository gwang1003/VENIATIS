package com.kh.veniatis.project.user.model.service;

import java.util.ArrayList;

import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.creator.model.vo.Reward;
import com.kh.veniatis.project.user.model.vo.ProjectView;

public interface ProjectUserService {
	
	// 프로젝트 리스트 조회
	ArrayList<ProjectView> selectList(int currentPage);

	// 프로젝트 1개 선택
	ProjectView selectProject(int pNo);
	
	// 리워드 목록 조회(프로젝트 번호)
	ArrayList<Reward> selectRewardList(int pNo);

	// 크리에이터 정보 가져오기
	//int selectCreatorNumber(int creNo);
	//Member selectCreatorInfo(int mNo);
	Member selectCreatorInfo(int creNo);

	// 최근 소식 가져오기
	
	
	
	// 후원하기(insert)
	
		
}
