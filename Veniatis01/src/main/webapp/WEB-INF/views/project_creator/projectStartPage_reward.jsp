<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
							
						<li class="on"><a href="javascript:void(0)" class="flow_reward" id="icon3">
						</a> 
						 <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">리워드</p>
							</div></li>
					
						<li><a href="javascript:void(0)" class="flow_reward" id="icon4"></a>

							<div class="flow_cont">
								<p class="txt_step">정산</p>
							</div></li>
					</ol>

		<div class="sheet_info">
			<div class="txt_area">
				<span class="txt_desc"><span class="txt_warning">*</span>은
					필수입력 항목입니다.</span>
				<p class="link_area">

					<a class="link_prewindow" href="#" title="미리보기" target="_blank">미리보기</a>
				</p>
			</div>
			<div class="form_area bg_smoke">
				<form action="insertReward.do" name="addForm" method="post">
				<input type="hidden" value="${project.pNo }" name="pNo">
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
											<input	type="text" id="rewardAmt_0" name="rewards[0].rPrice" value=""class="tf_cont amt">
											</label>
										</p> <span class="txt_won">원</span>
									</li>

									<li class="box_info">
										<p class="tit_name">리워드 구성</p>
										<p class="txt_input input_full">
											<label for="rewardTitle_0" class="tf_comm">
											 <input	type="text" id="rewardTitle_0"	name="rewards[0].rItem" class="tf_cont title"
												placeholder="ex) 성공하는 사람들을 위한 책 한 권 + 북콘서트 초대권 1매">
											</label>
										</p>
									</li>
 									<li class="box_info box_radio">
                                        <p class="tit_name">수량구분</p>
                                        <div class="check_area">
                                            <input type="radio" id="amountCheck1_0" name="amountChecks_0" checked="checked" value="N" class="amount" onclick="fn_amount($(this))"><label for="amountCheck1_0" class="radio_label">수량무한</label>
                                            <input type="radio" id="amountCheck2_0" name="amountChecks_0" value="Y" class="amount" onclick="fn_amount($(this))"><label for="amountCheck2_0" class="radio_label">수량한정</label>
                                            <input type="number" id="rewardQty_0" name="rewards[0].rCount" class="limit_count"  readonly="readonly" value="0"><span class="txt_count">개</span>
                                        </div>
                                    </li>
									<li class="box_info box_radio">
										<ul>
											<li class="box_info">
												<p class="tit_name">리워드 선택옵션</p>
												<div class="check_area">
													<input type="radio" id="rewardSelFlag1_0" name="rewardList[0].rewardSelFlag" value="N"	checked="checked" class="selOption">
														<label	for="rewardSelFlag1_0" class="radio_label">사용안함</label>
													<input type="radio" id="rewardSelFlag2_0"	name="rewardList[0].rewardSelFlag" value="Y"
														class="selOption">
														<label	for="rewardSelFlag2_0" class="radio_label">사용</label>
													<span class="txt_notice">※ 참여자가 리워드 옵션을 입력/선택해야하는 경우</span>
												</div>
											</li>
											<li class="box_info">
												<p class="tit_name"></p>
												<p class="txt_input input_full">
													<label for="rewardSelText_0" class="tf_comm"> 
													<input	type="text" id="rewardSelText_0" name="rewards[0].rOption" class="tf_cont input_hold" readonly="readonly"
														placeholder="ex) 리워드를 선택 시 원하는 컬러를 입력해주세요.">
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
												
												<input type="text" id="rewardExpectText_0" placeholder="8자리 숫자로 입력해주세요 ex) 2020년 1월 1일 -> 20200101"
												name="rDelivery0" class="tf_cont">
											</label>
										</p>
									</li>
								</ul>
								</li>
							</div>


						</ul>
						<div id="add_area"></div>
					</fieldset>
			
			</div>
			<!-- // 개설자 정보 -->
		</div>
		<div class="btn_area">
			<!-- <input type="submit" class="btn_temporarily_save" title="임시저장" value="임시저장" onclick="fn_save('save');">  -->
				<input	type="submit" class="btn_next" title="다음단계" value="다음단계">
		</div>
			</form>
	</div>
</div>
<!-- //신청서 -->
		</article>
	</div>
</div>


<script>
function fn_copyDeliveryDate(obj){
    if($(obj).prop("checked")){
        $('.tf_cont.deliv').each(function(index) {
            $(this).val($("#rewardExpectText_0").val());
        });
    }
}

