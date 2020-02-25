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
.loading {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0px;
	top: 0px;
	background: #fff;
	z-index: 1000; /* 이 값으로 레이어의 위치를 조정 */
	text-align: center;
}

.loading div {
	margin: 15%;
	color: #40c8b5;
}

.paging {
	height: 100%;
	text-align: center;
	padding: 10px;
	/* background-color: red; */
}

.paging:before {
	content: "";
	display: inline-block;
	width: 1px;
	height: 100%;
	margin-right: 0;
	vertical-align: middle;
}

.page-nav {
	display: inline-block;
	vertical-align: middle;
}

#box-sorting{
	 text-align:right; 
	 margin-right:20px;
}

#sorting_btn{
	background-color:#ffffff;
	color:#40c8b5;
	border:2px solid #40c8b5;
	font-weight:600;
}

.nice-select ul, .nice-select li {
	z-index:10000;
}

</style>
</head>
<body>

	<jsp:include page="../common/menubar.jsp" />
	
	<div id="omcWrap">

		<main id="omcContainer" class="cont_support">


		<h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>
		<div class="cMain">
			<article id="mContent" class="project_list">
				<!-- <h3 class="tit_section">VENIATIS 후원하기</h3> -->
				<div class="box_category">
					<span class="screen_out">카테고리</span>
					<button type="button" class="btn_select">
						전체분야 <span class="ico_comm"></span>
					</button>
					<ul id="category_list" class="list_cate" role="tablist">
						<li class="on" role="tab"><a class="link_cate" id="cate0">전체<span
								class="num_count">(1805)</span></a></li>

						<li role="tab"><a class="link_cate" id="cate1"> 공간/리빙<span
								class="num_count">(157)</span>
						</a></li>

						<li role="tab"><a class="link_cate" id="cate2"> 사회이슈<span
								class="num_count">(333)</span>
						</a></li>

						<li role="tab"><a class="link_cate" id="cate3"> 교육/출판<span
								class="num_count">(214)</span>
						</a></li>

						<li role="tab"><a class="link_cate" id="cate4"> 문화예술<span
								class="num_count">(326)</span>
						</a></li>

						<li role="tab"><a class="link_cate" id="cate5"> 지역재생<span
								class="num_count">(276)</span>
						</a></li>

						<li role="tab"><a class="link_cate" id="cate6"> 푸드<span
								class="num_count">(293)</span>
						</a></li>

						<li role="tab"><a class="link_cate" id="cate7"> 테크<span
								class="num_count">(86)</span>
						</a></li>

						<li role="tab"><a class="link_cate" id="cate8"> 뷰티/패션<span
								class="num_count">(65)</span>
						</a></li>

						<li role="tab"><a class="link_cate" id="cate9"> 여행<span
								class="num_count">(55)</span>
						</a></li>

					</ul>
				</div>

				<div class="wrap_project">
					<!-- 정렬 기준  -->
					<!-- <div class="box_select">
						<select id="sorting" name="sorting" class="select_sort" title="후원형 프로젝트 목록 분류">
							<option id="sort_latest" value="latest">최신순</option>
							<option id="sort_highest" value="highest">펀딩금액순</option>
							<option id="sort_impendence" value="impendence">마감임박순</option>
							<option id="sort_largest" value="largest">참여자순</option>
						</select>
					</div> -->

					<div class="dropdown" id="box-sorting">
						<button class="btn dropdown-toggle" type="button"
							id="sorting_btn" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">정렬 기준&nbsp;</button>
						<div class="dropdown-menu dropdown-menu-right" aria-labelledby="sorting_btn">
							<button class="dropdown-item" type="button">최신순</button>
							<button class="dropdown-item" type="button">펀딩금액순</button>
							<button class="dropdown-item" type="button">마감임박순</button>
							<button class="dropdown-item" type="button">참여자순</button>
						</div>
					</div>
					

					<script>
						$(function() {
							
						});
					</script>

					<!-- 프로젝트 목록  -->
					<span class="screen_out">프로젝트 목록</span>
					<ul class="list_prj" id="listPrj">
						<div class="page-wrapper" style="display: block; overflow: auto;">
						<!-- 프로젝트 시작 -->
							<c:forEach var="prj" items="${ projectList }">
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

				<div class="paging">
					<nav aria-label="Page navigation example" class="page-nav">
						<ul class="pagination">
							<li class="page-item"><a class="page-link" href="#"
								aria-label="Previous"> <span aria-hidden="true">&laquo;</span>
							</a></li>
							<li class="page-item"><a class="page-link" href="#">1</a></li>
							<li class="page-item"><a class="page-link" href="#">2</a></li>
							<li class="page-item"><a class="page-link" href="#">3</a></li>
							<li class="page-item"><a class="page-link" href="#"
								aria-label="Next"> <span aria-hidden="true">&raquo;</span>
							</a></li>
						</ul>
					</nav>
				</div>

			</article>
		</div>
		</main>
	</div>

	<!-- <div class="loading">
		<div class="spinner-grow" style="width: 20rem; height: 20rem;"
			role="status">
			<span class="sr-only">Loading...</span>
		</div>
	</div> -->

	<script>
		$(window).load(function() {
			$(".loading").fadeOut();
			$(".loading").children().fadeOut();
		});
	</script>
<jsp:include page="../common/footer.jsp"/>

</body>
</html>