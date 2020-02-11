package com.kh.veniatis.blog.model.service;

import java.util.ArrayList;

import com.kh.veniatis.blog.model.vo.BlogCate;
import com.kh.veniatis.blog.model.vo.BlogPost;
import com.kh.veniatis.blog.model.vo.Files;


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
	
}
