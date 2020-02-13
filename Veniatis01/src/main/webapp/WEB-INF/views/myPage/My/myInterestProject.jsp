<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/guidecss.css">
</head>
<body class="login">
<jsp:include page="../../common/menubar.jsp"/>
<main id="omcContainer" class="cont_mypage">
			
	    	<!-- aside -->
	    	
		    <h2 id="omcBody" class="screen_out">마이페이지</h2>
		    <div id="cMain">
		        <article id="mContent" class="mypage_participatory_project">
		            <header class="head_comm">
						<h1 class="tit_comm">참여프로젝트</h1>
		            </header>

		            <div class="cont_comm support">
						<div class="box_comm">
							<div class="participation_status">
								<h2>참여현황</h2>
								<div class="status_area">
									<div class="status_item">
										<dl>
											<dt>현재 참여중인 금액</dt>
											<dd class="unit_ico"><span class="img_ico ico_type1"></span></dd>
											<dd class="unit_price"><em>0</em>원</dd>
										</dl>
									</div>
		
									<div class="status_item">
										<dl>
											<dt>총 참여 금액</dt>
											<dd class="unit_ico"><span class="img_ico ico_type2"></span></dd>
											<dd class="unit_price"><em>3,000</em>원</dd>
										</dl>
									</div>
		
									<div class="status_item m_full_w">
										<dl>
											<dt>펀드잔고</dt>
											<dd class="unit_ico"><span class="img_ico ico_type3"></span></dd>
											<dd class="unit_price"><em>0</em>원</dd>
											
										</dl>
									</div>
								</div>
							</div>
		
							<div class="guide_txt_area">
								<h3 class="guide_tit">안내드립니다.</h3>
								<ol>
									<li>참여하기 취소는 펀딩종료일 1일 전까지 가능하며 이후는 취소가 불가능합니다. 또한 펀딩이 마감일 전에 100% 이상 달성하는 경우와 펀딩기간 중 리워드가 배송된 경우에도 취소가 불가능하오니 이 점 양해바랍니다.</li>
									<li>배송정보 수정은 펀딩종료일까지 수정이 가능합니다. 수정은 프로젝트 [자세히보기] &gt; [배송지 수정]를 통해 가능합니다. 다만, 펀딩기간 중 리워드가 배송되는 프로젝트라면 참여한 프로젝트 진행자에게 문의해주세요.</li>
									<li>가상계좌는 유효기간내에 입금을 진행해주세요.</li>
									<li>금액대별 리워드 변경을 원할 시 기존 참여를 취소해주시고, 재 참여 해주세요. 리워드 옵션 변경 시에는 관리자 문의를 이용해주세요.</li>
								</ol>
							</div>
							
							
							<div class="list_prj">
								
								
								<div class="article_cont">
									<div class="link_thumb">
										<a href="/reward/7870"><img src="/uploads/reward/REWARD_20191228030946729.jpg"></a>
									</div>
									<div class="info_thumb">
										
										<div class="keyword_thumb">
											<span class="word">성공해야 리워드</span>
										</div>
										
										
										<strong class="tit_thumb">건선환자들의 손을 잡는 HOLD MY HAND 머그컵</strong>
											
											
												<p class="item_relate">리워드 없이 참여</p>
											
											
											
										<p class="item_period">(펀딩기간 : 2020-01-02~2020-01-19)</p>
		
										<div class="item_price">
											<em>651,000</em>원 / 목표액800,000원
										</div>
		
										<div class="my_participation_contents">
											<dl>
												<dt>참여금액</dt>
												<dd><strong>3,000</strong>원</dd>
											</dl>
											<dl>
												<dt>결제방식</dt>
												
												<dd>예약결제</dd>
												
												
											</dl>
											<dl>
												<dt>참여일</dt>
												<dd>2020-01-17 14:39</dd>
											</dl>
											<dl>
												<dt>프로젝트상태</dt>
												
													
													
															
															
															     <dd>
																    
																     펀딩실패
																     
																    
																</dd>
															
													
												
												
											</dl>
											<a href="/mypage/participant/reward/232719" class="btn_detail">자세히보기</a>
										</div>
									</div>
								</div>
								
								
								
								</div>
							
							
							<div class="paging_comm">
								<a class="link_page on">1</a>&nbsp;

				   				<input id="pageIndex" name="pageIndex" type="hidden" value="1">
							</div>
							
							
						</div>
		            </div>
		        </article>
		    </div>
		</main>
		<form id="withdrawForm" name="withdrawForm">
		<div class="modal" id="withdraw_popup" style="display:none;">
			<div class="modal_body">
				<div class="modal_container pop_withdraw">
					<h1 class="screen_out">출금 안내 팝업</h1>
					<h2 class="tit_depth1"><a href="#none" class="modal_fir_focus">출금하기</a></h2>
		
					<div class="withdrawal_information">
						<p class="info_tit">유수완님의 출금정보</p>
						
						<input type="hidden" id="withdrawable_amount" value="0">
						<div class="info_cont">
							<dl>
								<dt>출금가능금액</dt>
								
								<dd><input type="text" class="" readonly="readonly" value="0원"></dd>
							</dl>
		
							<dl>
								<dt>입금계좌번호</dt>
								<dd>
									<div class="row m_block">
										<div class="cell standard">
											<select id="account_bank" name="accountBank">
												<option value="select">은행선택</option>
												<option value="KDB 산업">KDB 산업</option>
												<option value="기업">기업</option>
												<option value="국민">국민</option>
												<option value="KEB 하나">KEB 하나</option>
												<option value="수협">수협</option>
												<option value="농협">농협</option>
												<option value="지역농축협">지역농축협</option>
												<option value="우리">우리</option>
												<option value="신한">신한</option>
												<option value="SC제일">SC제일</option>
												<option value="씨티">씨티</option>
												<option value="대구">대구</option>
												<option value="부산">부산</option>
												<option value="제주">제주</option>
												<option value="광주">광주</option>
												<option value="전북">전북</option>
												<option value="경남">경남</option>
												<option value="새마을금고">새마을금고</option>
												<option value="신협">신협</option>
												<option value="산립조합">산림조합</option>
												<option value="우체국">우체국</option>
												<option value="케이뱅크">케이뱅크</option>
												<option value="카카오뱅크">카카오뱅크</option>
											</select>
										</div>
										<div class="cell responsive">
											<input type="text" id="account_number" name="accountNum">
										</div>
									</div>
								</dd>
							</dl>
							<dl>
								<dt>예금주</dt>
								<dd><input type="text" id="account_holder" name="accountName"></dd>
							</dl>
		
							<dl class="requested_withdrawal">
								<dt>출금요청금액</dt>
								<dd>
									<div class="row">
										<div class="cell responsive">
											<input type="text" id="request_amount" name="amount">
										</div>
										<div class="cell standard">원</div>
									</div>
								</dd>
							</dl>
						</div>
					</div>
		
		
					<div class="modal_btn">
						<p>※ 회원님이 출금 요청하신 금액은 요청일 다음 영업일 오전 중에 회원님 은행계좌로 이체됩니다.</p>
						<button type="button" id="apply_withdraw">신청하기</button>
					</div>
					<button type="button" title="모달창 닫기" class="modal_btn_close modal_last_focus" id="close_withdraw"><img src="/omc/asset/images/modal_btn_close.png" alt="닫기"></button>
				</div>
			</div>
		</div>
		</form>
		<!-- //출금하기 팝업  -->
		
		<!-- footer -->
    	


























