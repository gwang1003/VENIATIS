<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
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
        margin:auto;
		line-height:55px;
      }

      .s2 {
        width: 77%;
        height:100%;
        font-size:17px;
        margin:auto;
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
        font-size:18px;
        text-align: center;
        background:#40c8b5;
        color:black;
        border:0.5px solid ghostwhite;
      }

      .col-md-6 {
        display:none;
      }
      
      input {
      	height:55%;
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
          <h2>회원 정보</h2>
        </div>
        <form action="" class="search">
          <div class="s1">
            회원 검색 :
          </div>
          <div class="s2" align="left">&nbsp;&nbsp;&nbsp;&nbsp;
            <label>권한 :</label>&nbsp;&nbsp;<select name="power" id="power">
              <option value="All" selected>전체</option>
              <option value="creator">크리에이터</option>
              <option value="Normal">일반회원</option>
            </select>&nbsp;&nbsp;
            <label>성별 : </label>&nbsp;&nbsp;<select name="power" id="power">
              <option value="All" selected>전체</option>
              <option value="M">남자</option>
              <option value="F">여자</option>
            </select>&nbsp;&nbsp;
            <label>나이 : </label>&nbsp;&nbsp;<select name="power" id="power">
              <option value="All" selected>전체</option>
              <option value="10">10세</option>
              <option value="20">20세</option>
              <!-- 나이 옵션은 for문으로 -->
            </select>&nbsp;&nbsp;
            <label>이름 : </label>&nbsp;&nbsp;<input type="text" name="id" class="id">&nbsp;&nbsp;
            <label>아이디 : </label>&nbsp;&nbsp;<input type="text" name="name" class="name">
          </div>
          <div class="s3"><button type="submit">검색</button></div>
        </form>
        <div class="card-body">
          <div class="table=responsive">
            <table class="table table-boardered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>회원번호</li>
                  <th>이름</li>
                  <th>아이디</th>
                  <th>성별</th>
                  <th>생년월일</th>
                  <th>연락처</li>
                  <th>이메일</th>
                  <th>가입일</th>
                  <th>권한</th>
                </tr>
              </thead>
              <tbody>
              <c:forEach var="m" items="${mList }">
              	<tr align="center">
              		<td>${m.mNo }</td>
              		<td>${m.mName }</td>
              		<td>${m.mId }</td>
              		<td>${m.gender }</td>
              		<td>${m.mBirth }</td>
              		<td>${m.mPhone }</td>
              		<td>${m.mEmail }</td>
              		<td>${m.mDate }</td>
              		<td>크리에이터 받아오기</td>
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