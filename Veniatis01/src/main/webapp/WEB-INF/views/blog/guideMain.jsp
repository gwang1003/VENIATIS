<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
<meta charset="utf-8">
<title>Home</title>
<link 
	href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap"
	rel="stylesheet">
<style>
#btn2 {
	background-color: #40c8b5;
}

* {
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 11pt;
}

.header {
	position: absolute important!;
}
</style>
<link rel="stylesheet" href="resources/css/guidecss.css">
<script type="text/javascript">
	// section
	$(document).ready(
			function() {
				jQuery('#searchKeyword').keypress(function(e) {
					if (e.keyCode == 13) {
						e.preventDefault();
						fn_selectFaqList();
					}
				});

				$(".link_tab").on(
						"click",
						function(event) {
							event.preventDefault();

							var value = $(this).attr("href"), id = $(this)
									.attr("id"), self = $(this);
							$(".faq_guest").removeClass("on");
							$(".faq_host").removeClass("on");

							self.closest("div").addClass("on");

							if (id == "faqGuest") {
								$("#faq_left").show();
								$("#faq_right").hide();
							} else if (id = "faqHost") {
								$("#faq_right").show();
								$("#faq_left").hide();
							}

						});
			});

	/* 검색 function */
	function fn_selectFaqList() {
		if (fn_validateCheck()) {
			document.listForm.action = "/guide/faqSearch.do";
			document.listForm.submit();
		}
	}

	/* 유효성 체크 */
	function fn_validateCheck() {
		if ($('#searchKeyword').val() == '') {
			alert("검색어를 입력하세요.");
			$('#searchKeyword').focus();
			return false;
		}
		return true;
	}

	function fn_selectFaq(faqSeq) {
		location.href = "/"
	}
</script>

<script type="text/javascript"
	src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</head>
