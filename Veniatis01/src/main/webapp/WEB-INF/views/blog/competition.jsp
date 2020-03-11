<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> 
<html>
<head>
 <meta charset="utf-8">
	<title>Home</title>
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
	<style>
	#btn2{
	 background-color: #40c8b5;
	}
	*{
	font-family: 'Noto Sans KR', sans-serif;
	font-size:11pt;
	}
	</style>
	 <link rel="stylesheet" href="resources/css/공모전.css">

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</head>
<body>
<jsp:include page="../common/menubar.jsp"></jsp:include>
<div class="wrapper">
	<header>
	<div class="container">
		<div class="heading">
			<div class="inner">
				<h2>공모전</h2>
				<p>다양한 아이디어공모전 (경진대회) 정보를 확인하고 참여할 수 있는 공간입니다.</p>
			</div>
		</div>
		<div class="creativeWrap">
			<div class="contestSlide swiper-container">

				<div class="btnArea">
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
<!-- 			<div class="srch contest-srch">
				<div class="select-group">
					<span class="contest-cal select-group1 srch-group">
						<span class="calendar date-range">
							<span class="txt">
                                <label for="RGST_ST_YMD">시작일</label>
	                            <input type="text" id="RGST_END_YMD" name="RGST_END_YMD" class="calendar" value="" readonly>
							</span>
							<span class="dash">~</span>
							<span class="txt">
								<label for="RGST_END_YMD">종료일</label>
	                            <input type="text" id="RGST_END_YMD" name="RGST_END_YMD" class="calendar" value="" readonly>
							</span>
						</span>
					</span>
					<div class="select-group2">
						<span class="select"> <label for="SRCH_CTST_SRC_DCD">공모주최</label>
							<select id="SRCH_CTST_SRC_DCD" class="section-select" name="SRCH_CTST_SRC_DCD" style="font-size: 13px">
								<option value="ALL" selected='selected'>전체</option>
								<option value="00410001" >타운접수공모전</option>
								<option value="00410002" >외부공모전</option>
								<option value="00410003" >타운공개공모전</option>
							</select>
						</span> 
						<span class="select"> <label for="SRCH_CTST_STATUS">진행상태</label>
							<select id="SRCH_CTST_STATUS" class="section-select" name="SRCH_CTST_STATUS" style="font-size: 13px">
								<option value="ALL" >진행전체</option>
								<option value="01220002" >진행공모전</option>
								<option value="01220003" >지난공모전</option>
								<option value="01220001" >예정공모전</option>
							</select>
						</span>
					</div>
				</div>
				<div class="inBlock">
					<div class="inputWrap">
						<span class="select">
			                <label for="SEARCH_CONDITION">검색어</label>
			                <select id="SRCH_CTST_STATUS" class="section-select" name="SRCH_CTST_STATUS" style="font-size: 13px" >
			                    <option value="ALL">전체</option>
			                    <option value="TTLE">제목</option>
			                    <option value="CONT">내용</option>
			                </select>
						</span>
						<div class="inputSearch">
							<input type="text" id="SRCH_QUERY" class="search_input" name="SRCH_QUERY" value="">
							<a href="#" class="btnObjType jsContestSearch">검색</a>
						</div>
					</div>
				</div>
			</div> -->
			<div class="resultSearchBox clearfix">
				<div class="resultLeft">
					<p class="result">총 <span class="count">${fn:length(clist)} </span>건</p>

			</div>

			<div class="thumbnail type3">
				<ul>
				<c:forEach var="c" items="${clist}" > 
					<li>
						<a href="${c.conHp }" class="jsContestView" index="20191218000001">
							<span class="img"><img src="${c.filePath }" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>${c.conHost }</li>
								<li><em>기간</em>
									
									${c.startDate }
									-
									
									${c.lastDate }
								</li>
								<li><em>대상</em>${c.conTarget }</li>
								<li><em>혜택</em>${c.conBenefit }</li>
							</ul>
						</a>
					</li>
				</c:forEach>
				</ul>
			</div>


			<div class="pagination" style="display: block;"></div>
			<form id="frmContestView">
				<input type="hidden" id="SRCH_CTST_SRC_DCD" name="SRCH_CTST_SRC_DCD" value="ALL"> 
				<input type="hidden" id="SRCH_CTST_STATUS" name="SRCH_CTST_STATUS" value="ALL"> 
				<input type="hidden" id="SRCH_ORDER_BY" name="SRCH_ORDER_BY" value=""> 
				<input type="hidden" id="SRCH_QUERY" name="SRCH_QUERY" value="">
				<input type="hidden" id="SORT_UP_DOWN" name="SORT_UP_DOWN" value="DESC">
				<input type="hidden" id="LIST_TYPE" name="LIST_TYPE" value="IMAGE">
			</form>
			<div class="btnObjArea ar vt mt20">
				<!-- <a href="#" class="btnObjType2 blue medium jsContestPromote">공모전 등록 및 홍보신청</a> -->
				<!--  ※ 공모전을 개최하고자 하시는 분은 02-3299-6167로 연락 바랍니다. -->
			</div>
		</div>
	</div>

		<!-- LIBRARY JS-->







	</div>
</body>
</body>
</html>
