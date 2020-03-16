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
</style>
  <link href="resources/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
    rel="stylesheet">
  <link href="resources/css/sb-admin-2.min.css" rel="stylesheet">
  <link href="resources/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">

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
                <a href="badminDetail.do" class="list-group-item"   >
                    <i class="fa fa-search"></i> 기본정보 관리
                </a>
                <a href="badminPost.do" class="list-group-item" >
                    <i class="fa fa-search"></i> 게시글 관리
                </a>
                <a href="badminCate.do" class="list-group-item" style="background-color:#d4f3ef;
                											border-color:#d4f3ef;">
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
          <h6 class="m-0 font-weight-bold text-primary">카테고리 관리</h6>
        </div>

        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  
                  <th>카테고리 이름</th>
                  <th style="width:20%;"></th>
                </tr>
              </thead>
              <tbody>

  <%int num=1;%>    
              <c:forEach var="c" items="${cate}" > 
                <tr>
                  
                  <td>&nbsp;&nbsp;&nbsp;${c.bCateName } 
                  </td>
                  <td>
                  <button type="button" class="btn btn-success" data-toggle="modal" data-target="#xx<%=num%>">수정</button>
                 					  <button type="button" class="btn btn-danger" onclick="cateDelete(${c.cateNo});">제거</button>
                  </td>
                </tr>
                
                
                <!-- 카테고리 변경 모달 -->
<div class="modal fade seminor-login-modal" id="xx<%=num%>">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <!-- Modal body -->
            <div class="modal-body seminor-login-modal-body">
                <button type="button" class="close" data-dismiss="modal">
                    <span><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                </button>
                <div class="form-area">
                    <br style="clear:both">
                    <h3 style="margin-bottom: 25px; text-align: center;">카테고리 변경하기</h3>
                    <div class="form-group">
						<form action="badminCateUpdate.do" method="post">
							현재 카테고리 이름 :  ${c.bCateName }<br>
							변경할 카테고리 이름 : <input type="text" name="updateCate">
							<input type="hidden" name="cateNo" value="${c.cateNo }">
							
							<button>추가</button>
						</form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- 모달끝ㅋㅋ -->           <%num=num+1;%>      
              </c:forEach>
              </tbody>
              
              <tfoot>
                <tr>
                  
                  <th>카테고리 이름</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
          
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#zz">카테고리 추가하기</button>
<!-- 카테고리 추가 모달 -->
<div class="modal fade seminor-login-modal" id="zz">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <!-- Modal body -->
            <div class="modal-body seminor-login-modal-body">
                <button type="button" class="close" data-dismiss="modal">
                    <span><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                </button>
                <div class="form-area">
                    <br style="clear:both">
                    <h3 style="margin-bottom: 25px; text-align: center;">카테고리 추가하기</h3>
                    <div class="form-group">
						<form action="badminCatePlus.do" method="post">
							추가할 카테고리 이름 : <input type="text" name="plusCate">
							<button>추가</button>
						</form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- 모달끝ㅋㅋ --> 





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
	
	function cateDelete(cateNo){
		
		 var result = confirm("정말 카테고리를 제거하시겠습니까? 카테고리를 제거하시면 카테고리 안의 게시물들도 함께 삭제됩니다");
		if(result){
			location.href="badminCateDelete.do?cateNo="+cateNo;
		}
	}
	
	</script>


</body>
</html>