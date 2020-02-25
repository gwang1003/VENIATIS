<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="resources/css/hr.css">
<script src="resources/js/hr.js"/>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<!-- 부트 스트랩  -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
	crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
	crossorigin="anonymous"></script>
	
    <title>VENIATIS : 후원형</title>
    
    <script type="text/javascript">
        $(document).ready(function () {
            // 참여 단계 네비게이션바 애니메이션 처리
            setTimeout(function () {
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
    </script>
</head>

<body>
   <jsp:include page="../common/menubar.jsp" /> 
    <div id="omcWrap">
        <!-- header -->
        <!-- header -->

        <main id="omcContainer" class="cont_support">
            <!-- aside -->
            <!--  aside -->
            <h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>
            <div class="cMain">
                <article id="mContent" class="project_reward">
                        <header class="head_comm">
                            <h1 id="projectName" class="tit_comm">
                                    (#) 프로젝트 제목
                            </h1>
                            <div class="author_reward">
                                <span class="txt_author">by</span>
    
                                <span class="user_profile">
                                    <span class="img_profile clear_empty_picture">
    
                                        <img src="test.png">
    
                                    </span>
                                    <span class="txt_name">(#)크리에이터 명</span>
                                </span>
    
                            </div>
                        </header>
                    <div class="cont_comm reward-join-box">


                        <div class="step-navigation-wrapper reward">
                            <div class="step-navigation-bar">
                                <div class="step-progress-bar" style="width:0%;"></div>
                            </div>
                            <div>
                                <span class="reward-join-step active" style="width: 33.33333333%">1.리워드금액선택</span>
                                <span class="reward-join-step active" style="width: 33.33333333%">2.참여하기</span>
                                <span class="reward-join-step" style="width: 33.33333333%">3.참여완료</span>
                            </div>
                        </div>
                        <div class="box_comm">
                            <form id="selectForm" name="selectForm" method="post">
                                <input type="hidden" id="totalAmt" value="0" />
                                <input type="hidden" id="projectSeq" name="rewardProject.projectSeq" value="7795" />
                                <input type="hidden" id="simulationFlag" name="rewardProject.simulationFlag" value="N" />

                                <input type="hidden" id="investorSeq" name="rewardInvestor.investorSeq" value="" />
                                <input type="hidden" id="norewardflag" name="norewardflag" value="N">

                                <div class="reward_item" id="div_reward_item">
                                    <input type="hidden" id="rewardAmt" name="rewardItemList[0].rewardAmt" value="8000">
                                    <input type="hidden" id="title" name="rewardItemList[0].title" value="(얼리버드) 독립운동가 그립톡 1개 ">
                                    <input type="hidden" id="rewardExpectText" name="rewardItemList[0].rewardExpectText" value="2020년 3월 20일부터 27일 까지 순차적으로 제공">
                                    <input type="hidden" id="rewardSelFlag" name="rewardItemList[0].rewardSelFlag" value="Y">
                                    <input type="hidden" id="selectCount" name="rewardItemList[0].selectCount" value="1">
                                    <input type="hidden" id="rewardSeq" name="rewardItemList[0].rewardSeq" value="13775">
                                    <input type="hidden" id="optionText" name="rewardItemList[0].optionText" value="1번 선택">
                                    <input type="hidden" name="rewardItemList[0].rewardQty" value="10">
                                    <span class="item_amount">
                                    		<c:forEach var='s' items="${ sList }">
                                    			${s}<br>
                                    		</c:forEach>
                                            <span class="tit_cont">참여금액 (수량<span class="num">1</span>)</span>
                                            <em class="num_cont">8,000</em><span class="txt_won">원</span>
                                        </span>
                                    <strong class="name_reward">(얼리버드) 독립운동가 그립톡 1개 </strong>
                                    <span class="info_dely">
                                            <span class="tit_cont">배송 예정일 : </span>
                                            <span class="txt_desc">
                                                2020년 3월 20일부터 27일 까지 순차적으로 제공
                                            </span>
                                        </span>
                                    
                                            <span class="txt_option">
                                                <span class="tit_cont">리워드 옵션 : </span>
                                                <span class="txt_desc">
                                                    1번 선택
                                                </span>
                                            </span>
                                    
                                </div>

                                <div class="reward_item">
                                    <span class="add_price">
                                       <span class="tit_cont">추가 참여금</span>
                                       <em class="num_cont">0원</em>
                                    </span>                               
                                </div>
                               

                               <fieldset class="box_field">
                                <h3 class="tit_info">결제자 휴대폰 정보<span class="notice_vital"><span class="mark_vital">*</span> 필수입력</span></h3>
                                <div class="fld_type1">
                                    <dl>
                                        <dt><label for="investorPhone" class="tit_item">휴대폰번호</label></dt>
                                        <dd>
												<span class="tf_comm">
													<span id="investor_mobile_placeholder"></span>
													<input type="text" id="investorPhone" name="rewardInvestor.investorHp" class="tf_cont" value="">
												</span>
                                        </dd>
                                    </dl>
                                </div>
                                <p class="txt_cmt_noti">※ 결제(출금)알림 문자를 받으실 휴대폰 번호를 입력해주세요.</p>
                            </fieldset>

                            <fieldset class="box_field">
                                <input type="hidden" name="rewardInvestor.memberSeq" value="236994">
                                <input type="hidden" name="rewardInvestor.memberType" value="P">
                                <h3 class="tit_info">리워드 수령정보</h3>
                                <!-- <div class="select_type">
                                    <label for="inpMyInfo" class="rd_comm">
                                        <input type="radio" id="inpMyInfo" name="addressTypeSelect" class="inp_rd" value="inpMyInfo" checked="">
                                        <span class="rd_circle"></span><span class="txt_cont">내정보</span>
                                    </label>
                                    <label for="inpTypingNow" class="rd_comm">
                                        <input type="radio" id="inpTypingNow" name="addressTypeSelect" class="inp_rd" value="inpTypingNow">
                                        <span class="rd_circle"></span><span class="txt_cont">직접입력</span>
                                    </label>
                                </div> -->
                                <div class="fld_type1">
                                    <dl>
                                        <dt><label for="tfName" class="tit_item">받는 분<em style="color:red">&nbsp;*</em></label></dt>
                                        <dd>
                                            <span class="tf_comm">
                                                <input type="text" id="tfName" class="tf_cont" name="rewardInvestor.receiveName" value="">
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><label for="tfPhone" class="tit_item">휴대폰번호<em style="color:red">&nbsp;*</em></label></dt>
                                        <dd>
                                            <span class="tf_comm">
                                                <span id="delivery_mobile_placeholder"></span>
                                                <input type="text" id="tfPhone" name="rewardInvestor.hp" class="tf_cont" value="">
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><span class="tit_item">주소<em style="color:red">&nbsp;*</em></span></dt>
                                        <dd class="date_addr">
                                            <label for="tfAddr" class="tf_comm tf_zip">
                                                <span class="placehoder" id="zip_code_placeholder"></span>
                                                <input type="text" id="zip_code" class="tf_cont" name="rewardInvestor.postno" title="우편번호입력" disabled="disabled" value="">
                                            </label>
                                            <button class="link_zipcode" type="button" id="zipbutton">검색</button>
                                            <label for="tfAddr1" class="tf_comm">
                                                <span class="placehoder" id="addr1_placeholder"></span>
                                                <input type="text" id="addr1" class="tf_cont" name="rewardInvestor.addr1" disabled="disabled" value="">
                                            </label>
                                            <label for="tfAddr2" class="tf_comm">
                                                <span class="placehoder" id="addr2_placeholder"></span>
                                                <input type="text" id="addr2" class="tf_cont" name="rewardInvestor.addr2" value="">
                                            </label>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><label for="tfMemo">배송메모</label></dt>
                                        <dd class="dely_memo">
                                            <textarea id="tfMemo" class="tf_memo" name="rewardInvestor.memo" cols="30" rows="5"></textarea>
                                        </dd>
                                    </dl>
                                    <label for="chkRegister" class="chk_comm save_member_info">
                                        <input type="checkbox" id="chkRegister" name="isSaveMyInfo" style="width:22px; height:22px; border:1px solid #40c8b5; border-radius: 3px; background-color: white;">
                                        <span class="txt_cont inline">리워드 수령정보를 회원정보로 저장합니다.</span>
                                    </label>
                                </div>
                            </fieldset>


                            <fieldset class="box_field">
                                <h3 class="tit_info">응원 한마디<span class="notice_vital"><span class="mark_vital">*</span> 필수입력</span>
                                </h3>
                                <div class="cmt_comm">                               

                                <span class="user_profile">
                                    <span class="img_profile clear_empty_picture">                                                
                                        <img src="test.png" style="background: rgb(255, 255, 255);">                                        
                                    </span>
                                    <span class="txt_name"></span>
                                </span>

                                    <div class="box_cmt">
                                        <textarea cols="30" rows="5" class="tf_cmt" id="tf_emph" name="rewardInvestor.supportComment" title="댓글 작성"></textarea>
                                        <div class="cmt_info">
                                            <span class="txt_cmt">응원의 한마디를 남겨주세요.</span>
                                            <span class="num_byte" id="emph_count"><em>0</em> / 최대 300자</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="txt_cmt_noti">작성하신 응원 한마디는 결제완료 후 '참여자응원'에서 확인할 수 있습니다.</p>
                            </fieldset>

                            <script>
                                $(function(){
                                    $('#tf_emph').keyup(function (e){
                                        var content = $(this).val();
                                        $('#emph_count').html("<em>"+ content.length+"</em> / 최대 300자");    //글자수 실시간 카운팅

                                        if (content.length > 300){
                                            alert("최대 300자까지 입력 가능합니다.");
                                            $(this).val(content.substring(0, 300));
                                            $('#counter').html("<em>300</em> / 최대 300자");
                                        }
                                    });


                                });
                            </script>

                            <fieldset class="box_field">
                                    <h3 class="tit_info">유의사항 및 약관동의</h3>
                                    <div class="reward_notandum">
                                        <h4 class="lnb_notandum">베니아티스 펀딩 결제시 유의사항</h4>
                                        <div class="tf_notandum">
                                            1. 무조건 리워드(목표액에 미달하여도 진행)방식의 진행 프로젝트는 베니아티스 펀딩 철회 기준에 의거하여 프로젝트 종료일 1일 전부터 결제의
                                            취소 및 환불이 불가합니다. 결제 취소 가능기간 내에 취소한 금액은 취소한 날로부터 영업일 기준 3~5일 이내로 환불이 진행됩니다.
                                            <br><br>
                                            2. 성공해야 리워드(목표액에 달성되어야 진행)방식의 진행 프로젝트는 펀딩 마감일 기준 목표액에 달성한 경우에만 등록된 카드로부터 인출이
                                            진행됩니다. 프로젝트 종료일 1일 전까지 결제철회가 가능하며 펀딩 마감일 이후 프로젝트 성공 시 결제철회는 불가합니다.
                                            <br><br>
                                            3. 프로젝트 종료일 1일 전이 아니더라도 프로젝트가 이미 목표액에 달성하여 성공한 경우에는 리워드 제작 관계로 결제의 취소 및 환불이 불가함을
                                            양해바랍니다.
                                            <br><br>
                                            4. 개별 서비스의 성격에 따라 회사는 별도 약관 및 이용조건에 따른 취소 및 환불 규정을 정할 수 있으며, 이 경우 개별 약관 및 이용조건
                                            상의 취소 및 환불규정이 우선 적용됩니다. 이용안내에 규정되지 않은 취소 및 환불에 대한 사항에 대해서는 소비자 분쟁 해결 기준에 의거하여
                                            처리됩니다.
                                        </div>
                                        <label for="chkAccept1" class="chk_comm">
                                            <input type="checkbox" id="chkAccept1" name="chkaAccept1" style="width:22px; height:22px; border:1px solid #40c8b5; border-radius: 3px; background-color: white;">
                                            <!-- <span class="chk_square"><span class="fa fa-check"></span></span> -->
                                            <span class="txt_cont">확인하였고, 동의합니다.</span>
                                        </label>
                                    </div>
                                    <div class="reward_notandum">
                                        <h4 class="lnb_notandum">배송 및 결제 관련 제 3자 정보제공 동의</h4>
                                        <div class="tf_notandum">
                                            ‘참여하기’를 통한 결제 및 리워드 배송 서비스를 제공하기 위해 회원의 사전 동의 아래 제3자(프로젝트 개설자)에게 제공합니다.
                                            <br><br>
                                            개설자에게 전달되는 개인 정보는 기재된 목적 달성 후 파기에 대한 책임이 개설자에게 있으며, 파기하지 않아 생기는 문제에 대한 법적 책임은 개설자에게 있습니다.
                                            <br><br>
                                            아래 내용에 대하여 동의를 거부하실 수 있으며, 거부 시 서비스 이용이 제한됩니다.
                                            <table class="omc-table">
                                                <tbody><tr>
                                                    <th>제공받는자</th>
                                                    <td>프로젝트 개설자</td>
                                                </tr>
                                                <tr>
                                                    <th>목적</th>
                                                    <td>리워드 펀딩 정보 확인 및 발송, 리워드 발송과 관련된 공지 및 민원처리</td>
                                                </tr>
                                                <tr>
                                                    <th>항목</th>
                                                    <td>
                                                        참여자 정보(이름, 이메일, 휴대폰 번호)<br>
                                                        수취인 정보(이름, 휴대폰 번호, 주소, 배송메모)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>보유기간</th>
                                                    <td>펀딩 마감 후 3 년</td>
                                                </tr>
                                            </tbody></table>
                                        </div>
                                        <label for="chkAccept2" class="chk_comm">
                                                <input type="checkbox" id="chkAccept2" name="chkaAccept2" style="width:22px; height:22px; border:1px solid #40c8b5; border-radius: 3px; background-color: white;">
                                            <!-- <span class="chk_square"><span class="fa fa-check"></span></span> -->
                                            <span class="txt_cont">확인하였고, 동의합니다.</span>
                                        </label>
                                    </div>
                                    <div class="reward_notandum">
                                        <h4 class="lnb_notandum">책임 규정</h4>
                                        <div class="tf_notandum">
                                            베니아티스는 플랫폼을 제공하는 중개자로 크라우드펀딩을 받는 당사자가 아닙니다.
                                            <br><br>
                                            리워드 제공 등에 관한 지연, 제품의 하자 등으로 인한 일체의 법적책임은 펀딩을 받는 프로젝트 개설자가 부담합니다.
                                            <br><br>
                                            하지만 베니아티스는 프로젝트 개설자와 후원자간의 원활한 의사소통을 위해 최선의 노력을 다하겠습니다.
                                        </div>
                                        <label for="chkAccept3" class="chk_comm">
                                                <input type="checkbox" id="chkAccept3" name="chkaAccept3" style="width:22px; height:22px; border:1px solid #40c8b5; border-radius: 3px; background-color: white;">
                                            <!-- <span class="chk_square"><span class="fa fa-check"></span></span> -->
                                            <span class="txt_cont">확인하였고, 동의합니다.</span>
                                        </label>
                                    </div>
                                </fieldset>

                                <div class="total_invoice">
                                    <!--All or Nothing 인경우 예약결제만 됨 -->
                                        <input type="hidden" id="paymethod" name="rewardInvestor.paymethod">
                                        <input type="hidden" id="optPayment" value="card">
                                        <!-- <dl>
                                            <dt>결제방식</dt>
                                            <dd class="pay_plan">예약결제</dd>
                                        </dl> -->                             
                                    
                                    <input type="hidden" name="rewardInvestor.expenseAmt" id="expenseAmt" value="8000">
                                    <dl class="total_amount">
                                        <dt>최종 결제금액</dt>
                                        <dd><em class="num">8,000</em>원</dd>
                                    </dl>
                                </div>

                                <footer class="reward_foot">
                                    <button type="button" class="btn_sumbit" onclick="fnMoveNext(7795)">결제하기
                                    </button>
                                    <button type="button" class="btn_cancel" onclick="onClickCancel();">취소</button>
                                </footer>





                                
                            </form>
                        </div>
                    </div>
                </article>
            </div>
        </main>
        <!-- footer -->
        <footer id="omcFoot">
        
        </footer>
        <!-- footer -->
        
    </div>
    <jsp:include page="../common/footer.jsp" />
</body>

</html>