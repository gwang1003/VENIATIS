<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/guidecss.css">
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
    
    
	<div id="omcWrap">
<main id="omcContainer" class="cont_mypage">
    <h2 id="omcBody" class="screen_out">마이페이지</h2>
    <div id="cMain">
        <article id="mContent" class="mypage_contactus">
            <header class="head_comm">
				<h1 class="tit_comm">문의하기</h1>
            </header>
            <div class="cont_comm">
				<div class="box_comm">
					

   	    <form name="addForm" method="post" action="question.do">
					<fieldset class="contact_form">
						<fieldset>
							<legend class="screen_out">문의하기</legend>
							<div class="form_field">
								<div class="field_group">
									<label for="inpTit" class="label_area">제목</label>
									<div class="input_area">
										<select name="qCategory" id="sel" style="display:inline-block">
											<option value="프로젝트 참여/투자">프로젝트 참여/투자</option>
											<option value="결제/환불">결제/환불</option>
											<option value="프로젝트 개설">프로젝트 개설</option>
											<option value="기능 오류">기능오류</option>
											<option value="기타 문의">기타 문의</option>
										</select>
									</div>
								</div>
								<br><br><br>
								<div class="field_group">
									<label for="inquiryContents" class="label_area">문의내용</label>
									<div class="input_area">
										<textarea name="qContent" id="content" cols="30" rows="10" class="tf_inquiry"></textarea>
									</div>
								</div>
							</div>
							<div class="button_area">
								<!-- 로그인 전 -->
								
								<!-- 로그인 후 -->
								
									<button class="btn_submit">문의 접수</button>
								
								
							</div>
						</fieldset>
					</fieldset>
		</form>		
				</div>
            </div>
        </article>
    </div>
</main>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>