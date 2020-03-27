<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

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
<!-- 최근소식용 스크립트 -->
<script type="text/javascript" src="resources/smartEditor/js/jquery.js"></script>
<script type="text/javascript" src="resources/smartEditor/js/jquery-ui.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/smartEditor/SE2/js/HuskyEZCreator.js"></script> 
<title>VENIATIS : 후원형</title>
<style>
.div_hide{
   opacity:0%;
}

#Intro:hover, #News:hover, #Qna:hover, #Cheer:hover{
   cursor:pointer;
}

#cheerTable{
   width:90%;
   border-top:1px solid black; 
   border-bottom:1px solid black; 
   margin:10px 10px 10px 20px;
}

#btn_like{
	width:98%;
	font-size:1.2em;
}

.delBtn{
/* QnA 질문 삭제 버튼*/
	background-color:#777777; 
	color:white; 
	margin-left:30px; 
	padding:5px;
}

.answerBtn{
/* QnA 답변 작성 버튼*/
	 background-color:#40c8b5; 
	 color:white; 
	 margin-left:30px; 
	 padding:5px;
}

.answerModal{
	display: none; /* Hidden by default */
   	position: fixed; /* Stay in place */
   	z-index: 1; /* Sit on top */
   	left: 0;
   	top: 0;
   	width: 100%; 
   	height: 100%; /* Full height */
   	overflow: auto; /* Enable scroll if needed */
   	background-color: rgb(0,0,0); /* Fallback color */
   	background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

#pNoticeWriteBtn{
	padding:5px;
	background-color:#40c8b5;
	color:#ffffff;
	z-index:100;
}

</style>
<script>
$(function () {
    //리워드 길이보다 상세부분 div 높이 길게 지정
    var h = $(".box_reward_select").height() + "px";
    $(".box_details_cont").css("min-height", h);

    $("#Intro").on("click", function () {
        console.log("소개");
        $(".article_intro").removeClass("div_hide");
        $(".article_pNotice").addClass("screen_out");
        $(".article_qna").addClass("screen_out");
        $(".article_support").addClass("screen_out");

        $(".article_intro").removeClass("screen_out");

        $(".list_tab li").removeClass("on");
        $(".list_tab li:eq(0)").addClass("on");

    });
    $("#News").on("click", function () {
        console.log("최근소식");
        $(".article_intro").addClass("div_hide");
        $(".article_intro").addClass("screen_out");
        //$(".article_pNotice").addClass("screen_out");
        $(".article_qna").addClass("screen_out");
        $(".article_support").addClass("screen_out");

        $(".article_pNotice").removeClass("screen_out");

        $(".list_tab li").removeClass("on");
        $(".list_tab li:eq(1)").addClass("on");
        
        getpNoticeList();
    });
    
    $("#Qna").on("click", function () {
        console.log("QnA");
        $(".article_intro").addClass("div_hide");
        $(".article_intro").addClass("screen_out");
        $(".article_pNotice").addClass("screen_out");
        //$(".article_qna").addClass("screen_out");
        $(".article_support").addClass("screen_out");

        $(".article_qna").removeClass("screen_out");

        $(".list_tab li").removeClass("on");
        $(".list_tab li:eq(2)").addClass("on");
        
        getQnaList();
    });
    
    $("#Cheer").on("click", function () {
        console.log("참여자 응원");
        $(".article_intro").addClass("div_hide");
        $(".article_intro").addClass("screen_out");
        $(".article_pNotice").addClass("screen_out");
        $(".article_qna").addClass("screen_out");
        //$(".article_support").addClass("screen_out");

        $(".article_support").removeClass("screen_out");

        $(".list_tab li").removeClass("on");
        $(".list_tab li:eq(3)").addClass("on");
        
          getCheerList();
    });
    
});
//3자리 콤마 찍
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
function checkLogin(){
   alert("로그인 후 이용 가능합니다.");
}

</script>
</head>
<body>
<jsp:include page="../common/menubar.jsp" />

