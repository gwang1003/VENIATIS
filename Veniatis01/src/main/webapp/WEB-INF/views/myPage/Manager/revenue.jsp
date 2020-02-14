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
         dateFormat: 'yy/mm/dd',
         monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
          dayNamesMin: ['일','월','화','수','목','금','토'],
          changeMonth: true, //월변경가능
          changeYear: true, //년변경가능
          showMonthAfterYear: true, //년 뒤에 월 표시
       });

       $("#datepicker2").datepicker({
         dateFormat: 'yy/mm/dd',
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
              <td width="40%;">시작일 : <input type="text" id="datepicker" /></td>
              <td>분야 : </td>
              <td>
                <select name="" id="">
                  <option value="funding">펀딩</option>
                  <option value="company">기업</option>
                </select>
              </td>
              <td rowspan="2"><button>조회</button></td>
            </tr>
            <tr>
              <td>종료일 : <input type="text" id="datepicker2" /></td>
              <td>타입 : </td>
              <td>
                <select name="" id="">
                  <option value="">문화예술</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </td>
            </tr>
          </table>
        </form>
        <div class="total">
          <div id="t1">
            총 성공 후원금액<br>
            <h2>45,244,800 원</h2>
          </div>
          <div id="t1">
            총 수익<br>
            <h2>2,244,800 원</h2>
          </div>
          <div id="t1">
            총 성공 프로젝트 수<br>
            <h2>32 건</h2>
          </div>
          <div id="t2">
            선택 날짜<br>
            <h2>19-07-01~20-01-01</h2>
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