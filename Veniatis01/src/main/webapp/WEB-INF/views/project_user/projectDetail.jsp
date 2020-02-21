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
	
<title>VENIATIS : 후원형</title>
<style>
.div_hide{
	opacity:0%;
}

#Intro:hover, #News:hover, #Qna:hover, #Cheer:hover{
	cursor:pointer;
}
</style>
<script>
//3자리 콤마 찍
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
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
                                <%-- <c:choose>
                                	<c:when test="${ project.pcNo == 1 }">
                                	공간/리빙
                                	</c:when>
                                	<c:when test="${ project.pcNo == 2 }">
                                	사회이슈
                                	</c:when>
                                	<c:when test="${ project.pcNo == 3 }">
                                	교육/출판
                                	</c:when>
                                	<c:when test="${ project.pcNo == 4 }">
                                	문화예술
                                	</c:when>
                                	<c:when test="${ project.pcNo == 5 }">
                                	지역재생
                                	</c:when>
                                	<c:when test="${ project.pcNo == 6 }">
                                	푸드
                                	</c:when>
                                	<c:when test="${ project.pcNo == 7 }">
                                	테크
                                	</c:when>
                                	<c:when test="${ project.pcNo == 8 }">
                                	뷰티/패션
                                	</c:when>
                                	<c:otherwise>
                                	여행
                                	</c:otherwise>
                                </c:choose> --%>
                                ${ project.cate }
								</a>

                            </span>
                            <span class="screen_out">프로젝트 제목</span>
                            <h1> ${ project.pTitle }</h1>
                            <div class="project_sorting">
                                <div class="tag_rel">
                                    <span class="screen_out">관련 태그</span>
                                    <c:forTokens var="tag" items="${project.hashtag}" delims=",">
									    <a class="link_tag">#${tag}</a>
									</c:forTokens>
                                    <!-- <a class="link_tag">#태그1</a>
                                    <a class="link_tag">#태그2</a>
                                    <a class="link_tag">#태그3</a>
                                    <a class="link_tag">#태그4</a>
                                    <a class="link_tag">#태그5</a> -->
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
                                        <!-- <li class="uk-active uk-transition-active" style="z-index: -1;">
                                            <img src="resources/main/test.jpg" class="img_g">
                                        </li>
                                        <li>
                                            <img src="resources/main/test2.jpg" class="img_g">
                                        </li>
                                        <li>
                                            <img src="resources/main/test3.jpg" class="img_g">
                                        </li> -->
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
                                            <!-- <img src="resources/main/test.jpg" data-index="0" class="selected">
                                            <img src="resources/main/test2.jpg" data-index="1">
                                            <img src="resources/main/test3.jpg" data-index="2"> -->
                                            <!--
                                            <img src="/uploads/reward/REWARD_20200212041134125.JPG" data-index="3"> -->

                                        </div>
                                    </div>

                                </div>
                                <script>
                                    $(function () {
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
                                                <span class="txt_mail">${ project.creEmail }</span>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="project_details">
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
                                        <span class="screen_out">참여자 수</span><span class="num_value">2</span> 
                                        <span class="txt_value">명 참여</span>
                                    </div>

                                    <div class="item_state">
                                        <p><span class="txt_statetitle">남은기간</span></p>
                                        <span class="num_value">
                                            D-<span class="screen_out">Day</span>
									        <!-- 날짜 계산 -->
									        <c:set var="now" value="<%=new java.util.Date()%>" />
									        
									        <fmt:parseNumber var="nDate" value="${now.time/(1000*60*60*24)}" integerOnly="true" />
									        <fmt:parseNumber var="eDate" value="${project.endDate.time/(1000*60*60*24)}" integerOnly="true" />
									        
									        	<span style="color:#40c8b5;">${eDate-nDate}</span>
									        	<%-- <span style="color:red;">마감일:${eDate}</span>
        										<span style="color:blue;">오늘:${nDate}</span> --%>
                                        </span><span class="txt_value"> 일 남음</span>
										<!-- 참여하기 버튼 클릭 시 리워드 선택 페이지 이동, 프로젝트 번호 같이 넘겨야함 -->
										<c:url var="rSelect" value="rewardSelect.do">
											<c:param name="pNo" value="${ project.pNo }"/>
											<%-- <c:param name="creName" value="${ project.creName }"/>
											<c:param name="creProfile" value="${ project.creProfile }"/> --%>
										</c:url>
										
										
										<c:if test="${ empty loginUser }">
											<button type="button" onclick="checkLogin();" class="link_join">참여하기</a>
										</c:if>
										<c:if test="${ !empty loginUser }">
                                        	<button type="submit" class="link_join" onclick="location.href='${ rSelect }';">참여하기</button>
                                        </c:if>
                                        <script>
	                                        function checkLogin(){
	                            				alert("로그인 후 이용 가능합니다.");
	                            			}
                                        </script>
                                        
                                    </div>

                                    <div class="txt_notice ">
                                        <span class="sign_notice">성공해야<br />리워드</span>
                                        <span class="txt">
                                           	 목표액 <fmt:formatNumber value="${ project.targetAmount }" groupingUsed="true"/>원에 미달하면 결제가 진행되지 않는 프로젝트입니다.<br>
											결제는 목표액달성시 <fmt:formatDate value="${ project.endDate }" pattern="yyyy년 MM월 dd일"/>에 진행됩니다.
                                        </span>
                                    </div>

                                </div>

                                <div class="item_btns">
                                    <a href="#none" class="link_share" id="link_share">공유
                                        <span class="num_count" id="share_num_count">
                                            <!-- 16 -->
                                        </span></a>
                                    <input type="hidden" id="like_count" value="2">
                                    <input type="hidden" id="interest_seq" value="">
                                    <button type="button" class="btn_like" id="btn_like">관심
                                        <span id="icon_like"></span>
                                        <span class="num_count" id="like_num_count">
                                            <!-- 2 -->
                                        </span></button>
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
                                            
                                            /* var pNo = ${project.pNo};
                                            
                                            $.ajax({
                                                url: "test1.do",
                                                type: "POST",
                                                data: {pNo:pNo},
                                                success: function(data){
                                                    alert(data);
                                                },
                                                error: function(){
                                                    alert("simpleWithObject err");
                                                }
                                            }); */
                                            
                                            
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
                                        });
                                    });
                                </script>

                                <!-- 탭이 눌려질 때 동적으로 페이지를 로드한다. -->
                                <div id="reward_tab_content">
                                    <h2 class="screen_out">소개</h2>
                                    <div class="article_intro">
                                        ${ project.pDesc }
                                    </div>

                                    <div id="reward_tab_content">
                                        <div class="article_pNotice screen_out">
                                            <section class="section_cont">
                                                <h2 class="screen_out">최근소식</h2>
                                                <article class="post_cont">
                                                    <header class="entry_head project_article_header">
                                                        <h1>글 제목</h1>
                                                        <span class="num_time">작성일자</span>
                                                        <span class="txt_author">
                                                        	** 작성자명
                                                        </span>
                                                    </header>
                                                    <div class="entry_content">
                                                        <h3><strong><span style="color: #0000ff;">안내</span></strong></h3>
                                                        <p>**최근 소식 내용 **</p>
                                                        <p>아마 노트api로 작성된 거 저장 후 db에서 가져오면 될듯?</p>
                                                    </div>
                                                </article>
                                            </section>

                                            <div id="paging" class="paging_comm">
                                                <a class="link_page on">1</a>&nbsp;
                                                <a href="?pageIndex=2" onclick="link_page(2);return false; " class="link_page">2</a>&nbsp;
                                                <a href="?pageIndex=3" onclick="link_page(3);return false; " class="link_page">3</a>&nbsp;
                                                <a href="?pageIndex=4" onclick="link_page(4);return false; " class="link_page">4</a>&nbsp;
                                                <a href="?pageIndex=5" onclick="link_page(5);return false; " class="link_page">5</a>&nbsp;
                                                <input id="pageIndex" name="pageIndex" type="hidden" value="1">
                                            </div>
                                        </div>
                                    </div>


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
                                                <form action="#">
                                                    <fieldset>
                                                        <legend class="screen_out">댓글달기</legend>
                                                        <div class="comment_form_group">
                                                            <div class="comment_input_box">
                                                                <textarea cols="30" rows="5" class="tf_cmt login_required"
                                                                    title="댓글 작성" placeholder="질문을 남겨주세요." id="rContent"></textarea>

                                                                <input type="hidden" name="createId" value="">
                                                                <input type="hidden" name="newsSeq" value="">

                                                            </div>
                                                            <div>
                                                                <button class="btn_submit point_color" id="rSubmit">등록</button>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                                <!-- <h2 class="screen_out">댓글</h2>
                                                <ul class="list_cmt">
                                                    <li>
                                                        <div class="cmt_output">
                                                            <span class="user_profile">
                                                                <span class="img_profile">

                                                                </span>
                                                                <span class="txt_name">후원자1</span>
                                                            </span>

                                                            <span class="txt_time">2020-02-12 17:25</span>댓글 보이기
                                                            <div class="cmt_content">
                                                                <p class="cont_cmt">질문1</p>

                                                            </div>댓글 수정 
                                                            <div class="edit_cmt" style="display:none">
                                                                <fieldset>
                                                                    <legend class="screen_out">댓글달기</legend>
                                                                    <div class="cmt_comm">
                                                                        <div class="box_cmt">
                                                                            <input type="hidden" name="commentSeq"
                                                                                value="31545">
                                                                            <input type="hidden" name="updateId" value="237250">
                                                                            <textarea cols="30" rows="5" class="tf_cmt"
                                                                                title="댓글 작성">질문2</textarea>
                                                                            <div class="cmt_info"><span class="num_byte"><em>20</em>
                                                                                    / 500byte</span></div>
                                                                            <input type="submit" class="btn_submit"
                                                                                value="수정" title="수정">
                                                                        </div>
                                                                    </div>
                                                                </fieldset>
                                                            </div>
                                                        </div>

                                                        <ul class="list_reply">
                                                            <li>
                                                                <div class="cmt_reply">
                                                                    <span class="ico_comm">댓글의 답글</span>

                                                                    <span class="user_profile">
                                                                        <span class="img_profile clear_empty_picture">
                                                                            <img src="test.png" style="background: rgb(255, 255, 255);">
                                                                        </span>
                                                                        <span class="txt_name">크리에이터</span>
                                                                    </span>
                                                                    <span class="txt_time">2020-02-12 17:28</span>
                                                                    <p class="cont_cmt">답변 드림</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul> -->
                                                <table id="replyTable">
													<thead>
														<tr>
															<td colspan="4"><b id="rCount"></b></td>
														</tr>
													</thead>
													<tbody>
													</tbody>
												</table>

                                                <div id="paging" class="paging_comm" style="margin-top:20px;">
                                                    <a class="link_page on">1</a>&nbsp;

                                                    <input id="pageIndex" name="pageIndex" type="hidden" value="1">
                                                </div>
                                            </div>
                                        </div>

                                        <!-- <script>
	
											$(function(){
												// 초기 페이지 로딩 시 댓글 불러오기
												getReplyList();
												
												// 타 회원이 작성한 댓글도 지속적으로 불러오고 싶다면
												/* setInterval(function(){
													getReplyList();
												}, 10000); */
												
												// 댓글 등록 ajax
												$("#rSubmit").on("click", function(){
													// 필요한 값을 가지고 db에 insert한 뒤
													// 등록 성공 시 댓글리스트 다시 불러오기
													// 요청 url : addReply.do
													var rContent = $("#rContent").val();
													var pNo = ${ project.pNo }; 
													
													$.ajax({
														url:"addReply.do",
														data:{rContent:rContent, pNo:pNo},
														type:"post",
														success:function(data){
															if(data == "success"){
																getReplyList(); // 등록 성공시 다시 댓글리스트 불러오기
																$("#rContent").val("");
															}else if(data == "fail"){
																alert("댓글 등록 실패");
															}
														}
													});
												});
											});
											
											
											// 댓글 리스트 불러오는 ajax 함수
											function getReplyList(){
												var pNo = ${project.pNo};
												
												$.ajax({
													url:"projectRList.do",
													data:{pNo:pNo},
													dataType:"json",
													success:function(data){
														console.log(data);
														
														$tableBody = $("#replyTable tbody");
														$tableBody.html("");
														
														$("#rCount").text("댓글("+data.length+")");
														
														if(data.length > 0){
															for(var i in data){
																var $tr = $("<tr>");
																var $rWriter = $("<td width='100'>").text(data[i].rWriter);
																var $rContent = $("<td width='500'>").text(data[i].rContent);
																var $rCreateDate = $("<td width='200'>").text(data[i].rCreateDate);
																
																$tr.append($rWriter);
																$tr.append($rContent);
																$tr.append($rCreateDate);
																
																$tableBody.append($tr);
															}
														}else{
															// 댓글이 등록되지 않았을 때
															var $tr = $("<tr>");
															var $rContent = $("<td colspan='3'>").text("등록 된 댓글이 없습니다.");
															$tr.append($rContent);
															$tableBody.append($tr);
														}
														
													},
													error:function(e){
														console.log(e);
													}
												});
												
											}
											</script> -->
                                    </div>


                                    <div id="reward_tab_content">
                                        <div class="article_support screen_out">
                                            <section class="section_cont">
                                                <h2 class="screen_out">참여자응원</h2>
                                                <div class="comment_cheer">
                                                    <ul class="list_cmt">
                                                        <li>
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
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="cmt_output">
                                                                <span class="user_profile">
                                                                    <span class="img_profile">

                                                                    </span>
                                                                    <span class="txt_name">김영희</span>
                                                                </span>

                                                                <span class="txt_time">2020-01-13 20:02</span>
                                                                <span class="num_amount">8,000원 참여</span>
                                                                <!-- 댓글 보이기 -->
                                                                <div class="cmt_content">
                                                                    <p class="cont_cmt">취지가 너무 좋아서 참여했어요!! 꼭 성공하시길 바랍니다. </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <script>
                                                        // 임의로 프로필이미지 설정
                                                        $(function () {
                                                            $(".img_profile").attr("style", "background-image:url(profile.png); background-size:contain;");
                                                        });
                                                    </script>

                                                    <div id="paging" class="paging_comm">
                                                        <a class="link_page on">1</a>&nbsp;
                                                        <input id="pageIndex" name="pageIndex" type="hidden" value="1">
                                                    </div>
                                                </div>

                                            </section>
                                        </div>
                                    </div>


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
															 	<em class="num_state">0명</em> 참여하였습니다.
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
															 	<em class="num_state">0명</em> 참여하였습니다.
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