<div id="omcWrap">

        <main id="omcContainer" class="cont_support">

            <input type="hidden" id="projectSeq" value="7795" />
            <input type="hidden" id="simulationFlag" value="N" />

            <h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>
            <div class="cMain">
                <article id="mContent" class="project_intro">
                    <div class="top_box">
                        <header class="head_cont">
                            <span class="txt_category">
                                <span class="screen_out">카테고리</span>
                                <a>
                                ${ project.cate }
                        </a>

                            </span>
                            <span class="screen_out">프로젝트 제목</span>
                            <h1> ${ project.pTitle }</h1>
                            <div class="project_sorting">
                                <div class="tag_rel">
                                    <span class="screen_out">관련 태그</span>
                                    <c:forTokens var="tag" items="${project.hashtag}" delims=",">
                               <a class="link_tag" href="projectHash.do?hashTag=${tag}">#${tag}</a>
                           </c:forTokens>
                                </div>
                            </div>
                        </header>
                        <div class="summary_cont">
                            <div class="project_info">
                                <div id="main_image_slide" uk-slideshow="ratio: 5:3; animation: fade">
                                    <ul class="uk-slideshow-items">
                                    <c:forEach var="photo" items="${filesList}" varStatus="vs" >
                                       <c:choose>
                                          <c:when test="${vs.begin}">
                                             <li class="uk-active uk-transition-active" style="z-index: -1;">
                                                  <img src="${ photo.filePath }" class="img_g">
                                              </li>
                                          </c:when>
                                          <c:otherwise>
                                             <li>
                                                  <img src="${ photo.filePath }" class="img_g">
                                              </li>
                                          </c:otherwise>
                                       </c:choose>
                                    </c:forEach>
                                    </ul>

                                    <div class="main_image_nav_wrapper">
                                        <div class="main_image_nav">
                                 <c:forEach var="photo" items="${filesList}" varStatus="vs" >
                                    <c:choose>
	                                    <c:when test="${vs.begin}">
	                                       <img src="${ photo.filePath }" data-index="0" class="selected">
	                                    </c:when>
	                                    <c:otherwise>
	                                       <img src="${ photo.filePath }" data-index="${vs.index}">
	                                    </c:otherwise>
	                                 </c:choose>
                                 </c:forEach>

                                        </div>
                                    </div>

                                </div>
                                <script>
                                    $(function () {
                                       // 초기 페이지 로딩 시 응원 불러오기
                                      getCheerList();
                                      getQnaList();
                                      getPnoticeList();
                                       // 지속적으로 얻어오기위함
                                      setInterval(function(){
                                         getCheerList();
                                         //getQnaList();
                                      }, 10000);
                                      
                                        $(".main_image_nav img").on("click", function () {
                                            var index = $(this).index();
                                            //alert(index);
                                            $(".uk-slideshow-items li").removeAttr("style");
                                            $(".uk-slideshow-items li:eq(" + index + ")").attr("style", "z-index: -1;");
                                            $(".uk-slideshow-items li").removeClass("uk-active uk-transition-active");
                                            $(".uk-slideshow-items li:eq(" + index + ")").addClass("uk-active uk-transition-active");
                                            $(".main_image_nav img").removeClass("selected");
                                            $(".main_image_nav img:eq(" + index + ")").addClass("selected");

                                        });
                                    });
                                </script>

                                <div class="author_profile">
                                    <div class="user_profile">
                                        <span class="img_profile">
                                            <img src="${project.creProfile }">
                                        </span>
                                        <div class="author_cont">
                                            <div class="builder_profile_wrapper">
                                                <p><span class="txt_name">${ project.creName }</span></p>
                                                <span class="txt_mail">Email : ${ project.creEmail }</span>
												<span class="sns_area">
                                                        <span class="box_links">
                                                            <span class="screen_out">프로젝트 관련 링크</span>
                                                            	<c:if test="${ !empty project.pUrl }">
                                                                <a href="${ project.pUrl }" class="link_home" target="_blank">
                                                                    <span class="ico_comm" style='background-image:url(resources/project_user/homeIcon.png); 
                                                                    	background-size:cover; background-position:center center; background-repeat: no-repeat;'></span>
                                                                    <span class="sns_name"></span>
                                                                </a>
                                                                </c:if>
                                                                <c:if test="${ !empty project.pVideo }">
                                                                <a href="${ project.pVideo }" class="link_home" target="_blank">
                                                                    <span class="ico_comm" style='background-image:url(resources/project_user/videoIcon.png); 
                                                                    	background-size:cover; background-position:center center; background-repeat: no-repeat;'></span>
                                                                    <span class="sns_name"></span>
                                                                </a>
                                                                </c:if>
                                                        </span>
                                                    </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="project_details">
                            	<div class="item_state">
                            		<p><span class="txt_statetitle">목표 금액</span></p>
                                  	<span class="screen_out">목표 금액</span>
                                   	<span class="num_value">
                                   		<fmt:formatNumber value="${ project.targetAmount }" groupingUsed="true"/>
                                   	</span> 
                                 	<span class="txt_value">원</span>
                               	</div>
                                <div class="item_state">
                                    <p><span class="txt_statetitle">모인금액</span></p>
                                    <span class="screen_out">현재 참여금액</span>
                                    <span class="num_value" id="returnAmount">
                                       <fmt:formatNumber value="${ project.sumAmount }" groupingUsed="true"/>
                                    </span> 
                                    <span class="txt_value">원&nbsp;모금</span>
                                </div>
                                <div class="state_project">
                                    <div class="graph_support">
                                        <span class="screen_out">참여율</span>
                                        <c:if test="${ supportRate<100 }">
                                           <span class="bar_graph" style="width:${supportRate}%;"></span>
                                        </c:if>
                                        <c:if test="${ supportRate>=100 }">
                                           <span class="bar_graph" style="width:100%;"></span>
                                        </c:if>
                                        <span class="num_per">${supportRate}%</span>                                        
                                    </div>

                                    <div class="item_state">
                                        <p><span class="txt_statetitle">참여인원</span></p>
                                        <span class="screen_out">참여자 수</span><span class="num_value">${ supportCount }</span> 
                                        <span class="txt_value">명 참여</span>
                                    </div>

                                    <div class="item_state">
                                        <p><span class="txt_statetitle">남은기간</span></p>
                                        <!-- 날짜 계산 -->
                                <c:set var="now" value="<%=new java.util.Date()%>" />
                                
                                <fmt:parseNumber var="nDate" value="${now.time/(1000*60*60*24)}" integerOnly="true" />
                                <fmt:parseNumber var="eDate" value="${project.endDate.time/(1000*60*60*24)}" integerOnly="true" />
                                
                                <c:if test="${eDate-nDate >= 0 }">
                                           <span class="num_value">
                                               D-<span class="screen_out">Day</span>
                                      <span style="color:#40c8b5;">${eDate-nDate}</span>
                                           </span>
                                           <span class="txt_value"> 일 남음</span>
                                           <c:if test="${ empty loginUser }">
                                    <button type="button" onclick="checkLogin();" class="link_join">참여하기</button>
                                 </c:if>
                                 <c:if test="${ !empty loginUser }">
                                 <!-- 참여하기 버튼 클릭 시 리워드 선택 페이지 이동, 프로젝트 번호 같이 넘겨야함 -->
                                    <c:url var="rSelect" value="rewardSelect.do">
                                       <c:param name="pNo" value="${ project.pNo }"/>
                                    </c:url>
                                              <button type="submit" class="link_join" onclick="location.href='${ rSelect }';">참여하기</button>
                                           </c:if>
                                        </c:if>
                                        
                                        <c:if test="${eDate-nDate < 0 }">
                                           <span class="num_value">
                                               <span class="screen_out">Day</span>
                                      <span style="color:#777777;">마감된 프로젝트 입니다</span>
                                           </span>
                                           <button type="button" class="link_join" style="background-color:#777777;">프로젝트 마감</button>
                                        </c:if>
                                    </div>

                                    <%-- <div class="txt_notice ">
                                        <span class="sign_notice">성공해야<br />리워드</span>
                                        <span class="txt">
                                               목표액 <fmt:formatNumber value="${ project.targetAmount }" groupingUsed="true"/>원에 미달하면 결제가 진행되지 않는 프로젝트입니다.<br>
                                 결제는 목표액달성시 <fmt:formatDate value="${ project.endDate }" pattern="yyyy년 MM월 dd일"/>에 진행됩니다.
                                        </span>
                                    </div> --%>

                                </div>

                                <div class="item_btns">
                                    <!-- <a class="link_share" id="link_share">공유
                                        <span class="num_count" id="share_num_count">
                                        </span>
                                    </a> -->
                                    <c:if test="${ !empty loginUser }"> 
                                       <button type="button" class="btn_like" id="btn_like" onclick="fn_likeCheck();">관심 프로젝트
                                    </c:if>
                                    <c:if test="${ empty loginUser }"> 
                                       <button type="button" class="btn_like" id="btn_like" onclick="checkLogin();">관심 프로젝트
                                    </c:if>
                                    <c:if test="${ likeResult eq 0 }">
                                       <img id="heartIcon" src="resources/common/noLike.png">
                                    </c:if>
                                    <c:if test="${ likeResult > 0 }">
                                       <img id="heartIcon" src="resources/common/yesLike.png">
                                    </c:if>
                                        <span id="icon_like"></span>
                                        <span class="num_count" id="like_num_count">
                                        </span>
                                      </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="primary_cont">
                        <div class="box_details_cont">
                            <section class="section_cont">
                                <nav class="sticky_bar">
                                    <!-- 헤더랑 만나는 순간 fixed 추가 -->
                                    <h2 class="screen_out">프로젝트 상세 탭메뉴</h2>
                                    <div class="tab_box">
                                        <ul class="list_tab" id="detail_tabmenu">
                                            <li class="on"><a id="Intro" class="link_tab">소개</a></li>
                                            <li>
                                                <a id="News" class="link_tab">최근소식<span class="num_count">1</span></a>
                                            </li>
                                            <li>
                                                <a id="Qna" class="link_tab">Q&amp;A<span class="num_count">100</span></a>
                                            </li>
                                            <li>
                                                <a id="Cheer" class="link_tab">참여자<span class="skip">응원</span>
                                                    <span class="num_count">2</span></a>
                                            </li>

                                        </ul>

                                        <div class="btn_area stickable">
                                            <a href="" class="link_join">참여하기</a>
                                        </div>
                                    </div>
                                </nav>

                                <script>
                                   function fn_likeCheck(){
                                      // 관심 버튼 클릭 시 
                                      var pNo = ${project.pNo};
                                      var mNo = ${loginUser.mNo};
                                      var yesLike = false;
                                      var imgSrc = $("#heartIcon").attr("src");
                                      if(imgSrc == 'resources/common/noLike.png'){
                                         yesLike = false;
                                      }else if(imgSrc == 'resources/common/yesLike.png'){
                                         yesLike = true;
                                      }
                                      
                                      $.ajax({
                                         url:"updateLikes.do",
                                         data:{pNo:pNo, mNo:mNo, yesLike:yesLike},
                                         dataType:"text",
                                         async: false,
                                         success:function(data){
                                            if(data == "success"){
                                               alert("관심프로젝트 정보가 수정되었습니다.");
                                               location.href="projectDetail.do?pNo="+pNo;
                                            }else if(data == "fail"){
                                               alert("관심프로젝트 정보 수정에 실패하였습니다.");
                                            }
                                            
                                         },error:function(request,status,error){
                                              alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
                                          }
                                      });
                                      
                                   }
                                   
                                   
                                   /* 최근소식 */
                                   var oEditors = []; // 개발되어 있는 소스에 맞추느라, 전역변수로 사용하였지만, 지역변수로 사용해도 전혀 무관 함.

                                   $(document).ready(function() {
                                   	// Editor Setting
                                   	
                                   	nhn.husky.EZCreator.createInIFrame({
                                   		oAppRef : oEditors, // 전역변수 명과 동일해야 함.
                                   		elPlaceHolder : "smarteditor", // 에디터가 그려질 textarea ID 값과 동일 해야 함.
                                   		sSkinURI : "resources/smartEditor/SE2/SmartEditor2Skin.html", // Editor HTML
                                   		fCreator : "createSEditor2", // SE2BasicCreator.js 메소드명이니 변경 금지 X
                                   		htParams : {
                                   			// 툴바 사용 여부 (true:사용/ false:사용하지 않음)
                                   			bUseToolbar : true,
                                   			// 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음)
                                   			bUseVerticalResizer : true,
                                   			// 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음)
                                   			bUseModeChanger : true, 
                                   		}
                                   	});

                                   	// 전송버튼 클릭이벤트
                                   	$("#savebutton").click(function(){
                                   		//if(confirm("저장하시겠습니까?")) {
                                   			// id가 smarteditor인 textarea에 에디터에서 대입
                                   			oEditors.getById["smarteditor"].exec("UPDATE_CONTENTS_FIELD", []);

                                   			// 이부분에 에디터 validation 검증
                                   			/* if(validation()) {
                                   				return true;
                                   			} */
                                   		//}
                                   			
                                   	})
                                   });
                                   
                                   function fn_insertpNotice(){
                                	   var pNo = ${project.pNo};
                                       var formData1 = $("#noticeForm").serialize();
                                       $.ajax({
                                          url : "pNoticeInsert.do", 
                                           type : 'post', 
                                           data : formData1,
                                           dataType:"text",
                                           success : function(data) {
                                              //console.log("data 확인 : " + data);
                                              alert("ajax확인 : " + data);
                                              $("#noticeModal").modal('hide');
                                              getpNoticeList();
                                              location.href="projectDetail.do?pNo="+pNo;
                                           }, 
                                           error : function(xhr, status) {
                                              alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
                                              
                                           }
                                       });
                                   }
                                    
                                </script>

                                <!-- 탭이 눌려질 때 동적으로 페이지를 로드한다. -->
                                <div id="reward_tab_content">
                                    <h2 class="screen_out">소개</h2>
                                    <div class="article_intro">
                                        ${ project.pDesc }
                                    </div>

                                    <div id="reward_tab_content">
                                        <div class="article_pNotice screen_out">
                                        <c:if test="${!empty sessionScope.loginUser}">
                                           	<c:if test="${loginUser.mId eq project.creId }">
                                           		<!-- 로그인 유저가 크리에이터 일때 -->
                                           		<div class="row" style="margin:10px;">
                                           			<div class="col-9"></div>
                                           			<button type="button" id="pNoticeWriteBtn" onclick="fn_pNoticeWrite();">최근 소식 작성하기</button>
                                           		</div>
										 	</c:if>
									    </c:if>
                                            <section class="section_cont" id="NewsBox">
                                                <h2 class="screen_out">최근소식</h2>
                                                <!-- ajax로 조회후 출력 -->
                                            </section>
                                            
