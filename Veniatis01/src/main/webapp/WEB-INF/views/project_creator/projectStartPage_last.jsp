<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!-- @@@@@@@ 중요 @@@@@@@@@


datepicker가 menubar를 include하면 맛이 가버림
매뉴바 수동 include하던가 이 페이지에서 뺴던가 해야함

임시로 메뉴바 빼놈



 -->
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
	  cursor: default;
	 
}

#icon2{
 background-image:url("resources/project_creator/script.png");
	 background-size:70%;
	  background-position:50%;
	  background-repeat:no-repeat;
	  cursor: default;
}

#icon3{
 background-image:url("resources/project_creator/reward.png");
	   background-size:70%;
	  background-position:50%;
	  background-repeat:no-repeat;
	  cursor: default;
}

#icon4{
 background-image:url("resources/project_creator/money.png");
	  background-size:70%;
	  background-position:50%;
	  background-repeat:no-repeat;
	  cursor: default;
}



#icon5{
 background-image:url("resources/project_creator/calendar.png");
		 background-size:100%;
	  background-position:50%;
	  background-repeat:no-repeat;
}

#icon6{
 background-image:url("resources/project_creator/calendar.png");
	  background-size:100%;
	  background-position:50%;
	  background-repeat:no-repeat;
}
</style>
<link rel="stylesheet" href="resources/css/guidecss.css">
   <script type="text/javascript"	src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
<script src="resources/js/commonUtil.js"></script> 
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.0/themes/base/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
<script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>


<script>


	$(function() {
		$( "#investStartDate" ).datepicker({
    		minDate: 0, 
    		dateFormat : 'yy-mm-dd',
    		onSelect: function(selected,evnt)
    	      {
    	         //3. 좌측 달력에서 날짜를 선택하면 우측 달력은 좌측 달력에서 선택된 날짜 이전으로 월 & 일 이동 불가
    	         var day = $("#investStartDate").datepicker('getDate');
    	         $('#investEndDate').datepicker('option','minDate', day);//오른쪽달력 minDate 옵션으로 왼쪽달력의 선택된 날짜를 지정
    	      }
			});
	});

	$(function() {
		$( "#investEndDate" ).datepicker({
			minDate: 0, 
    		dateFormat : 'yy-mm-dd'
			});
	});

	
$(document).on("click","#investStartDateButton",function(){
	$('#investStartDate').datepicker().datepicker("show");
});		
$(document).on("click","#investEndDateButton",function(){
	$('#investEndDate').datepicker().datepicker("show");
});				
</script>
</head>
<body>

 <jsp:include page="../common/secondMenubar.jsp" />  

