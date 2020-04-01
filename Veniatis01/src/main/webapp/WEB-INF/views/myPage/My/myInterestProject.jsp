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
	
	.box_text button p {
		margin:0;
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
<c:if test="${ !empty msg }">
		<script>
			alert('${msg}');
		</script>
		<c:remove var="msg"/>
	</c:if>
<jsp:include page="../../common/menubar.jsp"/>
 <div id="omcIndex">
            <a href="#omcGnb" class="shortcut">주메뉴 바로가기</a>
            <a href="#omcSearch" class="shortcut">검색 바로가기</a>
            <a href="#omcBody" class="shortcut">본문 바로가기</a>
        </div>
            <main id="omcContainer" class="cont_mypage">
            
                <div id="cMain">
                    <article id="mContent" class="my_interest_prj">
                        <header class="head_comm">
                            <h1 class="tit_comm">관심프로젝트</h1>
                            <div class="area_delete_selected">
                                <button type="button" class="btn_del bbs" id="btn_del">선택삭제</button>
                            </div>
                        </header>
                        
                        
                        
                        <div class="wrap_project">
                            <div class="box_txt">
                            <c:url var="All" value="myInterestProject.do">
								<c:param name="align" value="All"/>
							</c:url>
							<c:url var="Ing" value="myInterestProject.do">
								<c:param name="align" value="Ing"/>
							</c:url>
							<c:url var="End" value="myInterestProject.do">
								<c:param name="align" value="End"/>
							</c:url>
                                        <a href="${ All }"><button>모두 보기 ${index[0] }</button></a>
                                        <a href="${ Ing }"><button>진행중 ${index[1] }</button></a>
                                        <a href="${ End }"><button>마감 ${index[2] }</button></a>
                                    </div>
                            <ul class="list_prj">
                                <c:if test="${!empty interestList }">
                                <c:forEach var="p" items="${interestList }"> 
                                <li class="prj_type_support"> <!-- 후원형 프로젝트일 경우 class="prj_type_support" -->                 
                                    <label for="chkPrj_0" class="chk_comm">
                                        <input type="checkbox" name="chk" value="${p.pNo }" style="background:white; border:1px solid gray; width:20px; height:20px;">
                                    </label>
                                    <div class="box_project">
                                        <div class="related_words">
                                            <a href="projectDetail.do?pNo=${p.pNo }" class="link_card">
                                                <span class="thumb_g" style="background-image:url('${p.thumbnail}')"></span>
                                            </a>
                                        </div>
                                        <div class="info_project">
                                            <span class="screen_out">프로젝트 제목</span>
                                            <h3 class="tit_project">
                                            <a href="/reward/7779">
                                            ${p.pTitle }</a></h3>
                                            
                                            
                                                <p class="txt_desc"><span class="screen_out">프로젝트 설명</span>${p.pText }</p>
    <span class="user_profile">
        <span class="img_profile clear_empty_picture">
                    <img src="${p.creProfile }" style="background: rgb(255, 255, 255);">  
        </span>
        <span class="txt_name">${p.creName }</span>
    </span>
                                            <span class="txt_cate"><span class="screen_out">카테고리</span>${p.cate }</span>
                                        </div>
	<br>
                                    </div>
                                </li>
                                </c:forEach>
                                </c:if>
                                <c:if test="${empty interestList }">
                                	<div align="center">프로젝트가 존재하지 않습니다.</div>
                                </c:if>
                            </ul>
                        </div>
   							<table align="center" class="pagingTable">
								<tr align="center" height="20">
									<td colspan="6">
										<!-- [이전] -->
										<c:if test="${ pi.currentPage <= 1 }">
										<
										</c:if>
										<c:if test="${ pi.currentPage > 1 }">
											<c:url var="before" value="myInterestProject.do">
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
												<c:url var="pagination" value="myInterestProject.do">
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
											<c:url var="after" value="myInterestProject.do">
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
                        
                    </article>
                </div>
            </main>
            </form>
            
<script>
$(function(){
	$(".bbs").click(function(){
		var chk = $("input[name='chk']")
		var pNo = "";
		for(var i = 0; i < chk.length; i++) {
			if(chk[i].checked) {
				pNo += chk[i].value +" ";
			}
		}			
		location.href="deleteInterest.do?pNo="+pNo;
	})
})

</script>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>