<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/guidecss.css">
</head>
<body class="login">
<c:if test="${ !empty msg }">
		<script>
			alert('${msg}');
		</script>
		<c:remove var="msg"/>
	</c:if>
<jsp:include page="../../common/menubar.jsp"/>
<div id="omcIndex">
        <a href="#omcGnb" class="shortcut">주메뉴 바로가기</a>
        <a href="#omcSearch" class="shortcut">검색 바로가기</a>
        <a href="#omcBody" class="shortcut">본문 바로가기</a>
    </div>
    
    
	<div id="omcWrap">
<main id="omcContainer" class="cont_mypage">
    <h2 id="omcBody" class="screen_out">마이페이지</h2>
    <div id="cMain">
        <article id="mContent" class="mypage_contactus">
            <header class="head_comm">
				<h1 class="tit_comm">문의리스트</h1>
            </header>
            <div class="cont_comm">
				<div class="box_comm">
					

   	    <form name="addForm" method="post" action="question.do">
					<fieldset class="contact_form">
						<fieldset>
							<legend class="screen_out">문의하기</legend>
							<div class="card-body">
          <div class="table=responsive">
            <table class="table table-boardered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>문의 번호</li>
                  <th>카테고리</li>
                  <th>작성일자</th>
                  <th>답변여부</th>
                  <th>답변일자</th>
                </tr>
              </thead>
              <tbody>
              <c:forEach var="q" items="${qList }">
              	<c:url var="qDetail" value="QnADetail.do">
	          		<c:param name="qNo" value="${ q.qNo }"/>
	          	</c:url>
              	<tr align="center">
              		<td>${q.qNo }</td>
              		<td><a href="QnADetail.do?qNo=${q.qNo }">${q.qCategory }</a></td>
              		<td>${q.enrollDate }</td>
              		<c:if test="${q.qAnswer eq null }">
              			<td>미답변</td>
              		</c:if>
              		<c:if test="${q.qAnswer ne null }">
              			<td>답변완료</td>
              		</c:if>
              		<td>${q.answerDate }</td>
              	</tr>
              </c:forEach>
              </tbody>
            </table>
          </div>
        </div>
						</fieldset>
					</fieldset>
		</form>
		<button style="background:darkgray; color:white; margin-left:600px; width:15%; height:40px;" onclick="location.href='questionForm.do'">문의하기</button>	
				</div>
            </div>
        </article>
    </div>
</main>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>