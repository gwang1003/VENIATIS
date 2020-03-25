<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
 <meta charset="utf-8">
	<title>Veniatis</title>
	<style>
	#btn2{
	background-color: #05a7e2;
	}
	
	#textArea{
	 background-image:url("resources/project_startUp/startUp2.jpg");
	
	  background-repeat:no-repeat;
	
	
	
	}
	
	#text_desc{
	font-weight:900;
	opacity:1;
	}
	
	
	</style>
	 
<!-- 체크박스용 -->
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
<link rel="stylesheet" href="resources/css/guidecss.css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</head>
<body>

<jsp:include page="../common/menubar.jsp"></jsp:include>


<div id="omcContainer" class="cont_apply">
 <h2 id="omcBody" class="screen_out">창업 프로젝트</h2>
    <div class="cMain">
        <article id="mContent" class="support_guide">
        	<form name="applicationForm" method="post">
            <header class="head_comm">
				<h2 id="omcBody" class="tit_apply"><span class="font_normal">창업의 꿈을</span><span>크라우드펀딩을 통해 실현시켜 보세요</span></h2>
            </header>
			<div class="box_desc" id="textArea">
				<p class="txt_desc" id="text_desc"> <!-- guidecss.css -> 8467줄에서 배경이미지 설정 가능 -->
					베니아니티스는 창업의 꿈을 가지고 있는 모든 도전자들의<br>
					창업 프로젝트를 크라우드 펀딩을 통해 지원하는 플랫폼입니다.<br>
					베니아티스와 함께 새로운 도전을 향해 첫걸음을 시작해보세요.<br>
					우선, 크라우드펀딩 프로젝트를 개설하기 전 개설자를 위한 가이드를 꼭 읽어주세요.<br>
					크라우드펀딩 진행, 프로젝트 스토리 구성, 리워드 설정 등 <br>
					성공적인 창업 프로젝트를 위한 안내서가 준비되어 있습니다.<br>
				
				</p>
				<br>
				<div class="btn_area">
					<a class="btn_guide" href="guideMain.do">프로젝트 업로드 안내 페이지로 이동</a>
				</div>
			</div>
            <div class="cont_comm">
	            <div class="box_comm">
					<div class="box_chk">
						<h3 class="tit_sub"><strong><center>프로젝트 가이드를 읽어보셨나요 ?</strong><br><span>프로젝트를 개설  하기 전 다음 사항을 확인해주세요.</span></h3>
						</center>
						<ul>
							<li>
								<label for="chkRegister1" class="chk_comm">
									<input type="checkbox" id="chkRegister1" name="chkaAccept1" class="inp_chk">
									<span class="chk_square"><span class="fa fa-check"></span></span>
									<span class="txt_cont">프로젝트 소개자료, 리워드를 소개할 이미지나 동영상이 준비되었나요?</span>
								</label>
							</li>
							<li>
								<label for="chkRegister2" class="chk_comm">
									<input type="checkbox" id="chkRegister2" name="chkaAccept2" class="inp_chk">
									<span class="chk_square"><span class="fa fa-check"></span></span>
									<span class="txt_cont">언제 프로젝트를 진행하고, 리워드를 제공할 지 실행계획은 준비되었나요 ?</span>
								</label>
							</li>
							<li>
								<label for="chkRegister3" class="chk_comm">
									<input type="checkbox" id="chkRegister3" name="chkaAccept3" class="inp_chk">
									<span class="chk_square"><span class="fa fa-check"></span></span>
									<span class="txt_cont">크라우드 펀딩이 완료되고 창업을 진행할 서류와 방법은 준비되었나요?</span>
								</label>
							</li>
							
						</ul>
					</div>
                </div>
            </div>
			<footer class="reward_foot">
				<button type="button" onclick="fn_check()" class="btn_sumbit" id="btn2">프로젝트 신청하기</button>
			</footer>
			</form>
        </article>
    </div>
    </div>
    <jsp:include page="../common/footer.jsp"/>
    <script>
    	function fn_check(){
    		if($("#chkRegister1").prop("checked") && $("#chkRegister2").prop("checked") && $("#chkRegister3").prop("checked")){
    			
    			location.href='startUpprojectPage1.do';
    		
    			}else{
    				alert('크라우드펀딩 진행방식 준비여부에 체크해주세요.');
    			}
    	}
    </script>

</body>
</html>
