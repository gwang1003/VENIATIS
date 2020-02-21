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
</style>
<body>
<c:if test="${ !empty msg }">
		<script>
			alert('${msg}');
		</script>
		<c:remove var="msg"/>
	</c:if>
<c:forTokens var="i" items="${loginUser.mInterest}" delims=",">
							<c:choose>
								<c:when test="${i eq '공간/리빙'}">
									<c:set var="checked1" value="checked"/>
								</c:when>
								<c:when test="${i eq '사회이슈'}">
									<c:set var="checked2" value="checked"/>
								</c:when>
								<c:when test="${i eq '교육/출판'}">
									<c:set var="checked3" value="checked"/>
								</c:when>
								<c:when test="${i eq '문화예술'}">
									<c:set var="checked4" value="checked"/>
								</c:when>
								<c:when test="${i eq '지역재생'}">
									<c:set var="checked5" value="checked"/>
								</c:when>
								<c:when test="${i eq '푸드'}">
									<c:set var="checked6" value="checked"/>
								</c:when>
								<c:when test="${i eq '테크'}">
									<c:set var="checked7" value="checked"/>
								</c:when>
								<c:when test="${i eq '뷰티/패션'}">
									<c:set var="checked8" value="checked"/>
								</c:when>
								<c:when test="${i eq '여행'}">
									<c:set var="checked9" value="checked"/>
								</c:when>
							</c:choose>
						</c:forTokens>	
<jsp:include page="../../common/menubar.jsp"/>
    <main id="omcContainer" class="cont_mypage">
<aside id="omcMyAccount" class="my_account">
	<h2 class="screen_out">나의계정 정보</h2>
	<div class="panel_account">

<span class="user_profile">
    <span class="img_profile clear_empty_picture">
                <img src="test.png">
    </span>
</span>
	</div>
