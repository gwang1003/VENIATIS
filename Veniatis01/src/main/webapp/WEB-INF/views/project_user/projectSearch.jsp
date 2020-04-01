<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="resources/css/hr.css">
<script src="resources/js/hr.js"/>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<!-- 부트 스트랩  -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
	crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
	crossorigin="anonymous"></script>
	
<title>VENIATIS : 후원형</title>
<style>


</style>
</head>
<body>

	<jsp:include page="../common/menubar.jsp" />
	
	<div id="omcWrap">
		<main id="omcContainer" class="cont_support">

		<h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>
		<div class="cMain">
			<article id="mContent" class="project_list">
				<h3 class="tit_section">검색 결과</h3>
				

				<div class="wrap_project">
					<!-- 프로젝트 목록  -->
					<span class="screen_out">프로젝트 목록</span>
					<ul class="list_prj" id="listPrj">
						<div class="page-wrapper" style="display: block; overflow: auto;">
						<!-- 프로젝트 시작 -->
							<c:if test="${ projectListSize eq 0 }">
								<div style="text-align:center; margin:50px;">
									<p> 해당 카테고리의 프로젝트가 존재하지 않습니다. </p>
								</div>
							</c:if>
							<c:forEach var="prj" items="${ projectList }" varStatus="vs">
								<c:url var="pDetail" value="projectDetail.do">
									<c:param name="pNo" value="${ prj.pNo }"/>
								</c:url>
								<li class="project_card reward_project_card"
									data-project-seq="7779" data-page-number="1">
									<div class="project_card_inner">
										<a class="project_detail_link" onclick="location.href='${ pDetail }';" style="cursor:pointer;"> 
										<span class="project_thumbnail" 
											style="background-image: url('${ prj.thumbnail}')"></span>
										</a>
										<div class="project_card_info">
											<span class="screen_out">프로젝트 제목</span>
											<h3 class="project_name">
												<a class="project_detail_link" onclick="location.href='${ pDetail }';" style="cursor:pointer;"> 
													${ prj.pTitle }
												</a>
											</h3>
											<p class="project_simple_text">
												<span class="screen_out">프로젝트 설명</span> ${ prj.pText }
											</p>
	
											<span class="user_profile"> 
												<span class="img_profile clear_empty_picture"> 
													<img src="${ prj.creProfile }">
												</span> 
												<span class="txt_name">${ prj.creName }</span>
											</span> 
											<span class="project_category"> 
												<span class="screen_out">카테고리</span> ${ prj.cate }
											</span>
										</div>
										<div class="project_state">
											<span class="total_amount"> 
												<span class="screen_out">현재 참여금액</span> 
												<fmt:formatNumber value="${ prj.sumAmount }" groupingUsed="true"/> 원
											</span>
											<div class="project_card_graph">
												<c:if test="${ prj.sumAmount ne 0 }">
													<c:set var="supportRate" value="${ prj.sumAmount *100 / prj.targetAmount } " />
													<span class="screen_out">참여율</span> 
													<c:if test="${ prj.sumAmount *100 / prj.targetAmount < 100 }">
														<span class="bar_graph" style="width: ${ prj.sumAmount *100 / prj.targetAmount }%;"></span>
													</c:if>
													<c:if test="${ prj.sumAmount *100 / prj.targetAmount >= 100 }">
														<span class="bar_graph" style="width: 100%;"></span>
													</c:if>
													<span class="invest_rate"><!-- (#)참여율 -->
													<fmt:parseNumber var="sRate" value="${ supportRate }" integerOnly="true"/>
														${sRate}%
													</span>
												</c:if>
												<c:if test="${ prj.sumAmount eq 0 }">
													<span class="screen_out">참여율</span> 
													<span class="bar_graph" style="width: 0%;"></span> 
													<span class="invest_rate"><!-- (#)참여율 -->
														0%
													</span>
												</c:if>
											</div>
	
											<span class="funding_type"><!-- 무조건 리워드 --></span>
	
										</div>
									</div>
								</li>	
								
								
							</c:forEach>
							
							
						</div>
					</ul>
				</div>


			</article>
		</div>
		</main>
	</div>

<jsp:include page="../common/footer.jsp"/>

</body>
</html>