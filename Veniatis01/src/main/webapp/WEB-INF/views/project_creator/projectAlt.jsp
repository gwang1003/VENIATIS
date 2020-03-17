<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<link rel="stylesheet" href="resources/css/guidecss.css">
<script type="text/javascript"
	src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet"
	href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
<script
	src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="resources/js/commonUtil.js"></script>


</head>

<style>
#icon1 {
	background-image: url("resources/project_creator/information.png");
	background-size: 70%;
	background-position: 50%;
	background-repeat: no-repeat;
	cursor: default;
}

#icon2 {
	background-image: url("resources/project_creator/script.png");
	background-size: 70%;
	background-position: 50%;
	background-repeat: no-repeat;
	cursor: default;
}

#icon3 {
	background-image: url("resources/project_creator/reward.png");
	background-size: 70%;
	background-position: 50%;
	background-repeat: no-repeat;
	cursor: default;
}

#icon4 {
	background-image: url("resources/project_creator/money.png");
	background-size: 70%;
	background-position: 50%;
	background-repeat: no-repeat;
	cursor: default;
}
</style>
<body>
	<script>
		function sample4_execDaumPostcode() {
			new daum.Postcode(
					{
						oncomplete : function(data) {
							// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

							// 각 주소의 노출 규칙에 따라 주소를 조합한다.
							// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
							var addr = ''; // 주소 변수
							var extraAddr = ''; // 참고항목 변수

							//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
							if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
								addr = data.roadAddress;
							} else { // 사용자가 지번 주소를 선택했을 경우(J)
								addr = data.jibunAddress;
							}

							// 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
							if (data.userSelectedType === 'R') {
								// 법정동명이 있을 경우 추가한다. (법정리는 제외)
								// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
								if (data.bname !== ''
										&& /[동|로|가]$/g.test(data.bname)) {
									extraAddr += data.bname;
								}
								// 건물명이 있고, 공동주택일 경우 추가한다.
								if (data.buildingName !== ''
										&& data.apartment === 'Y') {
									extraAddr += (extraAddr !== '' ? ', '
											+ data.buildingName
											: data.buildingName);
								}
								// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
								if (extraAddr !== '') {
									extraAddr = ' (' + extraAddr + ')';
								}
							}
							// 우편번호와 주소 정보를 해당 필드에 넣는다.
							document.getElementById('postcode1').value = data.zonecode;
							document.getElementById("addr1").value = addr;
							// 커서를 상세주소 필드로 이동한다.
							document.getElementById("addr2").focus();
						}
					}).open();
		}
		<!--
	// 우편번호 서비스 -->
	</script>

	<jsp:include page="../common/menubar.jsp" />
	<div id="omcContainer" class="cont_support">
		<h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>

		<div class="cMain">

			<header class="head_comm">
				<br>
				<h1 class="tit_comm">후원형 프로젝트 수정하기</h1>
			</header>

			<!-- 신청서 -->
			<div class="apply_cont apply_support">
				<div class="box_comm">
					<ol class="list_process">
						<li class="on"><a href="javascript:void(0)"
							class="flow_reward" id="icon1"> </a> <span
							class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">개설자 정보</p>
							</div></li>

						<li><a href="javascript:void(0)" class="flow_reward"
							id="icon2"> </a> <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">프로젝트 스토리</p>
							</div></li>

						<li><a href="javascript:void(0)" class="flow_reward"
							id="icon3"> </a> <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">리워드</p>
							</div></li>

						<li><a href="javascript:void(0)" class="flow_reward"
							id="icon4"></a>

							<div class="flow_cont">
								<p class="txt_step">정산</p>
							</div></li>
					</ol>

					<form action="creatorUpdate.do" name="addForm" method="post"
						enctype="multipart/form-data">
						
						<div class="sheet_info">
							<input type="hidden" id="mNo" name="mNo" value="${project.creNo}">
							<input type="hidden" id="pNo" name="pNo" value="${project.pNo }">
	

							<div class="txt_area">
								<span class="txt_desc"><span class="txt_warning">*</span>은
									필수입력 항목입니다.</span>
								
							</div>
							<!-- 개설자 정보 -->


							<div class="form_area">

								<fieldset class="fld_comm">
									<ul>
										<li class="box_info">
											<p class="tit_name">
												개설자명<span class="txt_warning">*</span>
											</p>
											<p class="txt_input">

												<!-- 로그인 유저로부터 정보를 받아오기 -->

												<label for="tfName" class="tf_comm"> <span
													class="placehoder"></span> <input type="text" id="creName"
													class="tf_cont" value="${creator.creName}" name="creName">
												</label>
											</p>
										</li>
										<li class="box_info">
											<p class="tit_name">
												이메일<span class="txt_warning">*</span>
											</p>
											<p class="txt_input input_full">
												<label for="tfId" class="tf_comm"> <input
													type="email" id="userMail" class="tf_cont" name="creEmail"
													value="${creator.creEmail}">
												</label>
											</p>
										</li>
										<li class="box_info">
											<p class="tit_name">
												휴대폰번호<span class="txt_warning">*</span>
											</p>
											<p class="txt_input input_full">
												<label for="tfHpNumber" class="tf_comm"> <input
													type="tel" id="userHp" class="tf_cont" name="crePhone"
													value="${creator.crePhone}" placeholder="‘-’ 없이 입력">
												</label>
											</p>
										</li>
										<li class="box_info box_post">
											<ul>
												<li class="box_info inner_post">


													<p class="tit_name">
														주소<span class="txt_warning">*</span>
													</p>
													<p class="txt_input input_mini">

														<c:forTokens var="addr" items="${ creator.creAddress }"
															delims="#" varStatus="status">
															<c:if test="${ status.index eq 0 }">
																<c:set var="addr1" value="${ addr }" />
															</c:if>
															<c:if test="${ status.index eq 1 }">
																<c:set var="addr2" value="${ addr }" />
															</c:if>
															<c:if test="${ status.index eq 2 }">
																<c:set var="addr3" value="${ addr }" />
															</c:if>
														</c:forTokens>

														<label for="userPost" class="tf_comm"> <input
															type="text" id="postcode1" class="tf_cont input_hold"
															readonly="readonly" name="userPost" value="${ addr1 }"
															placeholder="우편번호">
														</label>
													</p>
													<button type="button" id="zipbutton" class="btn_postsearch"
														onclick="sample4_execDaumPostcode()">우편번호 검색</button>
												</li>
												<li class="box_info">
													<p class="tit_name"></p>
													<p class="txt_input input_full">
														<label for="userAddr1" class="tf_comm"> <input
															type="text" id="addr1" class="tf_cont input_hold"
															readonly="readonly" name="userAddr1" value="${ addr2 }"
															placeholder="기본주소">
														</label>
													</p>
												</li>
												<li class="box_info">
													<p class="tit_name"></p>
													<p class="txt_input input_full">
														<label for="userAddr2" class="tf_comm"> <input
															type="text" id="addr2" class="tf_cont" name="userAddr2"
															value="${ addr3 }" placeholder="상세주소">
														</label>
													</p>
												</li>
											</ul>
										</li>


										<li class="box_info">
											<p class="tit_name">홈페이지</p>
											<p class="txt_input input_full">
												<label for="tfHomepage" class="tf_comm"> <input
													type="text" id="homeUrl" class="tf_cont" name="creUrl"
													value="${creator.creUrl }">
												</label>
											</p>
										</li>


									</ul>
								</fieldset>

							</div>

							<div class="btn_area">

								<input type="submit" class="btn_next" title="다음단계" value="다음단계">
							</div>
					</form>

				</div>


			</div>

		</div>
	</div>


	<jsp:include page="../common/footer.jsp" />

</body>
</html>