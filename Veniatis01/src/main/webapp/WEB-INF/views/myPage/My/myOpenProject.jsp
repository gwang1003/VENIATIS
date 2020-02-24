<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/guidecss.css">
<style>

	.box_txt {
		width:100%;
		height:100%;
	}

	.box_txt button {
		width: 10%;
		border:1px solid black;
	}
	
	.pagingTable {
		margin-top:40px;
		height:30px;
		background : darkgray;
	}
	
	.pagingTable td {
		font-size:20px;
		width:40px;
		height:40px;
		border:1px solid ghostwhite;
	}
	
	.pagingTable a:hover {
		background : #40c8b5;
		color:white;
		cursor:pointer;
	} 
</style>
</head>
<body class="login">
<jsp:include page="../../common/menubar.jsp"/>
 <main id="omcContainer" class="cont_mypage">
                <div id="cMain">
                    <article id="mContent" class="mypage_openproject">
                        <header class="head_comm">
                            <h1 class="tit_comm">개설프로젝트</h1>
                        </header>
                        <!-- 2017-11-06 공통 탭수정 -->
                        <div class="cont_comm">
                            <div class="box_comm">
                                <div class="inner_head">
                                    <div class="box_txt">
                                        <button>모두 보기 <p> ${index[0] }</p></button>
                                        <button>진행중 <p> ${index[1] }</p></button>
                                        <button>마감 <p> ${index[2] }</p></button>
                                        <button>승인대기 <p> ${index[3] }</p></button>
                                    </div>
                                    
                                </div>
                                
                                
                                <!-- 프로젝트 신청목록 -->
                                <ul class="list_pjtapply">  
                                	<c:forEach var="p" items="${pList }">                              
                                    <li>
                                        <div class="img_thumb">
                                            <div style="width:290px;height:174px;">
                                            	<img src="${p.thumbnail }" style="width:290px;height:174px;">
                                            </div>
                                        </div>
                                        <div class="box_text_area">
                                            <dl>
                                                <dt>프로젝트명</dt>
                                                    <dd class="txt_none">${p.pTitle }</dd>
                                            </dl>
                                            <dl>
                                                <dt>펀딩기간</dt>
                                                    <dd class="txt_none">${p.startDate } ~ ${p.endDate}</dd>
                                            </dl>
                                            <dl>
                                                <dt>상태</dt>       
                                                
                                                            <dd>${p.progress }<em class="num_state"></em></dd>
                                            </dl>
                                            <dl>
                                                <dt>등록일</dt>
                                                <dd>
                                                    
                                                    ${p.startDate }
                                                </dd>
                                            </dl>
                                        </div>
                                        <c:url var="pDetail" value="projectDetail.do">
											<c:param name="pNo" value="${ p.pNo }"/>
										</c:url>
                                        <div class="box_btn_area">
                                                    <a class="btn_preview" href="${pDetail }" title="미리보기" target="_blank">미리보기</a>											
                                                        <a class="btn_edit" href="/apply/7939/maker" title="수정하기" target="_blank">수정하기</a>
                                            <a class="btn_delete" href="javascript:void(0);" onclick="javascript:fnDeleteProject('','7939'); return false;" title="삭제하기">삭제하기</a>
                                        </div>
                                    </li>
                                    </c:forEach>
                                </ul>
                                
                                <table align="center" class="pagingTable">
								<tr align="center" height="20">
									<td colspan="6">
										<!-- [이전] -->
										<c:if test="${ pi.currentPage <= 1 }">
										<
										</c:if>
										<c:if test="${ pi.currentPage > 1 }">
											<c:url var="before" value="blist.do">
												<c:param name="page" value="${ pi.currentPage -1 }"/>
											</c:url>
											<a href="${ before }"><</a>
										</c:if>
									</td>
										&nbsp;
									
										<!-- 페이지 숫자 -->
									<td>
										<c:forEach var="p" begin="${pi.startPage }" end="${ pi.endPage }">
											<c:if test="${ pi.currentPage eq p }">
												${ p }
											</c:if>
											<c:if test="${ pi.currentPage ne p }">
												<c:url var="pagination" value="myInterestProject.do">
													<c:param name="page" value="${p }"/>
												</c:url>
												<a href="${ pagination }"><button type="button">${ p }</button></a>
											</c:if>
									</td>
											&nbsp;
										</c:forEach>
										
										<!-- [다음] -->
									<td>
										<c:if test="${ pi.currentPage >= pi.maxPage }">
										>
										</c:if>
										<c:if test="${ pi.currentPage < pi.maxPage }">
											<c:url var="after" value="blist.do">
												<c:param name="page" value="${ pi.currentPage +1 }"/>
											</c:url>
											<a href="${ after }">></a>
										</c:if>
									</td>
								</tr>
							</table>				
                                </div>
                            </div>
                        </article></div>
                    
                </main></div>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>