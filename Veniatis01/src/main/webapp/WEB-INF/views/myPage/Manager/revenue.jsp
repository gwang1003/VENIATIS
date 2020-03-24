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

      .search {
        width: 100%;
        height:12%;
        font-size: 24px;
        text-align: center;
        border-top:3px solid #40c8b5;
        border-bottom:3px solid #40c8b5;
      }

      table {
        width:100%;
        height:100%;
      }
      .col-md-6 {
        display:none;
      }

      select {
        width:50%;
        
      }

      option {
        text-align: right;
      }

      .total {
        margin-top:5%;
        width:100%;
        height:10%
      }

      .total div {
        float: left;
        box-sizing: border-box;
        border:1px solid darkgray;
        line-height: 40px;
      }

      #t1 {
        width:20%;
        height:100%;
      }

      #t2 {
        width:40%;
        height:100%;
      }

      .graph {
        width:100%;
        height:40%;
        border:1px solid black;
      }
  </style>
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.0/themes/base/jquery-ui.css" />
  <script src="http://code.jquery.com/jquery-1.8.3.js"></script>
  <script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>
  
  <script>
   $(function() {
    $("#datepicker").datepicker({
         dateFormat: 'yy-mm-dd',
         monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
          dayNamesMin: ['일','월','화','수','목','금','토'],
          changeMonth: true, //월변경가능
          changeYear: true, //년변경가능
          showMonthAfterYear: true, //년 뒤에 월 표시
       });

       $("#datepicker2").datepicker({
         dateFormat: 'yy-mm-dd',
         monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
          dayNamesMin: ['일','월','화','수','목','금','토'],
          changeMonth: true, //월변경가능
          changeYear: true, //년변경가능
          showMonthAfterYear: true, //년 뒤에 월 표시
       });
   });
  </script>
</head>
<body>
<jsp:include page="../../common/sidebar.jsp"/>
<div class="mid" align="center">
        <div class="topText">
          <h2>수익 통계</h2>
        </div>
        <form action="" class="search">
          <table class="sTable">
            <tr>
              <td rowspan="2">기간 : </td>
              <td width="40%;">시작일 : <input type="text" id="datepicker" name="startDate" autocomplete="off"/></td>
              <td>타입 : </td>
              <td>
                <select name="type">
                  <option value="All" selected>전체</option>
                  <option value=1>펀딩</option>
                  <option value=2>기업</option>
                </select>
              </td>
              <td rowspan="2"><button>조회</button></td>
            </tr>
            <tr>
              <td>종료일 : <input type="text" id="datepicker2" name="endDate" autocomplete="off"/></td>
              <td>카테고리 : </td>
              <td>
                <select name="cate">
                  <option value="All" selected>전체</option>
                  <option value=1>공간/리빙</option>
                  <option value=2>사회이슈</option>
                  <option value=3>교육/출판</option>
                  <option value=4>문화예술</option>
                  <option value=5>지역재생</option>
                  <option value=6>푸드</option>
                  <option value=7>테크</option>
                  <option value=8>뷰티/패션</option>
                  <option value=9>여행</option>
                </select>
              </td>
            </tr>
          </table>
        </form>
        <div class="total">
          <div id="t1">
            총 성공 후원금액<br>
            <h2>${index[0]} 원</h2>
          </div>
          <div id="t1">
            총 수익<br>
            <h2>${index[1] } 원</h2>
          </div>
          <div id="t1">
            총 성공 프로젝트 수<br>
            <h2>${index[2] } 건</h2>
          </div>
          <div id="t2">
            선택 날짜<br>
            <h2>${sDate }~${eDate }</h2>
          </div>
        </div>
        <div class="graph">

        </div>
        <div class="card-body">
          <div class="table=responsive">
            <table class="table table-boardered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th width="25%">후원 성공일</th>
                  <th width="25%">결제 건수</th>
                  <th width="25%">실 결제금액</th>
                  <th width="25%">이익</th>
                </tr>
              </thead>
              <tbody>
				<c:forEach var="r" items="${rList }">
					<tr>
						<td>${r.day }</td>
						<td>${r.amount }</td>
						<td>${r.realMoney }</td>
						<td>${r.revenue }</td>
					</tr>
				</c:forEach>
              </tbody>
              <tfoot>
                <th colspan="3"></th>
                <th><button>Excel로 다운로드</button> <button>인쇄하기</button></th>
              </tfoot>
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