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

<style>
    /* 체크박스 커스텀 */
    .lab_select{ cursor: pointer;}
    .lab_select .check-icon {
        display: inline-block; 
        width: 50px; 
        height: 50px;
        border-radius:50%;
        /* border:1px solid silver; */
        background: url(icon/chk.png) left center no-repeat; 
        background-size: contain;        
        vertical-align: middle; transition-duration: .3s;
    }
    .lab_select .chk_reward{ display:none;} 
    .lab_select .chk_reward:checked + .check-icon {
        background-image: url(icon/check_mint.png); 
    }
    
</style>
    
    <script type="text/javascript">
        $(document).ready(function () {
            // 참여 단계 네비게이션바 애니메이션 처리
            setTimeout(function () {
                $('.step-progress-bar').css('width', '33.33333333%');
            }, 200);

            //후원형 프로젝트 상세에서 리워드를 선택하고 들어오면 선택된 리워드를 선택된 상태로 보여지게 한다.
            $('[id="rewardSeq"]').each(function () {
                if ($(this).val() == '') {
                    $(this).parent().addClass('selected');
                    $(this).parent().children('.count_control').children('.num_count').val(1);
                    $(this).parent().children('.lab_select').children('.chk_reward').attr('checked', true);
                    fnCalculateTotal();
                }
            });

            //리워드 체크박스와 추가참여금액 참여 금액을 선택할 때
            $('.chk_reward').on("change", function () {
                var id = $(this).attr('id');
                if (id == 'inpChkReward100') //추가 참여 금액 선택
                {
                    $tfAmount = $(this).parent().parent().children('.inp_amount').children('.tf_amount');
                    if ($(this).is(':checked')) {
                        //리워드가 선택되어야 추가 참여 금액을 선택할 수 있다.
                        var selectedReward = false;
                        $('.chk_reward').each(function (index) {
                            var rewardId = $(this).attr('id');
                            if (rewardId != 'inpChkReward100') {
                                if ($(this).is(':checked')) {
                                    selectedReward = true;
                                }
                            }
                        });
                        if (!selectedReward) {
                            alert("추가금액은 리워드를 선택하고 참여할수 있습니다.");
                            $(this).attr('checked', false);
                            return;
                        }
                        $tfAmount.removeAttr("readonly");
                        $tfAmount.focus();
                        $tfAmount.val(comma('1000'));
                    } else {
                        $tfAmount.attr("readonly", true);
                        $tfAmount.val(0);
                    }
                } else { //리워드 선택
                    /*리워드선택 시 수량,옵션 화면 보이기, 수량1증가*/
                    /*리워드선택해제 시 수량,옵션 화면 가리기, 수량0으로 reset*/
                    //alert(id);
                    if ($(this).is(':checked')) {
                        $(this).parent().parent().addClass('selected');
                        $(this).parent().parent().children('.count_control').children('.num_count').val(1);
                    } else {
                        $(this).parent().parent().removeClass('selected');
                        $(this).parent().parent().children('.count_control').children('.num_count').val(0);

                        //리워드가 선택이 되지 않으면 추가금액을 선택되지 않도록 한다.
                        var selectedReward = false;
                        $('.chk_reward').each(function (index) {
                            var rewardId = $(this).attr('id');
                            if (rewardId != 'inpChkReward100') {
                                if ($(this).is(':checked')) {
                                    selectedReward = true;
                                }
                            }
                        });
                        if (!selectedReward) {
                            $("#inpChkReward100").parent().parent().children('.inp_amount').children('.tf_amount').attr("readonly", true);
                            $("#inpChkReward100").parent().parent().children('.inp_amount').children('.tf_amount').val(0);
                            $("#inpChkReward100").attr('checked', false);
                        }
                    }
                }
                fnCalculateTotal();
            });

            //리워드 입력사항 100자 제한
            $(".tf_reward_info").on("keyup", function () {
                var content = $(this).val();
                if (content.length > 100) {
                    alert("100자를 초과할수 없습니다.");
                    $(this).val($(this).val().substr(0, 100));
                    $(this).focus();
                }
            });

            //추가 참여 금액 10000000이상 제한 ,  숫자만 입력
            $(".tf_amount").on("keyup", function () {
                //숫자만 입력
                $(this).val($(this).val().replace(/[^0-9]/g, ''));
                var content = $(this).val();
                if (content > 10000000) {
                    $(this).val(9999999);
                }
                $(this).val(comma($(this).val()));
                fnCalculateTotal();
            });

            //추가 참여 금액 10000000이상 제한 , 1000이하인 경우 제한 , 숫자만 입력
            $(".tf_amount").on("focusout", function () {
                //숫자만 입력
                $(this).val($(this).val().replace(/[^0-9]/g, ''));
                var content = $(this).val();
                if (content > 10000000) {
                    $(this).val(9999999);
                }
                $(this).val(comma($(this).val()));
                fnCalculateTotal();
            });

            //리워드 수량 1미만 제한 , 500초과 제한, 숫자만 입력
            $(".num_count").on("focusout", function () {
                //숫자만 입력
                $(this).val($(this).val().replace(/[^0-9]/g, ''));
                var count = Number($(this).val());
                var rewardQty = Number($(this).parent().children("#rewardQty").val());
                if (rewardQty > 0) //수량제한이 있는 경우
                {
                    var extraCount = Number($(this).parent().children("#extraCount").val());
                    if (parseInt(count) > parseInt(extraCount)) {
                        alert("남은 수량보다 많은 수량을 선택하셨습니다.");
                        $(this).val(extraCount);
                        return false;
                    }
                } else { //수량제한이 없는 경우
                    if (count < 1) {
                        $(this).val(1);
                    } else if (count > 999) {
                        $(this).val(999);
                    }
                }
                fnCalculateTotal();
            });

            //리워드 수량  500초과 제한, 숫자만 입력
            $(".num_count").on("keyup", function () {
                //숫자만 입력
                $(this).val($(this).val().replace(/[^0-9]/g, ''));
                var count = Number($(this).val());
                var rewardQty = Number($(this).parent().children("#rewardQty").val());
                if (rewardQty > 0) //수량제한이 있는 경우
                {
                    var extraCount = Number($(this).parent().children("#extraCount").val());
                    if (parseInt(count) > parseInt(extraCount)) {
                        alert("남은 수량보다 많은 수량을 선택하셨습니다.");
                        $(this).val(extraCount);
                        return false;
                    }
                } else { //수량제한이 없는 경우
                    if (count > 999) {
                        $(this).val(999);
                    }
                }
                fnCalculateTotal();
            });

            //더하기 버튼을 누를 때
            $(".btn_plus").on("click", function () {
                var count = $(this).parent().children(".num_count").val();
                count++;
                var rewardQty = $(this).parent().children("#rewardQty").val();
                if (rewardQty > 0) //수량제한이 있는 경우
                {
                    var extraCount = $(this).parent().children("#extraCount").val();
                    if (parseInt(count) > parseInt(extraCount)) {
                        alert("남은 수량보다 많은 수량을 선택하셨습니다.");
                        return false;
                    }
                    if (count > extraCount) {
                        $(this).parent().children(".num_count").val(extraCount);
                    } else {
                        $(this).parent().children(".num_count").val(count);
                    }
                } else { //수량제한이 없는 경우
                    if (count > 999) {
                        $(this).parent().children(".num_count").val(999);
                    } else {
                        $(this).parent().children(".num_count").val(count);
                    }
                }
                fnCalculateTotal();
            });

            //빼기 버튼을 누를 때
            $(".btn_minus").on("click", function () {
                var count = $(this).parent().children(".num_count").val();

                count--;

                var rewardQty = $(this).parent().children("#rewardQty").val();

                if (rewardQty > 0) //수량제한이 있는 경우
                {
                    var extraCount = $(this).parent().children("#extraCount").val();
                    if (parseInt(count) > parseInt(extraCount)) {
                        alert("남은 수량보다 많은 수량을 선택하셨습니다.");
                        return false;
                    }
                }

                if (count < 1) {
                    $(this).parent().children(".num_count").val(1);
                } else {
                    $(this).parent().children(".num_count").val(count);
                }

                fnCalculateTotal();
            });


        });

        //사용자가 선택한 리워드의 갯수와 금액을 계산하는 함수
        function fnCalculateTotal() {
            var rewardTotalNumber = 0;
            var rewardTotalPrice = 0;

            $('.num_count').each(function (index) {
                var rewardNumber = Number($(this).val());
                rewardTotalNumber += rewardNumber;
                var rewardPrice = Number($(this).parent().parent().children(".item_amount").children(".num_cont").text().replace(/,/gi, ""));
                rewardTotalPrice += (rewardNumber * rewardPrice);
            });

            //추가 참여금 계산.
            var rewardAddAmount = Number(uncomma($('#tfAmount').val()));
            rewardTotalPrice += rewardAddAmount;

            $('#totalAmt').val(rewardTotalPrice);
            $('.total_info').html('선택한 리워드 총  <span class="num">' + comma(rewardTotalNumber) + '</span>개이며 참여금액  <span class="num">' + comma(rewardTotalPrice) + '</span>원 입니다.');
        }

        function fnMoveNext(projectSeq) {
            var validCheck = true;
            $(".num_count").each(function (index) {
                var count = $(this).val();
                var rewardQty = $(this).parent().children("#rewardQty").val();
                if (rewardQty > 0) //수량제한이 있는 경우
                {
                    var extraCount = $(this).parent().children("#extraCount").val();
                    if (parseInt(count) > parseInt(extraCount)) {
                        alert("남은 수량보다 많은 수량을 선택하셨습니다.");
                        $(this).focus();
                        validCheck = false;
                        return false;
                    }
                }
            });

            $(".tf_reward_info").each(function (index) {
                if ($(this).is(":visible")) {
                    if (isEmpty($(this).val())) {
                        alert("리워드 옵션을 입력하여 주세요.");
                        $(this).focus();
                        validCheck = false;
                        return false;
                    }
                }
            });

            if ($("#inpChkReward100").is(':checked')) {
                if (uncomma($('.tf_amount').val()) < 1000) {
                    alert("추가 참여금액은 1000원이상부터 가능합니다.");
                    return false;
                }
            }

            if ($('#totalAmt').val() == 0) {
                alert("결제 금액이 0원입니다. 리워드 또는 금액을 추가하세요");
                validCheck = false;
                return false;
            }
            
        }

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
                                <span class="reward-join-step" style="width: 33.33333333%">2.참여하기</span>
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


                                <fieldset>
                                    <legend class="screen_out">리워드 선택</legend>
                                    <div class="order_sheet">

                                        <input type="hidden" name="rewardItemList[0].rewardAmt" value="8000" />
                                        <input type="hidden" name="rewardItemList[0].title" value="(얼리버드) 독립운동가 그립톡 1개 " />
                                        <input type="hidden" name="rewardItemList[0].rewardExpectText" value="2019년 2월 20일부터 27일 까지 순차적으로 제공" />
                                        <input type="hidden" name="rewardItemList[0].rewardSelFlag" value="Y" />



                                        <!-- 리워드 수량 제한이 있는 경우 -->


                                        <!-- 리워드 진행중인 경우 -->
                                        <div class="reward_item">
                                            <input type="hidden" name="rewardItemList[0].rewardSeq" id="rewardSeq"
                                                value="13775" />
                                            <span class="item_amount">
                                                <span class="num_cont">
                                                    8,000
                                                </span>
                                                <span class="txt_funding">원 펀딩</span>
                                            </span>
                                            <strong class="name_reward">
                                                (얼리버드) 독립운동가 그립톡 1개
                                            </strong>
                                            <span class="info_dely">
                                                <span class="tit_cont">배송 예정일 : </span>
                                                <span class="txt_desc">
                                                    2019년 2월 20일부터 27일 까지 순차적으로 제공
                                                </span>
                                            </span>
                                            <span class="txt_satea">
                                                <em class="num_state">
                                                    2명
                                                </em> 참여하였습니다.
                                                <small class="txt_count">
                                                    (수량 5개 남음)
                                                </small>
                                            </span>
                                            <label for="inpChkReward0" class="lab_select">
                                                <input type="checkbox" id="inpChkReward0" name="reward_select" class="chk_reward">
                                                <i class="check-icon"></i>
                                            </label>
                                            <fieldset class="count_control">
                                                <input type="hidden" id="extraCount" value="5" />
                                                <input type="hidden" id="rewardQty" name="rewardItemList[0].rewardQty"
                                                    value="10" />
                                                <legend class="tit_count">수량</legend>
                                                <input type="text" id="inpCount" class="num_count" name="rewardItemList[0].selectCount"
                                                    title="리워드 수량" value="0">
                                                <button type="button" class="btn_minus" title="빼기">빼기</button>
                                                <button type="button" class="btn_plus" title="더하기">더하기</button>
                                            </fieldset>

                                            <!--리워드옵션입력 필요여부에 따라 노출 -->
                                            <div class="ask_details">
                                                <label for="tfRewardInfo" class="lab_tf_reward">
                                                    리워드정보입력
                                                    <small class="txt_noti">
                                                        (<span class="mark_vital">*</span>필수입력)
                                                    </small>
                                                </label>
                                                <textarea id="tfRewardInfo" class="tf_reward_info" cols="30" rows="5"
                                                    name="rewardItemList[0].optionText" onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = ' 독립운동가분(안창호 선생님 / 유관순 열사님)을 선택하여 입력해주세요.   '"
                                                    placeholder=" 독립운동가분(안창호 선생님 / 유관순 열사님)을 선택하여 입력해주세요.   "></textarea>
                                            </div>

                                        </div>

                                        <input type="hidden" name="rewardItemList[1].rewardAmt" value="10000" />
                                        <input type="hidden" name="rewardItemList[1].title" value="독립운동가 그립톡 1개" />
                                        <input type="hidden" name="rewardItemList[1].rewardExpectText" value="2019년 2월 20일부터 27일 까지 순차적으로 제공" />
                                        <input type="hidden" name="rewardItemList[1].rewardSelFlag" value="Y" />


                                        <!-- 리워드 수량이 무한한 경우 -->
                                        <div class="reward_item">
                                            <input type="hidden" name="rewardItemList[1].rewardSeq" id="rewardSeq"
                                                value="13776" />
                                            <span class="item_amount">
                                                <span class="num_cont">
                                                    10,000
                                                </span>
                                                <span class="txt_funding">원 펀딩</span>
                                            </span>
                                            <strong class="name_reward">독립운동가 그립톡 1개</strong>
                                            <span class="info_dely">
                                                <span class="tit_cont">배송 예정일 : </span>
                                                <span class="txt_desc">
                                                    2019년 2월 20일부터 27일 까지 순차적으로 제공
                                                </span>
                                            </span>
                                            <span class="txt_satea">
                                                <em class="num_state">0명</em> 참여하였습니다.
                                            </span>
                                            <label for="inpChkReward1" class="lab_select">
                                                <input type="checkbox" name="reward_select" id="inpChkReward1" class="chk_reward">
                                                <i class="check-icon"></i>   
                                            </label>

                                            <fieldset class="count_control">
                                                <input type="hidden" id="extraCount" value="0" />
                                                <input type="hidden" id="rewardQty" name="rewardItemList[1].rewardQty"
                                                    value="0" />
                                                <legend class="tit_count">수량</legend>
                                                <input type="text" id="inpCount" class="num_count" name="rewardItemList[1].selectCount"
                                                    title="리워드 수량" value="0">
                                                <button type="button" class="btn_minus" title="빼기">빼기</button>
                                                <button type="button" class="btn_plus" title="더하기">더하기</button>
                                            </fieldset>


                                            <!--리워드옵션입력 필요여부에 따라 노출 -->
                                            <div class="ask_details">
                                                <label for="tfRewardInfo" class="lab_tf_reward">
                                                    리워드정보입력
                                                    <small class="txt_noti">(<span class="mark_vital">*</span>필수입력)</small>
                                                </label>
                                                <textarea id="tfRewardInfo" class="tf_reward_info" cols="30" rows="5"
                                                    name="rewardItemList[1].optionText" rows="5" onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = ' 독립운동가분(안창호 선생님 / 유관순 열사님)을 선택하여 입력해주세요.   '"
                                                    placeholder=" 독립운동가분(안창호 선생님 / 유관순 열사님)을 선택하여 입력해주세요.   "></textarea>
                                            </div>

                                        </div>

                                        <input type="hidden" name="rewardItemList[2].rewardAmt" value="17000" />
                                        <input type="hidden" name="rewardItemList[2].title" value="독립운동가 그립톡 2개" />
                                        <input type="hidden" name="rewardItemList[2].rewardExpectText" value="2019년 2월 20일부터 27일 까지 순차적으로 제공" />
                                        <input type="hidden" name="rewardItemList[2].rewardSelFlag" value="Y" />


                                        <!-- 리워드 수량이 무한한 경우 -->
                                        <div class="reward_item">
                                            <input type="hidden" name="rewardItemList[2].rewardSeq" id="rewardSeq"
                                                value="13777" />
                                            <span class="item_amount">
                                                <span class="num_cont">
                                                    17,000
                                                </span>
                                                <span class="txt_funding">원 펀딩</span>
                                            </span>
                                            <strong class="name_reward">독립운동가 그립톡 2개</strong>
                                            <span class="info_dely">
                                                <span class="tit_cont">배송 예정일 : </span>
                                                <span class="txt_desc">
                                                    2019년 2월 20일부터 27일 까지 순차적으로 제공
                                                </span>
                                            </span>
                                            <span class="txt_satea">
                                                <em class="num_state">0명</em> 참여하였습니다.
                                            </span>
                                            <label for="inpChkReward2" class="lab_select">
                                                <input type="checkbox" id="inpChkReward2" name="reward_select" class="chk_reward">
                                                <i class="check-icon"></i>
                                            </label>

                                            <fieldset class="count_control">
                                                <input type="hidden" id="extraCount" value="0" />
                                                <input type="hidden" id="rewardQty" name="rewardItemList[2].rewardQty"
                                                    value="0" />
                                                <legend class="tit_count">수량</legend>
                                                <input type="text" id="inpCount" class="num_count" name="rewardItemList[2].selectCount"
                                                    title="리워드 수량" value="0">
                                                <button type="button" class="btn_minus" title="빼기">빼기</button>
                                                <button type="button" class="btn_plus" title="더하기">더하기</button>
                                            </fieldset>


                                            <!--리워드옵션입력 필요여부에 따라 노출 -->
                                            <div class="ask_details">
                                                <label for="tfRewardInfo" class="lab_tf_reward">
                                                    리워드정보입력
                                                    <small class="txt_noti">(<span class="mark_vital">*</span>필수입력)</small>
                                                </label>
                                                <textarea id="tfRewardInfo" class="tf_reward_info" cols="30" rows="5"
                                                    name="rewardItemList[2].optionText" rows="5" onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = ' 독립운동가분(안창호 선생님 / 유관순 열사님)을 선택하여 입력해주세요.   '"
                                                    placeholder=" 독립운동가분(안창호 선생님 / 유관순 열사님)을 선택하여 입력해주세요.   "></textarea>
                                            </div>

                                        </div>


                                        <div class="add_amount">
                                            <label for="inpChkReward100" class="lab_select">
                                                <input type="checkbox" id="inpChkReward100" name="reward_select" class="chk_reward">
                                                <i class="check-icon"></i>
                                                <span class="tit_cont">참여금 추가입력(선택)<br> <span class="txt_refer">참여금을
                                                        추가로
                                                        후원할 수 있습니다.</span>
                                                </span>
                                            </label>
                                            <div class="inp_amount">
                                                <input type="text" id="tfAmount" class="tf_amount" title="금액입력" name="rewardInvestor.addAmt"
                                                    value="0" readOnly>
                                                <span class="txt_won"> 원</span>
                                                <span class="txt_min">1,000원 이상부터 가능</span>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- // oder sheet -->
                                </fieldset>
                                <footer class="reward_foot">
                                    <p class="total_info">
                                        선택한 리워드 총 <span class="num">0</span>개이며 참여금액 <span class="num">0</span>원
                                        입니다.
                                    </p>
                                    <button type="button" class="btn_next" onclick="fnMoveNext(7795)">다음단계</button>
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