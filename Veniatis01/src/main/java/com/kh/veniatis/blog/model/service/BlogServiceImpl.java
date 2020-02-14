 package com.kh.veniatis.blog.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.veniatis.blog.model.dao.BlogDao;
import com.kh.veniatis.blog.model.vo.BlogCate;
import com.kh.veniatis.blog.model.vo.BlogPost;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.common.reply.model.vo.Reply;

@Service("bService")
public class BlogServiceImpl implements BlogService{
	@Autowired
	BlogDao bDao;
	//블로그 글 목록 조회
	@Override
	public ArrayList<BlogPost> selectPostList(String userId) {
		return bDao.selectPostList(userId);
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
	

}
