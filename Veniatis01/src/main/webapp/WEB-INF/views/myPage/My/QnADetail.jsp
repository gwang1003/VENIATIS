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
					

		<c:if test="${loginUser.mId eq 'admin' }">
			<form name="addForm" method="post" action="Answer.do">
		</c:if>
		<c:if test="${loginUser.mId ne 'admin' }">
			<form name="addForm" method="post" action="question.do">
		</c:if>
					<fieldset class="contact_form">
						<fieldset>
							<legend class="screen_out">문의하기</legend>
							<div class="form_field">
								<div class="field_group">
									<label for="inpTit" class="label_area">제목</label>
									<div class="input_area">
										<input name="qCategory" id="sel" style="display:inline-block; height:40px;" value="${QnA.qCategory }" readonly>
									</div>
									<br><br>
									<div class="field_group">
									<label for="inquiryContents" class="label_area">문의내용</label>
									<div class="input_area">
										<textarea name="qContent" id="content" cols="30" rows="10" class="tf_inquiry" readonly>${QnA.qContent }</textarea>
									</div>
								</div>
								</div>
								<br>
								<div class="field_group">
									<label for="inquiryContents" class="label_area">답변내용</label>
									<div class="input_area">
										<c:if test="${loginUser.mId eq 'admin' }">
											<textarea name="qAnswer" id="content" cols="30" rows="10" class="tf_inquiry">${QnA.qAnswer }</textarea>
											<input type="hidden" name="qNo" value="${QnA.qNo }">
										</c:if>
										<c:if test="${loginUser.mId ne 'admin' }">
											<textarea name="qAnswer" id="qAnswer" cols="30" rows="10" class="tf_inquiry" readonly>${QnA.qAnswer }</textarea>
										</c:if>
									</div>
								</div>
							</div>
							<div class="button_area">
								<c:if test="${loginUser.mId eq 'admin' }">
									<button class="btn_submit" onclick="Answer.do">답변하기</button>
								</c:if>
								<c:if test="${loginUser.mId ne 'admin' }">
									<button type="button" class="btn_submit" onclick="deleteBtn()">삭제하기</button>
									<button type="button" class="btn_submit" onclick="location.href='myQnAList.do'">뒤로가기</button>
								</c:if>																
							</div>
						</fieldset>
					</fieldset>
		</form>		
				</div>
            </div>
        </article>
    </div>
</main>

<script>
	function deleteBtn(){
		if(confirm("정말로 삭제하시겠습니까?;")){
            location.href="QnADelete.do?qNo=${QnA.qNo}";
        }
	}
</script>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>