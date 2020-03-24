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
      	text-align:center;
      }
  </style>
  <c:if test="${ !empty msg }">
		<script>
			alert('${msg}');
		</script>
		<c:remove var="msg"/>
	</c:if>
</head>
<c:if test="${ !empty msg }">
		<script>
			alert('${msg}');
		</script>
		<c:remove var="msg"/>
	</c:if>
<body>
<jsp:include page="../../common/sidebar.jsp"/>
<div class="mid" align="center">
        <div class="topText">
          <h2>공모전내역관리</h2>
        </div>
        <div class="card-body">
          <div class="table=responsive">
            <table class="table table-boardered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th width="11%">선택</th>
                  <th width="21%">공모전 이름</th>
                  <th width="16%">주최</th>
                  <th width="21%">기간</th>
                  <th width="16%">대상</th>
                  <th width="15%">혜택</th>
                </tr>
              </thead>
              <tbody>
				<c:forEach var="c" items="${ cList}">
					<tr>
						<td><input type="checkbox" name="chk" value="${c.conNo }" style="background:white; border:1px solid gray; width:20px; height:20px;"></td>
						<td><a href="${c.conHp}">${c.conName }</a></td>
						<td>${c.conHost }</td>
						<td>${c.startDate }~${c.lastDate }</td>
						<td>${c.conTarget }</td>
						<td>${c.conBenefit }</td>
					</tr>
				</c:forEach>
              </tbody>
              <tfoot>
              	<tr>
              		<td></td>
              		<td></td>
              		<td></td>
              		<td></td>
              		<td></td>              		
              		<td><button class="bbs" style="background:#40c8b5; color:white; width:70%; height:40px">삭제하기</button></td>
              	</tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
<script>
	
	$(function(){
		$("#content").append($(".mid"))
		
		$(".bbs").click(function(){
			var chk = $("input[name='chk']")
			var conNo = "";
			for(var i = 0; i < chk.length; i++) {
				if(chk[i].checked) {
					conNo += chk[i].value +" ";
				}
			}			
			location.href="deleteCon.do?conNo="+conNo;
		})
	})
</script>
  <script src="resources/js/demo/chart-area-demo.js"></script>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>