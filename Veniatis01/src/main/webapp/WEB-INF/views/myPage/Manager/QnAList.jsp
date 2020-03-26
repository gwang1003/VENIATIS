<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="resources/vendor/jquery/jquery.min.js"></script>
<link rel="stylesheet" href="resources/css/guidecss.css">
<script src="resources/vendor/datatables/paging8.js"></script>
<style>

    .mid {
        width:100%;
        height:90%;
        padding-left: 10%;
        padding-right: 10%;
      }

      /* topText css*/
      .topText {
        width: 100%;
        height:8%;
      }

      /* Table css */
      .Table {
        padding-top:5%;
        width:100%;
        height:80%;
      }
      .creatorTable {
        width:100%;
      }
      
      .cTop {
        height:40px;
      }

      th {
        font-size:18px;
        text-align: center;
        background:#40c8b5;
        color:black;
        border:0.5px solid ghostwhite;
      }
      .col-md-6 {
        display:none;
      }
      
      td {
      	font-size:18px;
      }
  </style>
</head>
<body>
<jsp:include page="../../common/sidebar.jsp"/>
<div class="mid" align="center">
        <div class="topText">
          <h2>문의내역</h2>
        </div>
        <div class="card-body">
          <div class="table=responsive">
            <table class="table table-boardered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr class="cTop">
                  <th width="10%">번호</th>
                  <th width="25%">문의 타입</th>
                  <th width="15%">작성자</th>
                  <th width="25%">작성 날짜</th>
                  <th width="10%">답변 여부</th>
                  <th width="15%"></th>
                </tr>
              </thead>
              <tbody>
			  <c:forEach var="q" items="${qaList }">
			  	<tr align="center">
			  		<td>${q.qNo }</td>
			  		<td>${q.qCategory }</td>
			  		<td>${q.name }</td>
			  		<td>${q.enrollDate }</td>
			  		<td>
			  			<c:if test="${q.qAnswer eq null }">
				  			미답변
			  			</c:if>
			  			<c:if test="${q.qAnswer ne null }">
				  			답변완료
			  			</c:if>
			  		</td>
			  		<td><button id="answerBtn" onclick="location.href='QnADetail.do?qNo=${q.qNo}'">답변하기</button></td>
			  	</tr>
			  </c:forEach>
              </tbody>
            </table>
          </div>
        </div>
      </div>
<script>
	$(function(){
		$("#content").append($(".mid"))
	})
</script>
  <script src="resources/js/demo/chart-area-demo.js"></script>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>