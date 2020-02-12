<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
#icon1{
 background-image:url("resources/project_creator/information.png");
	  background-size:70%;
	  background-position:50%;
	  background-repeat:no-repeat;
	 
}

#icon2{
 background-image:url("resources/project_creator/script.png");
	 background-size:70%;
	  background-position:50%;
	  background-repeat:no-repeat;
}

#icon3{
 background-image:url("resources/project_creator/reward.png");
	   background-size:70%;
	  background-position:50%;
	  background-repeat:no-repeat;
}

#icon4{
 background-image:url("resources/project_creator/money.png");
	  background-size:70%;
	  background-position:50%;
	  background-repeat:no-repeat;
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
							<li><a href="projectStartPage_reward.do" class="flow_reward" id="icon3">
									<span class="ico_comm ico_step3">리워드 아이콘</span>
							</a> <span class="fa fa-angle-right"></span>
								<div class="flow_cont">
									<p class="txt_step">리워드</p>
								</div></li>

							<li  class="on"><a href="#" class="flow_reward"
								id="icon4"> <span class="ico_comm ico_step5">정산 아이콘</span>
							</a>
								<div class="flow_cont">
									<p class="txt_step">정산</p>
								</div></li>
						</ol>

	                <div class="sheet_info">
	                	<div class="txt_area">
	                		<span class="txt_desc"><span class="txt_warning">*</span>은 필수입력 항목입니다.1</span>
							<p class="link_area">
								<a class="link_guide" href="/omc/download/apply/omc_reward_uploadguide_2019_2.pdf#page=18" title="업로드 가이드" target="_blank">업로드 가이드</a>
								<a class="link_guide" href="/guide/maker/reward#project_guide" title="정산 가이드" target="_blank">정산 가이드</a>
								<a class="link_prewindow" href="/reward/preview/8111" title="미리보기" target="_blank">미리보기</a>
							</p>
	                	</div>
	                	<!-- 개설자 정보 -->
	                	<div class="form_area">
		                    <form name="addForm" method="post" enctype="multipart/form-data">
								<fieldset class="fld_comm">
									<legend class="tit_sub"></legend>
									<ul>
										<li class="box_info">
											<p class="tit_name">펀딩시작일<span class="txt_warning">*</span></p>
											<p class="txt_input">
												<label for="tfFundingStart" class="tf_comm">
													
													<input type="text" id="investStartDate" name="investStartDate" value="" class="tf_cont input_hold">
												</label>
											</p>
											<button type="button" id="investStartDateButton" class="btn_calendar"><span class="ico_comm ico_calendar">캘린더 아이콘</span></button>
										</li>
										<li class="box_info">
											<p class="tit_name">펀딩마감일<span class="txt_warning">*</span></p>
											<p class="txt_input">
												<label for="tfFundingEnd" class="tf_comm">
                                                    
													<input type="text" id="investEndDate" name="investEndDate" value="" class="tf_cont input_hold">
												</label>
											</p>
											<button type="button" id="investEndDateButton" class="btn_calendar"><span class="ico_comm ico_calendar">캘린더 아이콘</span></button>
										</li>
										<!-- 2017-10-23 마크업 수정 -->
										<li class="box_info">
                                            <p class="tit_name">펀딩목표금액<span class="txt_warning">*</span></p>
                                            <p class="txt_input">
                                                <label for="targetAmt" class="tf_comm">
                                                <span class="placehoder"></span>
                                                <input type="text" id="targetAmt" name="targetAmt" value=""  class="tf_cont"  onkeydown="inputNumberFormat(this)">
                                                </label>
                                            </p>
											<span class="txt_won">원</span>
										</li>
										<li class="box_info">
                                            <p class="tit_name">리워드 배송비<span class="txt_warning">*</span></p>
                                            <p class="txt_input">
                                                <label for="deliveryAmt" class="tf_comm">
	                                                <span class="placehoder"></span>
	                                                <input type="text" id="deliveryAmt" name="deliveryAmt" value="0" class="tf_cont"  onkeydown="inputNumberFormat(this)">
                                                </label>
                                            </p>
											<span class="txt_won">원</span>
										</li>

										<!-- #543 기타서류추가 -->
										<li class="box_info box_file">
											<p class="tit_name">기타서류</p>
											<div class="txt_input input_full">
												<input class="upload_name" id="etcDocFileUpName" disabled="disabled">
												<label for="fileName3" class="btn_search">찾아보기</label>
												<input type="file" id="fileName3" name="etcDocFile" class="upload_hidden">
												
												<p class="txt_notice">
													※ 기타 프로젝트를 설명할 만한 서류나 리워드의 종류에 따라 프로젝트 피드백에서 추가 서류를 요청하는 경우 해당란에 첨부해주세요.
												</p>
											</div>
										</li>
                                        <li class="box_info">
											<div class="box_guide">
												<strong>안내문</strong>
												ㆍ입력한 프로젝트 신청 내용은 상단 미리보기를 통해 다시한번 확인해주세요.<br/>
												ㆍ접수된 프로젝트 심사는 영업일 기준 3 ~ 5일이 소요됩니다.<br/>
												ㆍ펀딩 시작 전까지 프로젝트 수정이 가능합니다. 마이페이지>개설 프로젝트>수정하기에서 진행해주세요.<br/>
												ㆍ펀딩 정산은 펀딩 종료 후 5 ~ 10일 가량이 소요됩니다.
											</div>
                                        </li>
									</ul>
								</fieldset>
							</form>
	                    </div>
	                    <!-- // 개설자 정보 -->
	                </div>
                    <div class="btn_area">
                        <input type="submit" class="btn_temporarily_save" title="임시저장" value="임시저장" onclick="fn_save('save');">
                        
                        
                        	<input type="submit" class="btn_enroll" title="프로젝트 접수" value="프로젝트 접수" onclick="alert('이전 단계를 모두 작성하셔야 프로젝트 접수를 하실 수 있습니다.');">
                        
                    </div>
                </div>
            </div>
			<!-- //신청서 -->
        </article>
    </div>
</div>
</div>
</div>
</div>
		<br><br><br>
		<br>
		<br>
		<jsp:include page="../common/footer.jsp"/>
</body>
</html>