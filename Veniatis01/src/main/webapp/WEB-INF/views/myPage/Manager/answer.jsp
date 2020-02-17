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
                  <th width="25%">문의 제목</th>
                  <th width="15%">작성자</th>
                  <th width="25%">작성 날짜</th>
                  <th width="10%">답변 여부</th>
                  <th width="15%"></th>
                </tr>
              </thead>
              <tbody>

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