<div class="modal fade" id="noticeModal" tabindex="-1" role="dialog" aria-labelledby="noticeModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <form id="noticeForm" method="post">
      <div class="modal-header">
        <h5 class="modal-title" id="noticeModalLabel">최근 소식</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
        <input type="hidden" value="${project.pNo}" name="pNo">
            <div class="form-group">
            <h3>제목</h3>
            <input type="text" name="pnTitle" id="pnTitle" class="form-control form-control-user">
              
            </div>
            <h4>내용</h4>
            <div class="form-group">
                <textarea name="pnContent" id="smarteditor" rows="10" cols="50" style=" height:412px; "></textarea> 
            </div>

        
      </div>
      <div class="modal-footer">
        <button id="cancelBtn" type="button" class="btn btn-secondary btn-user btn-block" data-dismiss="modal">취소</button>
        <button id="savebutton" type="button" class="btn btn-primary btn-user btn-block" onclick="fn_insertpNotice();">최근소식 등록</button>
      </div>
      </form>
    </div>
  </div>
</div>
 

                                            <!-- <div id="paging" class="paging_comm">
                                                <a class="link_page on">1</a>&nbsp;
                                                <a href="?pageIndex=2" onclick="link_page(2);return false; " class="link_page">2</a>&nbsp;
                                                <a href="?pageIndex=3" onclick="link_page(3);return false; " class="link_page">3</a>&nbsp;
                                                <a href="?pageIndex=4" onclick="link_page(4);return false; " class="link_page">4</a>&nbsp;
                                                <a href="?pageIndex=5" onclick="link_page(5);return false; " class="link_page">5</a>&nbsp;
                                                <input id="pageIndex" name="pageIndex" type="hidden" value="1">
                                            </div> -->
                                        </div>
                                    </div>
