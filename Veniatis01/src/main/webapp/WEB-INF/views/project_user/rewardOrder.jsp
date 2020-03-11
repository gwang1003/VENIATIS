<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="resources/css/hr.css">
<script src="resources/js/hr.js" />
<script type="text/javascript"
	src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<!-- 부트 스트랩  -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
	integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
	crossorigin="anonymous">
<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
	integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
	crossorigin="anonymous"></script>
	
<!-- 아임포트(결제)  -->
<script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>

<title>VENIATIS : 후원형</title>

<style>
#postcode1 {
    width:40%; height:40px;
    display: block; 
    padding: 5px 10px;  
    float:left;
	border: 1px solid #e1e1e1; 
	font-size: 0.875em; 
	color: #303030; 
	margin-bottom:0.5rem;
}

#postcodify_search_button{
	display: block; 
	overflow: hidden; 
	float:left; 
	width: 25%; 
	height: 40px; 
	text-align: center;
	font-size: 0.875em; 
	line-height: 40px; 
	background-color: #999; 
	color: #fff;
	margin-left:0.5rem;
}

.date_addr .addr{
	width:100%; 
	height:40px;
	display: block; padding: 5px 10px;
	border: 1px solid #e1e1e1; 
	font-size: 0.875em; 
	color: #303030; 
	margin-bottom:0.3rem;
}
</style>
<script type="text/javascript">
	$(document).ready(function() {
		// 참여 단계 네비게이션바 애니메이션 처리
		setTimeout(function() {
			$('.step-progress-bar').css('width', '66.666666667%');
		}, 200);
		
	});

	//3자리 콤마 찍
	function comma(str) {
		str = String(str);
		return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
	}
	//콤마풀기(확인해봐야함)
	function uncomma(str) {
		str = String(str);
		return str.replace(/[^\d]+/g, '');
	}
	//모든 콤마 제거
	function removeCommas(x) {
	    if(!x || x.length == 0) return "";
	    else return x.split(",").join("");
	}
	
</script>
</head>

