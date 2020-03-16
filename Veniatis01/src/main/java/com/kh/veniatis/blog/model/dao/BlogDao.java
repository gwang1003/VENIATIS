package com.kh.veniatis.blog.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.veniatis.blog.model.vo.BlogAlert;
import com.kh.veniatis.blog.model.vo.BlogCate;
import com.kh.veniatis.blog.model.vo.BlogDetail;
import com.kh.veniatis.blog.model.vo.BlogPost;
import com.kh.veniatis.blog.model.vo.BlogSub;
import com.kh.veniatis.blog.model.vo.Compet;
import com.kh.veniatis.blog.model.vo.PageInfo;
import com.kh.veniatis.blog.model.vo.ReReply;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.common.reply.model.vo.Reply;
import com.kh.veniatis.member.model.vo.Member;
@Repository("bDao") 
public class BlogDao {
	@Autowired
	SqlSessionTemplate sqlSession;

	//신규회원 카테고리 넣기
	public int insertNewCate(String mId) {
		// TODO Auto-generated method stub
		return sqlSession.insert("blogMapper.insertNewCate",mId);
	}
	
	
	public int getListCount(String userId) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("blogMapper.getListCount",userId);
	}
	
	//포스트 목록  갖고오기
	public ArrayList<BlogPost> selectPostList(String mId, PageInfo pi) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		
		return (ArrayList)sqlSession.selectList("blogMapper.selectPostList2",mId,rowBounds);
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
	
		//-----------------------------------------------------------------------------------
	// 서치
	public ArrayList<BlogPost> searchPostList(BlogPost search) {
		// TODO Auto-generated method stub
		return (ArrayList)sqlSession.selectList("blogMapper.searchPostList",search);
	}
	
	//인기게시글 갖고오깅
	public ArrayList<BlogPost> selectPopularList() {
		// TODO Auto-generated method stub
		return (ArrayList)sqlSession.selectList("blogMapper.popSelect1");
	}

	public ArrayList<BlogPost> selectPopularRealList(ArrayList<BlogPost> post) {
		// TODO Auto-generated method stub
		ArrayList<BlogPost> bp = new ArrayList<BlogPost>() ;

		for(int i=0; i<post.size(); i++) {
			int bNo=post.get(i).getbNo();
			bp.add(sqlSession.selectOne("blogMapper.popSelect2",bNo));
		}
		return bp;
	}

	public ArrayList<BlogPost> selectPostList(String mId) {
		// TODO Auto-generated method stub
		return (ArrayList)sqlSession.selectList("blogMapper.selectPList",mId);
	}

	
	//카테고리 추가
	public int plusCate(BlogCate newCate) {
		// TODO Auto-generated method stub
		return sqlSession.insert("blogMapper.plusCate",newCate);
	}

	
	//카테고리 이름 수정
	public int updateCate(BlogCate upCate) {
		// TODO Auto-generated method stub
		return sqlSession.update("blogMapper.updateCate",upCate);
	}

	
	//카테고리 삭제 - 글 전체 삭제
	public int cDeletePost(Integer cateNo) {
		return sqlSession.update("blogMapper.cDeletePost",cateNo);
	}

	
	// 카테고리 삭제 - 카테고리 제거
	public int cDeleteCate(Integer cateNo) {
		// TODO Auto-generated method stub
		return sqlSession.update("blogMapper.cDeleteCate",cateNo);
	}

	// 글삭
	public int adminDeletePost(int[] arr) {
		int ad=0;
		for(int i=0; i<arr.length; i++) {
			int bNo= arr[i];
			ad=sqlSession.update("blogMapper.adminDeletePost",bNo);
		}

		return ad;
	}

	// 카테이동
	public int adminPostMove(ArrayList<BlogPost> moveList) {
		
		int ad=0;
		for(int i=0; i<moveList.size();i++) {
			ad = sqlSession.update("blogMapper.adminPostMove",moveList.get(i));
		}

		return ad;
	}

	// 태그별 포스트 갖고오기
	public ArrayList<BlogPost> selectTagPost(BlogPost bp) {
		return (ArrayList)sqlSession.selectList("blogMapper.selectTagPost",bp);
	}

	// 알림-댓글알ㅇ람
	public int alertReply(BlogAlert ba) {
		return sqlSession.insert("blogMapper.insertAlertReply",ba);
		
	}

	// 알림-좋아요 알람
	public int alertHeart(BlogAlert ba) {
		return sqlSession.insert("blogMapper.insertAlertHeart",ba);
	}
	
	
	// 알림 정보 가져오기
	public ArrayList<BlogAlert> selectAlertList(int mNo, PageInfo pi) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("blogMapper.selectAlertList",mNo,rowBounds);
	}

	// 알림삭제
	public int deleteAlert(int baNo) {
		// TODO Auto-generated method stub
		return sqlSession.update("blogMapper.deleteAlert",baNo);
	}

	
	
	
	// 블로그 디테일 알아오기(블로그 첨인가 아닌가)
	public BlogDetail selectBlogDetail(int mNo) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("blogMapper.selectBlogDetail", mNo);
	}

	
	// 블로그 만들기(첨일때)
	public int insertBlogDetail(Member m) {
		// TODO Auto-generated method stub
		return sqlSession.insert("blogMapper.insertBlogDetail",m);
	}

	// 블로그 기본정보 수정
	public int updateBlogDetail(BlogDetail bd) {
		// TODO Auto-generated method stub
		return sqlSession.update("blogMapper.updateBlogDetail",bd);
	}

	
	//블로그 css 수정
	public int updateBlogCss(BlogDetail bd) {
		// TODO Auto-generated method stub
		return sqlSession.update("blogMapper.updateBlogCss",bd);
	}

	// 구독 블로거 목록 갖고오기
	public ArrayList<BlogSub> selectSubList(String mId) {
		// TODO Auto-generated method stub
		return (ArrayList)sqlSession.selectList("blogMapper.selectSubList",mId);
	}

	// 구독 블로거들의 글 목록 갖고오기(오늘부터 7일차만(
	public ArrayList<BlogPost> subPostList(ArrayList<BlogSub> subList) {
		
		ArrayList<BlogPost> list = new ArrayList<BlogPost>();
		
		for(int i=0; i<subList.size();i++) {
			String mId= subList.get(i).getSubId();
			
			ArrayList<BlogPost> blist = new ArrayList<BlogPost>();
			blist=(ArrayList)sqlSession.selectList("blogMapper.subPostList",mId);
			
			for(int k=0; k<blist.size();k++) {
				list.add(blist.get(k));
			}
		}
		
		
		return list;
	}

	
	// 구독 추가
	public int subPlus(BlogSub bs) {
		return sqlSession.insert("blogMapper.subPlus",bs);
	}
	
	// 구독취소
	public int subDelete(BlogSub bs) {
		// TODO Auto-generated method stub
		return sqlSession.update("blogMapper.subDelete",bs);
	}

	// 관리 - 내 구독리스트
	public ArrayList<BlogDetail> selectSubDetail(ArrayList<BlogSub> subList) {
		// TODO Auto-generated method stub
		
		ArrayList<BlogDetail> bd = new ArrayList<BlogDetail>();
		for(int i=0; i<subList.size(); i++) {
			bd.add(sqlSession.selectOne("blogMapper.selectSubDetail",subList.get(i).getSubId()));
		}
		
		return bd;
	}

	// 알림 페이징을 위한 알림 갯수 가져오기
	public int getAlertListCount(int mNo) {
		return sqlSession.selectOne("blogMapper.getAlertListCount",mNo);
	}

	//글수정 폼갖고오기
	public BlogPost selectUpdateDetail(BlogPost b) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("blogMapper.selectUpdateDetail",b);
	}

	
	// 글수정
	public int updatePost(BlogPost b) {
		// TODO Auto-generated method stub
		return sqlSession.update("blogMapper.updatePost",b);
	}

	//썸네일수정
	public int insertThumbUpdate(Files f) {
		// TODO Auto-generated method stub
		return sqlSession.update("filesMapper.updateThumb",f);
	}

	// 사진수정
	public int insertFilesUpdate(Files f) {
		return sqlSession.insert("filesMapper.insertFilesUpdate",f);
	}

	// 글삭
	public int blogPostDelete(BlogPost bp) {
		// TODO Auto-generated method stub
		return sqlSession.update("blogMapper.blogPostDelete",bp);
	}

	//답글불러오기
	public ArrayList<ReReply> selectReReplyList(ReReply r) {
		// TODO Auto-generated method stub
		return (ArrayList)sqlSession.selectList("blogMapper.selectReReplyList",r);
	}

	// 답글작성
	public int inseretRReply(ReReply r) {
		// TODO Auto-generated method stub
		return sqlSession.insert("blogMapper.insertRReply",r);
	}

	
	// 전체검색
	public ArrayList<BlogPost> blogAllSearch(String searchValue) {
		// TODO Auto-generated method stub
		return (ArrayList)sqlSession.selectList("blogMapper.blogAllSearch",searchValue);
	}

	// 공모전리스트
	public ArrayList<Compet> competView() {
		// TODO Auto-generated method stub
		return (ArrayList)sqlSession.selectList("blogMapper.competView");
	}

	//댓수정
	public int updateReply(Reply r) {
		// TODO Auto-generated method stub
		return sqlSession.update("blogMapper.updateReply",r);
	}

	//구취
	public int adminSubDelete(BlogSub bs) {
		// TODO Auto-generated method stub
		return sqlSession.update("blogMapper.adminSubDelete",bs);
	}






	
}
