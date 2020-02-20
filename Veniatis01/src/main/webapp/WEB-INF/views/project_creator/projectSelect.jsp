<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
#crowdFunding{
 background-image:url("resources/project_creator/crowdfundingImage.jpg");
 background-size:cover;
}

#startUp{
 background-image:url("resources/project_creator/startUpImage.jpg");
 background-size:cover;
}

</style>
 <link rel="stylesheet" href="resources/css/guidecss.css">
 <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</head>
<body>
<jsp:include page="../common/menubar.jsp"/>
	<div id="omcContainer" class="cont_main">
			<div class="cMain">
				<article id="mContent" class="apply_intro">
					<div class="apply_cont">
						<h2 id="omcBody" class="tit_apply"><span class="font_normal">여러분의 아이디어를</span><span>크라우드펀딩을 통해 실현시켜 보세요</span></h2>
						<div class="select_type">
							<div class="apply_support">
								<span class="intro_img" id="crowdFunding"></span>
								<p class="tit_type">개인</p>
								<p class="txt_desc">문화예술, 상품개발, 공익활동 프로젝트 등<br/>다양한 아이디어를 대중에게 소개해보세요.</p>
								<p class="txt_notice">개인, 사업자, 기업 등 누구나 개설할 수 있습니다.</p>
								<c:if test="${ !empty loginUser }">
								<a class="btn_apply" onclick="location.href='projectStart.do';" style="cursor: pointer;">프로젝트 개설 신청하기</a>
								</c:if>
								<c:if test="${ empty loginUser }">
								<a class="btn_apply" onclick="checkLogin();" style="cursor: pointer;">프로젝트 개설 신청하기</a>
								</c:if>								
								<a class="btn_guide" href="/guide/maker/reward#mkrRewApp">후원 가이드보기</a>
							</div>
							<div class="apply_stock">
								<span class="intro_img" id="startUp"></span>
								<p class="tit_type">창업</p>
								<p class="txt_desc">새로운 기업의 출발과 함께할 투자자를 찾고 있다면<br/>프로젝트를 통해 대중에게 소개해보세요.</p>
								<p class="txt_notice">창업 희망 회원만 신청이 가능합니다</p>
								<c:if test="${ !empty loginUser }">
								<a class="btn_apply" onclick="location.href='startUpproject.do';" style="cursor: pointer;">프로젝트 개설 신청하기</a>
								</c:if>
								<c:if test="${ empty loginUser }">
								<a class="btn_apply" onclick="checkLogin();" style="cursor: pointer;">프로젝트 개설 신청하기</a>
								</c:if>					
								<a class="btn_guide" href="/guide/maker/invest#mkrInvApp"><span>창업</span> 가이드보기</a>
							</div>
						</div>
						<div class="apply_guide">
						
							
								
								
							
						</div>
					</div>
				</article>
			</div>
		</div>
		<br><br><br><br>
		<script>
			function checkLogin(){
				alert("로그인 후 이용 가능합니다.");
			}
		</script>
	<jsp:include page="../common/footer.jsp"/>
</body>
</html>