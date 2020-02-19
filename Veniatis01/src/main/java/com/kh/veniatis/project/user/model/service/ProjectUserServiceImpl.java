package com.kh.veniatis.project.user.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.user.model.dao.ProjectUserDao;
import com.kh.veniatis.project.user.model.vo.Reward;

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

	@Override
	public ArrayList<Reward> selectRewardList(int pNo) {
		return pud.selectRewardList(pNo);
	}

	/*@Override
	public int selectCreatorNumber(int creNo) {
		// 크리에이터의 유저 넘버 가져오기
		return pud.selectCreatorNumber(creNo);
	}*/

	@Override
	public Member selectCreatorInfo(int creNo) {
		// 크리에이터의 유저 정보 가져오기
		int mNo = pud.selectCreatorNumber(creNo);
		if(mNo == 0) {
			return new Member();
		}else {
			return pud.selectCreatorInfo(mNo);
		}
	}
	
}
