 package com.kh.veniatis.blog.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.veniatis.blog.model.dao.BlogDao;
import com.kh.veniatis.blog.model.vo.BlogAlert;
import com.kh.veniatis.blog.model.vo.BlogCate;
import com.kh.veniatis.blog.model.vo.BlogPagination;
import com.kh.veniatis.blog.model.vo.BlogPost;
import com.kh.veniatis.blog.model.vo.PageInfo;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.common.reply.model.vo.Reply;

@Service("bService")
public class BlogServiceImpl implements BlogService{
	@Autowired
	BlogDao bDao;

	//신규회원 카테고리 만들기
	@Override
	public int insertNewCate(String userId) {
		// TODO Auto-generated method stub
		return bDao.insertNewCate(userId);
	}
	
	//블로그 글 목록 조회
	@Override
	public ArrayList<BlogPost> selectPostList(String userId, int currentPage) {
		int listCount = bDao.getListCount(userId);
		System.out.println(listCount);
		PageInfo pi = BlogPagination.getPageInfo(currentPage, listCount);
		
		
		return bDao.selectPostList(userId, pi);
	}
	 
	// 블로그  카테고리 조회
	@Override
	public ArrayList<BlogCate> selectCateList(String userId) {
		return bDao.selectCateList(userId);
	}

	//블로그 내용 조회
	@Override
	public BlogPost selectPostDetail(BlogPost b) {
		// TODO Auto-generated method stub
		return bDao.selectPostDetail(b);
	}
	
	//블로그 사진 넣기
	@Override
	public int insertFiles(Files f) {
		return bDao.insertFile(f);
	}

	//중복확인
	@Override
	public Files fileOverlapTest(String changeName) {
		// TODO Auto-generated method stub
		return bDao.fileOverlapTest(changeName);
	}

	//블로그 넣기
	@Override
	public int insertPost(BlogPost b) {
		
		return bDao.insertPost(b);
	}
	
	//썸네일 넣기
	@Override
	public int insertThumb(Files f) {
		return bDao.insertThumb(f);
	}
	
	// 좋아요 횟수 가져오기
	@Override
	public int selectLikeCount(Likes l) {
		// TODO Auto-generated method stub
		return bDao.selectLikeCount(l);
	}
	
	//내가 좋아요 한건지 알아오기
	@Override
	public int selectMyLikes(Likes l) {
		// TODO Auto-generated method stub
		return bDao.selectMyLikes(l);
	}

	///좋아요 넣기
	public int insertLikes(Likes l) {
		// TODO Auto-generated method stub
		return bDao.insertLikes(l);
	}
	
	// 좋아요 지우기
	@Override
	public int deleteLikes(Likes l) {
		// TODO Auto-generated method stub
		return bDao.deleteLikes(l);
	}


	// 스크랩할 블로그 글 정보 갖고오기
	@Override
	public BlogPost selectScrapPost(Integer bNo) {
		// TODO Auto-generated method stub
		return bDao.selectScrapPost(bNo);
	}
	
	//스크랩할 썸네일 사진 정보 갖고오기
	@Override
	public Files getScrapThumbPic(Files thumbPic) {
		return bDao.getScrapThumbPic(thumbPic);
	}
	
	//댓글 목록 갖고오기
	@Override
	public ArrayList<Reply> selectReplyList(int bId) {
		// TODO Auto-generated method stub
		return bDao.getReplyList(bId);
	}
	
	//블로그 댓글 작성
	@Override
	public int insertReply(Reply r) {
		// TODO Auto-generated method stub
		return bDao.insertReply(r);
	}
	
	// 블로그 댓글 삭제
	@Override
	public int deleteReply(Reply r) {
		// TODO Auto-generated method stub
		return bDao.deleteReply(r);
	}
	
	//카테고리별 갖고오기
	@Override
	public ArrayList<BlogPost> selectCatePostList(BlogPost bp) {
		// TODO Auto-generated method stub
		return bDao.selectCatePostList(bp);
	}
	
	//검색
	@Override
	public ArrayList<BlogPost> searchPostList(BlogPost search) {
		// TODO Auto-generated method stub
		return bDao.searchPostList(search);
	}
	
	///인기게시글갖고오기
	@Override
	public ArrayList<BlogPost> selectPopularList() {
		// TODO Auto-generated method stub
		return bDao.selectPopularList();
	}
	///인기게시글갖고오기
	@Override
	public ArrayList<BlogPost> selectPopularRealList(ArrayList<BlogPost> post) {
		// TODO Auto-generated method stub
		return  (ArrayList<BlogPost>)bDao.selectPopularRealList(post);
	}

	//21. 해시태그를위한 블로그 전체목록
	@Override
	public ArrayList<BlogPost> selectPostList(String userId) {
		// TODO Auto-generated method stub
		return (ArrayList<BlogPost>)bDao.selectPostList(userId);
	}

	
	//22.카테고리 추가
	@Override
	public int plusCate(BlogCate newCate) {
		// TODO Auto-generated method stub
		return bDao.plusCate(newCate);
	}
	
	// 23. 카테고리 수정
	@Override
	public int updateCate(BlogCate upCate) {
		// TODO Auto-generated method stub
		return bDao.updateCate(upCate);
	}
	
	// 24. 카테고리 삭제 - 글 전체 삭제
	@Override
	public int cDeletePost(Integer cateNo) {
		// TODO Auto-generated method stub
		return bDao.cDeletePost(cateNo);
	}
	
	// 25. 카테고리 삭제 - 카테고리 삭제
	@Override
	public int cDeleteCate(Integer cateNo) {
		return bDao.cDeleteCate(cateNo);
	}
	
	//26. 글삭
	@Override
	public int badminPostDelete(int[] arr) {
		// TODO Auto-generated method stub
		return bDao.adminDeletePost(arr);
	}
	
	//27. 카테이동
	@Override
	public int badminPostMove(ArrayList<BlogPost> moveList) {
		// TODO Auto-generated method stub
		return bDao.adminPostMove(moveList);
	}
	
	//28. 태그별 리스트 갖고오기
	@Override
	public ArrayList<BlogPost> selectTagPost(BlogPost bp) {
		// TODO Auto-generated method stub
		return bDao.selectTagPost(bp);
	}
	
	// 29 . 알림=댓글알람
	@Override
	public int alertReply(BlogAlert ba) {
		// TODO Auto-generated method stub
		return bDao.alertReply(ba);
	}

	// 30.알림=좋아요알람
	@Override
	public int alertHeart(BlogAlert ba) {
		// TODO Auto-generated method stub
		return bDao.alertHeart(ba);
	}


	// 31. 알림 정보 가져오기
	@Override
	public ArrayList<BlogAlert> selectAlertList(int mNo) {
		// TODO Auto-generated method stub
		return bDao.selectAlertList(mNo);
	}
	
	// 32. 알림삭제
	@Override
	public int deleteAlert(int baNo) {
		// TODO Auto-generated method stub
		return bDao.deleteAlert(baNo);
	}
	

	

}