<script>
function getpNoticeList(){
	var pNo = ${project.pNo};
	var projectCreator = '${project.creId}';
    <c:if test="${!empty sessionScope.loginUser}">
	      var loginMember = ${loginUser.mNo};
	      var loginMid = '${loginUser.mId}';
    </c:if>
    <c:if test="${ empty sessionScope.loginUser}">
	      var loginMember = 0;
	      var loginMid = null;
	</c:if>     	
	$.ajax({
        url:"getpNoticeList.do",
        data:{pNo:pNo},
        dataType:"json",
        async: false,
        success:function(data){
        	$("#News .num_count").text(data.length);
        	var $NewsBox = $("#NewsBox");
            $NewsBox.html("");
            
        	if(data.length > 0){
                for(var i in data){

                	var $n1 = $("<div class='post_cont'>");
                	var $n2 = $("<header class='entry_head project_article_header'>");
                	var $n3 = $("<h1>").text(data[i].pnTitle);
                	var $n4 = $("<span class='num_time'>").text(data[i].pnEnrollDate);
                	var $n5 = $("<span class='txt_author'>");
                	var $n6 = $("<div class='entry_content'>");
                	var $n7 = $("<p>").text(data[i].pnContent);
                	
                	$n1.append($n2);
                	$n2.append($n3);
                	$n2.append($n4);
                	$n2.append($n5);
                	$n1.append($n6);
                	$n6.append($n7);
                	
                	/* if(projectCreator == loginMid){
                  	  console.log("로그인멤버가 크리에이터");
                  	  var $addNoticeBtn = $("<button type='button' class='addNoticeBtn point_color'>등록하기</button>");
                  	  var $pnNo = $("<input type='hidden' name='pnNo'>").val(data[i].pnNo);
                  	  $addNoticeBtn.append($pnNo);
                  	  $n1.append($addNoticeBtn);
                    } */
                	
                	$NewsBox.append($n1);
                }
        	}else{
        		var $n1 = $("<div class='cmt_output'>");
        		var $n2 = $("<div style='margin:30px; padding:20px; border-top:1px solid #e1e1e1; border-bottom:1px solid #e1e1e1;'>");
        		var $n3 = $("<p style='text-align:center;'>").text('등록된 소식이 없습니다.');

        		$n1.append($n2);
            	$n2.append($n3);
            	
            	$NewsBox.append($n1);
        	}
        },error : function(xhr, status){
            alert("ajax 통신 에러");
        }
     });
	
}

