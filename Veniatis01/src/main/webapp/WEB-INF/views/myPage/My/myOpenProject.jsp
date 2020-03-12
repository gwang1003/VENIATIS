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
			                            <c:url var="All" value="myOpenProject.do">
											<c:param name="align" value="All"/>
										</c:url>
										<c:url var="Ing" value="myOpenProject.do">
											<c:param name="align" value="Ing"/>
										</c:url>
										<c:url var="End" value="myOpenProject.do">
											<c:param name="align" value="End"/>
										</c:url>
										<c:url var="Wait" value="myOpenProject.do">
											<c:param name="align" value="Wait"/>
										</c:url>
                                        <a href="${ All }"><button>모두 보기 ${index[0] }</button></a>
                                        <a href="${ Ing }"><button>진행중 ${index[1] }</button></a>
                                        <a href="${ End }"><button>마감 ${index[2] }</button></a>
                                        <a href="${ Wait }"><button>승인대기 ${index[3] }</button></a>
                                    </div>
                                    
                                </div>
                                
                                
                                <!-- 프로젝트 신청목록 -->
                                <ul class="list_pjtapply">  
                                
                                	<c:forEach var="p" items="${alignList }">                              
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
                                                    <a class="btn_preview" href="${pDetail }" title="미리보기">미리보기</a>   
                                        <c:url var="pAlt" value="projectAlt.do">
                                           <c:param name="pNo" value="${ p.pNo }"/>
                                           
                                        </c:url>                              
                                                        <a class="btn_edit" href="${pAlt }" title="수정하기">수정하기</a>
                                           
                                         <c:url var="pDelete" value="projectDelete.do">
                                            <c:param name="pNo" value="${p.pNo }"/>
                                         </c:url>               
                                            <a class="btn_delete" href="${pDelete}"  title="삭제하기">삭제하기</a>

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
											<c:url var="before" value="myOpenProject.do">
												<c:param name="page" value="${ pi.currentPage -1 }"/>
												<c:if test="${!empty align }">
													<c:param name="align" value="${ align }"/>
												</c:if>
											</c:url>
											<a href="${ before }"><</a>
										</c:if>
									</td>
										&nbsp;
									
										<!-- 페이지 숫자 -->
										<c:forEach var="p" begin="${pi.startPage }" end="${ pi.endPage }">
									<td>
											<c:if test="${ pi.currentPage eq p }">
												${ p }
											</c:if>
											<c:if test="${ pi.currentPage ne p }">
												<c:url var="pagination" value="myOpenProject.do">
													<c:param name="page" value="${p }"/>
													<c:if test="${!empty align }">
														<c:param name="align" value="${ align }"/>
													</c:if>
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
											<c:url var="after" value="myOpenProject.do">
												<c:param name="page" value="${ pi.currentPage +1 }"/>
												<c:if test="${!empty align }">
													<c:param name="align" value="${ align }"/>
												</c:if>
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
                
                <script>
                	$(".btn_delete").click(function(){
                		if(confirm("정말로 삭제하시겠습니까?;")){
                            return true;
                        }else{
                            return false;
                        }
                	})
                </script>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>