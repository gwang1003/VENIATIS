<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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

      /* Table css */
      .Table {
        padding-top:5%;
        width:50%;
        height:80%;
      }
      .creatorTable {
        width:100%;
        height:100%;
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

      .tForm {
        width:100%;
        height:100%;
      }

      table {
        width: 50%;
        height: 80%;
        text-align:center;
      }

      table input {
        width: 70%;
        height: 40%;
		border:1px solid darkgray;
      }
      
      table button {
        width:20%;
        height:50%;
        background:ghostwhite;
      }
      
  </style>
</head>
<body>
<jsp:include page="../../common/sidebar.jsp"/>
<div class="mid" align="center">
        <div class="topText">
          <h2>공모전 등록</h2>
        </div>
        <div class="Table">
          <form action="" class="tForm">
            <table class="creatorTable" border="1">
              <tr>
                <th>제목</th>
                <th><input type="text" name="cNmae" id="cName""></th>
              </tr>
              <tr>
                <th>주최</th>
                <th><input type="text" name="cHost" id="cHost"></th>
              </tr>
              <tr>
                <th>후원 / 협찬</th>
                <th><input type="text" name="cSupport" id="cSupport"></th>
              </tr>
              <tr>
                <th>접수기간</th>
                <th><input type="text" name="cDate" id="cDate"></th>
              </tr>
              <tr>
                <th>홈페이지</th>
                <th><input type="text" name="cUrl" id="cUrl"></th>
              </tr>
              <tr>
                <th>첨부파일</th>
                <th><input type="file" name="cFile" id="cFile"></th>
              </tr>
              <tr>
                <th colspan="2"><button type="sumbit">등록하기</button></th>
              </tr>
            </table>
          </form>
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