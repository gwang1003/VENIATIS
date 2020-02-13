<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
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
<jsp:include page="menubar.jsp"></jsp:include>
<div class="wrapper">
	<header>
	<div class="container">
		<div class="heading">
			<div class="inner">
				<h2>공모전</h2>
				<p>다양한 아이디어공모전(경진대회) 정보를 확인하고 참여할 수 있는 공간입니다.</p>
			</div>
		</div>
		<div class="creativeWrap">
			<div class="contestSlide swiper-container">

				<div class="btnArea">
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
			<div class="srch contest-srch">
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
			</div>
			<div class="resultSearchBox clearfix">
				<div class="resultLeft">
					<p class="result">총 <span class="count">791</span>건</p>
				</div>
				<div class="resultRight">
					<ul class="typeSelect">
						<li class="thumbT on"><a href="#;" onclick="doListChange('IMAGE')">썸네일 선택</a></li>
						<li class="listT"><a href="#;" onclick="doListChange('LIST')">리스트 선택</a></li>
					</ul>
				</div>
			</div>

			<div class="thumbnail type3">
				<ul>
				
					<li>
						<a href="#" class="jsContestView" index="20191218000001">
							<span class="img"><img src="/file/download/20191218000048" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>대구창조경제혁신센터</li>
								<li><em>기간</em>
									
									12.18
									-
									
									01.15
								</li>
								<li><em>대상</em>누구나</li>
								<li><em>혜택</em>사업화 자금 2,000만원, 삼성전자 전문 멘토링, C-LAB 전용펀드 투자(우수기업에 한해 최대 5억 이내), 무상 사무공간 지원, 맞춤형 교육 및 액셀러레이팅</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20191121000001">
							<span class="img"><img src="/file/download/20191121000011" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>(재)울산창조경제혁신센터</li>
								<li><em>기간</em>
									
									11.20
									-
									
									12.31
								</li>
								<li><em>대상</em>누구나</li>
								<li><em>혜택</em>TIPS 운영사 매칭 및 액셀러레이팅 / 투자 연계 / 보육 지원</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20191127000001">
							<span class="img"><img src="/file/download/20191127000021" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>신한퓨처스랩</li>
								<li><em>기간</em>
									
									11.14
									-
									
									12.16
								</li>
								<li><em>대상</em>누구나</li>
								<li><em>혜택</em>협력기회제공, 사무공간 지원, 지분투자, 대기업 코퍼레이션 협력 기회 제공, 글로벌 진출 지원 등</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20191211000001">
							<span class="img"><img src="/file/download/20191211000038" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>한국전기산업진흥회(에너지밸리기업개발원)</li>
								<li><em>기간</em>
									
									12.02
									-
									
									12.13
								</li>
								<li><em>대상</em>기타</li>
								<li><em>혜택</em>최대 2천만원 ~ 3천만원 이내 차등 지급</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20191106000001">
							<span class="img"><img src="/file/download/20191107000075" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>중소벤처기업부</li>
								<li><em>기간</em>
									
									11.06
									-
									
									11.12
								</li>
								<li><em>대상</em>누구나</li>
								<li><em>혜택</em>참가비 전액 무료, 수료증 제공(교육  90%이상 이수조건)</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20191030000001">
							<span class="img"><img src="/file/download/20191030000073" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>울산창조경제혁신센터</li>
								<li><em>기간</em>
									
									10.28
									-
									
									11.11
								</li>
								<li><em>대상</em>누구나</li>
								<li><em>혜택</em>총상금 1,400만원 </li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20191008000001">
							<span class="img"><img src="/file/download/20191008000011" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>청출어남 롯데면세점 제주 프로젝트 운영사무국</li>
								<li><em>기간</em>
									
									10.04
									-
									
									10.25
								</li>
								<li><em>대상</em>기타</li>
								<li><em>혜택</em>창업 성장 사업비 지원 팀별 최대 4,000만원</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20191001000002">
							<span class="img"><img src="/file/download/20191001000071" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>대한건축학회, 한국감정원, 한국건설기술연구원, 건축도시공간연구소</li>
								<li><em>기간</em>
									
									09.23
									-
									
									10.11
								</li>
								<li><em>대상</em>기타</li>
								<li><em>혜택</em>공고문 참조(상장 및 상금 시상, 참가 특전 제공 등)</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20191001000001">
							<span class="img"><img src="/file/download/20191001000020" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>한국콘텐츠진흥원 인재양성팀</li>
								<li><em>기간</em>
									
									10.01
									-
									
									10.07
								</li>
								<li><em>대상</em>누구나</li>
								<li><em>혜택</em>강의/멘토링 및 엑셀러레이팅 지원</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20190920000001">
							<span class="img"><img src="/file/download/20190921000030" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>울산광역시</li>
								<li><em>기간</em>
									
									09.20
									-
									
									10.04
								</li>
								<li><em>대상</em>누구나</li>
								<li><em>혜택</em>2019 Slush 참가지원(공통, 8개사 이내), 노르웨이 액셀러레이팅 프로그램 참가지원(특화, 조선해양분야, 4개사 내외)</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20190903000001">
							<span class="img"><img src="/file/download/20190903000099" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>창업진흥원</li>
								<li><em>기간</em>
									
									09.04
									-
									
									09.30
								</li>
								<li><em>대상</em>기타</li>
								<li><em>혜택</em>참가비 전액 무료, 수료증 제공(교육  90%이상 이수조건)</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20190819000001">
							<span class="img"><img src="/file/download/20190819000045" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>한국지식재산보호원</li>
								<li><em>기간</em>
									
									08.01
									-
									
									09.30
								</li>
								<li><em>대상</em>누구나</li>
								<li><em>혜택</em>소정의 시상금(500,000원) 수여 및 수상작을 활용한 실패사례 수기 책자 발간(책자 발간 시 신청자 의사에 따라 기업 명칭 및 인물명 등은 가명 처리 예정)</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20190919000001">
							<span class="img"><img src="/file/download/20190919000046" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>국민대학교, 한국경제신문, 스마트디바이스산업협회</li>
								<li><em>기간</em>
									
									08.29
									-
									
									09.27
								</li>
								<li><em>대상</em>누구나</li>
								<li><em>혜택</em>총 상금 500만원</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20190906000001">
							<span class="img"><img src="/file/download/20190906000126" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>전라북도</li>
								<li><em>기간</em>
									
									09.02
									-
									
									09.23
								</li>
								<li><em>대상</em>누구나</li>
								<li><em>혜택</em>전라북도지사상 및 상금</li>
							</ul>
						</a>
					</li>
				
					<li>
						<a href="#" class="jsContestView" index="20190716000001">
							<span class="img"><img src="/file/download/20190908000046" alt="" /></span>
							<ul class="descript">
								<li><em>주최</em>과학기술정보통신부</li>
								<li><em>기간</em>
									
									07.17
									-
									
									09.15
								</li>
								<li><em>대상</em>누구나</li>
								<li><em>혜택</em>과학기술정보통신부장관상 및 디바이스 제작비 총 6천5백만원 지원</li>
							</ul>
						</a>
					</li>
				
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