function fn_pNoticeWrite(){
	$("#noticeModal").modal('show');
}


</script>

                                    <div id="reward_tab_content">
                                        <div class="article_qna screen_out">
                                        <!-- 로그인 여부에 따른 화면으로 나중에 수정하자(비로그인 상태면 로그인 후 이용가능) -->
                                            <section class="section_cont">
                                                <h2 class="screen_out">Q&amp;A</h2>
                                                <div class="box_qna">
                                                    <p class="qna_info">안녕하세요
                                                        <span class="txt_name">${ project.creName }</span>입니다.
                                                        <br>궁금한 점이 있다면 질문을 남겨주세요!</p>
                                                    <ul class="list_qna">
                                                        <li>베니아티스 Q&amp;A 게시판은 회원으로 로그인한 분만 글을 작성할 수 있으며 프로젝트 개설자는
                                                            참여자들의 참여 관련 질문과 의견을 임의로 삭제하거나 수정하지 않습니다.</li>
                                                        <li>홈페이지의 건전한 운영을 위하여 운영기준 상 부적절하거나 문제의 소지가 있는 게시물이 게재될 경우 (예:
                                                            명예훼손, 광고, 음란성 글 등) 베니아티스 관리자가 이를 삭제 또는 변경할 수 있습니다.</li>
                                                    </ul>
                                                </div>
                                            </section>
                                            <div class="comment_cont">
                                                <form id="qnaForm">
                                                    <fieldset>
                                                        <legend class="screen_out">댓글달기</legend>
                                                        <c:if test="${ !empty loginUser }">
                                                           <div class="comment_form_group" style="margin:0;">
                                                               <div class="comment_input_box">
                                                                   <textarea cols="30" rows="5" class="tf_cmt login_required"
                                                                       title="댓글 작성" placeholder="질문을 남겨주세요." name="qContent" id="qContent"></textarea>
                                                                   <input type="hidden" name="pNo" value="${project.pNo}">
                                                               </div>
                                                               <div style="margin-bottom:50px;">
                                                                   <button class="btn_submit point_color" id="qnaSubmit">등록</button>
                                                               </div>
                                                           </div>
                                                        </c:if>
                                                        <c:if test="${ empty loginUser }">
                                                           <!-- <div class="comment_form_group">
                                                               <div class="comment_input_box" style="text-align:center; padding:30px;">
                                                                  <span> 로그인 후 이용 가능합니다.</span>      
                                                               </div>
                                                           </div> -->
                                                        </c:if>
                                                    </fieldset>
                                                </form>
