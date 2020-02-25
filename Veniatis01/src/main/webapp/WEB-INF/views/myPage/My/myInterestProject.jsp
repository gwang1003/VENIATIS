<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/guidecss.css">
<style>
	.box_txt {
		width:100%;
		height:100%;
	}

	.box_txt button {
		width: 10%;
		border:1px solid black;
	}
	
	.box_text button p {
		margin:0;
	}
	
	.list_prj {
		padding :0;
	}
	
	.pagingTable {
		margin-top:40px;
		height:30px;
		background : darkgray;
	}
	
	.pagingTable td {
		font-size:20px;
		width:40px;
		height:40px;
		border:1px solid ghostwhite;
	}
	
	.pagingTable a:hover {
		background : #40c8b5;
		color:white;
		cursor:pointer;
	} 
</style>
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
							<div class="list_prj" style="padding-top:15px;">
								<div class="box_txt">
								<div class="box_txt">
		                            <c:url var="All" value="myInterestProject.do">
										<c:param name="align" value="All"/>
									</c:url>
									<c:url var="Ing" value="myInterestProject.do">
										<c:param name="align" value="Ing"/>
									</c:url>
									<c:url var="End" value="myInterestProject.do">
										<c:param name="align" value="End"/>
									</c:url>
                                    <a href="${ All }"><button>모두 보기 ${index[0] }</button></a>
                                    <a href="${ Ing }"><button>진행중 ${index[1] }</button></a>
                                    <a href="${ End }"><button>마감 ${index[2] }</button></a>
                                </div>
								<hr>
								<c:forEach var="i" items="${interestList }">
								<div class="article_cont">
									<div class="link_thumb">
										<a href="/reward/7870"><img src="${i.thumbnail }" style="width:996px;height:305px"></a>
									</div>
									<div class="info_thumb">
										<strong class="tit_thumb">${i.pTitle }</strong>
												<p class="item_relate">리워드 없이 참여</p>
										<p class="item_period">(펀딩기간 : ${i.startDate } ~ ${i.endDate })</p>
										<div class="item_price">
											<em>${i.sumAmount }</em>원 / 목표액${i.targetAmount }원
										</div>
										<div class="my_participation_contents">
											<dl>
												<dt>참여금액</dt>
												<dd><strong>새로 vo 만들어서 가져오기</strong>원</dd>
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
												<dt>프로젝트 상태  </dt>
															     <dd>
																     ${i.progress }
																</dd>
											</dl>
											<a href="/mypage/participant/reward/232719" class="btn_detail">자세히보기</a>
										</div>
									</div>
								</div>
								</c:forEach>
								</div>
							<table align="center" class="pagingTable">
								<tr align="center" height="20">
									<td colspan="6">
										<!-- [이전] -->
										<c:if test="${ pi.currentPage <= 1 }">
										<
										</c:if>
										<c:if test="${ pi.currentPage > 1 }">
											<c:url var="before" value="myInterestProject.do">
												<c:param name="page" value="${ pi.currentPage -1 }"/>
												<c:if test="${!empty align }">
													<c:param name="align" value="${ align }"/>
												</c:if>
											</c:url>
											<a href="${ before }"><</a>
										</c:if>
									</td>
										&nbsp;
									
										<!-- 페이지 숫자 -->
										<c:forEach var="p" begin="${pi.startPage }" end="${ pi.endPage }">
									<td>
											<c:if test="${ pi.currentPage eq p }">
												${ p }
											</c:if>
											<c:if test="${ pi.currentPage ne p }">
												<c:url var="pagination" value="myInterestProject.do">
													<c:param name="page" value="${p }"/>
													<c:if test="${!empty align }">
														<c:param name="align" value="${ align }"/>
													</c:if>
												</c:url>
												<a href="${ pagination }"><button type="button">${ p }</button></a>
											</c:if>
									</td>
											&nbsp;
										</c:forEach>
										
										<!-- [다음] -->
									<td>
										<c:if test="${ pi.currentPage >= pi.maxPage }">
										>
										</c:if>
										<c:if test="${ pi.currentPage < pi.maxPage }">
											<c:url var="after" value="myInterestProject.do">
												<c:param name="page" value="${ pi.currentPage +1 }"/>
												<c:if test="${!empty align }">
													<c:param name="align" value="${ align }"/>
												</c:if>
											</c:url>
											<a href="${ after }">></a>
										</c:if>
									</td>
								</tr>
							</table>					
						</div>
		            </div>
		        </article>
		    </div>
		</main>
		
		<!-- footer -->

