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
<style>
input{
    -webkit-appearance:checkbox;
}

#postcode1 {
	width:40%;
	height:35px;
	margin-bottom:15px; 
	
}

.postcodify_address, .postcodify_extra_info {
	height:35px;
	margin-bottom:15px;
}

#postcodify_search_button {
	background:darkgray;
	width:15%;
	height:35px;
	margin-bottom:15px;
	margin-left:5px;
}

.mUpdate {
	background:#f7f7f7;;
	width:20%;
	height:32px;
	margin:0;
	padding:0;
}

.mPwd {
	background:#40c8b5;
}
</style>
<body>
<jsp:include page="../../common/menubar.jsp"/>
    <main id="omcContainer" class="cont_mypage">
        <div id="cMain">
            <article id="mContent" class="mypage_account">
                <header class="head_comm">
                    <h1 class="tit_comm">
						회원 정보
                    </h1>
                </header>
                <div class="cont_comm">
                    <div class="box_comm">
                        <fieldset class="photo_field">
	                <form name="addForm" method="post" enctype="multipart/form-data" action="passUpdate.do" onsubmit="return updateValidate();">
	                	<fieldset class="box_field">
	                		<button type="button" class="mUpdate mInfo" onclick="location.href='memberUpdateForm.do'">회원정보</button><button type="button" class="mUpdate mPwd"onclick="location.href='passConfirm.do'">비밀번호변경</button>
			                <div class="fld_type1" align="center">
			                <br>
			                	<dl class="data_base">
                                    <dl class="data_base" >
                                        <dt><label for="tfPassword" class="tit_item">현재 비밀번호</label></dt>
                                        <dd>
				                		<span class="tf_comm">
											<input type="password" id="password" name="mPwd" class="tf_cont" placeholder="영문,숫자,특수문자를 포함한 10~16자리">
										</span>
										</dd>
									</dl>
									 <dl class="data_base">
                                        <dt><label for="tfPassword" class="tit_item">새 비밀번호</label></dt>
                                        <dd>
				                		<span class="tf_comm">
											<input type="password" id="passwd" name="newPwd" class="tf_cont" placeholder="영문,숫자,특수문자를 포함한 10~16자리">
										</span>
                                            <span class="tf_comm">
											<input type="password" id="passwdCheck" class="tf_cont" placeholder="비밀번호 확인" name="newPwd2">
										</span>
                                        </dd>
                                    </dl>
                                </dl>
			                </div>
						</fieldset>
					

                        <footer class="account_foot">
                            <div class="set_btn">
                                <button class="btn_sumbit">확인</button>
                            </div>
                        </footer>
                        </form>
                    </div>
                </div>
            </article>
        </div>
    </main>
</div>
<script>
	function updateValidate() {
		if($("#password").val() != "${loginUser.mPwd}") {
			alert("현재 비밀번호를 확인해주세요.")
			return false;
		}
		if(!(/^[a-zA-Z][a-zA-Z\d]{8,13}$/.test($("input[name=newPwd]").val()))){
            alert('비밀번호는 8자 이상 15자 미만으로 숫자와 영문(대, 소문자)만 입력해주세요(첫글자는영어만 사용가능)');
            $("#joinForm input[name=mPwd]").select();
            return false;
        }
		
		if($("input[name=newPwd]").val() != $("input[name=newPwd2]").val()){
			alert('새 비밀번호가 일치하지 않습니다.');
            return false;
        }
		return true;
	}

		$(".inp_photo").change(function(){
			var form = $("#ajaxform")[0];
			var formData = new FormData(form);
			formData.append("file", $("#inpPhoto")[0].files[0]);
			$.ajax({
				// url : 데이터를 전송할 url(필수!!!)
				url : "mPhotoUpdate.do",
				enctype: 'multipart/form-data',
				processData: false,
				contentType: false,
				// data : 요청 시 전달할 파라미터 설정
				data: formData,
				// key:value
				
				// type : 전송 방식(GET / POST)
				type : "POST",
				
				// success : Ajax 통신 성공 시 처리할 함수를 지정하는 속성
				success : function(data){
					$("#profileImg").attr("src", data)
				},
				
				// error : Ajax 통신 실패 시 처리할 함수를 지정하는 속성
				error : function(e){
					alert(e.status + ", message : <br>\n" + e.responseText);
	
				}					
			});
		})
</script>
<script src="//d1p7wdleee1q2z.cloudfront.net/post/search.min.js"></script>
<script> $(function() { $("#postcodify_search_button").postcodifyPopUp(); }); </script>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>