<!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ QnA   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->
                                                <h2 class="screen_out">댓글</h2>
                                                <ul class="list_cmt" id="qnaBox" style="margin-top:10px; margin-bottom:30px;">
                                                    
                                                </ul>
                                                
   
<div class="modal fade" id="answerModal" tabindex="-1" role="dialog" aria-labelledby="answerModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="answerModalLabel">답변하기</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      	<form id="updateAnswerForm">
      		<input type="hidden" name="qNo" id="selectqNo">
      		<textarea cols="30" rows="5" class="tf_cmt login_required" title="댓글 작성" placeholder="답변을 작성해주세요." 
      		name="qAnswer" id="qAnswer" style="width:95%; margin:2%;"></textarea>
      	</form>
      	
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
        <button type="button" class="btn" id="ansInsertBtn2" 
        	onclick="fn_answerInsert();" style="background-color:#40c8b5; color:#ffffff">수정/등록</button>
      </div>
    </div>
  </div>
</div>

                                                  
   <script>
   // Qna 목록 가져오기
   function getQnaList(){   
      var pNo = ${project.pNo};
      var projectCreator = '${project.creId}';
      <c:if test="${!empty sessionScope.loginUser}">
	      var loginMember = ${loginUser.mNo};
	      var loginMid = '${loginUser.mId}';
      </c:if>
      <c:if test="${ empty sessionScope.loginUser}">
	      var loginMember = 0;
	      var loginMid = null;
	  </c:if>     
      /* alert("로그인 : " + logimMid + "크리에이터 : " + projectCreator); */
      $.ajax({
         url:"getQnaList.do",
         data:{pNo:pNo},
         dataType:"json",
         async: false,
         success:function(data){
            $("#Qna .num_count").text(data.length);
            $ulBody = $("#qnaBox");
            $ulBody.html("");
            
            if(data.length > 0){
               for(var i in data){
            	  var qWriter = data[i].mNo;
            	   
                  var $li = $("<li>");
                  var $q1 = $("<div class='cmt_output'>");
                  var $q2 = $("<span class='user_profile'>");
                  var $q3 = $("<span class='img_profile' style='background-image:url(resources/project_user/question.png); background-size:contain;'>");
                  var $q4 = $("<span class='txt_name'>").text(data[i].name + " 님");
                  var $q5 = $("<span class='txt_time'>").text(data[i].enrollDate);
                  if(qWriter == loginMember){
                	  var $delBtn = $("<button type='button' class='delBtn'>삭제하기</button>");
                	  var $qnaNo = $("<input type='hidden' name='qnaNo'>").val(data[i].qNo);
                	  $delBtn.append($qnaNo);
                	  $q5.append($delBtn);
                  }
                  if(projectCreator == loginMid){
                	  console.log("로그인멤버가 크리에이터");
                	  var $answerBtn = $("<button type='button' class='answerBtn''>답변하기</button>");
                	  var $qnaNo = $("<input type='hidden' name='qnaNo'>").val(data[i].qNo);
                	  $answerBtn.append($qnaNo);
                	  $q5.append($answerBtn);
                  }
                  var $q6 = $("<div class='cmt_content'>");
                  var $q7 = $("<p class='cont_cmt'>").text(data[i].qContent);
                  
                  $li.append($q1);
                  $q1.append($q2);
                  $q2.append($q3);
                  $q2.append($q4);
                  $q1.append($q5);
                  $q1.append($q6);
                  $q6.append($q7);
                  
                  if(data[i].qAnswer == null){
                     $ulBody.append($li);
                  }else{
                     // 답변이 있는 경우
                     var creator = $(".qna_info .txt_name").text();
                     
                     var $a1 = $("<ul class='list_reply'>");
                     var $a2 = $("<li>");
                     var $a3 = $("<div class='cmt_reply'>");
                     var $a4 = $("<span class='user_profile'>");
                     var $a5 = $("<span class='img_profile' style='background-image:url(resources/project_user/answer.png); background-size:contain;'>");
                     var $a6 = $("<span class='txt_name'>").text(creator + " 님");
                     var $a8 = $("<span class='txt_time'>").text(data[i].answerDate);
                     var $a7 = $("<p class='cont_cmt'>").text(data[i].qAnswer);
                     
                     $li.append($a1);
                     $a1.append($a2);
                     $a2.append($a3);
                     $a3.append($a4);
                     $a4.append($a5);
                     $a4.append($a6);
                     $a3.append($a8);
                     $a3.append($a7);
                     
                     $ulBody.append($li);
                  }
                  
               }
            }
         },error : function(xhr, status){
            alert("ajax 통신 에러");
         }
      });
   }   // getQnaList();
   
      $(function(){
    	//QnA 관련
    	//삭제하기 버튼 클릭 시
   	    $(document).on('click', '.delBtn', function(){
   	    	var delConfirm = confirm('당신의 질문을 삭제할 것입니까?');
   	    	var qNo = $(this).find('input[name=qnaNo]').val();
   	    	if(delConfirm){
   	    		$.ajax({
   	                url:"deleteProjectQna.do",
   	                data:{qNo:qNo},
   	                dataType:"text",
   	                async: false,
   	                success:function(data){
   	                   if(data == "success"){
   	                      alert("QnA 삭제 완료.");
   	                   	  getQnaList();
   	                      location.href="projectDetail.do?pNo="+pNo;
   	                   }else if(data == "fail"){
   	                      alert("QnA 삭제 실패");
   	                   }
   	                   
   	                },error:function(request,status,error){
   	                     alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
   	                 }
   	             });
   	    	}
   	    });
    	// 질문에 크리에이터가 답변하기
    	$(document).on('click', '.answerBtn', function(){
    		// 답변하기 누르면 답변내용 작성 부분 있어야함
    		// 답변작성 후 해당 내용 버튼 클릭 시 데이터 전송
    		var qNo = $(this).find('input[name=qnaNo]').val();
    		$("#selectqNo").val(qNo);
    		$("#answerModal").modal('show');
    		
   	    });
    	
         $("#qnaSubmit").on("click", function(){
            // db에 넣고 목록 조회
            var pNo = ${project.pNo};
            var formData = $("#qnaForm").serialize();
            $.ajax({
               url : "insertProjectQna.do", 
                type : 'post', 
                data : formData,
                dataType:"json",
                success : function(data) {
                   //console.log("data 확인 : " + data);
                   //alert("ajax확인 : " + data);
                   getQnaList();
                   location.href="projectDetail.do?pNo="+pNo;
                }, 
                error : function(xhr, status) {
                   alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
                   
                }
            });
         });
      });
      
      // 모달 창에서 답변 등록 버튼 클릭 시 
      function fn_answerInsert(){
    	  var formData = $("#updateAnswerForm").serialize();
    	  $.ajax({
              url : "insertProjectAnswer.do", 
               type : 'post', 
               data : formData,
               dataType:"text",
               success : function(data) {
                  //console.log("data 확인 : " + data);
                  //alert("ajax확인 : " + data);
                  $("#answerModal").find($("#qAnswer")).val("");
                  $("#answerModal").modal('hide');
                  getQnaList();
                  location.href="projectDetail.do?pNo="+pNo;
               }, 
               error : function(xhr, status) {
                  alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
                  
               }
           });
    	  
      }
   </script>

                                                     <!-- 페이징 번호
                                                     <div id="paging" class="paging_comm" style="margin-top:55px;">
                                                       <a class="link_page on">1</a>&nbsp;
                                                       <input id="pageIndex" name="pageIndex" type="hidden" value="1">
                                                   </div> -->
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div id="reward_tab_content">
                                        <div class="article_support screen_out">
                                            <section class="section_cont">
                                                <h2 class="screen_out">참여자응원</h2>
                                                <div class="comment_cheer">
                                                    <ul class="list_cmt" id="cheerBox">
                                                    
                                                    </ul>

                                                    <div id="paging" class="paging_comm">
                                                        <a class="link_page on">1</a>&nbsp;
                                                        <input id="pageIndex" name="pageIndex" type="hidden" value="1">
                                                    </div>
                                                </div>

                                            </section>
                                        </div>
                                    </div>
