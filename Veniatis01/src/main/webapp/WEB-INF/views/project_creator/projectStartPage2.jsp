<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
      <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/guidecss.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</head>
<body>
<jsp:include page="menubar.jsp"/>
<main id="omcContainer" class="cont_support">
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
							<li>
								<a href="/apply/8019/maker" class="flow_reward">
									<span class="ico_comm ico_step1">개설자 정보 아이콘</span>
								</a>
								<span class="fa fa-angle-right"></span>
								<div class="flow_cont">
									<p class="txt_step">개설자 정보</p>
								</div>
								
							</li>
							<li class="on">
								<a href="#" class="flow_reward">
									<span class="ico_comm ico_step2">프로젝트 스토리 아이콘</span>
								</a>
								<span class="fa fa-angle-right"></span>
								<div class="flow_cont">
									<p class="txt_step">프로젝트 스토리</p>
								</div>
								
							</li>
							<li>
								<a href="/apply/8019/item" class="flow_reward">
									<span class="ico_comm ico_step3">리워드 아이콘</span>
								</a>
								<span class="fa fa-angle-right"></span>
								<div class="flow_cont">
									<p class="txt_step">리워드</p>
								</div>
								
							</li>
							
							<li>
								<a href="/apply/8019/calculate" class="flow_reward">
									<span class="ico_comm ico_step5">정산 아이콘</span>
								</a>
								<div class="flow_cont">
									<p class="txt_step">정산</p>
								</div>
								
							</li>
						</ol>

						<div class="sheet_info">
							<div class="txt_area">
								<span class="txt_desc"><span class="txt_warning">*</span>은 필수입력 항목입니다.</span>
								<p class="link_area">
									<a class="link_guide" href="/omc/download/apply/omc_reward_uploadguide_2019_2.pdf#page=8" title="업로드 가이드" target="_blank">업로드 가이드</a>
									<a class="link_guide" href="/guide/maker/reward#project_story_guide" title="스토리 가이드" target="_blank">스토리 가이드</a>
									<a class="link_prewindow" href="/reward/preview/8019" title="미리보기" target="_blank">미리보기</a>
								</p>
							</div>
							<!-- 개설자 정보 -->
							<div class="form_area">
								<form name="addForm" method="post" enctype="multipart/form-data">
									<input type="hidden" name="fileDeleteSeq" id="fileDeleteSeq">
									<input type="hidden" id="targetPage" name="targetPage" value="">
									<fieldset class="fld_comm">
										<legend class="tit_sub"></legend>
										<ul>
											<li class="box_info">
												<p class="tit_name">프로젝트 분야</p>
												<div class="box_select">
													<select class="select_sort" id="projectCate" name="projectCate" title="프로젝트 분야">
														
															<option value="CATE_0001" >공간/리빙</option>
														
															<option value="CATE_0002" >사회이슈</option>
														
															<option value="CATE_0003" >교육/출판</option>
														
															<option value="CATE_0005" >문화예술</option>
														
															<option value="CATE_0006" >지역재생</option>
														
															<option value="CATE_0007" >푸드</option>
														
															<option value="CATE_0010" >테크</option>
														
															<option value="CATE_0012" >뷰티/패션</option>
														
															<option value="CATE_0013" >여행</option>
														
													</select>
												</div>
											</li>
											<li class="box_info">
												<p class="tit_name">프로젝트 제목<span class="txt_warning">*</span></p>
												<p class="txt_input input_mid">
													<label for="tfTitle" class="tf_comm">
														<input type="text" id="projectName" name="projectName" class="tf_cont" value="" maxlength="35">
													</label>
												</p>
												<p class="txt_limit">
													<span id="projectNameCount">0</span>/35
												</p>
											</li>
											<li class="box_info box_file">
												<ul id="file_area">
													<li class="box_info">
														<p class="tit_name">프로젝트 이미지<span class="txt_warning">*</span></p>
														<p>
															<button type="button" id="btn_add_file" class="btn_add">이미지파일 추가 <span>+</span></button>
															<span class="txt_warning">※ 권장 사이즈 692*418px, 이미지형식(jpg, png)</span>
														</p>
													</li>
													<li class="box_info">
														<p class="tit_name txt-right">(대표)이미지</p>
														<div class="txt_input input_full">
															<input class="upload_name" id='uploadName0' disabled="disabled">
															<label for="fileName0" class="btn_search">찾아보기</label>
															<input type="file" id="fileName0" name="mainImage_" class="upload_hidden" accept=".jpg,.png">
															<!-- 2017-10-23 마크업 추가 -->
															
															<!-- // 2017-10-23 마크업 추가 -->
															<p class="txt_notice">※ 프로젝트 목록 및 프로젝트 상세페이지 첫번째 노출되는 이미지입니다.</p>
														</div>
													</li>
													<!-- 2017-12-28 ul는 li 외에 다른 요소를 자식요소로 가질 수 없습니다. -->
													
													<!-- // 2017-12-28 ul는 li 외에 다른 요소를 자식요소로 가질 수 없습니다. -->
												</ul>
											</li>
											
											<li class="box_info box_radio" style="margin-bottom: 15px;">
												<p class="tit_name">프로젝트 동영상<span class="txt_warning">*</span></p>
												<p class="inner_radio">
													<input type="radio" id="videoFlag3" name="videoFlag" value="N" checked><label for="videoFlag3" class="radio_label">미사용</label>
													<input type="radio" id="videoFlag4" name="videoFlag" value="Y" ><label for="videoFlag4" class="radio_label">사용</label>
												</p>
												<div class="txt_input input_full">
													<label for="tfSimpleIntroduce" class="tf_comm">
														<input type="text" id="videoUrl" name="videoUrl" class="tf_cont input_hold" value="">
													</label>
													<p class="txt_notice">
														※ '사용' 체크 후 Youtube 공유 주소를 입력해주세요.<br>
														※ 프로젝트 동영상 사용 시 대표 이미지는 1개만 프로젝트 목록에서 노출됩니다.<br>
													</p>
												</div>
											</li>
											<li class="box_info">
												<p class="tit_name">프로젝트 간략소개<span class="txt_warning">*</span></p>
												<p class="txt_input input_mid">
													<label for="tfSimpleIntroduce" class="tf_comm">
														<input type="text" id="simpleText" name="simpleText" class="tf_cont" value="" maxlength="50">
													</label>
												</p>
												<p class="txt_limit">
													<span id="simpleTextCount">0</span>/20
												</p>
											</li>
											<li class="box_info">
												<p class="tit_agreement">프로젝트 소개<span class="txt_warning">*</span>
												<span style="float: right; margin-right: 33px;">
													<span style="font-size: .9em;">&#9654;</span>&nbsp;<u class="manualForEditor" style="cursor: pointer;">에디터 사용법 설명</u>
												</span>
												<div class="box_comm">
													<div id="contentArea">
														<textarea id="content" name="projectInfo" cols="120" rows="200" style="resize:none; overflow-x:hidden;">
															
																												
																	
															
														</textarea>
														<!-- 에디트 삽입 영역
												</div> 입니다. -->
											</div>
												<div class="wrap_notice">	
													<p class="txt_notice">※ 문단과 문단 사이 간격이 넓습니다.간격을 줄이실려면 <span class="txt_warning"> shift + enter</span>를 사용해주세요.</p>
													<p class="txt_notice">※ 문장에 적용한 효과를 삭제하려면 해당 문장을 선택한 뒤 적용한 효과 버튼을 한번 더 눌러주세요.</p>
													<p class="txt_notice">※ 타 파일에서 문장을 복사, 붙여넣기 전에는 메모장 등에 한번 거쳐서 입력해주세요.</p>
													<p class="txt_notice">※ 이미지 삽입을 통해 gif파일 삽입이 가능합니다.</p>
												</div>
											</li>

											<!-- 프로젝트 소개 추가 // - start  -->
											<li class="box_info">
												<ul>
													<div class="add_crowd">
														<li class="box_info">
															<p class="tit_name">프로젝트소개 입력</p>
															<div class="box_select">
																<select class="select_sort" id="intro_cnt" name="intro_cnt" title="프로젝트소개 갯수">
																	<option value="0" > 0</option>
																	<option value="1" >1</option>
																	<option value="2" >2</option>
																	<option value="3" selected="selected">3</option>
																</select>
															</div>
														</li>
													</div>
												</ul>
												<div id="_addProject">
													
												</div>
												<div class="wrap_notice">
												</div>
											</li>
											<!-- 프로젝트 소개 추가 // - end  -->

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
														<div class="inner_hashtag">
													
														</div>
													</li>
												</ul>
											</li>
										</ul>
									</fieldset>
								</form>
							</div>
							<!-- // 개설자 정보 -->
						</div>
						<div class="btn_area">
							<input type="button" class="btn_temporarily_save" title="임시저장" value="임시저장" onclick="fn_save('save');">
							<input type="button" class="btn_next" title="다음단계" value="다음단계" onclick="fn_save('item');">
						</div>
					</div>
				</div>
				<!-- //신청서 -->
			</article>
		</div>
	</main>
</body>
</html>