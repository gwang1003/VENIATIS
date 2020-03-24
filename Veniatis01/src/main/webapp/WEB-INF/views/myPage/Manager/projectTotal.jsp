<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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
      
      
      
      
      
      
      
      
      
      
        body .title {
          width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        body .title h1 {
          margin: 30px 0px 0px 0px;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: 400;
          color: #000000;
        }
        body .title h2 {
          margin: 10px 0px 0px 0px;
          font-size: 18px;
          color: #8B8B8B;
          font-weight: 400;
          font-family: 'Source Sans Pro', sans-serif;
        }
        body .ui {
          width: 900px;
          margin: 0 auto;
          margin-top: 50px;
          font-family: 'Source Sans Pro', sans-serif;
          color: rgb(0, 0, 0);
          box-shadow: none;
        }
        body .ui ul {
          margin: 0px 30px 10px 0px;
          padding: 0;
          list-style-type: none;
          font-size: 11px;
          font-weight: 400;
          line-height: 20px;
        }
        body .ui .drop {
          z-index: -3;
          opacity: 0;
          width: 240px;
          height: 10px;
          background: #3e8368;
          position: absolute;
          color: rgb(0, 0, 0);
          bottom: 0;
          padding: 12px 30px 21px 30px;
          -webkit-transition-property: bottom,opacity;
          transition-property: bottom,opacity;
          -webkit-transition-duration: .3s;
                  transition-duration: .3s;
        }
        body .ui .drop p {
          color: #000000;
        }
        body .ui_box {
          width: 300px;
          height: 180px;
          position: relative;
          background: #cacaca;
          float: left;
          box-shadow: -1px 0px rgba(255, 255, 255, 0.07);
          cursor: pointer;
          -webkit-transform: scale(1);
                  transform: scale(1);
          -webkit-transition-property: background,-webkit-transform;
          transition-property: background,-webkit-transform;
          transition-property: transform,background;
          transition-property: transform,background,-webkit-transform;
          -webkit-transition-duration: .3s;
                  transition-duration: .3s;
        }
        body .ui_box__inner {
          padding: 30px;
        }
        body .ui_box__inner span {
          font-size: 36px;
          font-weight: 700;
        }
        body .ui_box__inner .progress {
          width: 100%;
          margin-top: 10px;
          height: 6px;
          background: rgba(0, 0, 0, 0.3);
          margin-bottom: 15px;
        }
        body .ui_box__inner .progress_graph {
          float: right;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          width: 85px;
          text-align: center;
          position: relative;
          padding-left: 20px;
          top: 24px;
        }
        body .ui_box__inner .progress_graph__bar--1 {
          width: 10px;
          height: 20px;
          background: #4FA584;
          float: left;
          margin-right: 10px;
          position: relative;
          bottom: -10px;
          -webkit-animation: graph 1s;
        }
        body .ui_box__inner .progress_graph__bar--2 {
          width: 10px;
          -webkit-animation: graph2 1s;
          height: 30px;
          float: left;
          margin-right: 10px;
          background: #4FA584;
        }
        body .ui_box__inner .progress_graph__bar--3 {
          width: 10px;
          height: 24px;
          margin-right: 10px;
          -webkit-animation: graph3 1s;
          background: #4FA584;
          float: left;
          position: relative;
          bottom: -6px;
        }
        body .ui_box__inner .progress_graph__bar--4 {
          width: 10px;
          height: 14px;
          -webkit-animation: graph4 1s;
          bottom: -16px;
          position: relative;
          background: #4FA584;
          float: left;
        }
        body .ui_box__inner .progress_bar {
          height: 6px;
          float: left;
          width: 0%;
          background: #4FA584;
          -webkit-animation: bar 2s;
        }
        body .ui_box__inner .progress_bar--two {
          height: 6px;
          float: left;
          width: 100%;
          background: #4FA584;
          -webkit-animation: bar2 2s;
        }
        body .ui_box h2 {
          font-weight: normal;
          font-size: 16px;
          margin: -4px 0px 3px 0px;
        }
        body .ui_box p {
          font-size: 11px;
          color: #000000;
          clear: left;
          font-weight: 300;
          width: 160px;
          margin: 2px 0px 15px 0px;
        }
        body .ui_box:hover {
          background: #4FA584;
          -webkit-transform: scale(1.1);
                  transform: scale(1.1);
          -webkit-transition-property: background,-webkit-transform;
          transition-property: background,-webkit-transform;
          transition-property: transform,background;
          transition-property: transform,background,-webkit-transform;
          -webkit-transition-duration: .3s;
                  transition-duration: .3s;
          position: relative;
          z-index: 1;
        }
        
        .ui_box:hover > .ui_box__inner p {
          color: #b3dacb;
        }
        
        .ui_box:hover > .drop {
          -webkit-transition-property: bottom,opacity;
          transition-property: bottom,opacity;
          -webkit-transition-duration: .3s;
                  transition-duration: .3s;
          bottom: -42px;
          opacity: 1;
        }
        
        .ui_box:hover > .drop .arrow {
          -webkit-transition-property: -webkit-transform;
          transition-property: -webkit-transform;
          transition-property: transform;
          transition-property: transform, -webkit-transform;
          -webkit-transition-duration: 1s;
                  transition-duration: 1s;
          -webkit-transform: rotate(765deg);
                  transform: rotate(765deg);
        }
        
        .ui_box:hover > .ui_box__inner .progress_graph > div {
          background: white;
        }
        
        .ui_box:hover > .ui_box__inner .progress .progress_bar, .ui_box:hover > .ui_box__inner .progress .progress_bar--two {
          background: white;
        }
        
        .stat_left {
          float: left;
        }
        
        .arrow {
          width: 4px;
          height: 4px;
          -webkit-transition-property: -webkit-transform;
          transition-property: -webkit-transform;
          transition-property: transform;
          transition-property: transform, -webkit-transform;
          -webkit-transition-duration: 1s;
                  transition-duration: 1s;
          -webkit-transform: rotate(45deg);
                  transform: rotate(45deg);
          -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          border-top: 1px solid #CDEAD3;
          border-right: 1px solid #CDEAD3;
          float: right;
          position: relative;
          top: -24px;
          right: 0px;
        }
        

          .col-md-6{
        display:none;}
         
         .row{
            display:block;
         }
         
         #dataTable_wrapper div{
         height:0%;
      }
  </style>
  
  
  <!-- 부트스트랩 -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
   crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
   crossorigin="anonymous"></script>  
