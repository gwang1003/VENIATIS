package com.kh.veniatis.project.user.model.service;

import java.util.ArrayList;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.reply.model.vo.Reply;
import com.kh.veniatis.member.model.vo.Member;
import com.kh.veniatis.project.creator.model.vo.PNotice;
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

	// 프로젝트 사진 파일 가져오기
	ArrayList<Files> selectFileList(int pNo);

	// 프로젝트 qna 댓글 목록 가져오기
	//ArrayList<Reply> selectReplyList(int pNo);

	// 프로젝트 qna 댓글 등록
	//int insertReply(Reply r);

	// 최근 소식 가져오기
	//ArrayList<PNotice> selectPNoticeList(int pNo);
	
	// 후원하기(insert)
	//int insertSupport(Support s);
		
}
