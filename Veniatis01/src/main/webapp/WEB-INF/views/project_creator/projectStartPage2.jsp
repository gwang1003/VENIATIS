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

.btn_search{
margin-top:7px;
}



</style>
<link rel="stylesheet" href="resources/css/guidecss2.css">
<script type="text/javascript"	src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet"	href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
<script src="resources/js/commonUtil.js"></script>
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
						<li><a href="projectStartPage.do" class="flow_reward" id="icon1"></a>
						 <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">개설자 정보</p>
							</div></li>
							
						<li class="on"><a href="#" class="flow_reward" id="icon2">
						</a> 
						 <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">프로젝트 스토리</p>
							</div></li>
							
						<li><a href="projectStartPage_reward.do" class="flow_reward" id="icon3">
						</a> 
						 <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">리워드</p>
							</div></li>
					
						<li><a href="projectStartPage_last.do" class="flow_reward" id="icon4"></a>
							<div class="flow_cont">
								<p class="txt_step">정산</p>
							</div></li>
					</ol>
					
					<!-- 여기까지가 프로젝트 메뉴 -->
			<div class="sheet_info">
				<!-- 개설자 정보 -->
				<div class="form_area">
					<form name="addForm" method="post" enctype="multipart/form-data">
						<fieldset class="fld_comm">
							
							<ul>
								<li class="box_info">
									<p class="tit_name">프로젝트 분야</p>
									<div class="box_select">
										<select class="select_sort" id="projectCate" name="projectCate" title="프로젝트 분야">	
											<option value="CATE_0001">공간/리빙</option>
											<option value="CATE_0002">사회이슈</option>
											<option value="CATE_0003">교육/출판</option>
											<option value="CATE_0004">문화예술</option>
											<option value="CATE_0005">지역재생</option>
											<option value="CATE_0006">푸드</option>
											<option value="CATE_0007">테크</option>
											<option value="CATE_0008">뷰티/패션</option>
											<option value="CATE_0009">여행</option>
										</select>
									</div>
								</li>
								<li class="box_info">
									<p class="tit_name">
										프로젝트 제목<span class="txt_warning">*</span>
									</p>
									<p class="txt_input input_mid">
										<label for="tfTitle" class="tf_comm"> 
										<input	type="text" id="projectName" name="projectName"
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
												  <input type="file" id="fileName0" name="mainImage_" class="upload_hidden"	>
												
												<p class="txt_notice">※ 프로젝트 목록 및 프로젝트 상세페이지 첫번째 노출되는
													이미지입니다.</p>
													
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
										<input	type="text" id="videoUrl" name="videoUrl"
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
											type="text" id="simpleText" name="simpleText" class="tf_cont"
											value="" maxlength="50">
										</label>
									</p>
									<p class="txt_limit">
										<span id="simpleTextCount">0</span>/20
									</p>
								</li>
								<li class="box_info">
									<p class="tit_agreement">
										프로젝트 소개<span class="txt_warning">*</span> <span
											style="float: right; margin-right: 33px;"> <span
											style="font-size: .9em;">&#9654;</span>&nbsp;
											<u class="manualForEditor" style="cursor: pointer;">에디터 사용법	설명</u>
										</span>
									<div id="contentArea">
										<textarea id="content" name="projectInfo" cols="120" rows="20" placeholder="안내사진 or 텍스트 추가 요망"
											style="resize: none; overflow-x: hidden;"></textarea>
										<!-- 에디트 삽입 영역		</div> 입니다. -->
									</div>
									<div class="wrap_notice">
										<p class="txt_notice">※ 타 파일에서 문장을 복사, 붙여넣기 전에는 메모장 등에 한번
											거쳐서 입력해주세요.</p>
										<p class="txt_notice">※ 이미지 삽입을 통해 gif파일 삽입이 가능합니다.</p>
									</div>
								</li>
							</ul>
						</fieldset>
					</form>
				</div>
				<!-- // 개설자 정보 -->
			</div>
			<div class="btn_area">
				<input type="button" class="btn_temporarily_save" title="임시저장" value="임시저장" onclick="fn_save('save');"> <input
					type="button" class="btn_next" title="다음단계" value="다음단계" onclick="javascript:location.href='projectStartPage_reward.do';">
			</div>
		</div>
	</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>

<script>


	/*<li class="box_info" id="file1">
	 	<div id="file1div" class="add_file">
	 		<p class="tit_name txt-right">이미지</p>
	 			<div class="txt_input input_full">
				 <input class="upload_name" id="uploadName1" disabled="disabled">
	 			<label for="fileName1" class="btn_search">찾아보기</label>
	 			<button class="btn_delete">삭제</button>
	 			<input type="file" id="fileName1" name="subImage1" class="upload_hidden">
	 		</div> 
	 	</div>
	 </li>*/
	 // imgAdd하면 추가되는 부분 제작중 - 0212
	function fn_imgAdd() {
		 var i=1;
		 var $ul =$("#file_area");
		 var $li =$("<li class='box_info' id='file"+i+"'>");
		 var $div1 = $("<div id='file"+i+"div' class='add_file'>");
		 var $p = $("<p class='tit_name txt-right'>이미지</p>");
		 var $div2 = $("<div class='txt_input input_full'>");
		 var $input1 = $("<input class='upload_name' id='uploadName"+i+"' disavled='disabled'>");
		 var $label = $("<label for='fileName"+i+"' class='btn_search'>찾아보기</label>");
		 var $button=$("<button class='btn_delete' onclick='fn_imgDelete()'>삭제</button>");
		 var $input2 = $("<input type='file' id='fileName"+i+"' name='subImage"+i+"'>");
		 i++;
		 
		 $div1.append($div2);
		 $div1.append($p);
		 $div2.append($input1);
		 $div2.append($label);
		 $div2.append($button);
		 $div2.append($input2);
		 
		 $li.append($div1);
		 $ul.append($li);
		 
	}
	 function fn_imgDelete(){
		 
	 }
</script>
</body>
</html>