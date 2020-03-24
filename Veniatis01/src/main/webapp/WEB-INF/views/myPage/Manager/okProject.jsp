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
      .card-body {
        margin-top:5%;
        width:100%;
        height:80%;
        padding:0;
      }

      .table-responsive{
        width:100%;
        height:100%;
      }

      .table {
        width:100%;
      }

      th {
        font-size:17px;
        text-align: center;
        background:#40c8b5;
        color:black;
        border:0.5px solid ghostwhite;
      }

      .col-md-6 {
        display:none;
      }
      
      
  </style>
</head>
<body>
<jsp:include page="../../common/sidebar.jsp"/>
<div class="mid" align="center">
        <div class="topText">
          <h2>프로젝트 신청/관리</h2>
        </div>
        <div class="card-body">
          <div class="table=responsive">
            <table class="table table-boardered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th width="7%">번호</th>
                  <th width="8%">이름</th>
                  <th width="10%">아이디</th>
                  <th width="19%">프로젝트명</th>
                  <th width="12%">소개</th>
                  <th width="11%">목표금액(원)</th>
                  <th width="13%">카테고리</th>
                  <th width="13%">기간</th>
                  <th width="7%"></th>
                </tr>
              </thead>
              <tbody>
				<c:forEach var="p" items="${pList }">
					<c:url var="pDetail" value="projectDetail.do">
	                	<c:param name="pNo" value="${ p.pNo }"/>
	                </c:url>
	                <c:url var="pOk" value="okProject.do">
	                	<c:param name="pNo" value="${ p.pNo }"/>
	                </c:url>
					<tr align="center">
						<td>${p.pNo }</td>
						<td>${p.creName }</td>
						<td>${p.creId }</td>
						<td><a href="${pDetail }">${p.pTitle }</a></td>						
						<td>${p.pText }</td>
						<td>${p.targetAmount }</td>
						<td>${p.cate }</td>
						<td>${p.startDate }~${p.endDate }</td>
						<td><button onclick="location.href='${pOk}'">등업</button></td>
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