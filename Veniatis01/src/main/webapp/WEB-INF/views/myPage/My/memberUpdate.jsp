<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
</style>
<body>
<jsp:include page="../../common/menubar.jsp"/>
<div id="omcWrap">
<span class="user_profile">
    <span class="txt_name"></span>
</span>          

    </div>
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
                    <h1 class="tit_comm">계정정보</h1>
                </header>
                <ul class="tab_cont">
                    <li class="on">
                        <button type="button" class="btn_tab">개인정보 수정</button>
                    </li>
                    <li>
                        <button type="button" class="btn_tab" onclick="location.href='#';">지불정보</button>
                    </li>
                </ul>
                <div class="cont_comm">
                    <div class="box_comm">
                        <fieldset class="photo_field">
                            <h3 class="screen_out">회원 이미지</h3>
                            <div class="user_photo">
		                	
		                		<span class="img_profile" id="img_profile">
		                			<img src="test.png" width="115">
		                		</span>
		                		<form id="ajaxform" method="post" enctype="multipart/form-data">
		                		<label for="inpPhoto" class="btn_edit">편집<input type="file" id="inpPhoto" name="inpPhoto" class="inp_photo" accept=".jpg,.png"></label>
		                		</form>
		                		<button type="button" class="btn_del" onclick="fn_fileDel()"><span class="ico_cross">프로필이미지 삭제</span></button>
	                		</div>
	                		<p class="txt_edit">※ 프로필 사진 권장 비율은 가로, 세로 1:1 입니다. (jpg, png)</p>
	                	</fieldset>
	    
	                <form name="addForm" method="post" enctype="multipart/form-data">
	                	<fieldset class="box_field">
	                		<h3 class="tit_info">회원정보</h3>
	                		<p class="notice_vital"><span class="mark_vital">*</span>은 필수입력 항목입니다.</p>
			                <div class="fld_type1">
			                	<dl class="data_base">
			                		<dt><label for="tfId" class="tit_item">아이디</label></dt>
			                		<dd>
				                		<span class="tf_comm">
											<input type="text" class="tf_cont"
                                                   value="tndhks123@nate.com" readonly="readonly">
										</span>
                                        </dd>
                                    </dl>
                                    <dl class="data_base">
                                        <dt><label for="tfName" class="tit_item">이름<span
                                                class="mark_vital">*</span></label></dt>
                                        <dd>
				                		<span class="tf_comm">
											<input type="text" id="memberName" name="memberName" class="tf_cont"
                                                   value="유수완">
										</span>
                                        </dd>
                                    </dl>
                                    <dl class="data_base">
                                        <dt><label for="tfPassword" class="tit_item">비밀번호</label></dt>
                                        <dd>
				                		<span class="tf_comm">
											<input type="password" id="passwd" name="passwd" class="tf_cont" placeholder="영문,숫자,특수문자를 포함한 10~16자리">
										</span>
                                            <span class="tf_comm">
											<input type="password" id="passwdCheck" class="tf_cont" placeholder="비밀번호 확인">
										</span>
                                        </dd>
                                    </dl>
                                    <dl class="data_base">
                                        <dt><label for="tfEmail" class="tit_item">이메일<span
                                                class="mark_vital">*</span></label></dt>
                                        <dd>
			                			<span class="tf_comm">
											<input type="text" id="email" name="email" class="tf_cont"
                                                   value="tndhks123@nate.com">
										</span>
                                        </dd>
                                    </dl>
                                    <dl class="data_base">
                                        <dt><label for="tfBirth">생년월일</label></dt>
                                        <dd class="data_birth">
			                			<span class="tf_comm">
										<input type="text" id="birth" name="birth" class="tf_cont"
                                               value="" maxlength="8">
										</span>
                                            <span class="txt_hint">생년월일 8자리 (예  2000년1월1일 > 20000101)</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><label for="tfPhone" class="tit_item">휴대폰번호<span class="mark_vital">*</span></label>
                                        </dt>
                                        <dd>
			                			<span class="tf_comm">
											<input type="text" id="mobile" name="mobile" class="tf_cont"
                                                   value="01048951214" maxlength="20">
										</span>
			                		</dd>
			                	</dl>
			                	<dl id="goAddr">
			                		<dt><span class="tit_item">주소</span></dt>
			                		<dd class="date_addr">
			                			<label for="memberPost" class="tf_comm tf_zip">
											<span class="placehoder" id="memberPostPlaceholder">우편번호</span>
											<input type="text" id="memberPost" name="memberPost" class="tf_cont" title="우편번호입력" readonly="readonly" value="">
										</label>
										<button type="button" id="zipbutton" class="link_zipcode">검색</button>
			                			<label for="memberAddr1" class="tf_comm">
											<span class="placehoder" id="memberAddr1Placeholder">기본주소</span>
											<input type="text" id="memberAddr1" name="memberAddr1" class="tf_cont" readonly="readonly" value="">
										</label>
			                			<label for="memberAddr2" class="tf_comm">
											<span class="placehoder">상세주소</span>
											<input type="text" id="memberAddr2" name="memberAddr2" class="tf_cont" value="">
										</label>
                                    </dd>
                                    <dt><span class="tit_item">관심분야</span></dt>
                                    <dd class="date_addr"><br>
                                        <input type="checkbox">&nbsp;공간 / 리빙&nbsp;&nbsp; <input type="checkbox">&nbsp;공간 / 리빙
                                        &nbsp;&nbsp; <input type="checkbox">&nbsp;공간 / 리빙<br>
                                        <input type="checkbox">&nbsp;공간 / 리빙&nbsp;&nbsp; <input type="checkbox">&nbsp;공간 / 리빙
                                        &nbsp;&nbsp; <input type="checkbox">&nbsp;공간 / 리빙<br>
                                        <input type="checkbox">&nbsp;공간 / 리빙&nbsp;&nbsp; <input type="checkbox">&nbsp;공간 / 리빙
                                        &nbsp;&nbsp; <input type="checkbox">&nbsp;공간 / 리빙<br>                                        
                                    </dd>



                                </dl>
                                

			                </div>
						</fieldset>
					
                        </form>

                        <footer class="account_foot">
                            <span id="link_leave" class="link_leave">회원탈퇴</span>
                            <div class="set_btn">
                                <button type="button" class="btn_sumbit" onclick="fn_save();">수정완료</button>
                            </div>
                        </footer>
                    </div>
                </div>
            </article>
        </div>
    </main>
</div>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>