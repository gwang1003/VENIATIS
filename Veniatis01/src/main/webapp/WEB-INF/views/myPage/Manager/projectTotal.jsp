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
      
      .row {
      	width: 87%;
        height: 200px;
        margin-bottom:5%;
      }

      .log {
        border:1px solid black;
        height:300px;
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
    function drawVisualization() {
      // Some raw data (not necessarily accurate)
      var data = google.visualization.arrayToDataTable([
        ['Week', '프로젝트수 ', '성공률(%) '],
        <c:forEach var="i" items="${pTotal}">
        ['${i.pcName}', ${i.amount}, ${i.percent}],
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
        vAxis: { title: "개,(%)" },
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
        <h2 class="mTitle">◎월별 방문자 통계</h2>
        <div class="log">
          <div id="chart_div" style="width: 100%; height: 100%;"></div>
        </div>  
        
        <pre><h2 class="mTitle">◎개인 프로젝트 성공률 TOP 5                                  ◎창업 프로젝트 성공률 TOP 5</h2></pre>
        <div class="row">

            <!-- Content Column -->
            <div class="col-lg-6 mb-4">

              <!-- Project Card Example -->
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                </div>
                <div class="card-body">
                <c:if test="${pSolo.size() > 4 }">
                	<c:forEach var="p" begin="0" end="4">
	                	<h4 class="small font-weight-bold">${pSolo.get(p).pcName } <span class="float-right">${pSolo.get(p).percent }%</span></h4>
	                  <div class="progress mb-4">
	                    <div class="progress-bar bg-danger" role="progressbar" style="width: ${pSolo.get(p).percent }%" aria-valuenow="${pSolo.get(p).percent }" aria-valuemin="0" aria-valuemax="100"></div>
	                  </div>
	                </c:forEach>
                </c:if>
                <c:if test="${pSolo.size() <= 4 } ">
                	<c:forEach var="p" begin="0" end="${pCompany.size() }">
	                	<h4 class="small font-weight-bold">${pSolo.get(p).pcName } <span class="float-right">${pSolo.get(p).percent }%</span></h4>
	                  <div class="progress mb-4">
	                    <div class="progress-bar bg-danger" role="progressbar" style="width: ${pSolo.get(p).percent }%" aria-valuenow="${pSolo.get(p).percent }" aria-valuemin="0" aria-valuemax="100"></div>
	                  </div>
	                </c:forEach>
                </c:if>
                  
                </div>
              </div>
            </div>
            
            <div class="col-lg-6 mb-4">

              <!-- Project Card Example -->
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                </div>
                <div class="card-body">
                <c:if test="${pCompany.size()  > 4 }">
                	<c:forEach var="p" begin="0" end="4">
	                	<h4 class="small font-weight-bold">${pCompany.get(p).pcName } <span class="float-right">${pCompany.get(p).percent }%</span></h4>
	                  <div class="progress mb-4">
	                    <div class="progress-bar bg-danger" role="progressbar" style="width: ${pCompany.get(p).percent }%" aria-valuenow="${pCompany.get(p).percent }" aria-valuemin="0" aria-valuemax="100"></div>
	                  </div>
	                </c:forEach>
                </c:if>
                <c:if test="${pCompany.size() < 5 }">
                	<c:forEach var="p" items="${pCompany}">
	                	<h4 class="small font-weight-bold">${p.pcName } <span class="float-right">${p.percent }%</span></h4>
	                  <div class="progress mb-4">
	                    <div class="progress-bar bg-danger" role="progressbar" style="width: ${p.percent }%" aria-valuenow="${p.percent }" aria-valuemin="0" aria-valuemax="100"></div>
	                  </div>
	                </c:forEach>
                </c:if>
                </div>
              </div>
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