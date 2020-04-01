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
        height:6%;
      }

      .search {
        width: 100%;
        height:8%;
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
        height:7%
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
        height:28%;
        border:1px solid black;
      }
      
      tfoot button{
      	background:#40c8b5; 
      	color:white; 
      	width:45%; 
      	height:40px;
      }
      
      #wrapper {
      	height:1400px;
      }
      
      .pagination {
      	position:absolute;
      }
      
      .chartjs-size-monitor {
      	width:100%;
      	height:100%;
      }
  </style>
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.0/themes/base/jquery-ui.css" />
  <script src="http://code.jquery.com/jquery-1.8.3.js"></script>
  <script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>
  <script src="resources/vendor/datatables/paging8.js"></script>
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
<c:choose>
	<c:when test="${type eq 'All'}">
		<c:set var="selected1" value="selected"/>
	</c:when>
	<c:when test="${type == 1}">
		<c:set var="selected2" value="selected"/>
	</c:when>
	<c:when test="${type == 2}">
		<c:set var="selected3" value="selected"/>
	</c:when>
</c:choose>
<c:choose>
	<c:when test="${cate eq 'All'}">
		<c:set var="selected4" value="selected"/>
	</c:when>
	<c:when test="${cate == 1}">
		<c:set var="selected5" value="selected"/>
	</c:when>
	<c:when test="${cate == 2}">
		<c:set var="selected6" value="selected"/>
	</c:when>
	<c:when test="${cate == 3}">
		<c:set var="selected7" value="selected"/>
	</c:when>
	<c:when test="${cate == 4}">
		<c:set var="selected8" value="selected"/>
	</c:when>
	<c:when test="${cate == 5}">
		<c:set var="selected9" value="selected"/>
	</c:when>
	<c:when test="${cate == 6}">
		<c:set var="selected10" value="selected"/>
	</c:when>
	<c:when test="${cate == 7}">
		<c:set var="selected11" value="selected"/>
	</c:when>
	<c:when test="${cate == 8}">
		<c:set var="selected12" value="selected"/>
	</c:when>
	<c:when test="${cate == 9}">
		<c:set var="selected13" value="selected"/>
	</c:when>
</c:choose>


<div class="mid" align="center">
        <div class="topText">
          <h2>수익 통계</h2>
        </div>
        <form action="" class="search">
          <table class="sTable">
            <tr>
              <td rowspan="2">기간 : </td>
              <td width="40%;">시작일 : <input type="text" id="datepicker" value="${sDate }" name="startDate" autocomplete="off"/></td>
              <td>타입 : </td>
              <td>
                <select name="type">
                  <option value="All" ${selected1 }>전체</option>
                  <option value=1 ${selected2 }>펀딩</option>
                  <option value=2 ${selected3 }>기업</option>
                </select>
              </td>
              <td rowspan="2"><button>조회</button></td>
            </tr>
            <tr>
              <td>종료일 : <input type="text" id="datepicker2" value="${eDate }" name="endDate" autocomplete="off"/></td>
              <td>카테고리 : </td>
              <td>
                <select name="cate">
                  <option value="All" ${selected4 }>전체</option>
                  <option value=1 ${selected5 }>공간/리빙</option>
                  <option value=2 ${selected6 }>사회이슈</option>
                  <option value=3 ${selected7 }>교육/출판</option>
                  <option value=4 ${selected8 }>문화예술</option>
                  <option value=5 ${selected9 }>지역재생</option>
                  <option value=6 ${selected10}>푸드</option>
                  <option value=7 ${selected11}>테크</option>
                  <option value=8 ${selected12}>뷰티/패션</option>
                  <option value=9 ${selected13}>여행</option>
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
        <div class="chart-area" style="width:100%; height:100%;">
            <canvas id="myAreaChart"></canvas>
         </div>
         </div>
        <div class="card-body">
          <div class="table=responsive">
          	<form action="excelDown.do">
	            <input type="hidden" name ="sDate" value="${sDate }">
	            <input type="hidden" name ="eDate" value="${eDate }">
	            <input type="hidden" name ="cate" value="${cate }">
	            <input type="hidden" name ="type" value="${type }">
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
	                <th><button>Excel로 다운로드</button></th>
	              </tfoot>
	            </table>
            </form>
          </div>
        </div>
      </div>
<script>
	$(function(){
		$("#content").append($(".mid"))
	})
	
		// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
    		<c:forEach var="d" items="${revenue}">
	  			'${d.day}',
	  		</c:forEach>
    	],
    datasets: [{
      label: "Earnings",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 4,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 3,
      data: [
    	  <c:forEach var="d" items="${revenue}">
    	  	${d.revenue},
    	  </c:forEach>
    	  ],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value) + "원";
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return '수익 : ' + number_format(tooltipItem.yLabel) + "원";
        }
      }
    }
  }
});
	
</script>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>