<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/guidecss.css">
</head>
<body>
<jsp:include page="../../common/menubar.jsp"/>

<main id="omcContainer" class="cont_main">
		<!-- aside -->
		
		<!--  aside -->
		<div class="cMain">
			<article id="mContent" class="login_system">
				<h2 id="omcBody" class="tit_login">아이디/비밀번호찾기</h2>
				<ul class="tab_cont">
					<li class="on"><button type="button" onclick="location.href='idFindForm.do'" class="btn_tab">아이디 찾기</button></li>
					<li><button type="button" onclick="location.href='passFindForm.do'" class="btn_tab">비밀번호 찾기</button></li>
				</ul>
				<form id="frm" name="frm" method="post" action="idFind.do"> 
					<fieldset class="fld_comm">
						<legend class="screen_out">아이디 찾기</legend>
						<h3 class="tit_sub">가입정보로 확인</h3>
						<span class="txt_sub">* 기존 가입 회원정보에 휴대전화번호가 등록 되어있지 않았을 경우, 아이디 찾기 서비스에 제한이 있을 수 있습니다.</span>
						<label class="tf_comm">
							<input type="text" name="mName" class="tf_cont" placeholder="이름">
						</label>
						<label class="tf_comm">
							<input type="tel" name="mPhone" class="tf_cont" placeholder="휴대폰번호( ‘-’ 없이 입력)">
						</label>
						<button class="btn_submit" type="button">확인</button>
					</fieldset>
				</form>
			</article>
		</div>
	</main>
<script>
	$(".btn_submit").click(function(){
		var mName = $("input[name='mName']").val();
		var mPhone = $("input[name='mPhone']").val();
		$.ajax({
			url : "idFind.do",
			data:{mName:mName, mPhone:mPhone},
			type:"post",
			success : function(data){
				if(data == "fail") {
					alert("입력하신 정보로 조회되는 아이디가 존재하지 않습니다.")
				}else {
					alert("회원님의 아이디는 " + data + "입니다.")
				}
			},
			
			// error : Ajax 통신 실패 시 처리할 함수를 지정하는 속성
			error : function(e){
				alert(e.status + ", message : <br>\n" + e.responseText);

			}					
		});
	})
</script>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>