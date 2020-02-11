package com.kh.veniatis.blog.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis0.blog.model.vo.BlogCate;
import com.kh.veniatis0.blog.model.vo.BlogPost;
import com.kh.veniatis0.blog.model.vo.Files;

@Repository("bDao") 
public class BlogDao {
	@Autowired
	SqlSessionTemplate sqlSession;

	//포스트 목록  갖고오기
	public ArrayList<BlogPost> selectPostList(String mId) {
		return (ArrayList)sqlSession.selectList("blogMapper.selectPostList2",mId);
	}
	
	//카테고리목록 갖고오기
	public ArrayList<BlogCate> selectCateList(String mId) {
		return (ArrayList)sqlSession.selectList("blogMapper.selectCateList",mId);
	}
	
	//내용 갖고오기
	public BlogPost selectPostDetail(BlogPost b) {
		return sqlSession.selectOne("blogMapper.selectPostDetail", b);
	}

	//사진넣기
	public int insertFile(Files f) {
		return sqlSession.insert("filesMapper.insertPostFile", f);
	}
	
	//글쓰기
	public int insertPost(BlogPost b) {
		int uniNo=0;
		String mId=b.getmId();
		
		//처음들어간건지 아닌지 판별하기위해 리스트갖고온다
		ArrayList<BlogPost> bp= (ArrayList)sqlSession.selectList("blogMapper.selectPostList2",mId);
		
		if(bp.isEmpty()) {
			//만약 리스트가 비어있으면 첫 글이므로 1넣어줌
			b.setUniNo(1);
			
		}else {
			// MAX UNINO갖고와서 1더하고 넣어줌
			uniNo=sqlSession.selectOne("blogMapper.selectUniNo",b);
			int uniNo2=uniNo+1;
			b.setUniNo(uniNo2);
		}
		
		return sqlSession.insert("blogMapper.insertPost", b);
	}
	
	//중복확인
	public Files fileOverlapTest(String changeName) {
		return sqlSession.selectOne("filesMapper.fileOverlapTest", changeName);
	}

	public int insertThumb(Files f) {
		return sqlSession.insert("filesMapper.insertThumb", f);
	}
	
	
	
}
