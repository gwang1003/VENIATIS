<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>



</style>
<link rel="stylesheet" href="resources/css/guidecss.css">
<script type="text/javascript"
	src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</head>
<body>
	<jsp:include page="menubar.jsp" />
	<div id="omcContainer" class="cont_support">
	<h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>
	<div class="cMain">

			<header class="head_comm">
				<h1 class="tit_comm">후원형 프로젝트 신청하기</h1>
			</header>

			<!-- 신청서 -->
			<div class="apply_cont apply_support">
				<div class="box_comm">

					<ol class="list_process">
						<li class="on"><a href="#" class="flow_reward"> <span
								class="ico_comm ico_step1">개설자 정보 아이콘</span>
						</a> <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">개설자 정보</p>
							</div></li>
						<li><a href="/apply/8019/story" class="flow_reward"> <span
								class="ico_comm ico_step2">프로젝트 스토리 아이콘</span>
						</a> <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">프로젝트 스토리</p>
							</div></li>
						<li><a href="/apply/8019/item" class="flow_reward"> <span
								class="ico_comm ico_step3">리워드 아이콘</span>
						</a> <span class="fa fa-angle-right"></span>
							<div class="flow_cont">
								<p class="txt_step">리워드</p>
							</div></li>
					
						<li><a href="/apply/8019/calculate" class="flow_reward">
								<span class="ico_comm ico_step5">정산 아이콘</span>
						</a>


							<div class="flow_cont">
								<p class="txt_step">정산</p>
							</div></li>
					</ol>

					<div class="sheet_info">

						<fieldset class="photo_field">
							<h3 class="screen_out">회원 이미지</h3>
							<div class="user_photo">
								<span class="img_profile" id="img_profile"> <img src=""
									alt="">
								</span> <label for="inpPhoto" class="btn_edit">편집<input
									type="file" id="inpPhoto" name="inpPhoto" class="inp_photo"
									accept=".jpg,.png"></label>
								<button type="button" class="btn_del" onclick="fn_fileDel();">
									<span class="ico_cross">프로필이미지 삭제</span>
								</button>
							</div>
							<p class="txt_edit">※프로젝트 개설자님의 사진은 프로젝트의 신뢰도를 높일 수 있습니다.(기업
								로고 혹은 개인사진)</p>
							<p class="txt_edit2">※프로필 사진 권장 비율은 가로,세로 1:1입니다.</p>
						</fieldset>

						<div class="txt_area">
							<span class="txt_desc"><span class="txt_warning">*</span>은
								필수입력 항목입니다.</span>
							<p class="link_area">
								<a class="link_guide"
									href="/omc/download/apply/omc_reward_uploadguide_2019_2.pdf#page=7"
									title="업로드 가이드" target="_blank">업로드 가이드</a>
							</p>
						</div>
						<!-- 개설자 정보 -->
						<form name="addForm" method="post" enctype="multipart/form-data">
							<input type="hidden" name="fundingContestSeq" value=""> <input
								type="hidden" name="corpCertFileSeq" value=""> <input
								type="hidden" id="targetPage" name="targetPage" value="">
							<input type="hidden" id="certFileDelFlag" name="certFileDelFlag"
								value="N"> <input type="hidden" id="simulationFlag"
								name="simulationFlag" value="N"> <input type="hidden"
								id="contestSeq" name="contestSeq" value=""> <input
								type="hidden" id="memberFileName" name="memberFileName" value="">
							<input type="hidden" id="memberFilePath" name="memberFilePath"
								value="">
							<div class="form_area">
								<legend class="screen_out">기본정보 입력</legend>
								<fieldset class="fld_comm">
									<ul>
										<li class="box_info">
											<p class="tit_name">개설자명(기업명)</p>
											<p class="txt_input">
											
											<!-- 로그인 유저로부터 정보를 받아오기 -->
											
												<label for="tfName" class="tf_comm"> <span
													class="placehoder"></span> <input type="text" id="tfName"
													class="tf_cont input_hold" value="" disabled="disabled">
												</label>
											</p>
										</li>
										<li class="box_info">
											<p class="tit_name">
												이메일<span class="txt_warning">*</span>
											</p>
											<p class="txt_input input_full">
												<label for="tfId" class="tf_comm"> <span
													class="placehoder"></span> <input type="email"
													id="userMail" class="tf_cont" name="userMail"
													value="">
												</label>
											</p>
										</li>
										<li class="box_info">
											<p class="tit_name">
												휴대폰번호<span class="txt_warning">*</span>
											</p>
											<p class="txt_input input_full">
												<label for="tfHpNumber" class="tf_comm"> <span
													class="placehoder">‘-’ 없이 입력</span> <input type="tel"
													id="userHp" class="tf_cont" name="userHp"
													value="">
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
														<label for="userPost" class="tf_comm"> <span
															id="userPostPlaceholder" class="placehoder">우편번호</span> <input
															type="text" id="userPost" class="tf_cont input_hold"
															readonly="readonly" name="userPost" value="">
														</label>
													</p>
													<button type="button" id="zipbutton" class="btn_postsearch">우편번호
														검색</button>
												</li>
												<li class="box_info">
													<p class="tit_name"></p>
													<p class="txt_input input_full">
														<label for="userAddr1" class="tf_comm"> <span
															id="userAddr1Placeholder" class="placehoder">기본주소</span>
															<input type="text" id="userAddr1"
															class="tf_cont input_hold" readonly="readonly"
															name="userAddr1" value="">
														</label>
													</p>
												</li>
												<li class="box_info">
													<p class="tit_name"></p>
													<p class="txt_input input_full">
														<label for="userAddr2" class="tf_comm"> <span
															class="placehoder">상세주소</span> <input type="text"
															id="userAddr2" class="tf_cont" name="userAddr2" value="">
														</label>
													</p>
												</li>
											</ul>
										</li>
										<li class="box_info">
											<p class="tit_name">홈페이지</p>
											<p class="txt_input input_full">
												<label for="tfHomepage" class="tf_comm"> <span
													class="placehoder">입력 시 ‘http://’ 제외</span> <input
													type="text" id="homeUrl" class="tf_cont" name="homeUrl"
													value="">
												</label>
											</p>
										</li>
									
									
									</ul>
								</fieldset>
							</div>

							<div class="form_area area_type_2">
								<fieldset class="fld_comm">
									<ul>
										<li class="box_info box_radio">
											<p class="tit_name">프로젝트 진행 이력</p>
											<div class="rdo_box">
												<p>
													<input type="radio" id="historyProjectN"
														name="historyProjectFlag" value="N" checked><label
														for="historyProjectN" class="radio_label">없음</label> <input
														type="radio" id="historyProjectY"
														name="historyProjectFlag" value="Y"><label
														for="historyProjectY" class="radio_label">있음</label>
												</p>
												<p class="txt_notice">※ 베니아티스 외 타 크라우드펀딩 플랫폼에서 진행한 경우도
													해당됩니다.</p>
											</div>
										</li>
									</ul>
									<ul class="projectUrlField">
										<li class="box_info box_radio">
											<p class="tit_name">프로젝트 주소</p>
											<div class="txt_input input_full">
												<p>
													<label class="tf_comm"> <span class="placehoder">주소
															입력</span> <input type="text" id="historyUrl" class="tf_cont"
														name="historyUrl" value="">
													</label>
												</p>
											</div>
										</li>
									</ul>
								</fieldset>
							</div>

							<div class="form_area area_type_2">
								<fieldset class="fld_comm">
									<legend class="screen_out">기본정보 입력</legend>
									<ul>
										
												
											<li class="box_info box_region">
												<p class="tit_name">지역</p>
												<div class="box_select">
													<select class="select_sort" name="corpRegion" title="지역">
														<option value="">선택</option>

														<option value="AREA01">서울</option>

														<option value="AREA02">인천</option>

														<option value="AREA03">부산</option>

														<option value="AREA04">대구</option>

														<option value="AREA05">울산</option>

														<option value="AREA06">광주</option>

														<option value="AREA07">대전</option>

														<option value="AREA08">세종</option>

														<option value="AREA09">경기</option>

														<option value="AREA10">강원</option>

														<option value="AREA11">충북</option>

														<option value="AREA12">충남</option>

														<option value="AREA13">경북</option>

														<option value="AREA14">경남</option>

														<option value="AREA15">전북</option>

														<option value="AREA16">전남</option>

														<option value="AREA17">제주</option>

													</select>
												</div>
											</li>
											<li class="box_info box_sex">
												<p class="tit_name">개설자성별</p>
												<div class="box_select">
													<select class="select_sort" name="userSex" title="개설자성별">
														<option value="">선택</option>
														<option value="M">남</option>
														<option value="F">여</option>
													</select>
												</div>
											</li>
											<li class="box_info box_agreement">
												<p class="tit_agreement">개인(기업)정보 수집ㆍ제공 활용 동의</p>
												<div class="box_comm">
													<div class="agreement_comm ">
														정보의 수집 및 이용목적<br> <br> 1.전화, 이메일, 문자등을 통한 안내<br>
														2.각종 안내 및 사업보고<br> 3.기타 파트너십 펀딩대회 운영과 관련 업무에 활용<br>
														<br> *수집항목 -기업명, 조직형태, 인증여부, 지역, 소재지, 설립일, 참여유형, 프로젝트
														유형, 대표자 성명, 대표자 성별, 연락처, 이메일, 홈페이지, 사업자 등록증, 통장 사본<br>
														 *개인정보 제공 등의 거부 권리 및 동의 거부에 따른 불이익 내용 또는 제한사항 개인정보의 필수 수집 및 이용에 동의하지
														않을 경우 오마이컴퍼니 파트너십 펀딩대회 사업 진행 시 안내가 정상적으로 제공되지 않을 수 있으면
														관련하여 진행되는 사업과정에 불편이 발생 할 수 있습니다.<br> <br> 「개인정보
														보호법」제 15조 규정에 따라 상기인의 성명 및 주소, 전화번호를 사업추진의 목적으로 제 3자에게
														제공하는 것을 동의합니다.<br>
													</div>
												</div>
											</li>

											<li class="wrap_check"><label for="chkAccept"
												class="chk_comm chk_accept"> <input type="checkbox"
													id="chkAccept" name="chkAccept" class="inp_chk"> <span
													class="chk_square"><span class="fa fa-check"></span></span>
													<span class="txt_cont">확인하였고, 동의합니다.</span>
											</label></li>

										</ul>
									</div>
								</fieldset>
							</div>
						</form>
						<!-- // 개설자 정보 -->
					</div>
					<div class="btn_area">
						<input type="button" class="btn_temporarily_save" title="임시저장"
							value="임시저장" onclick="fn_save('save');"> <input
							type="button" class="btn_next" title="다음단계" value="다음단계"
							onclick="fn_save('story');">
					</div>
				</div>
			</div>
			<!-- //신청서 -->
		</article>
	</div>
	</main>
</body>
</html>