function fn_amount(obj){
	
    if(obj.val()=='N'){
        $(obj).parent().children(".limit_count").val(0);
        $(obj).parent().children(".limit_count").attr("readonly","readonly");
    }else if(obj.val()=='Y'){
        $(obj).parent().children(".limit_count").removeAttr("readonly");
        $(obj).parent().children(".limit_count").focus();
    }
}
  function fn_selOption(obj){
       if(obj.val()=='N'){
           $(obj).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").val(null);
           $(obj).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").attr("readonly","readonly");
           $(obj).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").removeClass("input");
           $(obj).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").addClass("input_hold");
       }else if(obj.val()=='Y'){
           $(obj).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").removeAttr("readonly");
           $(obj).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").removeClass("input_hold");
           $(obj).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").addClass("input");

       }
   }
  $(document).ready(function() {
	  $('input[type=radio][class=selOption]').change(function() {
          if($(this).val()=='N'){
              //$("#rewardSelFlag_0").val('N');
              $(this).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").val(null);
              $(this).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").attr("readonly","readonly");
              $(this).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").removeClass("input");
              $(this).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").addClass("input_hold");
          }else if($(this).val()=='Y'){
              //$("#rewardSelFlag_0").val('Y');
              $(this).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").removeAttr("readonly");
              $(this).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").removeClass("input_hold");
              $(this).parent().parent().siblings(".box_info").children(".txt_input").children(".tf_comm").children(".tf_cont").addClass("input");
          }
      });
  });
  
  function onlyNumber(obj) {
      $(obj).keyup(function(){
          $(this).val($(this).val().replace(/[^0-9]/g,""));
      });
  }
  
  $(function(){
      $('#btn_add_file').on("click",function(){
          addFileForm();
      });

      $(document).on('click', '.btn_delete', function(event) {
          var id = $(this).parent().parent().attr("id");
          if(id.match('seq')){
              id = id.split("_")[1];
              var delReward = $("#delReward").val();
              if(delReward.length > 0){
                  id = delReward+","+id
              }
              $("#delReward").val(id);
          }
          $(this).parent().parent().remove();
          rewardNumberOrder("p","rewardSubject_", "리워드");
      });
  });


  /* 리워드 넘버링 */
  function rewardNumberOrder(type,id, text){
      var num = 1;
      $(type+"[id^="+id+"]").each(function(idx, ele){
          $(this).html(text+" "+num)
          num++;
      });
  }

  var makeRewardDiv = 1;
  function addFileForm() {

      // - 리워드 번호를 입력하기 위한 Number ( ex ) 리워드, 리워드1, 리워드2....
      var rewardNum = $("#reward_ul > div").size();
      var addRewardNum = $("#add_area > div").size();
      rewardNum = rewardNum + addRewardNum + 1;
	if(rewardNum>3){
		alert('리워드는 3개까지만 추가가 가능합니다.')
	}else{
      // - 리워드 List를 위한 배열의 Number : rewardList[0], rewardList[1], rewardList[2], ....
      while($("#rewardAmt_"+makeRewardDiv).length > 0){
          makeRewardDiv++;
      }
      var html = '<div id="file'+ makeRewardDiv +'" class="add_reward">';
      
      html += '<br><hr><br><li class="subtit_area">';
      html += '<p class="tit_sub" id="rewardSubject_"'+rewardNum+'>리워드 '+rewardNum+'</p>';
      html += '	<button type="button" class="btn_delete">삭제</button></li>';
      html += '	<ul><li class="box_info">';
      html += '	<p class="tit_name">금액</p>';
      html += '	<p class="txt_input"><label for="rewardAmt_'+makeRewardDiv+'" class="tf_comm"><input type="text" id="rewardAmt_'+makeRewardDiv+'" name="rewards['+makeRewardDiv+'].rPrice" class="tf_cont amt"></label></p>';
      html += '	<span class="txt_won">원</span></li>';
      html += '	<li class="box_info">';
      html += '		<p class="tit_name">리워드 구성</p>';
      html += '		<p class="txt_input input_full">';
      html += '		<label for="rewardTitle_'+makeRewardDiv+'" class="tf_comm">';
      html += '			<input type="text" id="rewardTitle_'+makeRewardDiv+'" name="rewards['+makeRewardDiv+'].rItem" class="tf_cont title" placeholder="ex) 날아라 슈퍼보드 기념 티셔츠1개 + 감사의 손편지"></label></p></li>';
      html += '	<li class="box_info box_radio">';
      html += '		<p class="tit_name">수량구분</p>';
      html += '			<div class="check_area">';
      html += '				<input type="radio" id="amountCheck1_'+makeRewardDiv+'" name="amountChecks_'+makeRewardDiv+'" value="N"  checked="checked" class="amount" onclick="fn_amount($(this))"><label for="amountCheck1_'+makeRewardDiv+'" class="radio_label">수량무한</label>';
      html += '				<input type="radio" id="amountCheck2_'+makeRewardDiv+'" name="amountChecks_'+makeRewardDiv+'" value="Y"  class="amount" onclick="fn_amount($(this))"><label for="amountCheck2_'+makeRewardDiv+'" class="radio_label">수량한정</label>';
      html += '				<input type="number" id="rewardQty_'+makeRewardDiv+'" name="rewards['+makeRewardDiv+'].rCount" class="limit_count" readonly="readonly" value="0"><span class="txt_count">개</span></div></li>';
      html += '	<li class="box_info box_radio">';
      html += '		<ul><li class="box_info">';
      html += '			<p class="tit_name">리워드 선택옵션</p>';
      html += '			<div class="check_area">';
      html += '				<input type="radio" id="rewardSelFlag1_'+makeRewardDiv+'" name="rewardList['+makeRewardDiv+'].rewardSelFlag" value="N" checked="checked" class="selOption" onclick="fn_selOption($(this))"><label for="rewardSelFlag1_'+makeRewardDiv+'" class="radio_label">사용안함</label>';
      html += '				<input type="radio" id="rewardSelFlag2_'+makeRewardDiv+'" name="rewardList['+makeRewardDiv+'].rewardSelFlag" value="Y" class="selOption" onclick="fn_selOption($(this))"><label for="rewardSelFlag2_'+makeRewardDiv+'" class="radio_label">사용</label>';
      html += '			</div></li>';
      html += '		<li class="box_info">';
      html += '			<p class="tit_name"></p>';
      html += '			<p class="txt_input input_full">';
      html += '			<label for="rewardSelText_'+makeRewardDiv+'" class="tf_comm">';
      html += '				<input type="text" id="rewardSelText_'+makeRewardDiv+'" name="rewards['+makeRewardDiv+'].rOption" class="tf_cont input_hold" placeholder="ex) 리워드를 선택 시 원하는 컬러를 입력해주세요.">';
      html += '				</label></p></li></ul></li>';
      html += '	<li class="box_info">';
      html += '		<p class="tit_name">리워드 예상제공일</p>';
      html += '		<p class="txt_input input_full">';
      html += '		<label for="rewardExpectText_'+makeRewardDiv+'" class="tf_comm">';
      html += '			<input type="text" id="rewardExpectText_'+makeRewardDiv+'" name="rDelivery'+makeRewardDiv+'" placeholder="8자리 숫자로 입력해주세요 ex) 20200101" class="tf_cont deliv">';
      html += '			</label></p></ul></li>';
      $("#add_area").append(html);
	}
  }
  /*
  파일 삭제처리
*/
  var rewardDeleteSeqTemp = "";
  $(document).on("click",".deleteRewardSeq",function(){

      if(confirm("해당 리워드를 삭제하시겠습니까?")){
          var rewardSeq = $(this).parents().closest('.add_reward').find("[id^='rewardSeq']").val();
          //기존데이터가 있을경우 DB삭제 조건에 추가
          rewardDeleteSeqTemp = $("#rewardDeleteSeq").val();
          if(typeof rewardSeq != "undefined" && rewardSeq!=""){
              rewardDeleteSeqTemp +=rewardSeq+","
              if($("#rewardDeleteSeq").val().indexOf(rewardSeq) < 0){
                  $("#rewardDeleteSeq").val(rewardDeleteSeqTemp);
              }
              $(this).parents().closest('.add_reward').remove();
          }else{
              //추가 버튼을 이용해 추가한경우 SEQ값이 없음
              $(this).parents().closest('.add_reward').remove();
          }


          //리워드 넘버링 수정
          var len = 1;
          $(".add_reward >table>tbody").find('.rewardNum').each(function(index){
              $(this).html("리워드"+len);
              len=len+1;
          })

      }
      $(".cnt").find('strong').html($('.add_reward').length);

  })


</script>
<jsp:include page="../common/footer.jsp" />
</body>
</html>