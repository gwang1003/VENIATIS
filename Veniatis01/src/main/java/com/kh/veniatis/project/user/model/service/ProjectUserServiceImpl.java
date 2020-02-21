package com.kh.veniatis.project.user.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.veniatis.blog.model.vo.PageInfo;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.reply.model.vo.Reply;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.project.creator.model.vo.PNotice;
import com.kh.veniatis.project.creator.model.vo.Reward;
import com.kh.veniatis.project.user.model.dao.ProjectUserDao;
import com.kh.veniatis.project.user.model.vo.ProjectPagination;
import com.kh.veniatis.project.user.model.vo.ProjectView;

@Service("pus")
public class ProjectUserServiceImpl implements ProjectUserService {
	@Autowired
	ProjectUserDao pud;
	
	@Override
	public ArrayList<ProjectView> selectList(int currentPage) {
		// 1. 게시글 개수 조회
		int listCount = pud.getListCount();
		
		// 페이지 정보 저장
		PageInfo pi = ProjectPagination.getPageInfo(currentPage, listCount);
		
		return pud.selectList(pi);
	}

	@Override
	public ProjectView selectProject(int pNo) {
		return pud.selectProject(pNo);
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

	@Override
	public ArrayList<Files> selectFileList(int pNo) {
		// 사진 파일 가져오기
		return pud.selectFileList(pNo);
	}
	/*
	@Override
	public ArrayList<Reply> selectReplyList(int pNo) {
		// 프로젝트 qna 댓글 목록 가져오기
		return pud.selectReplyList(pNo);
	}

	@Override
	public int insertReply(Reply r) {
		// 프로젝트 qna 댓글 등록
		return pud.insertReply(r);
	}*/

	// 최근 소식 가져오기
	
}