<link rel="stylesheet" href="resources/css/hr.css">  
  
  
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
          </div><br><br><br><br><br><br><br><br><br><br><br>
             <div>
                   <div id="omcWrap">

      <main id="omcContainer" class="cont_support">


      <div class="cMain">
         <article id="mContent" class="project_list">
            <div class="wrap_project">
               <h1 >◎ 리워드 정보</h1>
               <ul class="list_prj" id="listPrj">
                  <div class="page-wrapper" style="display: block; overflow: auto;">
                      <c:if test="${ projectListSize eq 0 }">
                        <div style="text-align:center; margin:50px;">
                           <p> 프로젝트가 존재하지 않습니다. </p>
                        </div>
                     </c:if>
                     <c:forEach var="prj" items="${ projectList }" varStatus="vs">
                        <c:url var="pDetail" value="projectDetail.do">
                           <c:param name="pNo" value="${ prj.pNo }"/>
                        </c:url>
                        <li class="project_card reward_project_card"
                           data-project-seq="7779" data-page-number="1">
                           <div class="project_card_inner">
                             <%int num=1;%>   
                              <a class="project_detail_link" href="javascript:openModal(${prj.pNo })" style="cursor:pointer;"> 
                              <span class="project_thumbnail" 
                                 style="background-image: url('${ prj.thumbnail}')"></span>
                              </a>
                              <div class="project_card_info">
                                 <h3 class="project_name">
                                    <a class="project_detail_link" href="javascript:openModal(${prj.pNo })" style="cursor:pointer;"> 
                                       ${ prj.pTitle }
                                    </a>
                                 </h3>

                                 <script>
                                    var n=1;
                                    function openModal(pNo){
                                       $.ajax({
                                          url:"rewardList.do",
                                          data:{pNo:pNo},
                                          dataType:"json",
                                          success:function(data){
                                             console.log(data);
                                             if(data.length !=0){                                 
                                                   var amount= $("<span id='AtotalAmount'>").text(data[0].targetAmount);
                                                   $('#totalAmount').append(amount);
                                                   
                                                   var sum = ((data[0].SumAmount/data[0].targetAmount)*100).toFixed(2);
                                                   var sumAmount = $("<span id='AsumAmount'>").text(sum+"%");
                                                   $('#sumAmount').append(sumAmount);
                                                   $(".progress_bar").css("width",sum);
                                                   $(".progress_bar").css("width",sum);
                                                   $(".progress_bar").css("width",sum);
                                                   
                                                   for(var i in data){
                                                      var $d0= $("<tr align='center' id='Atr"+n+"'>");
                                                      var $d1= $("<td id='Atd'>").text(data[i].rName);
                                                      var $d2= $("<td id='Atd'>").text(data[i].mId);
                                                      var $d3= $("<td id='Atd'>").text(data[i].orderDate);
                                                      var $d4= $("<td id='Atd'>").text(data[i].totalAmount);
      
                                                      
                                                      
                                                      $("#data").append($d0);
                                                      $d0.append($d1);
                                                      $d0.append($d2);
                                                      $d0.append($d4);
                                                      $d0.append($d3);
                                                      
                                                      n=n+1
                                                   };
                                          }else{
/*                                              var amount= $("<span id='AtotalAmount'>").text(${prj.targetAmount});
                                             $('#totalAmount').append(amount);
                                             console.log('${prj.targetAmount}');
                                             console.log('${prj.pTitle}');
                                             var sumAmount=$("<span id='AsumAmount'>").text("0%");
                                             $('#sumAmount').append(sumAmount);
                                             n=n+1; */
                                             var $t = $("<span id='t' style='color:white;'>").text("리워드 현황이 존재하지 않습니다.");
                                                console.log($t);
                                                $('.form-area').hide();
                                                
                                                $("#modalBody").append($t);
                                             }
                                          }
                                       });   
                                       $("#xx<%=num%>").modal('show');
                                    }
                                    $("#xx<%=num%>").on('hide.bs.modal', function(e){
                                       $('.form-area').show();
                                       $('#t').remove();
                                       for(var i=1; i<n ; i++){
                                       $("#Atr"+i).empty();
                                       $('#AtotalAmount').remove();
                                       $('#AsumAmount').remove();
                                       
                                       e.stopImmediatePropagation();
                                    }
                                       
                                    });
                                 </script>                                 
                                 
                <!-- 모달 -->
