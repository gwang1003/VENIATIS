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
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<style type="text/css">
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
font-family: 'Noto Sans KR', sans-serif;
}
</style>
  <link href="resources/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
    rel="stylesheet">
  <link href="resources/css/sb-admin-2.min.css" rel="stylesheet">
  <link href="resources/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
  
</head>
<body style="background-color:#e2e7e6;">
<jsp:include page="../common/menubar.jsp"></jsp:include>
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
                <a href="badminDetail.do" class="list-group-item"  style="background-color:#d4f3ef;
                											border-color:#d4f3ef;" >
                    <i class="fa fa-search"></i> 기본정보 관리
                </a>
                <a href="badminPost.do" class="list-group-item" >
                    <i class="fa fa-search"></i> 게시글 관리
                </a>
                <a href="badminCate.do" class="list-group-item">
                    <i class="fa fa-user"></i> 카테고리 관리 
                </a>
                <a href="badminCss.do" class="list-group-item">
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
          <h6 class="m-0 font-weight-bold text-primary">블로그 기본정보 관리</h6>
        </div>
        
        <div class="card-body">
          <div class="table-responsive">
          <form action="blogDetailUpdate.do" method="post">
          <b>블로그 이름</b>  <input type="text" class="form-control bg-light border-0 small" 
          						value="${bd.blogTitle}" 
          						style="width:100%; height:90%;"
          						name="blogTitle" id="blogTitle">
          						<p style="text-align:right"><span id="counter">0</span>/50</p>
          <b>블로그 소개</b>  <br>
          <textarea class="form-control" rows="3" style="background-color: #f8f9fa; border-color:white;"
          name="blogInto" id="blogInto">${bd.blogInto}</textarea>
          <p style="text-align:right"><span id="counter2">0</span>/100</p>    
          <br><br>						
				<div style="text-align:right;"><button  class="btn btn-success">수정하기</button></div>
          
          </form>

          
          
          </div>

        </div>
      </div>

    </div>
    <!-- /.container-fluid -->

  </div>
  <!-- End of Main Content -->

  <!-- Footer -->

  <!-- End of Footer -->

  </div>
  <!-- End of Content Wrapper -->

  </div>
       </div>
         </div>
     </div>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
crossorigin="anonymous"></script>
  <!-- Bootstrap core JavaScript-->
  <script src="resources/vendor/jquery/jquery.min.js"></script>
  <script src="resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="resources/vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="resources/js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->
  <script src="resources/vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="resources/vendor/datatables/dataTables.bootstrap4.min.js"></script>
  <script src="resources/vendor/chart.js/Chart.min.js"></script>

  <!-- Page level custom scripts -->
  <script src="resources/js/demo/datatables-demo.js"></script>
  <script src="resources/js/demo/chart-area-demo.js"></script>

  		  <script>
          $(document).ready(function(){
        	  var inputLength=$("#blogTitle").val().length;
        	  $("#counter").html(inputLength);
        	  
        	  var inputLength2=$("#blogInto").val().length;
        	  $("#counter2").html(inputLength2);
        	  
          		$("#blogTitle").keyup(function(){
          			var inputLength=$(this).val().length;
          			$("#counter").html(inputLength);
          			
          			var remain=50-inputLength;

                    if(remain >= 0){
                        $("#counter").css("color", "black");
                    }else{
                        $("#counter").css("color", "red");
                    }
          			
          		});

          		$("#blogInto").keyup(function(){
          			var inputLength2=$(this).val().length;
          			$("#counter2").html(inputLength2);
          			
          			var remain2=100-inputLength2;

                    if(remain2 >= 0){
                        $("#counter2").css("color", "black");
                    }else{
                        $("#counter2").css("color", "red");
                    }
          			
          		});
          		
          	});
          
          </script>


</body>
</html>