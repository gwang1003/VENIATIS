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
<script src="resources/vendor/datatables/paging12.js"></script>
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
        padding-top: 0.3%;
        border-top:3px solid #40c8b5;
        border-bottom:3px solid #40c8b5;
      }
      .s1 {
        font-size:25px;
        width:14%;
        height:100%;
        line-height: 45px;
      }

      .s2 {
        width: 77%;
        height:100%;
        font-size:17px;
      }

      .s3 {
        width: 9%;
        height:100%;
        padding:0;
      }

      .s2 * {
        margin-top: 0.7%;
      }

      .s2 >div {
        float: left;
        box-sizing: border-box;
      }

      .s2Name {
        width:35%;
        height:100%;
      }

      .s2Id {
        width:35%;
        height:100%;
      }

      .s2Type {
        width:30%;
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
        font-size:15px;
        text-align: center;
        background:#40c8b5;
        color:black;
        border:0.5px solid ghostwhite;
      }

      .col-md-6 {
        display:none;
      }
      
      .pagination {
      	position:absolute;
      }
  </style>
</head>
<body>
<jsp:include page="../../common/sidebar.jsp"/>
<div class="mid" align="center">
<div class="topText">
          <h2>크리에이터 정보</h2>
        </div>
        <form action="searchCreator.do" class="search">
          <div class="s1">
            회원 검색 :
          </div>
          <div class="s2" align="left">
            <div class="s2Name">
              <label>이름 :</label>&nbsp;&nbsp;<input type="text" name="name" class="name">
            </div>
            <div class="s2Id">
              <label>아이디 : </label>&nbsp;&nbsp;<input type="text" name="id" class="id">
            </div>
            <div class="s2Type">
              <label>타입 :</label>&nbsp;&nbsp;<select name="type" id="type" style="width:40%;text-align: center">
                <option value="All" selected>전체</option>
                <option value="funding">펀딩</option>
                <option value="create">창업</option>
              </select>
            </div>
          </div>
          <div class="s3" style="padding:0;"><button type="submit">검색</button></div>
        </form>
        <div class="card-body">
          <div class="table=responsive">
            <table class="table table-boardered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th width="14%">크리에이터 번호</th>
                  <th width="12%">이름</th>
                  <th width="15%">아이디</th>
                  <th width="12%">타입</th>
                  <th width="17%">연락처</th>
                  <th width="19%">이메일</th>
                  <th width="11%">프로젝트 번호</th>
                </tr>
              </thead>
              <tbody>
				<c:forEach var="c" items="${cList }">
              		<c:url var="pDetail" value="projectDetail.do">
	          			<c:param name="pNo" value="${ c.pNo }"/>
	          		</c:url>
					<tr align="center">
              		<td>${c.creNo }</td>
              		<td>${c.creName }</td>
              		<td>${c.mId }</td>
              		<td>${c.creType }</td>
              		<td>${c.crePhone }</td>
              		<td>${c.creEmail }</td>
              		<td><a href="${pDetail}">${c.pNo }</a></td>
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
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>