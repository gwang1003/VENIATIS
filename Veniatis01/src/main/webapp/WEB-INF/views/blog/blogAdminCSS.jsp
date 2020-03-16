<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous">

  <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
<style type="text/css">
*{
font-family: 'Noto Sans KR', sans-serif;
}
.mini-submenu{
  display:none;  
  background-color: rgba(0, 0, 0, 0);  
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  padding: 9px;  
  /*position: relative;*/
  width: 42px;

}

.mini-submenu:hover{
  cursor: pointer;
}

.mini-submenu .icon-bar {
  border-radius: 1px;
  display: block;
  height: 2px;
  width: 22px;
  margin-top: 3px;
}

.mini-submenu .icon-bar {
  background-color: #000;
}

#slide-submenu{
  background: rgba(0, 0, 0, 0.45);
  display: inline-block;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
}

*{
color:black !important;
}

</style>


    <link rel="stylesheet" href="resources/blog/colorpicker/ui.colorpicker.css"/>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<jsp:include page="../common/menubar.jsp"></jsp:include>
    <script language="JavaScript" src="resources/blog/colorpicker/jq.js"></script>
    <script language="JavaScript" src="resources/blog/colorpicker/jq.color.js"></script>
    <script language="JavaScript">

            $(document).ready(function() {
                var hideit = function(e, ui) { 
                    $(this).val('#'+ui.hex); $('.ui-colorpicker').css('display', 'none'); 
                    $(".back").css("background-color",'#'+ui.hex);
                };
                $('#bg #colorpicker').colorpicker({ hide: hideit, submit: hideit });
               
            });
            
   </script>    
    
    
    
  <link href="resources/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
    rel="stylesheet">
  <link href="resources/css/sb-admin-2.min.css" rel="stylesheet">
  <link href="resources/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