<div id="dJ85dY6-1580730508086" class="" style="display: block !important;"><iframe id="AIg7QrH-1580730508087" src="about:blank" frameborder="0" scrolling="no" title="chat widget" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; top: auto !important; right: auto !important; bottom: auto !important; left: auto !important; position: static !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 280px !important; z-index: 999999 !important; cursor: auto !important; float: none !important; border-radius: unset !important; pointer-events: auto !important; display: none !important; height: 120px !important;"></iframe><iframe id="GHOl6iO-1580730508088" src="about:blank" frameborder="0" scrolling="no" title="chat widget" class="" style="outline: none !important; visibility: visible !important; resize: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; position: fixed !important; border: 0px !important; padding: 0px !important; transition-property: none !important; z-index: 1000001 !important; cursor: auto !important; float: none !important; pointer-events: auto !important; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 10px 0px !important; height: 60px !important; min-height: 60px !important; max-height: 60px !important; width: 60px !important; min-width: 60px !important; max-width: 60px !important; border-radius: 50% !important; transform: rotate(0deg) translateZ(0px) !important; transform-origin: 0px center !important; margin: 0px !important; top: auto !important; bottom: 20px !important; right: 20px !important; left: auto !important; display: block !important;"></iframe><iframe id="wPr4S4S-1580730508088" src="about:blank" frameborder="0" scrolling="no" title="chat widget" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; position: fixed !important; border: 0px !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; display: none !important; z-index: 1000003 !important; cursor: auto !important; float: none !important; border-radius: unset !important; pointer-events: auto !important; top: auto !important; bottom: 60px !important; right: 15px !important; left: auto !important; width: 21px !important; max-width: 21px !important; min-width: 21px !important; height: 21px !important; max-height: 21px !important; min-height: 21px !important;"></iframe><div class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; top: 0px !important; right: auto !important; bottom: auto !important; left: 0px !important; position: absolute !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 100% !important; height: 100% !important; display: none !important; z-index: 1000001 !important; cursor: move !important; float: left !important; border-radius: unset !important; pointer-events: auto !important;"></div><div id="lMdlN0Z-1580730508086" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; top: 0px !important; right: auto !important; bottom: auto !important; left: 0px !important; position: absolute !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 6px !important; height: 100% !important; display: block !important; z-index: 999998 !important; cursor: w-resize !important; float: none !important; border-radius: unset !important; pointer-events: auto !important;"></div><div id="eeTMG1M-1580730508087" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; top: 0px !important; right: 0px !important; bottom: auto !important; left: auto !important; position: absolute !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 100% !important; height: 6px !important; display: block !important; z-index: 999998 !important; cursor: n-resize !important; float: none !important; border-radius: unset !important; pointer-events: auto !important;"></div><div id="ROeb5yp-1580730508087" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; top: 0px !important; right: auto !important; bottom: auto !important; left: 0px !important; position: absolute !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 12px !important; height: 12px !important; display: block !important; z-index: 999998 !important; cursor: nw-resize !important; float: none !important; border-radius: unset !important; pointer-events: auto !important;"></div><iframe id="rWVyus0-1580730508139" src="about:blank" frameborder="0" scrolling="no" title="chat widget" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; position: fixed !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 378px !important; height: 832px !important; display: none !important; z-index: 999999 !important; cursor: auto !important; float: none !important; border-radius: unset !important; pointer-events: auto !important; bottom: 100px !important; top: auto !important; right: 20px !important; left: auto !important;"></iframe></div>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>