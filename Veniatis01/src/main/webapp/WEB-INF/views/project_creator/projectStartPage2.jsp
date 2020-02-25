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



.btn_search {
	margin-top: 7px;
}

#red_icon {
	background-image: url("resources/project_creator/cross.png");
	background-size: 100%;
	background-position: 50%;
	background-repeat: no-repeat;
}



#box_select {

	float: left;

}
</style>
<link rel="stylesheet" href="resources/css/guidecss.css">
<script type="text/javascript"	src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet"	href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
<script src="resources/js/commonUtil.js"></script>
<script>
var num = 1;
$(document).ready(function() {;

$("input[name=inputHashTag]").keydown(function (key) {
	
    if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
        if($("#inputHashTag").val().length==0){
            alert("태그는 1글자 이상 입력해주세요.");
            return false;
        } else {
            if($(".hashtag").length>4){
                alert("태그는 5개까지 입력 가능합니다.");
                return false;
            } else {
                $(".inner_hashtag").append("<div class='hashtag'><span>#"+$("#inputHashTag").val()+"<input type='hidden' value='"+$("#inputHashTag").val()+"' id='tag"+num+"' ></span><button type='button' class='ico_comm' id='red_icon'>X 아이콘</button></div>");
                num = num +1;
                $("#inputHashTag").val('');
                return false;
            }
        }
    }

});
$(document).on("click", ".hashtag .ico_comm", function() {
num = num -1;
    $(this).parent('div').remove();
    return false;
});
});
</script>
</head>
<body>
<jsp:include page="../common/menubar.jsp"/>
	<div id="omcContainer" class="cont_support">
	<br>
		<h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>
		<div id="cMain">
			<header class="head_comm">
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
							
						<li class="on"><a href="javascript:void(0)" class="flow_reward" id="icon2">
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
					
						<li><a href="javascript:void(0)" class="flow_reward" id="icon4"></a>

							<div class="flow_cont">
								<p class="txt_step">정산</p>
							</div></li>
					</ol>
					
			<div class="sheet_info">
				<div class="form_area">
					<form action="projectInsert.do" name="addForm" method="post" enctype="multipart/form-data" onsubmit="return fn_validateCheck()">
						<input type="hidden" value="${creator.creNo }" name="creNo">
						<input type="hidden" value="${creator.creUrl }" name="creUrl">
						<fieldset class="fld_comm">
							
							<ul>
								<li class="box_info">
									<p class="tit_name">프로젝트 분야</p>
									<div id="box_select">
										<select  id="projectCate" name="pcNo" title="프로젝트 분야">	
											<option value="1">공간/리빙</option>
											<option value="2">사회이슈</option>
											<option value="3">교육/출판</option>
											<option value="4">문화예술</option>
											<option value="5">지역재생</option>
											<option value="6">푸드</option>
											<option value="7">테크</option>
											<option value="8">뷰티/패션</option>
											<option value="9">여행</option>
										</select>
									</div>
								</li>
								<li class="box_info">
									<p class="tit_name">
										프로젝트 제목<span class="txt_warning">*</span>
									</p>
									<p class="txt_input input_mid">
										<label for="tfTitle" class="tf_comm"> 
										<input	type="text" id="projectName" name="pTitle"
											class="tf_cont" value="" maxlength="35" placeholder="최대 35글자까지 가능합니다.">
										</label>
									</p>
									
								</li>
								<li class="box_info box_file">
									<ul id="file_area">
										<li class="box_info">
											<p class="tit_name">
												프로젝트 이미지<span class="txt_warning">*</span>
											</p>
											<p>
												<button type="button" id="btn_add_file" class="btn_add" onclick="fn_imgAdd()">
													이미지파일 추가 <span>+</span>
												</button>												
											</p>
										</li>
									
										<li class="box_info">
											<p class="tit_name txt-right">(대표)이미지</p>
											<div class="txt_input input_full">
												<input class="upload_name" id='uploadName0'	disabled="disabled">
												 <label for="fileName0"	class="btn_search">찾아보기</label>
												  <input type="file" id="fileName0" name="mainImage" class="upload_hidden">
												
												<p class="txt_notice">※ 프로젝트 목록 및 프로젝트 상세페이지 첫번째 노출되는
													이미지입니다.</p>
													<!-- 추가되는 이미지 name subImage1 subImage2.... -->
											</div>
										</li>
										
										<!-- <li class="box_info" id="file1">
											<div id="file1div" class="add_file">
												<p class="tit_name txt-right">이미지</p>
												<div class="txt_input input_full">
													<input class="upload_name" id="uploadName1" disabled="disabled">
													<label for="fileName1" class="btn_search">찾아보기</label>
													<button class="btn_delete">삭제</button>
													<input type="file" id="fileName1" name="subImage1" class="upload_hidden">
													
												</div> 
											</div>
										
										</li> -->
									</ul>
								</li>

								<li class="box_info box_radio" style="margin-bottom: 15px;">
									<p class="tit_name">
										프로젝트 동영상<span class="txt_warning">*</span>
									</p>
									<p class="inner_radio">
										<input type="radio" id="videoFlag3" name="videoFlag" value="N" checked>
										<label for="videoFlag3" class="radio_label">미사용</label>
										<input type="radio" id="videoFlag4" name="videoFlag" value="Y"><label
											for="videoFlag4" class="radio_label">사용</label></p>
											
									<div class="txt_input input_full">
										<label for="tfSimpleIntroduce" class="tf_comm"> 
										<input	type="text" id="videoUrl" name="pVideo"
											class="tf_cont input_hold" value="">
										</label>
										<p class="txt_notice">
											※ '사용' 체크 후 Youtube 공유 주소를 입력해주세요.<br> ※ 프로젝트 동영상 사용 시
											대표 이미지는 1개만 프로젝트 목록에서 노출됩니다.<br>
										</p>
									</div>
								</li>
								<li class="box_info">
									<p class="tit_name">
										프로젝트 간략소개<span class="txt_warning">*</span>
									</p>
									<p class="txt_input input_mid">
										<label for="tfSimpleIntroduce" class="tf_comm"> <input
											type="text" id="simpleText" name="pText" class="tf_cont"
											value="" maxlength="50">
										</label>
									</p>
									<p class="txt_limit">
										<span id="simpleTextCount">0</span>/20
									</p>
								</li>
								<li class="box_info">
									<p class="tit_agreement">
										프로젝트 소개<span class="txt_warning">*</span> 
									<div id="contentArea">
										<textarea id="content" cols="120" rows="20" placeholder="안내사진 or 텍스트 추가 요망"
										name="pDesc" style="resize: none; overflow-x: hidden;"></textarea>
										<!-- 에디트 삽입 영역		</div> 입니다. -->
									</div>
									<div class="wrap_notice">
										<p class="txt_notice">※ 타 파일에서 문장을 복사, 붙여넣기 전에는 메모장 등에 한번
											거쳐서 입력해주세요.</p>
										<p class="txt_notice">※ 이미지 삽입을 통해 gif파일 삽입이 가능합니다.</p>
									</div>
								</li>
								<li class="box_info box_hashtag">
												<ul>
													<li>
														<p class="tit_name">해시태그|(#)</p>
														<div class="txt_input">
															<label for="tfHashtag" class="tf_comm">
																<input type="text" id="inputHashTag" name="inputHashTag" class="tf_cont">
															</label>
														</div>
														<p class="txt_notice">※ 검색에 노출될 태그를 입력하고 엔터(최대 5개)</p>
														<textarea name="tag" id="tag" style="display:none;"></textarea>
													</li>
													<li>
														<div class="inner_hashtag" id="tagArea"></div>
							</ul>
						</li>
					</ul>
				
						</fieldset>
					
				</div>
				<!-- // 개설자 정보 -->
			</div>
			<div class="btn_area">
				<!-- <input type="button" class="btn_temporarily_save" title="임시저장" value="임시저장" onclick="fn_save('save');">  -->
				<input	type="submit" class="btn_next" title="다음단계" value="다음단계">
			</div>
			</form>
		</div>
	</div>
</div>
</div>

<jsp:include page="../common/footer.jsp"/>




<script>


	$(document).on("change",".upload_hidden",function(){
        var changeHandler = this;
        var getFileId = $(this).attr('id').replace("fileName","");

        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        var img = new Image();
        var _URL = window.URL || window.webkitURL;
        img.src = _URL.createObjectURL($(this)[0].files[0]);

        img.onload = function () {
            var width = this.width;
            var height = this.height;
			changeHandler.parentNode.firstElementChild.value = filename;
			
        };
    });
	
function fn_imgAdd() {
	  var existimg = $(".add_file").length;
      var max_img_cnt = 4;
      var make_img_div = existimg+1;

      if (existimg>=max_img_cnt){
          alert("프로젝트 이미지는 최대  "+ (max_img_cnt+1) +"개까지 등록가능합니다.");
          return false;
      } else {
          var html = "<li class='box_info' id='file"+ make_img_div +"'>";
          html += "<div id='file"+ make_img_div +"div' class='add_file'>";
          html += "<p class='tit_name txt-right'>이미지</p>";
          html += "<div class='txt_input input_full'>"
          html += "<input class='upload_name' id='uploadName"+ make_img_div +"' disabled='disabled'>";
          html += "<label for=fileName"+ make_img_div +" class='btn_search'>찾아보기</label>";
          html += "<button class='btn_delete'>삭제</button>";
          html += "<input type='file' id='fileName"+ make_img_div +"' name='subImage"+ make_img_div +"' class='upload_hidden'>";
          html += "</div></div></li>"

          $("#file_area").append(html);
		 
	}
};

/*    파일 삭제처리 (분석 필요)    */
var deleteFileSeqTemp = "";
$(document).on("click", ".btn_del", function () {
    var idname = $(this).attr('id');
    var fileSeq = $(this).attr('id').split("_")[1];
    //기존데이터가 있을경우 DB삭제 조건에 추가
    deleteFileSeqTemp = $("#fileDeleteSeq").val();
    if (typeof fileSeq != "undefined" && fileSeq != "") {
        deleteFileSeqTemp += fileSeq + ","
        if ($("#fileDeleteSeq").val().indexOf(fileSeq) < 0) {
            $("#fileDeleteSeq").val(deleteFileSeqTemp);
            $(this).closest('div').remove();
            //$(this).siblings('span').empty();
        }
    } else {

        //추가 버튼을 이용해 추가한경우 SEQ값이 없음
        //if (idname.substring(0, 9) != "mainimage") {
        //메인이미지는 삭제하지않는다
        $(this).closest('div').remove();
        //$(this).parent().parent().remove();
        //}
    }
});

$(document).on('click', '.btn_delete', function(event) {
    var idname = $(this).attr('id');
    //alert(idname);
    if(idname!="" && idname!= undefined) {
        var fileSeq = $(this).attr('id').split("_")[1];

        //기존데이터가 있을경우 DB삭제 조건에 추가
        deleteFileSeqTemp = $("#fileDeleteSeq").val();
        if (typeof fileSeq != "undefined" && fileSeq != "") {
            deleteFileSeqTemp += fileSeq + ","
            if ($("#fileDeleteSeq").val().indexOf(fileSeq) < 0) {
                $("#fileDeleteSeq").val(deleteFileSeqTemp);
                $(this).siblings('span').empty();
            }
        }
        $(this).parent().parent().parent().remove();
        return false;
    } else{
        //추가 버튼을 이용해 추가한경우 SEQ값이 없음
        //if (idname.substring(0, 9) != "mainimage") {
        //메인이미지는 삭제하지않는다
        //}
        $(this).closest('li').remove();
        return false;
    }

});

/* // 적합성 검사 후 다음페이지로
function fn_nextPage(){
	if(fn_validateCheck()){
		location.href='projectInsert.do';
	}
}
 */

// 페이지 전체 적합성 검사
function fn_validateCheck(){
    var check_project_info = true;
    var focus = "";
    if(isEmpty(jQuery('#projectName').val())){
        alert("프로젝트 제목을 입력하세요.");
        jQuery('#projectName').focus();
        return false;
    }
    var currMainImage= "";
    if(isEmpty(jQuery('#uploadName0').val())&&isEmpty(currMainImage)){
        alert("(대표)이미지를 입력하세요.");
        jQuery('#uploadName0').focus();
        return false;
    }
   
    if(isEmpty(jQuery('#simpleText').val())){
        alert("프로젝트 간략소개를 입력하세요.");
        $('#simpleText').focus();
        return false;
    }
    if(jQuery('#simpleText').val().length > 20) {
        alert('프로젝트 간략소개는 최대 20자까지 작성 가능합니다.');
        $('#simpleText').val($('#simpleText').val().slice(0, 20));
        $('#simpleTextCount').html($('#simpleText').val().length);
        $('#simpleText').focus();
        return false;
    }

    if(isEmpty(jQuery('#content').val())){
        alert("프로젝트 소개를 입력하세요.");
        $('#content').focus();
        return false;
    }

    $("input[id^='title']").each( function(){
        if($.trim($(this).val())==""){
            if(focus == ""){
                focus = $(this);
			}
            check_project_info = false;
        }
    });

    $("textarea[id^='addContent']").each( function(){
        if($.trim($(this).val())==""){
            if(focus == ""){
                focus = $(this);
			}
            check_project_info = false;
        }
    });

	if(!check_project_info){
        focus.focus();
        alert("프로젝트 소개부분을 입력해주세요.");
        return false;
    }

	// 태그 넣기
	var ab="";
    for(var i=1; i<num; i++){
        var b = $("#tag"+i).val();
        if(i==num-1){
        ab = ab+b;	
        }else{
        ab= ab+b+",";
        }
    }
    
    $("#tagArea").append("<input type='hidden' name='pHashTag' value='"+ab+"'>");
    alert(ab);
    return true;
}	
$('input[type=radio][name=videoFlag]').change(function() {
    if (this.value == 'N') {
        $("#videoUrl").val('');
        $("#videoUrl").attr("disabled","disabled");
        $("#videoUrl").removeClass("tf_cont input");
        $("#videoUrl").addClass("tf_cont input_hold");
    }
    else if (this.value == 'Y') {
        $("#videoUrl").removeClass("tf_cont input_hold");
        $("#videoUrl").addClass("tf_cont input");
        $("#videoUrl").removeAttr("disabled");
        $("#videoUrl").focus();

    }
});

</script>
</body>
</html>