package com.kh.veniatis.project.user.model.vo;

import com.kh.veniatis.blog.model.vo.PageInfo;

public class ProjectPagination {
	// 페이지 정보를 담아 줄 PageInfo 참조 변수 선언
	private static PageInfo pi = null;
	public static PageInfo getPageInfo() {
		return pi;
	}
	
	// PageInfo 객체를 리턴하는 static 메소드 추가
	public static PageInfo getPageInfo(int currentPage, int listCount) {

		int pageLimit = 5; // 한 페이지에서 보여질 페이징 수
		int maxPage; 		// 전체 페이징 수 중 가장 마지막 페이지
		int startPage;      // 현재 페이지에서 보여질 페이징 버튼의 시작 페이지
		int endPage;    	// 현재 페이지에서 보여질 페이징 버튼의 끝 페이지
		
		int boardLimit = 12; // 한 페이지에 보여질 게시글 개수
		
		// * maxPage 
		maxPage = (int)Math.ceil((double)listCount / boardLimit);
		
		// * startPage
		startPage = (currentPage - 1) / pageLimit * pageLimit + 1;
		
		// * endPage
		endPage = startPage + pageLimit - 1;
		
		// 하지만 마지막 페이지가 총 페이지 보다 클 경우
		if(maxPage < endPage) {
			endPage = maxPage;
		}
		
		pi = new PageInfo(currentPage, listCount, pageLimit, maxPage, startPage, endPage, boardLimit);
		
		return pi;
	}
	
	
	
}
