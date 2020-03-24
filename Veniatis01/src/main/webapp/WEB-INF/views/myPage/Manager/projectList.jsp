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

      /* search css */
      .search {
        width: 100%;
        height:7%; 
      }
      
      .search > div {
        float: left;
        box-sizing: border-box;
        border-top:3px solid #40c8b5;
        border-bottom:3px solid #40c8b5;
      }
      .s1 {
        font-size:25px;
        width:14%;
        height:100%;
        line-height: 55px;
      }

      .s2 {
        width: 77%;
        height:100%;
        font-size:17px;
        line-height:55px;
      }

      .s3 {
        width: 9%;
        height:100%;
      }

      .s3 button {
        width:100%;
        height:100%;
        background:#40c8b5;
        border:none;
        border-radius: 10%;
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

      .s2 input {
        width: 15%;
        height:50%;
      }
      
      select {
        -webkit-appearance:button;
        padding:0;
        margin:0;
      }
  </style>
</head>
<body>
<jsp:include page="../../common/sidebar.jsp"/>
<div class="mid" align="center">
        <div class="topText">
          <h2>개설 프로젝트</h2>
        </div>
        <form action="searchProject.do" class="search">
          <div class="s1">
            프로젝트 검색 :
          </div>
          <div class="s2" align="left">
            <label>타입 :</label>&nbsp;&nbsp;<select name="pType" id="pType">
              <option value="All" selected>전체</option>
              <option value=1>공간/리빙</option>
              <option value=2>사회이슈</option>
              <option value=3>교육/출판</option>
              <option value=4>문화예술</option>
              <option value=5>지역재성</option>
              <option value=6>푸드</option>
              <option value=7>테크</option>
              <option value=8>뷰티/패션</option>
              <option value=9>여행</option>
            </select>&nbsp;&nbsp;
            <label>상태 : </label>&nbsp;&nbsp;<select name="pStatus" id="pStatus">
              <option value="All" selected>전체</option>
              <option value="Wait">등업 대기</option>
              <option value="Ing">진행중</option>
              <option value="IngS">진행중(성공)</option>
              <option value="End">종료</option>
              <option value="EndS">종료(성공)</option>
              <option value="EndF">종료(실패)</option>
            </select>&nbsp;&nbsp;
            <label>이름 : </label>&nbsp;&nbsp;<input type="text" name="name" class="name">
            <label>아이디 : </label>&nbsp;&nbsp;<input type="text" name="id" class="id">
            <label>프로젝트 명 : </label>&nbsp;&nbsp;<input type="text" name="pName" class="pName">
          </div>
          <div class="s3"><button type="submit">검색</button></div>
        </form>
        <div class="card-body">
          <div class="table=responsive">
            <table class="table table-boardered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th width="11%">프로젝트 번호</th>
                  <th width="7%">이름</th>
                  <th width="9%">아이디</th>
                  <th width="19%">프로젝트 명</th>
                  <th width="8%">타입</th>
                  <th width="15%">모금현황</th>
                  <th width="12%">기업명</th>
                  <th width="11%">기간</th>
                  <th width="8%">상태</th>
                </tr>
              </thead>
              <tbody>
				<c:forEach var="p" items="${pList }">
				<c:url var="pDetail" value="projectDetail.do">
	              	<c:param name="pNo" value="${ p.pNo }"/>
	            </c:url>
					<tr align="center">
						<td>${p.pNo }</td>
						<td>${p.creName }</td>
						<td>${p.creId }</td>
						<td><a href="${pDetail }">${p.pTitle }</a></td>
						<td>${p.cate }</td>
						<td>${p.sumAmount}(원)~${p.targetAmount }(원)</td>
						<td>${p.hashtag }</td>
						<td>${p.startDate }~<br>${p.endDate }</td>
						<td>${p.progress }</td>
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