<body>
	<jsp:include page="../common/menubar.jsp" />
	<div id="omcWrap">
		<!-- header -->
		<!-- header -->

		<main id="omcContainer" class="cont_support"> <!-- aside --> <!--  aside -->
		<h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>
		<div class="cMain">
			<article id="mContent" class="project_reward">
				<header class="head_comm">
					<h1 id="projectName" class="tit_comm">${ project.pTitle }</h1>
					<div class="author_reward">
						<span class="txt_author">by</span> <span class="user_profile">
							<span class="img_profile clear_empty_picture"> 
								<img src="${ project.creProfile }"> 
							</span> 
							<span class="txt_name">${ project.creName }</span>
						</span>

					</div>
				</header>
				<div class="cont_comm reward-join-box">


					<div class="step-navigation-wrapper reward">
						<div class="step-navigation-bar">
							<div class="step-progress-bar" style="width: 0%;"></div>
						</div>
						<div>
							<span class="reward-join-step active" style="width: 33.33333333%">1.리워드금액선택</span>
							<span class="reward-join-step active" style="width: 33.33333333%">2.참여하기</span>
							<span class="reward-join-step" style="width: 33.33333333%">3.참여완료</span>
						</div>
					</div>
					<div class="box_comm">
						<form id="insertFunding" name="insertFunding" method="post" action="insertFunding.do">
							<input type="hidden" name="mNo" value="${ loginUser.mNo }">
											
							<%-- <c:forEach var="s" items="${ sList }" varStatus="vs">
								<div class="reward_item">
									<span class="item_amount"> ${s}<br> 
										<span class="tit_cont">참여금액 (수량<span class="num">${ s.quantity }</span>)</span> 
										<em class="num_cont">
											<fmt:formatNumber value="${ s.rPrice }" groupingUsed="true" />
										</em>
										<span class="txt_won">원</span>
									</span> 
									<strong class="name_reward">${ s.rItem }</strong> 
									<span class="info_dely"> 
										<span class="tit_cont">배송 예정일 : </span> 
										<span class="txt_desc"> 2020년 3월 20일부터 27일 까지 순차적으로 제공 </span>
									</span> 
									<c:if test="${ s.option ne '' }">
										<span class="txt_option"> <span class="tit_cont">리워드 옵션 : </span> 
										<span class="txt_desc"> ${ s.option } </span>
										</span>
									</c:if>

								</div>
							</c:forEach> --%>
							<h4 style="margin-bottom:15px;">선택한 리워드 정보</h4>
							<table class="table table-hover">
								<thead style="border-top:3px solid #40c8b5; border-bottom:3px solid #40c8b5;">
									<tr style="color:#40c8b5; border-bottom:2px solid #40c8b5; text-align:center;">
										<th scope="col" style="width: 25%">리워드 구성</th>
										<th scope="col" style="width: 15%">리워드 금액</th>
										<th scope="col" style="width: 10%">수량</th>
										<th scope="col" style="width: 25%">배송 예정일</th>
										<th scope="col" style="width: 25%">선택 옵션</th>
									</tr>
								</thead>
								<tbody>
									<c:forEach var="s" items="${ sList }" varStatus="vs">
										<input type="hidden" name="fundings[${vs.index}].rNo" value="${s.rNo }"/>
										<input type="hidden" name="fundings[${vs.index}].pNo" value="${s.pNo }"/>
										<input type="hidden" name="fundings[${vs.index}].rItem" value="${s.rItem }"/>
										<input type="hidden" name="fundings[${vs.index}].rPrice" value="${s.rPrice }"/>
										<input type="hidden" name="fundings[${vs.index}].rDelivery" value="${ s.rDelivery }"/>
										<input type="hidden" name="fundings[${vs.index}].quantity" value="${ s.quantity }"/>
										<input type="hidden" name="fundings[${vs.index}].option" value="${ s.option }"/>
										<tr style="text-align:center;">
											<td><strong class="name_reward">${ s.rItem }</strong></td>
											<td>
												<em class="num_cont">
													<fmt:formatNumber value="${ s.rPrice }" groupingUsed="true" />
												</em>
												<span class="txt_won">원</span>
											</td>
											<td><span class="num">${ s.quantity }</span></td>
											<td>
												<span class="txt_desc">${ s.rDelivery } </span>
											</td>
											<td>
												<c:if test="${ s.option ne '' }">
													<span class="txt_desc"> ${ s.option } </span>
												</c:if>
												<c:if test="${ s.option eq '' }">
													<span class="txt_desc"> 해당 없음 </span>
												</c:if>
											</td>
										</tr>
									</c:forEach>
									<tr>
										<td colspan="5" style="text-align:right;">
											<span class="add_price"> 
												<input type="hidden" id="addPrice" name="addPrice" value="${addAmt}">
												<input type="hidden" id="totalPrice" name="totalPrice" value="${totalAmt}">
												<span style="font-weight:700; font-size:1.2rem;">추가 참여금</span> 
												&nbsp;&nbsp;&nbsp;&nbsp;
												<span style="font-size:1.1rem;">${ addAmt } 원</span> 
												&nbsp;&nbsp;&nbsp;&nbsp;
											</span>
										</td>
									</tr>
								</tbody>
							</table>

							<!-- <div class="reward_item">
								<span class="add_price"> <span class="tit_cont">추가
										참여금</span> <em class="num_cont">0원</em>
								</span>
							</div> -->

							<!-- <fieldset class="box_field">
								<h3 class="tit_info">
									결제자 휴대폰 정보<span class="notice_vital"><span
										class="mark_vital">*</span> 필수입력</span>
								</h3>
								<div class="fld_type1">
									<dl>
										<dt>
											<label for="investorPhone" class="tit_item">휴대폰번호</label>
										</dt>
										<dd>
											<span class="tf_comm"> <span
												id="investor_mobile_placeholder"></span> <input type="text"
												id="investorPhone" name="rewardInvestor.investorHp"
												class="tf_cont" value="">
											</span>
										</dd>
									</dl>
								</div>
								<p class="txt_cmt_noti">※ 결제(출금)알림 문자를 받으실 휴대폰 번호를 입력해주세요.</p>
							</fieldset> -->

							<fieldset class="box_field">
								<input type="hidden" name="rewardInvestor.memberSeq"
									value="236994"> <input type="hidden"
									name="rewardInvestor.memberType" value="P">
								<h3 class="tit_info">리워드 수령정보</h3>
								
								<div class="fld_type1">
									<dl>
										<dt>
											<label for="tfName" class="tit_item">받는 분<em
												style="color: red">&nbsp;*</em></label>
										</dt>
										<dd>
											<span class="tf_comm"> 
												<input type="text" id="tfName" class="tf_cont" name="tfName" value="">
											</span>
										</dd>
									</dl>
									<dl>
										<dt>
											<label for="tfPhone" class="tit_item">휴대폰번호<em
												style="color: red">&nbsp;*</em></label>
										</dt>
										<dd>
											<span class="tf_comm">
												<input type="text" id="tfPhone" name="tfPhone" class="tf_cont" value="">
											</span>
										</dd>
									</dl>
									<dl>
										<dt>
											<label class="tit_item">주소<em style="color: red">&nbsp;*</em></label>
										</dt>
										<dd class="date_addr">
											<input id="postcode1" name="post" class="postcodify_postcode5" placeholder=""
                                                maxlength="14" type="text" required readonly/>
											<button type="button" id="postcodify_search_button">검색</button>
											<input type="text" name="address1" class="postcodify_address addr" value="" readonly>
											<input type="text" name="address2" class="postcodify_extra_info addr" value="" placeholder="우편번호 검색 후 상세주소 입력"><br>
											<input type="hidden" name="roadFullAddr" id="roadFullAddr" value="">
										</dd>
									</dl>
									<dl>
										<dt>
											<label for="tfMemo">배송메모</label>
										</dt>
										<dd class="dely_memo">
											<textarea id="tfMemo" class="tf_memo"
												name="tfMemo" cols="30" rows="5"></textarea>
										</dd>
									</dl>
									<label for="chkRegister" class="chk_comm save_member_info">
										<input type="checkbox" id="chkRegister" name="isSaveMyInfo"
										style="width: 22px; height: 22px; border: 1px solid #40c8b5; border-radius: 3px; background-color: white;">
										<span class="txt_cont inline">리워드 수령정보를 회원정보로 저장합니다.</span>
									</label>
								</div>
							</fieldset>
							
							<script src="//d1p7wdleee1q2z.cloudfront.net/post/search.min.js"></script>
							<script> 
							$(function() { $("#postcodify_search_button").postcodifyPopUp(); }); 
							</script>


							<fieldset class="box_field">
								<h3 class="tit_info">
									응원 한마디<span class="notice_vital"><span
										class="mark_vital">*</span> 필수입력</span>
								</h3>
								<div class="cmt_comm">

									<span class="user_profile"> <span
										class="img_profile clear_empty_picture"> <img
											src="test.png" style="background: rgb(255, 255, 255);">
									</span> <span class="txt_name"></span>
									</span>

									<div class="box_cmt">
										<textarea cols="30" rows="5" class="tf_cmt" id="tf_emph"
											name="rewardInvestor.supportComment" title="댓글 작성"></textarea>
										<div class="cmt_info">
											<span class="txt_cmt">응원의 한마디를 남겨주세요.</span> <span
												class="num_byte" id="emph_count"><em>0</em> / 최대 300자</span>
										</div>
									</div>
								</div>
								<p class="txt_cmt_noti">작성하신 응원 한마디는 결제완료 후 '참여자응원'에서 확인할 수
									있습니다.</p>
							</fieldset>

							<script>
								$(function() {
									$('#tf_emph')
											.keyup(
													function(e) {
														var content = $(this)
																.val();
														$('#emph_count')
																.html(
																		"<em>"
																				+ content.length
																				+ "</em> / 최대 300자"); //글자수 실시간 카운팅

														if (content.length > 300) {
															alert("최대 300자까지 입력 가능합니다.");
															$(this)
																	.val(
																			content
																					.substring(
																							0,
																							300));
															$('#counter')
																	.html(
																			"<em>300</em> / 최대 300자");
														}
													});

								});
							</script>

							<fieldset class="box_field">
								<h3 class="tit_info">유의사항 및 약관동의</h3>
								<div class="reward_notandum">
									<h4 class="lnb_notandum">베니아티스 펀딩 결제시 유의사항</h4>
									<div class="tf_notandum">
										1. 무조건 리워드(목표액에 미달하여도 진행)방식의 진행 프로젝트는 베니아티스 펀딩 철회 기준에 의거하여
										프로젝트 종료일 1일 전부터 결제의 취소 및 환불이 불가합니다. 결제 취소 가능기간 내에 취소한 금액은 취소한
										날로부터 영업일 기준 3~5일 이내로 환불이 진행됩니다. <br>
										<br> 2. 성공해야 리워드(목표액에 달성되어야 진행)방식의 진행 프로젝트는 펀딩 마감일 기준
										목표액에 달성한 경우에만 등록된 카드로부터 인출이 진행됩니다. 프로젝트 종료일 1일 전까지 결제철회가 가능하며
										펀딩 마감일 이후 프로젝트 성공 시 결제철회는 불가합니다. <br>
										<br> 3. 프로젝트 종료일 1일 전이 아니더라도 프로젝트가 이미 목표액에 달성하여 성공한 경우에는
										리워드 제작 관계로 결제의 취소 및 환불이 불가함을 양해바랍니다. <br>
										<br> 4. 개별 서비스의 성격에 따라 회사는 별도 약관 및 이용조건에 따른 취소 및 환불 규정을
										정할 수 있으며, 이 경우 개별 약관 및 이용조건 상의 취소 및 환불규정이 우선 적용됩니다. 이용안내에 규정되지
										않은 취소 및 환불에 대한 사항에 대해서는 소비자 분쟁 해결 기준에 의거하여 처리됩니다.
									</div>
									<label for="chkAccept1" class="chk_comm"> 
									<input type="checkbox" id="chkAccept1" name="chkaAccept1"
										style="width: 22px; height: 22px; border: 1px solid #40c8b5; border-radius: 3px; background-color: white;">
										<span class="txt_cont">확인하였고, 동의합니다.</span>
									</label>
								</div>
								<div class="reward_notandum">
									<h4 class="lnb_notandum">배송 및 결제 관련 제 3자 정보제공 동의</h4>
									<div class="tf_notandum">
										‘참여하기’를 통한 결제 및 리워드 배송 서비스를 제공하기 위해 회원의 사전 동의 아래 제3자(프로젝트
										개설자)에게 제공합니다. <br>
										<br> 개설자에게 전달되는 개인 정보는 기재된 목적 달성 후 파기에 대한 책임이 개설자에게 있으며,
										파기하지 않아 생기는 문제에 대한 법적 책임은 개설자에게 있습니다. <br>
										<br> 아래 내용에 대하여 동의를 거부하실 수 있으며, 거부 시 서비스 이용이 제한됩니다.
										<table class="omc-table">
											<tbody>
												<tr>
													<th>제공받는자</th>
													<td>프로젝트 개설자</td>
												</tr>
												<tr>
													<th>목적</th>
													<td>리워드 펀딩 정보 확인 및 발송, 리워드 발송과 관련된 공지 및 민원처리</td>
												</tr>
												<tr>
													<th>항목</th>
													<td>참여자 정보(이름, 이메일, 휴대폰 번호)<br> 수취인 정보(이름, 휴대폰
														번호, 주소, 배송메모)
													</td>
												</tr>
												<tr>
													<th>보유기간</th>
													<td>펀딩 마감 후 3 년</td>
												</tr>
											</tbody>
										</table>
									</div>
									<label for="chkAccept2" class="chk_comm"> <input
										type="checkbox" id="chkAccept2" name="chkaAccept2"
										style="width: 22px; height: 22px; border: 1px solid #40c8b5; border-radius: 3px; background-color: white;">
										<!-- <span class="chk_square"><span class="fa fa-check"></span></span> -->
										<span class="txt_cont">확인하였고, 동의합니다.</span>
									</label>
								</div>
								<div class="reward_notandum">
									<h4 class="lnb_notandum">책임 규정</h4>
									<div class="tf_notandum">
										베니아티스는 플랫폼을 제공하는 중개자로 크라우드펀딩을 받는 당사자가 아닙니다. <br>
										<br> 리워드 제공 등에 관한 지연, 제품의 하자 등으로 인한 일체의 법적책임은 펀딩을 받는 프로젝트
										개설자가 부담합니다. <br>
										<br> 하지만 베니아티스는 프로젝트 개설자와 후원자간의 원활한 의사소통을 위해 최선의 노력을
										다하겠습니다.
									</div>
									<label for="chkAccept3" class="chk_comm"> <input
										type="checkbox" id="chkAccept3" name="chkaAccept3"
										style="width: 22px; height: 22px; border: 1px solid #40c8b5; border-radius: 3px; background-color: white;">
										<!-- <span class="chk_square"><span class="fa fa-check"></span></span> -->
										<span class="txt_cont">확인하였고, 동의합니다.</span>
									</label>
								</div>
							</fieldset>

							<div class="total_invoice">
								<!--All or Nothing 인경우 예약결제만 됨 -->
								<input type="hidden" id="paymethod"
									name="rewardInvestor.paymethod"> <input type="hidden"
									id="optPayment" value="card">
								<!-- <dl>
                                            <dt>결제방식</dt>
                                            <dd class="pay_plan">예약결제</dd>
                                        </dl> -->

								
								<dl class="total_amount">
									<dt>&nbsp;&nbsp;최종 결제금액</dt>
									<dd>
										<em class="num"><fmt:formatNumber value="${ totalAmt }" groupingUsed="true" /></em> 원 &nbsp;&nbsp;
									</dd>
								</dl>
							</div>

							<footer class="reward_foot">
								<button type="button" class="btn_sumbit" id="pay_btn">결제하기</button>
								<button type="button" class="btn_cancel"
									onclick="onClickCancel();">취소</button>
								<!-- <button type="button" class="btn_cancel" id="testbtn">테스트 버튼</button> -->
							</footer>
							
						</form>
					</div>
				</div>
			</article>
			<script>
				$(function(){
					/* $("#testbtn").on("click", function(){
						var param = $("#addPrice").val();
						var result = removeCommas(param);
						alert("콤마 없애기 : " + result);
					}); */
					
					IMP.init('imp22290051');
					// 복사해온거 수정하기
					$("#pay_btn").on("click", function(){
						// 추가 참여금, 총 결제 금액 콤마 없애기
						var param = $("#addPrice").val();
						var addPrice = parseInt(removeCommas(param));
						$("#addPrice").val(addPrice);
						
						var param2 = $("#totalPrice").val();
						var totalPrice = parseInt(removeCommas(param2));
						$("#totalPrice").val(totalPrice);
						
						// 주소 한 문자열로 합치기
						var addr1 = $("input[name=address1]").val();
						var addr2 = $("input[name=address2]").val();
						var fullAddr = addr1 + addr2;
						$("#roadFullAddr").val(fullAddr);
						
						// 입력정보가 비어있지 않을 때 결제창 이동
						if($("#investorPhone").val() == ""){
							alert("결제자(주문자) 연락처를 입력해주세요");
							$("#investorPhone").focus();
						}else if($("#tfName").val() == ""){
							alert("수령인 이름 입력해주세요");
							$("#tfName").focus();
						}else if($("#tfPhone").val() == ""){
							alert("수령인 연락처를 입력해주세요");
							$("#tfPhone").focus();
						}else if($("#roadFullAddr").val() == ""){
							alert("주소 검색을 통해 배송지를 입력해주세요");
							$("#postcode1").focus();
						}else if(!$("#chkAccept1").is(':checked') || !$("#chkAccept2").is(':checked') || !$("#chkAccept3").is(':checked')){
							alert("유의사항 및 약관동의에 체크해주세요");
						}else{
							
							var totalAmt = ${totalAmt};
							IMP.request_pay({
							    pg : 'html5_inicis',
							    pay_method : 'card',
							    merchant_uid : 'merchant_' + new Date().getTime(),
							    name : '주문명:결제테스트',
							    amount : totalAmt,
							    buyer_email : 'iamport@siot.do',
							    buyer_name : '구매자이름',
							    buyer_tel : '010-1234-5678',
							    buyer_addr : '서울특별시 강남구 삼성동',
							    buyer_postcode : '123-456'
							}, function(rsp) {
							    if ( rsp.success ) {
							        var msg = '결제가 완료되었습니다.';
							        /* msg += '고유ID : ' + rsp.imp_uid;
							        msg += '상점 거래ID : ' + rsp.merchant_uid;
							        msg += '결제 금액 : ' + rsp.paid_amount;
							        msg += '카드 승인번호 : ' + rsp.apply_num; */
							        
							        alert(msg);
	
									$("#insertFunding").submit();
							        
							    } else {
							        var msg = '결제에 실패하였습니다.';
							        msg += '에러내용 : ' + rsp.error_msg;
							        alert(msg);
							    }
							    
							});
						}
					});
					
				});
				
				function onClickCancel(){
					alert('후원이 취소되었습니다.');
					location.href="home.do";
				}
			</script>
		</div>
		</main>
		<!-- footer -->
		<footer id="omcFoot"> </footer>
		<!-- footer -->

	</div>
	<jsp:include page="../common/footer.jsp" />
</body>

</html>