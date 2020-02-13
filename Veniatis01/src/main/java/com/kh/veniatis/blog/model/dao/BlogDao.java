/*package com.kh.veniatis.blog.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.blog.model.vo.BlogCate;
import com.kh.veniatis.blog.model.vo.BlogPost;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.common.reply.model.vo.Reply;
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
	// ▶좋아요
	// 좋아요 횟수 가져오기
	public int selectLikeCount(Likes l) {
		
		return sqlSession.selectOne("likesMapper.selectLikeCount",l);
	}
	
	//내가넣었는지확인! 넣엇음1 안넣엇음0
	public int selectMyLikes(Likes l) {
		return sqlSession.selectOne("likesMapper.selectMyLikes",l);
	}

	public int insertLikes(Likes l) {
		return sqlSession.insert("likesMapper.insertLikes", l);
	}
	
	public int deleteLikes(Likes l) {
		return sqlSession.insert("likesMapper.deleteLikes", l);
	}
	
	// ▶스크랩
	//스크랩할 블로그 글 정보 갖고오기
	public BlogPost selectScrapPost(Integer bNo) {
		return sqlSession.selectOne("blogMapper.selectScrapPost",bNo);
	}

	//스크랩할 썸네일 정보 갖고오기
	public Files getScrapThumbPic(Files thumbPic) {
		return sqlSession.selectOne("filesMapper.getScrapThumbPic",thumbPic);
	}
	
	// 댓글 리스트 갖고오기
	public ArrayList<Reply> getReplyList(int bId) {
		int bNo= bId;
		return (ArrayList)sqlSession.selectList("replyMapper.getReplyList",bNo);
	}
	
	
	// 댓넣기
	public int insertReply(Reply r) {
		return sqlSession.insert("replyMapper.insertReply", r);
	}
	
	//댓삭
	public int deleteReply(Reply r) {
		return sqlSession.update("replyMapper.blogDeleteReply",r);
	}

	public ArrayList<BlogPost> selectCatePostList(BlogPost bp) {
		// TODO Auto-generated method stub
		return (ArrayList)sqlSession.selectList("blogMapper.selectCatePostList",bp);
	}
	
}
*/