</head>
<body style="background-color:#e2e7e6;">

    <div class="container">

            <div class="row" style="margin-top:2%;">
                <div class="col-sm-4 col-md-3 sidebar">
            <div class="mini-submenu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </div>
            <div class="list-group">
                <span href="#" class="list-group-item active" style="background-color:#40c8b5;
                													border-color:#40c8b5;">
                   블로그 관리하기

                </span>
                <a href="badminDetail.do" class="list-group-item"  >
                    <i class="fa fa-search"></i> 기본정보 관리
                </a>
                <a href="badminPost.do" class="list-group-item" >
                    <i class="fa fa-search"></i> 게시글 관리
                </a>
                <a href="badminCate.do" class="list-group-item">
                    <i class="fa fa-user"></i> 카테고리 관리 
                </a>
                <a href="badminCss.do" class="list-group-item" style="background-color:#d4f3ef;
                											border-color:#d4f3ef;" >
                    <i class="fa fa-folder-open-o"></i> 블로그 꾸미기
                </a>
                <a href="badminSub.do" class="list-group-item">
                    <i class="fa fa-folder-open-o"></i> 구독 관리
                </a>
           </div>        
       </div>
       <div style="margin-left:2%;float:left;width:70%;">
   <div class="container-fluid">
      <!-- DataTales Example -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary" style="color:black !important;">블로그 꾸미기</h6>
        </div>

        <div class="card-body">
          <div class="table-responsive">
          
     <!-- ----------------------- -->     
          
    <div class="back" style="width:100%; height:500px; background-color:${bd.cssBack };  border-radius: 20px; ">
        <div style="width:60%;   height:500px; float:left;">
            <div style="width:100%; margin-left:3%; margin-top:10px;height:100px; background-color:#fbf9ff; border-radius: 20px;">
                블로그 제목
            </div>
            <br>
            <div style="width:100%; height:350px;  margin-left:3%; border-radius: 20px; background-color:#fbf9ff;">
                블로그 내용
            </div>
        </div>

        <div style="width:30%; height:500px; display:inline-block;">
            <div class="profile" style="width:80%; height:50px; margin-top:13px; margin-left:20%;border-radius: 20px; background-color:rgb(189, 189, 189);">프로필</div>
            <div class="search" style="width:80%; height:50px; margin-top:13px; margin-left:20%;border-radius: 20px; background-color:rgb(189, 189, 189);">검색</div>
            <div class="cate" style="width:80%; height:50px; margin-top:13px; margin-left:20%;border-radius: 20px; background-color:rgb(189, 189, 189);">카테고리</div>
            <div class="tag" style="width:80%; height:50px; margin-top:13px; margin-left:20%;border-radius: 20px; background-color:#fbf9ff;">태그</div>
            <div class="weather" style="width:80%; height:50px; margin-top:13px; margin-left:20%;border-radius: 20px; background-color:#fbf9ff;">날씨</div>
            <div class="time" style="width:80%; height:50px; margin-top:13px; margin-left:20%;border-radius: 20px; background-color:#fbf9ff;">시간</div>
            <div class="location" style="width:80%; height:50px; margin-top:13px; margin-left:20%;border-radius: 20px; background-color:#fbf9ff;">위치</div>
        </div>
    </div>
		<c:if test="${ empty bd.blogTag}" >
			<c:set var="tag1" value="checked"/>
		</c:if>
		
		<c:if test="${ empty bd.cssWeather}" >
			<c:set var="tag2" value="checked"/>
		</c:if>

		<c:if test="${ empty bd.cssTime}" >
			<c:set var="tag3" value="checked"/>
		</c:if>
		
		<c:if test="${ empty bd.cssLocation}" >
			<c:set var="tag4" value="checked"/>
		</c:if>
		

        <div id="bg">
            <label for="colorpicker">배경화면 색깔 바꾸기</label>
             <form action="badminCssChange.do"  method="post">
	            <input type="text" id="colorpicker" name="cssBack" value="${bd.cssBack }"/><br>
	            <input type="checkbox" id="checkTag" name="blogcss" value="blogTag" ${tag1 }> 태그&nbsp;&nbsp;
	            <input type="checkbox" id="checkWeather" name="blogcss" value="cssWeather" ${tag2 }> 날씨&nbsp;&nbsp; 
	            <input type="checkbox" id="checkTime" name="blogcss" value="cssTime" ${tag3 }> 시간&nbsp;&nbsp;
	            <input type="checkbox" id="checkLocation" name="blogcss" value="cssLocation" ${tag4 }> 위치&nbsp;&nbsp;
                <div style="text-align:right;"><button class="btn btn-success">수정하기</button></div>
			</form>
            <script>
                $(document).ready(function(){
                	var tag = '${bd.blogTag}' ;
                	if(tag != ""){
                		$(".tag").hide();
                	}
                	if('${bd.cssWeather}' !=""){
                		$(".weather").hide();
                	}
                	if('${bd.cssTime}' !=""){
                		$(".time").hide();
                	}
                	if('${bd.cssLocation}' !=""){
                		$(".location").hide();
                	}                	
                	
                	
                	
                	
                	
                	
                	
                    $("#checkSearch").change(function(){
                            if($("#checkSearch").is(":checked")){
                                $(".search").show();
                            }else{
                                $(".search").hide();
                            }
                    });

                    $("#checkTag").change(function(){
                        
                        if($("#checkTag").is(":checked")){
                            $(".tag").show();
                        }else{
                            $(".tag").hide();
                        }
                    });

                    $("#checkWeather").change(function(){
                        if($("#checkWeather").is(":checked")){
                            $(".weather").show();
                        }else{
                            $(".weather").hide();
                        }
                    });

                    $("#checkTime").change(function(){

                        if($("#checkTime").is(":checked")){
                            $(".time").show();
                        }else{
                            $(".time").hide();
                        }

                    });

                    $("#checkLocation").change(function(){
                        if($("#checkLocation").is(":checked")){
                            $(".location").show();
                        }else{
                            $(".location").hide();
                        }

                    })
                });
            </script>
        </div>

    </div>	
          
          
    <!-- -------------------------- -->
          </div>


        </div>
      </div>

    </div>
    <!-- /.container-fluid -->


  <!-- End of Main Content -->

  <!-- Footer -->

  <!-- End of Footer -->


  <!-- End of Content Wrapper -->

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
crossorigin="anonymous"></script>




</body>
</html>