<!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 참여자 응원  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->                                    
                                    <script>
                                   // 참여자 응원 리스트 불러오는 ajax 함수
                                   function getCheerList(){
                                      var pNo = ${project.pNo};
                                      
                                      $.ajax({
                                         url:"cheerList.do",
                                         data:{pNo:pNo},
                                         dataType:"json",
                                         success:function(data){
                                            //console.log(data);
                                            // 참여자 응원 갯수 표시
                                            var cheerCount = $("#Cheer .num_count").text(data.length);
                                            
                                            $ulBody = $("#cheerBox");
                                            $ulBody.html("");
                                            
                                            if(data.length > 0){
                                               for(var i in data){
                                                  var $li = $("<li>");
                                                  var $div1 = $("<div class='cmt_output'>");
                                                  var $span1 = $("<span class='user_profile'>");
                                                  var $span1_2 = $("<span class='img_profile'>");
                                                  var imgPath = "background-image:url("+data[i].filePath+"); background-size:contain;";
                                                  $span1_2.attr("style", imgPath);
                                                  var $span1_1 = $("<span class='text_name'>").text(data[i].rWriter + " 님");
                                                  var $span2 = $("<span class='txt_time'>").text(data[i].wDate);
                                                  var $div1_1 = $("<div class='cmt_content'>");
                                                  var $p1 = $("<p class='cont_cmt'>").text(data[i].rContent);
                                                  
                                                  $div1.append($span1);
                                                  $span1.append($span1_2);
                                                  $span1.append($span1_1);
                                                  $div1.append($span2);
                                                  $div1_1.append($p1);
                                                  $div1.append($div1_1);
                                                  $li.append($div1); 
                                                  
                                                  $ulBody.append($li);
                                                  /* 
                                                  <div class="cmt_output">
                                                            <span class="user_profile">
                                                                <span class="img_profile">
                                                                </span>
                                                                <span class="txt_name">홍길동</span>
                                                            </span>

                                                            <span class="txt_time">2020-01-15 17:29</span>
                                                            <span class="num_amount">32,000원 참여</span>
                                                            <!-- 댓글 보이기 -->
                                                            <div class="cmt_content">
                                                                <p class="cont_cmt">의미 있는 활동을 응원합니다.</p>
                                                            </div>
                                                        </div>*/
                                                        
                                               }
                                               
                                            }else{
                                               // 댓글이 등록되지 않았을 때
                                               var $li = $("<li>");
                                               var $output = $("<div class='cmt_output'>");
                                               var $content = $("<div class='cmt_content'>");
                                               var $rContent = $("<p style='text-align:center; margin-bottom:20px;'>").text("등록 된 응원이 없습니다.");
                                               $output.append($content);
                                               $content.append($rContent);
                                               $li.append($output);
                                               $ulBody.append($li);
                                            }
                                            
                                         },
                                         error:function(e){
                                            console.log(e);
                                         }
                                      }); // 참여자 응원 ajax 끝
                                      
                                   }
                                    </script>

                                    <div class="box_reward_select">
                                        <form name="rewardForm" id="rewardForm" action="">
                                            <fieldset>
                                                <ul class="list_reward">
                                                <c:forEach var="reward" items="${ rewardList }">
                                                   <!-- 리워드 수량 제한 없는 경우 -->
                                                   <c:if test="${reward.rLimit eq 'N'}">
                                                   <li>
                                          <a class="box_reward"> 
                                             <strong class="tit_reward">
                                                <fmt:formatNumber value="${ reward.rPrice }" groupingUsed="true"/>원 펀딩
                                             </strong>
                                             <p class="txt_desc">${ reward.rItem }</p> 
                                             <span class="info_dely">
                                                <span class="tit_info">배송 예정일</span>
                                                 : <span class="txt_info"><fmt:formatDate value="${ reward.rDelivery }" pattern="yyyy년 MM월 dd일"/>부터 순차적으로 제공</span>
                                              </span> 
                                              <span class="txt_satea">
                                                 <!-- <em class="num_state">0명</em> 참여하였습니다. -->
                                              </span>
                                          </a>
                                       </li>
                                                   </c:if>
                                                   <!-- 리워드 수량 제한 있는 경우(예: 얼리버드) -->
                                                   <c:if test="${reward.rLimit eq 'Y'}">
                                                   <li>
                                          <a class="box_reward"> 
                                             <span style="font-size:12px;color:#40c8b5;">* 수량 한정</span><br><br>
                                             <strong class="tit_reward">
                                                <fmt:formatNumber value="${ reward.rPrice }" groupingUsed="true"/>원 펀딩
                                             </strong>
                                             <p class="txt_desc">${ reward.rItem }</p> 
                                             <span class="info_dely">
                                                <span class="tit_info">배송 예정일</span>
                                                 : <span class="txt_info"><fmt:formatDate value="${ reward.rDelivery }" pattern="yyyy년 MM월 dd일"/>부터 순차적으로 제공</span>
                                              </span> 
                                              <span class="txt_satea">
                                                 <!-- <em class="num_state">0명</em> 참여하였습니다. -->
                                                 <small class="txt_count">(수량 ${reward.rCount}개 남음)</small>
                                              </span>
                                          </a>
                                       </li>
                                                   </c:if>
                                       
                                                </c:forEach>
                                    </ul>
                                            </fieldset>
                                        </form>
                                    </div>

                                </div>


                </article>
            </div> <!-- end CMain -->
        </main>

        <!-- footer -->
        <footer id="omcFoot">
        </footer>
        <!-- footer -->

    </div>
<jsp:include page="../common/footer.jsp" />
</body>
</html>