<div class="modal fade seminor-login-modal" id="xx<%=num%>">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content"
        style="background-color: rgba(0,0,0,0);
              border:0px;
              ">
            <!-- Modal body -->
            <div class="modal-body seminor-login-modal-body" id="modalBody">
                <div class="form-area">
                    <br style="clear:both">
                    <p style="font-size:35px;
                             color:white;
                             margin-left: 70px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;리워드 정보</h3>
                    <div class="form-group">
                  <div class='ui'>
                    <div class='ui_box'>
                      <div class='ui_box__inner'>
                        <h2>
                             목표 금액 도달 비율
                        </h2>
                        <div class='stat' id="sumAmount">

                        </div>
                        <div class='progress'>
                          <div class='progress_bar'></div>
                        </div>
                           </div>

                    </div>
                    
                    <div class='ui_box'>
                      <div class='ui_box__inner'>
                        <h2>
                             목표 금액
                        </h2>
                        <div class='stat' id='totalAmount'>
                        </div>
                        <div class='progress'>
                          <div class='progress_bar--two'></div>
                        </div>
                      </div>
                    </div>
                  </div> 
                    </div>
                    

      <!-- DataTales Example -->
         <div class="card-body">
          <div class="table=responsive"
          style="width:550px;">
            <table class="table table-boardered" id="dataTable" 
            style="background-color:white;"
               
             cellspacing="0">
             <p style='color:white;'>리워드 회원 목록</p>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>아이디</th>
                  <th>리워드 금액</th>
                  <th>후원 날짜</th>
                </tr>
              </thead>
              <tbody id="data">
                 <tr align="center">

                 </tr>
              </tbody>
            </table>
          </div>
        </div>
    <!-- /.container-fluid -->
                    
                </div>
            </div>
        </div>
    </div>
</div>
<!-- 모달끝ㅋㅋ -->                                             
                                 <jsp:useBean id="now" class="java.util.Date" />
                                 
                                 <c:if test="${prj.endDate  > now }">
                                 <b>프로젝트 진행 중</b>
                                 </c:if>
                                 <c:if test="${prj.endDate  < now }">
                                 <b>프로젝트 마감</b>
                                 </c:if>
                                 <span class="user_profile"> 
                                    <span class="img_profile clear_empty_picture"> 
                                       <img src="${ prj.creProfile }">
                                    </span> 
                                    <span class="txt_name">${ prj.creName }</span>
                                 </span> 
                                 <span class="project_category"> 
                                    <span class="screen_out">카테고리</span> ${ prj.cate }
                                 </span>
                              </div>
                              <div class="project_state">
                                 <span class="total_amount"> 
                                    참여금액 : <fmt:formatNumber value="${ prj.sumAmount }" groupingUsed="true"/> 원 
                                    <br>목표 금액 : ${prj.targetAmount }
                                 </span>

                              </div>
                           </div>
                        </li>   
                        <%num=num+1;%>
                     </c:forEach> 
                     
                  </div>
               </ul>
            </div>
         </article>
      </div>
      </main>
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