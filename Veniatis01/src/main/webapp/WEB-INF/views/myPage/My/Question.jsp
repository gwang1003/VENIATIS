<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/guidecss.css">
</head>
<body class="login">
<jsp:include page="../../common/menubar.jsp"/>
<div id="omcIndex">
        <a href="#omcGnb" class="shortcut">주메뉴 바로가기</a>
        <a href="#omcSearch" class="shortcut">검색 바로가기</a>
        <a href="#omcBody" class="shortcut">본문 바로가기</a>
    </div>
    
    
	<div id="omcWrap">
   	    <form name="addForm" method="post">
<main id="omcContainer" class="cont_mypage">
    <h2 id="omcBody" class="screen_out">마이페이지</h2>
    <div id="cMain">
        <article id="mContent" class="mypage_contactus">
            <header class="head_comm">
				<h1 class="tit_comm">문의하기</h1>
            </header>
            <div class="cont_comm">
				<div class="box_comm">
					

					<fieldset class="contact_form">
						<fieldset>
							<legend class="screen_out">문의하기</legend>
							<div class="form_field">
								<div class="field_group">
									<label for="inpTit" class="label_area">제목</label>
									<div class="input_area">
										<input type="text" id="inpTit" name="title" class="tf_cont" value="[프로젝트 참여/투자 관련] ">
									</div>
								</div>
								<div class="field_group">
									<label for="inquiryContents" class="label_area">문의내용</label>
									<div class="input_area">
										<textarea name="content" id="content" cols="30" rows="10" class="tf_inquiry"></textarea>
									</div>
								</div>
							</div>
							<div class="button_area">
								<!-- 로그인 전 -->
								
								<!-- 로그인 후 -->
								
									<button type="button" class="btn_submit" onclick="fn_save()">문의 접수</button>
								
								
							</div>
						</fieldset>
					</fieldset>
				</div>
            </div>
        </article>
    </div>
</main>
		</form>
		
				<!-- 이미 신청한 프로젝트 입니다. -->
		<div class="modal" id="returnMessageDiv" style="display:none">
			<div class="modal_body">
				<div class="modal_container">
					<h1 class="screen_out"><a href="#none" class="modal_fir_focus"></a></h1>
					<div class="modal_cont static" id="returnMessage">
						
					</div>
					<div class="modal_btn">
						<button type="button" id="returnMessageDiv_close">확인</button>
					</div>
					<button type="button" title="모달창 닫기" class="modal_btn_close modal_last_focus" id="returnMessageDiv_close_btn"><img src="/omc/asset/images/modal_btn_close.png" alt="닫기"></button>
				</div>
			</div>
		</div>
		<!-- //이미 신청한 프로젝트 입니다. -->		
		
		
			

























<aside id="omcMyAccount" class="my_account">
	<h2 class="screen_out">나의계정 정보</h2>
	<div class="panel_account">
		








    
        
    
    

<span class="user_profile">
    <span class="img_profile clear_empty_picture">
        
            
                <img src="/uploads/member/profile/MEMBER_20200117021212416.png" style="background: rgb(255, 255, 255);">
            
            
        
    </span>
    <span class="txt_name">유수완</span>
</span>

		<div class="set_my_menu">
			<a href="/mypage/message/receive" class="btn_cont">
			<span class="fa fa-envelope"><span class="screen_out">메시지</span>
			</span><span class="num_count" id="message_count">0</span></a>
			<a href="/mypage/news" class="btn_cont"><span class="fa fa-bell"><span class="screen_out">알람</span></span><span class="num_count" id="news_count">0</span></a>
		</div>
		<ul class="list_mymenu">
			<li><a href="/mypage/message/receive" class="link_cont"><span class="mypage_icon_01"></span>메시지</a></li>
			<li><a href="/mypage/news" class="link_cont"><span class="mypage_icon_02"></span>최근소식</a></li>
			<li><a href="/mypage/account" class="link_cont"><span class="mypage_icon_03"></span>계정정보</a></li>
			<li><a href="/mypage/payment" class="link_cont"><span class="mypage_icon_04"></span>지불정보</a></li>
			<!--증권계좌관리가 삭제됨 2017.11.02 
			<li><a href="#none" class="link_cont">증권계좌관리</a></li>
			-->
			<li><a href="/mypage/investor" class="link_cont"><span class="mypage_icon_05"></span>투자자인증</a></li>
			<li><a href="/mypage/participant/reward" class="link_cont"><span class="mypage_icon_06"></span>참여 프로젝트</a></li>
			<li><a href="/mypage/open/reward" class="link_cont"><span class="mypage_icon_07"></span>개설 프로젝트</a></li>
			<li><a href="/mypage/interest" class="link_cont"><span class="mypage_icon_08"></span>관심프로젝트</a></li>
			<li><a href="/mypage/point" class="link_cont"><span class="mypage_icon_09"></span>포인트</a></li>
			<li><a href="/mypage/inquiry" class="link_cont"><span class="mypage_icon_10"></span>문의하기</a></li>
			<!-- 2018.04.02 삭제 정금화 <li><a href="/mypage/activity" class="link_cont"><span class="ico_comm"></span>Activity</a></li> -->
		</ul>

		<button type="button" class="btn_cont" id="btn_logout">로그아웃</button>

		<!-- 2017.11.09 액티비티 삭제 , 박희정  -->
		<!--
		<div class="cont_activity">
			<h3 class="tit_activity">Activity</h3>
			<ul class="list_activity">
				<li><span class="account_type1">18</span></li>
				<li><span class="account_type2">1</span></li>
				<li><span class="account_type3">3000</span></li>
				<li><span class="account_type4">82</span></li>
			</ul>
			<span class="ico_more">더보기</span>
		</div>
		-->
		<button type="button" class="btn_close">
			<span class="screen_out">마이페이지 닫기</span>
			<span class="line1"></span>
			<span class="line2"></span>
		</button>
	</div>
</aside>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>