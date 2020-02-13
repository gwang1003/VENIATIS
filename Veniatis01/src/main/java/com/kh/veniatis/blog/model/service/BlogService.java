/*package com.kh.veniatis.blog.model.service;

import java.util.ArrayList;

import com.kh.veniatis.blog.model.vo.BlogCate;
import com.kh.veniatis.blog.model.vo.BlogPost;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.common.reply.model.vo.Reply;



public interface BlogService {
	//1. 블로그 포스트 조회
	ArrayList<BlogPost> selectPostList(String userId);
	
	//2. 블로그 카테고리 조회
	ArrayList<BlogCate> selectCateList(String userId);
	
	//3.블로그 내용 조회
	BlogPost selectPostDetail(BlogPost b);
	
	//4.블로그 사진 넣기
	int insertFiles(Files f);
	
	//5.사진중복
	Files fileOverlapTest(String changeName);
	
	//6.블로그 포스트 작성
	int insertPost(BlogPost b);

	//7.썸네일 넣기
	int insertThumb(Files f);
	
	//8. 좋아요 횟수 세오기
	int selectLikeCount(Likes l);
	
	//9. 내가 좋아요 한건지 알아오기
	int selectMyLikes(Likes l);

	//10. 좋아요 넣기
	int insertLikes(Likes l);
	
	//11. 좋아요 지우기
	int deleteLikes(Likes l);
	
	//12. 스크랩할  블로그 정보 갖고오깅
	BlogPost selectScrapPost(Integer bNo);
	
	//13. 스크랩할 썸네일 정보 갖고오기
	Files getScrapThumbPic(Files thumbPic);
	
	//14. 댓글 목록 가져오기
	ArrayList<Reply> selectReplyList(int bId);
	
	// 15. 블로그 댓글 작성
	int insertReply(Reply r);
	
	// 16. 블로그 댓글 삭제
	int deleteReply(Reply r);

	// 17. 카테고리별 갖고오기
	ArrayList<BlogPost> selectCatePostList(BlogPost bp);
	
}
*/