<div id="omcContainer" class="cont_support">
		<h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>
		
		<header class="head_comm">
		<br>
					<h1 class="tit_comm">후원형 프로젝트 신청하기</h1>
				</header>

				<!-- 신청서 -->
			<div class="apply_cont apply_support">
				<div class="box_comm">

					<ol class="list_process">
						<li><a href="javascript:void(0)" class="flow_reward" id="icon1"> </a>
						 <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">개설자 정보</p>
							</div></li>
							
						<li><a href="javascript:void(0)" class="flow_reward" id="icon2">
						</a> 
						 <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">프로젝트 스토리</p>
							</div></li>
							
						<li><a href="javascript:void(0)" class="flow_reward" id="icon3">
						</a> 
						 <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">리워드</p>
							</div></li>
					
						<li class="on"><a href="javascript:void(0)" class="flow_reward" id="icon4"></a>

							<div class="flow_cont">
								<p class="txt_step">정산</p>
							</div></li>
					</ol>

	                <div class="sheet_info">
	                	<div class="txt_area">
	                		<span class="txt_desc"><span class="txt_warning">*</span>은 필수입력 항목입니다.</span>
							
	                	</div>
	                	<!-- 개설자 정보 -->
	                	<div class="form_area">
		                    <form action="finishProject.do"name="addForm" method="post" enctype="multipart/form-data" onsubmit="return fn_validateCheck();">
		                    <input type="hidden" value="${project.pNo }" name="pNo"> 
								<fieldset class="fld_comm">
									<legend class="tit_sub"></legend>
									<ul>
										<li class="box_info">
											<p class="tit_name">펀딩시작일<span class="txt_warning">*</span></p>
											<p class="txt_input">
												<label for="tfFundingStart" class="tf_comm">	
													<input type="text" id="investStartDate" name="pStartDate_str" value="" class="tf_cont input_hold">
												</label>
											</p>
											
											 <button type="button" id="investStartDateButton" class="btn_calendar"><span class="ico_comm ico_calendar" id="icon5">캘린더 아이콘</span></button>
										</li>
										<li class="box_info">
											<p class="tit_name">펀딩마감일<span class="txt_warning">*</span></p>
											<p class="txt_input">
												<label for="tfFundingEnd" class="tf_comm">
                                                    
													<input type="text" id="investEndDate" name="pEndDate_str" value="" class="tf_cont input_hold">
												</label>
											</p>
											<button type="button" id="investEndDateButton" class="btn_calendar"><span class="ico_comm ico_calendar" id="icon6">캘린더 아이콘</span></button>
										</li>
										<!-- 2017-10-23 마크업 수정 -->
										<li class="box_info">
                                            <p class="tit_name">펀딩목표금액<span class="txt_warning">*</span></p>
                                            <p class="txt_input">
                                                <label for="targetAmt" class="tf_comm">
                                             
                                                <input type="text" id="targetAmt" name="pTargetAmount" value=""  class="tf_cont">
                                                </label>
                                            </p>
											<span class="txt_won">원</span>
										</li>
									                                         									
									
										
									<li>
									<ul>
										<li class="box_info box_radio">
											  <p class="tit_name">계좌번호<span class="txt_warning">*</span></p>
                                            <p class="txt_input">
                                                <label for="deliveryAmt" class="tf_comm">
	                                                <span class="placehoder"></span>
	                                                <input type="text" id="deliveryAmt" name="pAccount_num" class="tf_cont" placeholder="- 제외하고 숫자만 입력해주세요">
                                                </label>
                                            </p>
										</li>
									</ul>
									<br>
									<ul class="projectUrlField">
										<li class="box_info box_group">
											<p class="tit_name">은행선택<span class="txt_warning">*</span></p>
											<div class="box_select">
												<select class="select_sort" id="groupCate" name="pAccount_bank" title="은행">
													<option>선택</option>
													
													<option value="KB국민은행" >KB국민은행</option>
													<option value="신한은행" >신한은행</option>													
													<option value="우리은행" >우리은행</option>													
													<option value="하나은행" >하나은행</option>													
													<option value="농협은행" >농협은행</option>													
													<option value="제일은행" >SC제일은행</option>													
													<option value="외환은행" >외환은행</option>													
													<option value="카카오뱅크" >카카오뱅크</option>
													
												</select>
											</div>
										</li>
									</ul>
									</li>
									

										
										</li>

                                        <li class="box_info">
											<div class="box_guide">
												<strong>안내문</strong>
												ㆍ접수된 프로젝트 심사는 영업일 기준 3 ~ 5일이 소요됩니다.<br/>
												ㆍ펀딩 시작 전까지 프로젝트 수정이 가능합니다. 마이페이지>개설 프로젝트>수정하기에서 진행해주세요.<br/>
												ㆍ펀딩 정산은 펀딩 종료 후 5 ~ 10일 가량이 소요됩니다.
											</div>
                                        </li>
									</ul>
								</fieldset>
							
	                    </div>
	                    <!-- // 개설자 정보 -->
	                </div>
                    <div class="btn_area">
                     <!--    <input type="submit" class="btn_temporarily_save" title="임시저장" value="임시저장" onclick="fn_save('save');"> -->
                        
                        
                        	<input type="submit" class="btn_enroll" title="프로젝트 접수" value="프로젝트 접수">
                        
                    </div>
                    </form>
                </div>
            </div>
			<!-- //신청서 -->
     
    </div>

		<br><br><br>
		<br>
		<br>
		<jsp:include page="../common/footer.jsp"/>
		
<script>
function fn_validateCheck(){
    var targetAmt = uncomma(jQuery('#targetAmt').val());
    var deliveryAmt = uncomma(jQuery('#deliveryAmt').val());
	if(isEmpty(jQuery('#investStartDate').val())){
		alert("펀딩시작일을 입력하세요.");
		jQuery('#investStartDate').focus();
		return false;
	}
	if(isEmpty(jQuery("#investEndDate").val())){
		alert("펀딩마감일을 입력하세요.");
		jQuery('#investEndDate').focus();
		return;
	}
	if(isEmpty(targetAmt)){
		alert("펀딩목표금액을 입력하세요.");
		jQuery('#targetAmt').focus();
		return;
	}

	return true;
} 		
		
</script>


</body>
</html>