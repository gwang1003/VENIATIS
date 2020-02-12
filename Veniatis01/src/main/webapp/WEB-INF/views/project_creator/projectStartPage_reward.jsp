<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
#icon1 {
	background-image: url("resources/project_creator/information.png");
	background-size: 70%;
	background-position: 50%;
	background-repeat: no-repeat;
}

#icon2 {
	background-image: url("resources/project_creator/script.png");
	background-size: 70%;
	background-position: 50%;
	background-repeat: no-repeat;
}

#icon3 {
	background-image: url("resources/project_creator/reward.png");
	background-size: 70%;
	background-position: 50%;
	background-repeat: no-repeat;
}

#icon4 {
	background-image: url("resources/project_creator/money.png");
	background-size: 70%;
	background-position: 50%;
	background-repeat: no-repeat;
}


</style>
<link rel="stylesheet" href="resources/css/guidecss.css">
<script type="text/javascript"
	src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet"
	href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
	<script src="resources/js/commonUtil.js"></script>
</head>
<body>
	<jsp:include page="../common/menubar.jsp" />
	<div id="omcContainer" class="cont_support">
		<h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>
		<div id="cMain">
			<article id="mContent" class="project_reward">
				<header class="head_comm">
					<h1 class="tit_comm">후원형 프로젝트 신청하기</h1>
				</header>

				<!-- 신청서 -->
				<div class="apply_cont apply_support">
					<div class="box_comm">
						<ol class="list_process">
							<li><a href="projectStartPage.do" class="flow_reward"
								id="icon1"> <span class="ico_comm ico_step1">개설자 정보
										아이콘</span>
							</a> <span class="fa fa-angle-right"></span>
								<div class="flow_cont">
									<p class="txt_step">개설자 정보</p>
								</div></li>
							<li><a href="projectStartPage2.do" class="flow_reward"
								id="icon2"> <span class="ico_comm ico_step2">프로젝트 스토리
										아이콘</span>
							</a> <span class="fa fa-angle-right"></span>
								<div class="flow_cont">
									<p class="txt_step">프로젝트 스토리</p>
								</div></li>
							<li class="on"><a href="#" class="flow_reward" id="icon3">
									<span class="ico_comm ico_step3">리워드 아이콘</span>
							</a> <span class="fa fa-angle-right"></span>
								<div class="flow_cont">
									<p class="txt_step">리워드</p>
								</div></li>

							<li><a href="projectStartPage_last.do" class="flow_reward"
								id="icon4"> <span class="ico_comm ico_step5">정산 아이콘</span>
							</a>
								<div class="flow_cont">
									<p class="txt_step">정산</p>
								</div></li>
						</ol>
						<!-- 여기까지 프로젝트 메뉴 -->

						<div class="sheet_info">
							<div class="txt_area">
								<span class="txt_desc"><span class="txt_warning">*</span>은
									필수입력 항목입니다.</span>
								<p class="link_area">
									
										<a class="link_prewindow" href="#" title="미리보기" target="_blank">미리보기</a>
								</p>
							</div>
							<div class="form_area bg_smoke">
								<form name="addForm" method="post">
									<fieldset class="fld_comm">
										<div class="tit_area">
											<legend class="tit_sub">
												리워드<span class="txt_warning">*</span>
											</legend>
											<button type="button" id="btn_add_file" class="btn_add">
												리워드 추가 <span>+</span>
											</button>
										</div>
										<ul id="reward_ul">

											<!-- 리워드 추가 시 하단의 .box_reward 가 반복 삽입 됩니다. -->
											<div class="add_reward">
												<li class="subtit_area">
													<p class="tit_sub" id="rewardSubject_0">리워드 1</p>
												</li>

												<ul>
													<li class="box_info">
														<p class="tit_name">금액</p>
														<p class="txt_input">
															<label for="rewardAmt_0" class="tf_comm">
															 <input type="text"	id="rewardAmt_0" name="rewardList[0].rewardAmt" value=""
															 class="tf_cont amt" onkeydown="inputNumberFormat(this)">
															</label>
														</p> <span class="txt_won">원</span></li>
														
													<li class="box_info">
														<p class="tit_name">리워드 구성</p>
														<p class="txt_input input_full">
															<label for="rewardTitle_0" class="tf_comm">  
															<input type="text" id="rewardTitle_0" name="rewardList[0].title" class="tf_cont title" 
															placeholder="ex) 성공하는 사람들을 위한 책 한 권 + 북콘서트 초대권 1매">
															</label>
														</p>
													</li>

													<li class="box_info box_radio">
														<ul>
															<li class="box_info">
																<p class="tit_name">리워드 선택옵션</p>
																<div class="check_area">
																	<input type="radio" id="rewardSelFlag1_0" name="rewardList[0].rewardSelFlag" value="N"
																		checked="checked" class="selOption" onclick="fn_selOption()">
																		<label for="rewardSelFlag1_0" class="radio_label">사용안함</label>
																	<input type="radio" id="rewardSelFlag2_0" name="rewardList[0].rewardSelFlag" value="Y"	
																	class="selOption" onchange="fn_selOption()">
																		<label for="rewardSelFlag2_0" class="radio_label">사용</label>
																		
																	<span class="txt_notice">※ 참여자가 리워드 옵션을 입력/선택해야하는 경우</span>
																	
																</div>
															</li>
															<li class="box_info">
																<p class="tit_name"></p>
																<p class="txt_input input_full">
																	<label for="rewardSelText_0" class="tf_comm">
																	  <input type="text" id="rewardSelText_0" name="rewardList[0].rewardSelText"
																		class="tf_cont input_hold" readonly="readonly" placeholder="ex) 리워드를 선택 시 원하는 컬러를 입력해주세요.">
																	</label>
																</p>
															</li>
														</ul>
													</li>
													<li class="box_info">
														<p class="tit_name">리워드 예상제공일</p>
														<p class="txt_input input_full">
															<label for="chkAll" class="chk_comm chk_accept">
																<input type="checkbox" id="chkAll" name="chkAll"
																class="inp_chk" onclick="fn_copyDeliveryDate($(this))">
																<span class="chk_square"><span
																	class="fa fa-check"></span></span> <span class="txt_cont">일괄적용</span>
															</label> <label for="rewardExpectText_0" class="tf_comm">
																<span class="placehoder">ex) 2020년 1월 1일부터 리워드 발송</span>
																<input type="text" id="rewardExpectText_0"
																name="rewardList[0].rewardExpectText" class="tf_cont">
															</label>
														</p>
													</li>
												</ul>
												</li>
											</div>


										</ul>
										<div id="add_area"></div>
									</fieldset>
								</form>
							</div>
							<!-- // 개설자 정보 -->
						</div>
						<div class="btn_area">
							<input type="submit" class="btn_temporarily_save" title="임시저장"
								value="임시저장" onclick="fn_save('save');"> <input
								type="submit" class="btn_next" title="다음단계" value="다음단계"
								onclick="javascript:location.href='projectStartPage_last.do';">
						</div>
					</div>
				</div>
				<!-- //신청서 -->
			</article>
		</div>
	</div>
	
	
	<script>
	// 제작중인데 모르겠음;
	function fn_selOption(){
        if($("#rewardSelFlag1_0").val()=='N'){
            $("#rewardSelText_0").val('');
            $("#rewardSelText_0").attr("readonly","readonly");
        }else if($("#rewardSelFlag1_0").val()=='Y'){
            $("#rewardSelText_0").removeAttr("readonly");
           
        }
    }
	
	
	</script>
	<jsp:include page="../common/footer.jsp"/>
</body>
</html>