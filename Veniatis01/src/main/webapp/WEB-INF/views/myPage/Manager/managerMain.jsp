<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
        height:100%;
      }

      .Vtoday, .log, .project{
        width: 85%;
        height: 200px;
        margin-bottom:5%;
      }

      .log {
        border:1px solid black;
        height:300px;
      }

      .money {
        width: 85%;
        height:250px;
        margin-bottom:5%;
      }

      

      .mon {
        float: left;
        box-sizing: border-box;
        width:20%;
        height:250px;
      }

      .mon div {
        border:1px solid black;
        height:33.3%;
        font-size:20px;
        line-height: 40px;
      }


      .Vtoday {
        background:mediumaquamarine;
      }

      .project {
        background:tomato;
        color:black;
      }

      .Tvisitor, .okProject {
        width:33%;
        height:100%;
        float: left;
        box-sizing: border-box;
      }

      .Tproject, .ingProject {
        width:34%;
        height:100%;
        float: left;
        box-sizing: border-box;
      }

      .TQnA, .endProject {
        width:33%;
        height:100%;
        float: left;
        box-sizing: border-box;
      }

      .Vtoday img, .project img {
        margin-top: 5%;
        width:50%;
        height:50%;
      }

      .Vtoday h3, .project h3{
        margin-top:5%;
        width:70%;
        height:42%;
      }

      .mTitle {
        text-align: left;
        margin-left:7%;
      }

      
  </style>
   <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <script type="text/javascript">
    google.load('visualization', '1', { packages: ['corechart'] });     
  </script>
  <script type="text/javascript">
	  mVisitor = new Array;
	  mVisitor2 = new Array;
	  <c:forEach var="m" items="${mVisitor }">
	  	mVisitor.push(${m});
	  </c:forEach>
	  <c:forEach var="n" items="${mVisitor2 }">
		mVisitor2.push(${n});
	  </c:forEach> 
    function drawVisualization() {
    	console.log(${mVisitor});
      // Some raw data (not necessarily accurate)
      var data = google.visualization.arrayToDataTable([
        ['Week', '지난달 ', '이번달 '],
        <c:forEach var="i" begin="0" end="30">
        ['${i+1}', mVisitor[${i}], mVisitor2[${i}]],
        </c:forEach>
        /* ['1', mVisitor[0], 30],
        ['2', mVisitor[1], 30],
        ['3', 45, 40],
        ['4', 42, 60],
        ['5', 45, 70],
        ['6', 67, 70],
        ['7', 55, 60],
        ['8', 20, 30],
        ['9', 25, 30],
        ['10', 45, 40],
        ['11', 42, 60],
        ['12', 45, 70],
        ['13', 67, 70],
        ['14', 55, 60],
        ['15', 20, 30],
        ['16', 25, 30],
        ['17', 45, 40],
        ['18', 42, 60],
        ['19', 45, 70],
        ['20', 67, 70],
        ['21', 55, 60],
        ['22', 20, 30],
        ['23', 25, 30],
        ['24', 45, 40],
        ['25', 42, 60],
        ['26', 45, 70],
        ['27', 67, 70],
        ['28', 55, 60],
        ['29', 20, 30],
        ['30', 25, 30],
        ['31', 45, 40], */
      ]);
      var options = {
        title: '월간 방문자 통계',
        vAxis: { title: "명" },
        hAxis: { title: "일" },
        seriesType: "bars",
        series: { 5: { type: "line" } }
      };
      var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
    google.setOnLoadCallback(drawVisualization);
  </script>
</head>
<body>
<jsp:include page="../../common/sidebar.jsp"/>
<div class="mid" align="center">
        <h2 class="mTitle">◎오늘의 VENIATIS</h2>
        <div class="Vtoday">
          <div class="Tvisitor">
            <img src="resources/common/undraw_posting_photo.svg">
            <h3>방문자 수 : ${visitor }</h3>
          </div>
          <div class="Tproject">
            <img src="resources/common/undraw_posting_photo.svg" alt="">
            <h3>개설 프로젝트 수 : ${openProject }</h3>
          </div>
          <div class="TQnA">
            <img src="resources/common/undraw_posting_photo.svg" alt="">
            <h3>문의 내역 : ${QnA }</h3>
          </div>
        </div>
        <h2 class="mTitle">◎월별 방문자 통계</h2>
        <div class="log">
          <div id="chart_div" style="width: 100%; height: 100%;"></div>
        </div>
        <h2 class="mTitle">◎프로젝트 통계</h2>
        <div class="project">
          <div class="okProject">
            <img src="resources/common/undraw_posting_photo.svg">
            <h3>개설 요청 프로젝트 : ${requestProject }</h3>
          </div>
          <div class="ingProject">
            <img src="resources/common/undraw_posting_photo.svg" alt="">
            <h3>진행중인 프로젝트 : ${project }</h3>
          </div>
          <div class="endProject">
            <img src="resources/common/undraw_posting_photo.svg" alt="">
            <h3>마감된 프로젝트 : ${endProject }</h3>
          </div>
        </div>
        <h2 class="mTitle">◎연간 수익 통계</h2>
        <div class="money">
          <div class="chart-area">
            <canvas id="myAreaChart"></canvas>
          </div>
          <div class="mon">
            <div class="tRevenue">금년 수익 : <br></div>
            <div class="revenue">전년 대비 수익 : <br></div>
            <div class="totalRevenue">총 수익 : <br></div>
          </div>
        </div>
      </div>
<script>
	$(function(){
		$("#content").append($(".mid"))
		
		var tRevenue = 0;		
		<c:forEach var="r" items="${revenue}">
			tRevenue += ${r.revenue};
		</c:forEach>
		
		$(".tRevenue").append(tRevenue + "원");
		
		$(".Tvisitor").click(function(){
			location.href="todayMember.do"
		}).mouseenter(function(){
			$(this).css({"cursor":"pointer"});
		})
		$(".Tproject").click(function(){
			location.href="todayProject.do"
		}).mouseenter(function(){
			$(this).css({"cursor":"pointer"});
		})
		$(".TQnA").click(function(){
			location.href="todayQnA.do"
		}).mouseenter(function(){
			$(this).css({"cursor":"pointer"});
		})
		$(".okProject").click(function(){
			location.href="searchProject.do?pStatus=Wait&pType=All"
		}).mouseenter(function(){
			$(this).css({"cursor":"pointer"});
		})
		$(".ingProject").click(function(){
			location.href="searchProject.do?pStatus=Ing&pType=All"
		}).mouseenter(function(){
			$(this).css({"cursor":"pointer"});
		})
		$(".endProject").click(function(){
			location.href="searchProject.do?pStatus=End&pType=All"
		}).mouseenter(function(){
			$(this).css({"cursor":"pointer"});
		})
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
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
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
            return '$' + number_format(value);
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
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});

</script>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>