</aside>
        <h2 id="omcBody" class="screen_out">마이페이지</h2>
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
                            <h3 class="screen_out">회원 이미지</h3>
                            <div class="user_photo">
		                	
		                		<span class="img_profile" id="img_profile">
		                			<img src="${loginUser.filePath }" width="115" id="profileImg">
		                		</span>
		                		<form id="ajaxform" method="post" enctype="multipart/form-data" action="asdf">
		                		<label for="inpPhoto" class="btn_edit">편집<input type="file" id="inpPhoto" name="inpPhoto" class="inp_photo" accept=".jpg,.png"></label>
		                		</form>
		                		<button type="button" class="btn_del" onclick="fn_fileDel()"><span class="ico_cross">프로필이미지 삭제</span></button>
	                		</div>
	                		<p class="txt_edit">※ 프로필 사진 권장 비율은 가로, 세로 1:1 입니다. (jpg, png)</p>
	                	</fieldset>
	    
	                <form name="addForm" method="post" enctype="multipart/form-data" action="memberUpdate.do" onsubmit="return updateValidate();">
	                	<fieldset class="box_field">
	                		<h3 class="tit_info">회원정보</h3>
	                		<p class="notice_vital"><span class="mark_vital">*</span>은 필수입력 항목입니다.</p>
			                <div class="fld_type1">
			                	<dl class="data_base">
			                		<dt><label for="tfId" class="tit_item">아이디</label></dt>
			                		<dd>
				                		<span class="tf_comm">
											<input type="text" class="tf_cont" name="mId"
                                                   value="${loginUser.mId }" readonly="readonly">
										</span>
                                        </dd>
                                    </dl>
                                    <dl class="data_base">
                                        <dt><label for="tfName" class="tit_item">이름<span
                                                class="mark_vital">*</span></label></dt>
                                        <dd>
				                		<span class="tf_comm">
											<input type="text" id="memberName" name="mName" class="tf_cont"
                                                   value="${loginUser.mName }">
										</span>
                                        </dd>
                                    </dl>
                                    <dl class="data_base">
                                        <dt><label for="tfPassword" class="tit_item">비밀번호</label></dt>
                                        <dd>
				                		<span class="tf_comm">
											<input type="password" id="passwd" name="mPwd" class="tf_cont" placeholder="영문,숫자,특수문자를 포함한 10~16자리">
										</span>
                                            <span class="tf_comm">
											<input type="password" id="passwdCheck" class="tf_cont" placeholder="비밀번호 확인" name="mPwd2">
										</span>
                                        </dd>
                                    </dl>
                                    <dl class="data_base">
                                        <dt><label for="tfEmail" class="tit_item">이메일<span
                                                class="mark_vital">*</span></label></dt>
                                        <dd>
			                			<span class="tf_comm">
											<input type="text" id="email" name="mEmail" class="tf_cont"
                                                   value="${loginUser.mEmail }">
										</span>
                                        </dd>
                                    </dl>
                                    <dl class="data_base">
                                        <dt><label for="tfBirth">생년월일</label></dt>
                                        <dd class="data_birth">
			                			<span class="tf_comm">
										<input type="text" id="birth" name="mBirth" class="tf_cont"
                                               value="${loginUser.mBirth }" maxlength="8">
										</span>
                                            <span class="txt_hint">생년월일 8자리 (예  2000년1월1일 > 20000101)</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><label for="tfPhone" class="tit_item">휴대폰번호<span class="mark_vital">*</span></label>
                                        </dt>
                                        <dd>
			                			<span class="tf_comm">
											<input type="text" id="mobile" name="mPhone" class="tf_cont"
                                                   value="${loginUser.mPhone }" maxlength="20">
										</span>
			                		</dd>
			                	</dl>
			                	<c:forTokens var="addr" items="${loginUser.mAddress }" delims="#"
								varStatus="status">
									<c:if test="${ status.index eq 0 }">
										<c:set var="addr1" value="${ addr }"/>
									</c:if>
									<c:if test="${ status.index eq 1 }">
										<c:set var="addr2" value="${ addr }"/>
									</c:if>
									<c:if test="${ status.index eq 2 }">
										<c:set var="addr3" value="${ addr }"/>
									</c:if>
								</c:forTokens>
			                	<dl id="goAddr">
			                		<dt><span class="tit_item">주소</span></dt>
			                		<dd class="date_addr">
			                			<input id="postcode1" name="post" class="postcodify_postcode5" placeholder=""
                                                maxlength="14" type="text" value="${addr1 }" readonly/> 
                                                <button type="button" id="postcodify_search_button">검색</button><br>
                                                <input type="text" name="address1" class="postcodify_address" value="${addr2 }" style="width:100%;" readonly/><br>
                                                <input type="text" name="address2" class="postcodify_extra_info" value="${addr3 }" style="width:100%;"/>
                                    </dd>
                                    <dt><span class="tit_item">관심분야</span></dt>
                                    <dd class="date_addr"><br>
                                        <input type="checkbox" name="mInterest" value="공간/리빙" ${checked1 }>&nbsp;공간/리빙&nbsp;&nbsp; <input type="checkbox" name="mInterest" value="사회이슈" ${checked2 }>&nbsp;사회이슈
                                        &nbsp;&nbsp; <input type="checkbox" name="mInterest" value="교육/출판" ${checked3 }>&nbsp;교육/출판<br>
                                        <input type="checkbox" name="mInterest" value="문화예술" ${checked4 }>&nbsp;문화예술&nbsp;&nbsp; <input type="checkbox" name="mInterest" value="지역재생" ${checked5 }>&nbsp;지역재생
                                        &nbsp;&nbsp; <input type="checkbox" name="mInterest" value="푸드" ${checked6 }>&nbsp;푸드<br>
                                        <input type="checkbox" name="mInterest" value="테크" ${checked7 }>&nbsp;테크&nbsp;&nbsp; <input type="checkbox" name="mInterest" value="뷰티/패션" ${checked8 }>&nbsp;뷰티/패션
                                        &nbsp;&nbsp; <input type="checkbox" name="mInterest" value="여행" ${checked9 }>&nbsp;여행<br>                                        
                                    </dd>



                                </dl>
                                

			                </div>
						</fieldset>
					

                        <footer class="account_foot">
                            <span id="link_leave" class="link_leave">회원탈퇴</span>
                            <div class="set_btn">
                                <button class="btn_sumbit">수정완료</button>
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
		if($("#passwd").val() == $("#passwdCheck").val()) {
			if($("#passwd").val() != "${loginUser.mPwd}") {
				alert("비밀번호를 확인해주세요.")
				return false;
			}
		}else {
			alert("비밀번호를 확인해주세요.")
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