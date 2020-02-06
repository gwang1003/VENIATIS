<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<link rel="stylesheet" href="resources/css/ohmy.css">
	<script src="resources/js/swiper.js"></script>

	<title>VENIATIS:후원하기</title>

</head>
<body>
<div id="omcWrap">

		<main id="omcContainer" class="cont_support">

			<h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>
			<div class="cMain">
				<article id="mContent" class="project_list">
					<h3 class="tit_section">프로젝트에 응원하고 리워드를 받는 펀딩</h3>
					<div class="box_category">
						<span class="screen_out">카테고리</span>
						<button type="button" class="btn_select">
							전체분야 <span class="ico_comm"></span>
						</button>
						<ul id="category_list" class="list_cate" role="tablist">
							<li class="on" role="tab"><a class="link_cate">전체<span class="num_count">(1805)</span></a></li>

							<li role="tab" data-category-code="CATE_0001"><a class="link_cate"> 공간/리빙<span class="num_count">(157)</span>
								</a></li>

							<li role="tab" data-category-code="CATE_0002"><a class="link_cate"> 사회이슈<span class="num_count">(333)</span>
								</a></li>

							<li role="tab" data-category-code="CATE_0003"><a class="link_cate"> 교육/출판<span class="num_count">(214)</span>
								</a></li>

							<li role="tab" data-category-code="CATE_0005"><a class="link_cate"> 문화예술<span class="num_count">(326)</span>
								</a></li>

							<li role="tab" data-category-code="CATE_0006"><a class="link_cate"> 지역재생<span class="num_count">(276)</span>
								</a></li>

							<li role="tab" data-category-code="CATE_0007"><a class="link_cate"> 푸드<span class="num_count">(293)</span>
								</a></li>

							<li role="tab" data-category-code="CATE_0010"><a class="link_cate"> 테크<span class="num_count">(86)</span>
								</a></li>

							<li role="tab" data-category-code="CATE_0012"><a class="link_cate"> 뷰티/패션<span class="num_count">(65)</span>
								</a></li>

							<li role="tab" data-category-code="CATE_0013"><a class="link_cate"> 여행<span class="num_count">(55)</span>
								</a></li>

						</ul>
					</div>

					<div class="wrap_project">
						<!-- 정렬 기준  -->
						<div class="box_select">
							<select id="sorting" name="sorting" class="select_sort" title="후원형 프로젝트 목록 분류">
								<option value="highest">펀딩금액순</option>
								<option value="impendence">마감임박순</option>
								<option value="latest">최신순</option>
								<option value="largest">참여자순</option>
							</select>
						</div>

						<!-- 프로젝트 목록  -->
						<span class="screen_out">프로젝트 목록</span>
						<ul class="list_prj" id="listPrj">
							<div class="page-wrapper" style="display: block; overflow: auto;">
								<!-- 프로젝트 1개 -->
								<li class="project_card reward_project_card" data-project-seq="7779" data-page-number="1">
									<div class="project_card_inner">
										<a href="/reward/7779" class="project_detail_link" data-project-seq="7779" data-page-number="1">
											<span class="project_thumbnail" style="background-image: url('test.png')"></span>
										</a>
										<div class="project_card_info">
											<span class="screen_out">프로젝트 제목</span>
											<h3 class="project_name">
												<a href="/reward/7779" class="project_detail_link" data-project-seq="7779" data-page-number="1"> 영화
													〈1975.김상진〉 </a>
											</h3>
											<p class="project_simple_text">
												<span class="screen_out">프로젝트 설명</span> 시대의 불꽃 김상진, 영화로 깨어나다
											</p>

											<span class="user_profile">
												<span class="img_profile clear_empty_picture">
													<img src="test.png">
												</span>
												<span class="txt_name">(주)이야기농업</span>
											</span>
											<span class="project_category">
												<span class="screen_out">카테고리</span>
												문화예술
											</span>
										</div>
										<div class="project_state">
											<span class="total_amount"> <span class="screen_out">현재
													참여금액</span> 26,440,000원
											</span>
											<div class="project_card_graph">
												<span class="screen_out">참여율</span> <span class="bar_graph" style="width: 100%;"></span> <span class="invest_rate">
													132% </span>
											</div>

											<span class="funding_type">무조건 리워드</span>

										</div>
									</div>
								</li>
								<!-- 프로젝트 1개 끝-->


								<li class="project_card reward_project_card" data-project-seq="7779" data-page-number="1">
									<div class="project_card_inner">
										<a href="/reward/7779" class="project_detail_link" data-project-seq="7779" data-page-number="1">
											<span class="project_thumbnail" style="background-image: url('test.png')"></span>
										</a>
										<div class="project_card_info">
											<span class="screen_out">프로젝트 제목</span>
											<h3 class="project_name">
												<a href="/reward/7779" class="project_detail_link" data-project-seq="7779" data-page-number="1"> 영화
													〈1975.김상진〉 </a>
											</h3>
											<p class="project_simple_text">
												<span class="screen_out">프로젝트 설명</span> 시대의 불꽃 김상진, 영화로 깨어나다
											</p>

											<span class="user_profile">
												<span class="img_profile clear_empty_picture">
													<img src="test.png">
												</span>
												<span class="txt_name">(주)이야기농업</span>
											</span>
											<span class="project_category">
												<span class="screen_out">카테고리</span>
												문화예술
											</span>
										</div>
										<div class="project_state">
											<span class="total_amount"> <span class="screen_out">현재
													참여금액</span> 26,440,000원
											</span>
											<div class="project_card_graph">
												<span class="screen_out">참여율</span> <span class="bar_graph" style="width: 32%;"></span> <span class="invest_rate">
													32% </span>
											</div>

											<span class="funding_type">무조건 리워드</span>

										</div>
									</div>
								</li>

								<li class="project_card reward_project_card" data-project-seq="7779" data-page-number="1">
									<div class="project_card_inner">
										<a href="/reward/7779" class="project_detail_link" data-project-seq="7779" data-page-number="1">
											<span class="project_thumbnail" style="background-image: url('test.png')"></span>
										</a>
										<div class="project_card_info">
											<span class="screen_out">프로젝트 제목</span>
											<h3 class="project_name">
												<a href="/reward/7779" class="project_detail_link" data-project-seq="7779" data-page-number="1"> 영화
													〈1975.김상진〉 </a>
											</h3>
											<p class="project_simple_text">
												<span class="screen_out">프로젝트 설명</span> 시대의 불꽃 김상진, 영화로 깨어나다
											</p>

											<span class="user_profile">
												<span class="img_profile clear_empty_picture">
													<img src="test.png">
												</span>
												<span class="txt_name">(주)이야기농업</span>
											</span>
											<span class="project_category">
												<span class="screen_out">카테고리</span>
												문화예술
											</span>
										</div>
										<div class="project_state">
											<span class="total_amount"> <span class="screen_out">현재
													참여금액</span> 26,440,000원
											</span>
											<div class="project_card_graph">
												<span class="screen_out">참여율</span> <span class="bar_graph" style="width: 55%;"></span> <span class="invest_rate">
													55% </span>
											</div>

											<span class="funding_type">무조건 리워드</span>

										</div>
									</div>
								</li>
								<li class="project_card reward_project_card" data-project-seq="7779" data-page-number="1">
									<div class="project_card_inner">
										<a href="/reward/7779" class="project_detail_link" data-project-seq="7779" data-page-number="1">
											<span class="project_thumbnail" style="background-image: url('test.png')"></span>
										</a>
										<div class="project_card_info">
											<span class="screen_out">프로젝트 제목</span>
											<h3 class="project_name">
												<a href="/reward/7779" class="project_detail_link" data-project-seq="7779" data-page-number="1"> 영화
													〈1975.김상진〉 </a>
											</h3>
											<p class="project_simple_text">
												<span class="screen_out">프로젝트 설명</span> 시대의 불꽃 김상진, 영화로 깨어나다
											</p>

											<span class="user_profile">
												<span class="img_profile clear_empty_picture">
													<img src="test.png">
												</span>
												<span class="txt_name">(주)이야기농업</span>
											</span>
											<span class="project_category">
												<span class="screen_out">카테고리</span>
												문화예술
											</span>
										</div>
										<div class="project_state">
											<span class="total_amount"> <span class="screen_out">현재
													참여금액</span> 26,440,000원
											</span>
											<div class="project_card_graph">
												<span class="screen_out">참여율</span> <span class="bar_graph" style="width: 70%;"></span> 
												<span class="invest_rate">70% </span>
											</div>

											<span class="funding_type">무조건 리워드</span>

										</div>
									</div>
								</li>
							</div>
						</ul>
					</div>
			</div>
</body>
</html>