<div id="dJ85dY6-1580730508086" class="" style="display: block !important;"><iframe id="AIg7QrH-1580730508087" src="about:blank" frameborder="0" scrolling="no" title="chat widget" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; top: auto !important; right: auto !important; bottom: auto !important; left: auto !important; position: static !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 280px !important; z-index: 999999 !important; cursor: auto !important; float: none !important; border-radius: unset !important; pointer-events: auto !important; display: none !important; height: 120px !important;"></iframe><iframe id="GHOl6iO-1580730508088" src="about:blank" frameborder="0" scrolling="no" title="chat widget" class="" style="outline: none !important; visibility: visible !important; resize: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; position: fixed !important; border: 0px !important; padding: 0px !important; transition-property: none !important; z-index: 1000001 !important; cursor: auto !important; float: none !important; pointer-events: auto !important; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 10px 0px !important; height: 60px !important; min-height: 60px !important; max-height: 60px !important; width: 60px !important; min-width: 60px !important; max-width: 60px !important; border-radius: 50% !important; transform: rotate(0deg) translateZ(0px) !important; transform-origin: 0px center !important; margin: 0px !important; top: auto !important; bottom: 20px !important; right: 20px !important; left: auto !important; display: block !important;"></iframe><iframe id="wPr4S4S-1580730508088" src="about:blank" frameborder="0" scrolling="no" title="chat widget" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; position: fixed !important; border: 0px !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; display: none !important; z-index: 1000003 !important; cursor: auto !important; float: none !important; border-radius: unset !important; pointer-events: auto !important; top: auto !important; bottom: 60px !important; right: 15px !important; left: auto !important; width: 21px !important; max-width: 21px !important; min-width: 21px !important; height: 21px !important; max-height: 21px !important; min-height: 21px !important;"></iframe><div class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; top: 0px !important; right: auto !important; bottom: auto !important; left: 0px !important; position: absolute !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 100% !important; height: 100% !important; display: none !important; z-index: 1000001 !important; cursor: move !important; float: left !important; border-radius: unset !important; pointer-events: auto !important;"></div><div id="lMdlN0Z-1580730508086" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; top: 0px !important; right: auto !important; bottom: auto !important; left: 0px !important; position: absolute !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 6px !important; height: 100% !important; display: block !important; z-index: 999998 !important; cursor: w-resize !important; float: none !important; border-radius: unset !important; pointer-events: auto !important;"></div><div id="eeTMG1M-1580730508087" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; top: 0px !important; right: 0px !important; bottom: auto !important; left: auto !important; position: absolute !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 100% !important; height: 6px !important; display: block !important; z-index: 999998 !important; cursor: n-resize !important; float: none !important; border-radius: unset !important; pointer-events: auto !important;"></div><div id="ROeb5yp-1580730508087" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; top: 0px !important; right: auto !important; bottom: auto !important; left: 0px !important; position: absolute !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 12px !important; height: 12px !important; display: block !important; z-index: 999998 !important; cursor: nw-resize !important; float: none !important; border-radius: unset !important; pointer-events: auto !important;"></div><iframe id="rWVyus0-1580730508139" src="about:blank" frameborder="0" scrolling="no" title="chat widget" class="" style="outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: none transparent !important; opacity: 1 !important; position: fixed !important; border: 0px !important; min-height: auto !important; min-width: auto !important; max-height: none !important; max-width: none !important; padding: 0px !important; margin: 0px !important; transition-property: none !important; transform: none !important; width: 378px !important; height: 832px !important; display: none !important; z-index: 999999 !important; cursor: auto !important; float: none !important; border-radius: unset !important; pointer-events: auto !important; bottom: 100px !important; top: auto !important; right: 20px !important; left: auto !important;"></iframe></div>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>