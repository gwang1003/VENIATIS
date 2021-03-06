<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="resources/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
    rel="stylesheet">
  <link href="resources/css/sb-admin-2.min.css" rel="stylesheet">
  <link href="resources/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
  
  <style>
  .chart-area {
        width:80%;        
        height: 250px;
        float: left;
        box-sizing: border-box;
        border:1px solid black;
     }
  </style>
</head>
<body id="page-top">
  <div id="wrapper">
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          <hr class="sidebar-divider my-0">
          <li class="nav-item">
            <a class="nav-link" href="managerMain.do">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>관리자홈</span></a>
          </li> 
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>회원관리</span>
              </a>
              <div id="collapsePages" class="collapse " aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="selectMemberList.do" id="marketad">회원정보</a>
                  <a class="collapse-item" href="selectCreatorList.do" id="marketad">크리에이터</a>
                </div>
 
              </div>
          </li>
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages2" aria-expanded="false" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>프로젝트관리</span>
              </a>
              <div id="collapsePages2" class="collapse " aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="joinProject.do" id="marketad">프로젝트 신청/관리</a>
                  <a class="collapse-item" href="selectProjectList.do" id="marketad">개설 프로젝트</a>
                </div>
 
              </div>
           </li>
           <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages3" aria-expanded="false" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>공모전 관리</span>
              </a>
              <div id="collapsePages3" class="collapse " aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="selectCompetitionList.do" id="marketad">공모전 내역 관리</a>
                  <a class="collapse-item" href="joinCompetitionForm.do" id="marketad">공모전 등록</a>
                </div>
 
              </div>
           </li>
           <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages4" aria-expanded="false" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>문의내역 관리</span>
              </a>
              <div id="collapsePages4" class="collapse " aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="QnAList.do" id="marketad">회원 문의내역</a>
                </div>
 
              </div>
           </li>
           <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages5" aria-expanded="false" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>통계</span>
              </a>
              <div id="collapsePages5" class="collapse " aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="projectTotal.do" id="marketad">프로젝트 통계</a>
                  <a class="collapse-item" href="revenue.do" id="marketad">수익 통계</a>
                </div>
 
              </div>
           </li>
    </ul>

      <div id="content" style="width:90%;">
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
             <a href="home.do"><img src="resources/common/logo2.png" width="35%" height="35%"></a>
          </form>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li class="nav-item dropdown no-arrow mx-1">
              
            </li>
            <li class="nav-item dropdown no-arrow mx-1">
              
            </li>
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">${loginUser.mId }</span>
                <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="logout.do">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
  </div>
  
</div>



  <!-- Bootstrap core JavaScript-->
  <script src="resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


  <!-- Custom scripts for all pages-->
  <script src="resources/js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->
  <!-- <script src="resources/vendor/datatables/jquery.dataTables.min.js"></script> -->
  <script src="resources/vendor/datatables/dataTables.bootstrap4.min.js"></script>
  <script src="resources/vendor/chart.js/Chart.min.js"></script>

  <!-- Page level custom scripts -->
  <script src="resources/js/demo/datatables-demo.js"></script>
  <script src="resources/js/demo/chart-area-demo.js"></script>
</body>
</html>