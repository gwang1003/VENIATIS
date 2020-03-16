package com.kh.veniatis.blog.model.service;

import java.util.ArrayList;

import com.kh.veniatis.blog.model.vo.BlogAlert;
import com.kh.veniatis.blog.model.vo.BlogCate;
import com.kh.veniatis.blog.model.vo.BlogDetail;
import com.kh.veniatis.blog.model.vo.BlogPost;
import com.kh.veniatis.blog.model.vo.BlogSub;
import com.kh.veniatis.blog.model.vo.Compet;
import com.kh.veniatis.blog.model.vo.ReReply;
import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.common.likes.model.vo.Likes;
import com.kh.veniatis.common.reply.model.vo.Reply;
import com.kh.veniatis.member.model.vo.Member;



public interface BlogService {
	// 0_1. 카테고리 새로 만들기 신규회원->블로그 만들어주기 
	int insertNewCate(String userId);
	
	//1. 블로그 포스트 조회
	ArrayList<BlogPost> selectPostList(String userId, int currentPage);
	
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
		// 18. 검색
	ArrayList<BlogPost> searchPostList(BlogPost search);
	
	//19. 인기게시글갖고오긔
	ArrayList<BlogPost> selectPopularList();
	//20. 인기게시글갖고오긔
	ArrayList<BlogPost> selectPopularRealList(ArrayList<BlogPost> post);
	
	//21. 해시태그를위한 블로그 전체목록
	ArrayList<BlogPost> selectPostList(String userId);
	
	
	// 22. 관리하기 - 카테고리 추가
	int plusCate(BlogCate newCate);
	
	// 23. 관리하기 - 카테고리 수정
	int updateCate(BlogCate upCate);
	
	// 24. 관리하기 - 카테고리 삭제 - 글 삭제
	int cDeletePost(Integer cateNo);
	
	// 25. 관리하기 - 카테고리 삭제 - 카테고리 제거
	int cDeleteCate(Integer cateNo);
	
	// 26. 관리하기 - 글삭
	int badminPostDelete(int[] arr);
	
	// 27. 관리하기 - 글 카테고리 이동
	int badminPostMove(ArrayList<BlogPost> moveList);
	
	/// 28. 태그별 게시글 목록 갖고오깅
	ArrayList<BlogPost> selectTagPost(BlogPost bp);
	
	// 29. 알림넣기 : 댓글알람
	int alertReply(BlogAlert ba);

	// 30.알림 넣기 : 좋아요 아람
	int alertHeart(BlogAlert ba);
	
	// 31. 알림 정보 가져오기
	ArrayList<BlogAlert> selectAlertList(int getmNo, int currentPage);
	
	// 32. 알림 삭제
	int deleteAlert(int baNo);
	
	// 33. 블로그 디테일 알아오기(블로그 첨인가 아닌가)
	BlogDetail selectBlogDetail(int getmNo);

	// 34. 블로그 만들기(첨일때)
	int insertBlogDetail(Member m);
	
	// 35. 블로그 기본정보 수정
	int updateBlogDetail(BlogDetail bd);
	
	// 36. css업뎃하기
	int updateBlogCss(BlogDetail bd);
	
	
	// 37. 구독 블로거 목록 갖고오기
	ArrayList<BlogSub> selectSubList(String getmId);
	
	// 38. 구독 블로거들의 글 목록 갖고오기(오늘부터 7일차만)
	ArrayList<BlogPost> subPostList(ArrayList<BlogSub> subList);
	
	// 39. 구독추가
	int subPlus(BlogSub bs);
	
	// 40. 구독취소
	int subDelete(BlogSub bs);
	
	//  41. 블로그 관리 : 구독 리스트 갖고오기
	ArrayList<BlogDetail> selectSubDetail(ArrayList<BlogSub> subList);
	
	// 42. 수정용..ㅋㅋㅋ
	BlogPost selectUpdateDetail(BlogPost b);
	
	// 43. 수정
	int updatePost(BlogPost b);
	
	// 44. 썸네일수정
	int insertThumbUpdate(Files f);
	
	// 45. 사진수정
	int insertFilesUpdate(Files f);
	
	// 46. 글 삭제
	int blogPostDelete(BlogPost bp);
	
	// 47. 답글가져오기
	ArrayList<ReReply> selectReReplyList(ReReply r);
	
	// 48. 답글작성
	int insertRReply(ReReply r);
	
	// 49. 전체 검색
	ArrayList<BlogPost> blogAllSearch(String searchValue);
	
	// 50. 공모전리스트 갖고오깅
	ArrayList<Compet> competView();
	
	// 51. 댓글수정
	int updateReply(Reply r);
	
	//52.관리-구취
	int adminSubDelete(BlogSub bs);


}