<body>
<jsp:include page="../common/menubar.jsp"></jsp:include>


	<div id="omcWrap">
		<main id="omcContainer" class="cont_guide">
		<div id="cMain">
			<article id="mContent" class="guide_top">
				<h2 id="omcBody" class="screen_out">이용가이드</h2>
				
				<script>
					$(document).ready(function() {
						var divId = window.location.hash;

						var base = $("" + divId.substring(0, 10) + "_li");
						base.addClass("on");
						if (divId.substring(1, 4) == "com") {
							$("#comRoot").addClass("on");
						} else if (divId.substring(1, 4) == "gst") {
							$("#gstRoot").addClass("on");
							if (divId.substring(4, 7) == "Inv") {
								$("#gstInv").addClass("on lnb_stock");
							} else if (divId.substring(4, 7) == "Rew") {
								$("#gstRew").addClass("on lnb_support");
							}
						} else if (divId.substring(1, 4) == "mkr") {
							$("#mkrRoot").addClass("on");
							if (divId.substring(4, 7) == "Inv") {
								$("#mkrInv").addClass("on lnb_stock");
							} else if (divId.substring(4, 7) == "Rew") {
								$("#mkrRew").addClass("on lnb_support");
							}
						}
					});
					function fn_addClass(litype) {
						$("#comCro_li").removeClass();
						$("#comJoi_li").removeClass();
						$("#comFaq_li").removeClass();
						$("#gstRewPay_li").removeClass();
						$("#gstRewRew_li").removeClass();
						$("#gstRewFaq_li").removeClass();
						$("#gstInvCer_li").removeClass();
						$("#gstInvPro_li").removeClass();
						$("#gstInvDis_li").removeClass();
						$("#gstInvFaq_li").removeClass();
						$("#mkrRewApp_li").removeClass();
						$("#mkrRewChe_li").removeClass();
						$("#mkrRewPro_li").removeClass();
						$("#mkrRewCal_li").removeClass();
						$("#mkrRewFaq_li").removeClass();
						$("#mkrInvApp_li").removeClass();
						$("#mkrInvChe_li").removeClass();
						$("#mkrInvReg_li").removeClass();
						$("#mkrInvPro_li").removeClass();
						$("#mkrInvDel_li").removeClass();
						$("#mkrInvFaq_li").removeClass();
						var base = $("#" + litype);
						var divId = window.location.hash;
						//alert(divId);
						base.addClass("on");
						if (divId.substring(1, 4) == "com") {
							$("#comRoot").addClass("on");
						} else if (divId.substring(1, 4) == "gst") {
							$("#gstRoot").addClass("on");
							if (divId.substring(4, 7) == "Inv") {
								//$("#gstInv").addClass("lnb_stock");	
							} else if (divId.substring(4, 7) == "Rew") {
								$("#gstRew").addClass("lnb_support");
							}
						} else if (divId.substring(1, 4) == "mkr") {
							$("#mkrRoot").addClass("on");
							if (divId.substring(4, 7) == "Inv") {
								$("mkrInv").addClass("on");
							} else if (divId.substring(4, 7) == "Rew") {
								$("#mkrRew").addClass("on");
							}
						}
					}
				</script>



				<nav class="guide_nav">
					<h3 class="screen_out">이용가이드 서브메뉴</h3>
					<div class="inner">
						<ul class="list_nav_guide">
							<li id="comRoot"><a href="#" class="link_cont">공통</a>
								<ul class="lnb_depth">
									<li id="comCro_li"><a href="#" class="link_depth">크라우드펀딩이란?</a></li>
									<li id="comJoi_li"><a href="#" class="link_depth">회원가입</a></li>
									<li id="comFaq_li"><a href="#" class="link_depth">FAQ</a></li>
								</ul></li>
							<li id="gstRoot"><a href="#" class="link_cont">펀딩 참여자</a>
								<ul class="list_sub">
									<li id="gstRew" class=""><a href="#" class="link_sub">후원형</a>
										<ul class="lnb_depth">
											<li id="gstRewPay_li"><a href="#" class="link_depth">결제</a></li>
											<li id="gstRewRew_li"><a href="#" class="link_depth">리워드</a></li>
											<li id="gstRewFaq_li"><a href="#" class="link_depth">FAQ</a></li>
										</ul></li>
									<li id="gstInv" class=""><a href="#" class="link_sub">증권형</a>
										<ul class="lnb_depth">
											<li id="gstInvCer_li"><a href="#" class="link_depth">투자자
													인증</a></li>
											<li id="gstInvPro_li"><a href="#" class="link_depth">투자
													진행</a></li>
											<li id="gstInvFaq_li"><a href="#" class="link_depth">FAQ</a></li>
										</ul></li>
								</ul></li>
							<li id="mkrRoot"><a href="#"
								class="link_cont">펀딩 개설자</a>
								<ul class="list_sub">
									<li id="mkrRew" class=""><a
										href="#" class="link_sub">후원형</a>
										<ul class="lnb_depth">
											<li id="mkrRewApp_li"><a
												href="#" class="link_depth"
												onclick="fn_addClass('mkrRewApp_li')">프로젝트 신청</a></li>
											<li id="mkrRewChe_li"><a
												href="#" class="link_depth"
												onclick="fn_addClass('mkrRewChe_li')">프로젝트 심사</a></li>
											<li id="mkrRewPro_li"><a
												href="#" class="link_depth"
												onclick="fn_addClass('mkrRewPro_li')">펀딩 진행</a></li>
											<li id="mkrRewCal_li"><a
												href="#" class="link_depth"
												onclick="fn_addClass('mkrRewCal_li')">정산</a></li>
											<li id="mkrRewFaq_li"><a
												href="#" class="link_depth"
												onclick="fn_addClass('mkrRewFaq_li')">FAQ</a></li>
										</ul></li>
									<li id="mkrInv" class=""><a
										href="#" class="link_sub">증권형</a>
										<ul class="lnb_depth">
											<li id="mkrInvApp_li"><a
												href="#" class="link_depth"
												onclick="fn_addClass('mkrInvApp_li')">투자받기 신청</a></li>
											<li id="mkrInvChe_li"><a
												href="#" class="link_depth"
												onclick="fn_addClass('mkrInvChe_li')">내부심사 및 실사</a></li>
											<li id="mkrInvReg_li"><a
												href="#" class="link_depth"
												onclick="fn_addClass('mkrInvReg_li')">펀딩 등록</a></li>
											<li id="mkrInvPro_li"><a
												href="#" class="link_depth"
												onclick="fn_addClass('mkrInvPro_li')">펀딩 진행</a></li>
											<li id="mkrInvDel_li"><a
												href="#" class="link_depth"
												onclick="fn_addClass('mkrInvDel_li')">증권 발행</a></li>
											<li id="mkrInvFaq_li"><a
												href="#" class="link_depth"
												onclick="fn_addClass('mkrInvFaq_li')">FAQ</a></li>
										</ul></li>
								</ul></li>
						</ul>
					</div>
				</nav>
				<article class="guide_article">
					<div class="inner">
						<div class="faq_panel">
							<h3 class="tit_faq">TOP5 질문</h3>
							<div class="faq_guest on">
								<!-- 선택 시 클래스 on 추가 -->
								<h4 class="tit_target">
									<a href="#none" class="link_tab" id="faqGuest">펀딩 참여자</a>
								</h4>
								<div id="faq_left">
									<ul class="list_top5">
										<li><span class="label_support">후원형</span> <a href="#"
											class="link_cont">리워드는 언제 배송되나요? </a></li>
										<li><span class="label_support">후원형</span> <a href="#"
											class="link_cont">리워드를 변경하고 싶어요.</a></li>
										<li><span class="label_support">후원형</span> <a href="#"
											class="link_cont">참여 및 결제한 영수증이 필요합니다.</a></li>

										<li><span class="label_stock">증권형</span> <a href="#"
											class="link_cont">투자기간이 끝난 후에는 어떻게 진행되나요?</a></li>

										<li><span class="label_stock">증권형</span> <a href="#"
											class="link_cont">증권이 제대로 들어왔는지는 어떻게 확인할 수 있나요?</a></li>

									</ul>
								</div>
							</div>
							<div class="faq_host">
								<h4 class="tit_target">
									<a href="#none" class="link_tab" id="faqHost">펀딩 개설자</a>
								</h4>
								<div id="faq_right">
									<ul class="list_top5">
										<li><span class="label_support">후원형</span> <a href="#"
											class="link_cont">약속된 기간 내에 리워드 배송을 하지 못하면 어떻게 하나요?</a></li>
										<li><span class="label_support">후원형</span> <a href="#"
											class="link_cont">정산받는 금액의 회계처리는 어떻게 해야 하나요?</a></li>
										<li><span class="label_stock">증권형</span> <a href="#"
											class="link_cont">온라인 IR 자료는 어떻게 작성해야 하나요?</a></li>
										<li><span class="label_stock">증권형</span> <a href="#"
											class="link_cont">펀딩 진행중에 온라인 IR을 수정할 수 있나요?</a></li>
										<li><span class="label_stock">증권형</span> <a href="#"
											class="link_cont">펀딩 종료된 후 절차는 어떻게 되나요?</a></li>

										<div class="wrap_project">
											<!-- 2017-08-07 수정 클래스 추가 -->
											<div class="box_select">
												<select id="sorting" name="sorting" class="select_sort"
													title="후원형 프로젝트 목록 분류">
													<option value="highest">펀딩금액순</option>
													<option value="impendence">마감임박순</option>
													<option value="latest">최신순</option>
													<option value="largest">참여자순</option>



												</select>
											</div>

											<!-- // 2017-08-07 수정 클래스 추가 -->
											<span class="screen_out">프로젝트 목록</span>
											<ul class="list_prj" id="listPrj">




												<span class="first_page_flag" style="display: none;"></span>


												<div class="page-wrapper"
													style="display: block; overflow: auto;">










													<li class="project_card reward_project_card"
														data-project-seq="7779" data-page-number="1">
														<div class="project_card_inner">
															<a href="#" class="project_detail_link"
																data-project-seq="7779" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191130033639099.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="#" class="project_detail_link"
																		data-project-seq="7779" data-page-number="1"> 영화
																		〈1975.김상진〉 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 시대의 불꽃 김상진, 영화로
																	깨어나다
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191130114112328.png">



																</span> <span class="txt_name">(주)이야기농업</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 문화예술
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 26,440,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 100%;"></span> <span
																		class="invest_rate"> 132% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7144" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7144" class="project_detail_link"
																data-project-seq="7144" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191124025453963.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7144" class="project_detail_link"
																		data-project-seq="7144" data-page-number="1"> 편견없는
																		세상을 위한, 학생들이 만드는 점자 동화책 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 편견없는 세상으로의 첫
																	발자취
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191031072322747.jpg">



																</span> <span class="txt_name">Bright world</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 교육/출판
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 3,020,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 100%;"></span> <span
																		class="invest_rate"> 100% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7834" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7834" class="project_detail_link"
																data-project-seq="7834" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191216041057948.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7834" class="project_detail_link"
																		data-project-seq="7834" data-page-number="1"> 이웃과
																		함께하는 콩세알의 전통 두부 꾸러미 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 씨앗을 심는 농부의 마음이
																	함께합니다
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20190213053136434.JPG">



																</span> <span class="txt_name">콩세알</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 푸드
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 2,921,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 97%;"></span> <span
																		class="invest_rate"> 97% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7749" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7749" class="project_detail_link"
																data-project-seq="7749" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191230044250987.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7749" class="project_detail_link"
																		data-project-seq="7749" data-page-number="1"> 아름다운
																		가치를 세상과 함께 하는 '아가세' </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 인지향상 통합 프로그램 개발
																	및 보급
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191226124650994.jpg">



																</span> <span class="txt_name">아가세(AGaSE)</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 교육/출판
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 1,530,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 100%;"></span> <span
																		class="invest_rate"> 153% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7740" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7740" class="project_detail_link"
																data-project-seq="7740" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191230014529654.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7740" class="project_detail_link"
																		data-project-seq="7740" data-page-number="1"> We
																		Care 프로젝트 : "우리는 요양보호사다!" </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 요양보호사 정서역량강화
																	통합적 코칭
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191121122420836.jpg">



																</span> <span class="txt_name">윈터그린케어</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 교육/출판
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 1,210,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 100%;"></span> <span
																		class="invest_rate"> 100% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7745" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7745" class="project_detail_link"
																data-project-seq="7745" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191231100148536.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7745" class="project_detail_link"
																		data-project-seq="7745" data-page-number="1"> 손으로
																		느끼고, 마음으로 읽는 숫자놀이 점자촉각책 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 시각장애아동을 위한
																	점자촉각책 보급
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191119105825637.jpg">



																</span> <span class="txt_name">(주)담심포</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 교육/출판
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 1,067,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 100%;"></span> <span
																		class="invest_rate"> 106% </span>
																</div>


																<span class="funding_type">성공해야 리워드</span>






															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7930" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7930" class="project_detail_link"
																data-project-seq="7930" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20200120114651587.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7930" class="project_detail_link"
																		data-project-seq="7930" data-page-number="1"> 블링하게
																		태어나, 한국설화를 담은 나만의 잇백! </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 포근한 누빔한복 원단 발그레
																	빅백
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191219124556398.jpg">



																</span> <span class="txt_name">달맞이꽃신</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 뷰티/패션
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 1,003,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 50%;"></span> <span
																		class="invest_rate"> 50% </span>
																</div>


																<span class="funding_type">성공해야 리워드</span>






															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7878" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7878" class="project_detail_link"
																data-project-seq="7878" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191231113904780.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7878" class="project_detail_link"
																		data-project-seq="7878" data-page-number="1"> 우리가
																		즐기면서 꾸준히 할 수 있는 것 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 우리에게도 같은 꿈이 있어요
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191231072225808.jpg">



																</span> <span class="txt_name">꿈마을</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 사회이슈
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 880,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 44%;"></span> <span
																		class="invest_rate"> 44% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7832" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7832" class="project_detail_link"
																data-project-seq="7832" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191230020037376.png')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7832" class="project_detail_link"
																		data-project-seq="7832" data-page-number="1"> 우리도
																		고민이 있고, 도와줄 사람이 필요해요. </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 부모처럼 친구처럼 멘토링
																	케어 서비스
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191227044201028.png">



																</span> <span class="txt_name">청봄</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 교육/출판
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 770,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 77%;"></span> <span
																		class="invest_rate"> 77% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7747" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7747" class="project_detail_link"
																data-project-seq="7747" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191230063232780.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7747" class="project_detail_link"
																		data-project-seq="7747" data-page-number="1"> 세상을
																		바꾸는 보드게임 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 소통과 세대화합을 위한
																	보드레크
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191121123013184.png">



																</span> <span class="txt_name">행복더올림협동조합</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 교육/출판
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 690,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 98%;"></span> <span
																		class="invest_rate"> 98% </span>
																</div>


																<span class="funding_type">성공해야 리워드</span>






															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7748" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7748" class="project_detail_link"
																data-project-seq="7748" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191230064124201.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7748" class="project_detail_link"
																		data-project-seq="7748" data-page-number="1"> 아는만큼
																		보인다, 미담과 함께 하는 베트남 여행 워크북 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 오래도록 기억에 남는 여행
																	만들기
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191223022715497.jpg">



																</span> <span class="txt_name">미담</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 교육/출판
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 655,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 65%;"></span> <span
																		class="invest_rate"> 65% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7813" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7813" class="project_detail_link"
																data-project-seq="7813" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191230111532243.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7813" class="project_detail_link"
																		data-project-seq="7813" data-page-number="1">
																		사업하시면서 궁금한점, 어려운점 여기 물어보세요! </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 지속가능한 경영지원 프로그램
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191211035619791.png">



																</span> <span class="txt_name">애플컴퍼니</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 교육/출판
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 550,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 27%;"></span> <span
																		class="invest_rate"> 27% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7637" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7637" class="project_detail_link"
																data-project-seq="7637" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191113085155445.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7637" class="project_detail_link"
																		data-project-seq="7637" data-page-number="1"> 미래
																		영화를 위한 365 끄트머리영화제 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 공개되지 못한 숨은 영화들의
																	축제
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191031043049769.jpg">



																</span> <span class="txt_name">신지승</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 문화예술
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 550,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 18%;"></span> <span
																		class="invest_rate"> 18% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7902" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7902" class="project_detail_link"
																data-project-seq="7902" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20200110040028609.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7902" class="project_detail_link"
																		data-project-seq="7902" data-page-number="1"> 우리
																		농산물을 담은 특별한 파베 초콜릿! </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 오디,도라지,오미자의 특별한
																	변신!
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20190108125929497.png">



																</span> <span class="txt_name">농업회사법인 주식회사 파밍순</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 푸드
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 437,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 87%;"></span> <span
																		class="invest_rate"> 87% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7855" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7855" class="project_detail_link"
																data-project-seq="7855" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20200103105313859.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7855" class="project_detail_link"
																		data-project-seq="7855" data-page-number="1"> 보육원
																		아이들이 입고 싶은 옷을 살 수 있도록 돕는 후드티 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 광덕고 호박벌 프로젝트 1탄
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191221092658357.jpg">



																</span> <span class="txt_name">호박벌</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 사회이슈
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 385,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 12%;"></span> <span
																		class="invest_rate"> 12% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7910" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7910" class="project_detail_link"
																data-project-seq="7910" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20200114102741984.JPG')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7910" class="project_detail_link"
																		data-project-seq="7910" data-page-number="1"> 눈앞에
																		생생하게 펼쳐지는 3D홀로그램 "홀로에듀" </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 상상력을 키워주는
																	3D홀로그램 교육
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20200107031648794.png">



																</span> <span class="txt_name">(주)쓰리디뱅크</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 교육/출판
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 175,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 8%;"></span> <span
																		class="invest_rate"> 8% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7880" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7880" class="project_detail_link"
																data-project-seq="7880" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20200113012014074.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7880" class="project_detail_link"
																		data-project-seq="7880" data-page-number="1">
																		발렌타인데이 싱글오리진 달모어 생초콜릿 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 소중한 사람에게 달모어를
																	선물하세요
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191230101713335.jpg">



																</span> <span class="txt_name">(주)디에이엘</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 푸드
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 93,240원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 18%;"></span> <span
																		class="invest_rate"> 18% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7831" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7831" class="project_detail_link"
																data-project-seq="7831" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191227070619782.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7831" class="project_detail_link"
																		data-project-seq="7831" data-page-number="1"> 내가
																		만드는 수학책 [연강수학] </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 수학과 절친되기 프로젝트
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191213022924846.jpg">



																</span> <span class="txt_name">수학제작소</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 교육/출판
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 57,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 5%;"></span> <span
																		class="invest_rate"> 5% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7862" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7862" class="project_detail_link"
																data-project-seq="7862" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191231111800131.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7862" class="project_detail_link"
																		data-project-seq="7862" data-page-number="1">
																		[토이픽스] 장난감, 지금 수리하러 갑니다! </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 장난감 수리 &amp;
																	업사이클링 프로젝트
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191223090436624.jpg">



																</span> <span class="txt_name">토이픽스</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 사회이슈
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 51,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 10%;"></span> <span
																		class="invest_rate"> 10% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7795" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7795" class="project_detail_link"
																data-project-seq="7795" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20200108031650464.png')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7795" class="project_detail_link"
																		data-project-seq="7795" data-page-number="1">
																		그립톡으로 기억하는 3.1운동 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 3.1절을 기억하는 기부
																	펀딩
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191205114904072.jpg">



																</span> <span class="txt_name">판교고 자율동아리 -집현전</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 사회이슈
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 40,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 3%;"></span> <span
																		class="invest_rate"> 3% </span>
																</div>


																<span class="funding_type">성공해야 리워드</span>






															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7906" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7906" class="project_detail_link"
																data-project-seq="7906" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20200123014049612.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7906" class="project_detail_link"
																		data-project-seq="7906" data-page-number="1">
																		동아방송예술대학 졸업영화 &lt;형광등&gt; 제작 프로젝트 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 선택에 관한 짧은 필름
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20190902052447055.jpg">



																</span> <span class="txt_name">박소진</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 문화예술
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 30,000원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 6%;"></span> <span
																		class="invest_rate"> 6% </span>
																</div>


																<span class="funding_type">성공해야 리워드</span>






															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="7785" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/7785" class="project_detail_link"
																data-project-seq="7785" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191206055041828.png')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/7785" class="project_detail_link"
																		data-project-seq="7785" data-page-number="1">
																		NLL연평해전 the hero of that day </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 연평해전 후원금 마련을 위한
																	프로젝트
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20191201042604590.jpg">



																</span> <span class="txt_name">(주)엠크릿</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 사회이슈
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 0원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 0%;"></span> <span
																		class="invest_rate"> 0% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="6804" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/6804" class="project_detail_link"
																data-project-seq="6804" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/uploads/reward/REWARD_20191226072803460.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/6804" class="project_detail_link"
																		data-project-seq="6804" data-page-number="1"> 청정
																		제주에서의 꽃과 딸기 체험농장 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 꽃과 딸기, 신선 채소를
																	담아가세요
																</p>














																<span class="user_profile"> <span
																	class="img_profile clear_empty_picture"> <img
																		src="/uploads/member/profile/MEMBER_20190506055523766.jpg">



																</span> <span class="txt_name">농업회사법인(주)제이제이에프</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 푸드
																</span>
															</div>
															<div class="project_state">


																<span class="total_amount"> <span
																	class="screen_out">현재 참여금액</span> 0원
																</span>
																<div class="project_card_graph">
																	<span class="screen_out">참여율</span> <span
																		class="bar_graph" style="width: 0%;"></span> <span
																		class="invest_rate"> 0% </span>
																</div>



																<span class="funding_type">무조건 리워드</span>





															</div>
														</div>
													</li>















													<li class="project_card reward_project_card"
														data-project-seq="153" data-page-number="1">
														<div class="project_card_inner">
															<a href="/reward/153" class="project_detail_link"
																data-project-seq="153" data-page-number="1"> <span
																class="project_thumbnail"
																style="background-image: url('/upload/VonList/00153_827_bon_blm_p02.jpg')"></span>
															</a>
															<div class="project_card_info">
																<span class="screen_out">프로젝트 제목</span>
																<h3 class="project_name">
																	<a href="/reward/153" class="project_detail_link"
																		data-project-seq="153" data-page-number="1"> 위안부
																		역사관 맨투맨티 제작 </a>
																</h3>
																<p class="project_simple_text">
																	<span class="screen_out">프로젝트 설명</span> 희움더클래식의 일본군 위안부
																	역사관 건립기금을 위한 표현,공감,참여 프로젝트입니다.
																</p>














																<span class="user_profile"> <span
																	class="img_profile"> </span> <span class="txt_name">블루밍
																		패션</span>
																</span> <span class="project_category"> <span
																	class="screen_out">카테고리</span> 공간/리빙
																</span>
															</div>
															<div class="project_state">



																<p class="state_text">
																	<span class="state_number">4,429</span>명이 프로젝트에 참여했습니다.<br>
																	총 <span class="state_number">175,759,111원</span> 모집<span
																		class="txt_success">성공</span>
																</p>


															</div>
														</div>
													</li>






												</div>
												<form class="payload" style="display: none;">
													<input class="total_project_count" type="hidden"
														value="1807">
												</form>

											</ul>
										</div>
									</ul>
								</div>
							</div>
						</div>
						
					</div>
				</article>
		</div>
	</div>
	</main>

	<!-- footer -->


	<!-- footer -->
	</div></div></div></div>



</body>
<jsp:include page="../common/footer.jsp"></jsp:include>
</html>
