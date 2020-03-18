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
		
		
		<div class="cMain">
			<article id="mContent" class="login_system">
				<h2 id="omcBody" class="tit_login">아이디/비밀번호찾기</h2>
				<ul class="tab_cont">
					<li><button type="button" onclick="location.href='idFindForm.do'" class="btn_tab">아이디 찾기</button></li>
					<li class="on"><button type="button" onclick="location.href='passFindForm.do'" class="btn_tab">비밀번호 찾기</button></li>
				</ul>
				<div id="frm" name="frm">
					<fieldset class="fld_comm">
						<legend class="tit_sub">임시비밀번호 받기</legend>
						<p class="txt_sub">가입하셨던 아이디와 이메일 계정을 입력하면,<br>임시비밀번호를 이메일로 발송해드립니다.</p>
						<label class="tf_comm">
							<input type="text" id="id" name="mId" class="tf_cont" placeholder="아이디를 입력해주세요">
						</label>
						<label class="tf_comm">
							<input type="text" id="email" name="mEmail" class="tf_cont" placeholder="이메일을 입력해주세요">
						</label>
						<button type="button" class="btn_submit">확인</button>
					</fieldset>
				</div>
			</article>
		</div>
	</main>
<script>
	$(".btn_submit").click(function(){
		var mId = $("input[name='mId']").val();
		var mEmail = $("input[name='mEmail']").val();
		$.ajax({
			url : "passFind.do",
			data:{mId:mId, mEmail:mEmail},
			type:"post",
			success : function(data){
				if(data == "fail") {
					alert("입력하신 정보로 조회되는 회원이 존재하지 않습니다.")
				}else {
					alert("입력하신 이메일로 임시 비밀번호를 보내드렸습니다.")
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