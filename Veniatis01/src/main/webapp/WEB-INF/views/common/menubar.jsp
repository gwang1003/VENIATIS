<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Travelo</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
.none {
         width:100%; height:100%; background:rgba(0, 0, 0, 0.637); top:0; position:fixed; z-index:20000; display:none;
      }
      
      .myPageMenu {
         right:0; width:15%; height:100%; position:absolute;
      }
      
      .myName {
         background:black; width:100%; height:20%;
      }
      
      .closeNone {
         margin-top:5%; margin-left:85%; background:none; border:none; color:white;
      }
      
      .myName img{
         width:100px; height:100px; border-radius:50%;
      }
      
      .myName h3 {
         color:white; margin-top:3%; margin-left:auto; margin-right:auto;
      }
      
      .myPageGo {
         background:white; width:100%; height:80%;  background:white;
      }
      
      .myPageGo div {
         width:100%; height:8%; font-size:30px; text-align:center; 
      }
      
      .go1 {
         width:100%; height:8%; font-size:30px; text-align:center; background:ghostwhite
      }
	</style>

    <link rel="stylesheet" href="resources/main/css/bootstrap.min.css">
    <link rel="stylesheet" href="resources/main/css/owl.carousel.min.css">
    <link rel="stylesheet" href="resources/main/css/magnific-popup.css">
    <link rel="stylesheet" href="resources/main/css/font-awesome.min.css">
    <link rel="stylesheet" href="resources/main/css/themify-icons.css">
    <link rel="stylesheet" href="resources/main/css/nice-select.css">
    <link rel="stylesheet" href="resources/main/css/flaticon.css">
    <link rel="stylesheet" href="resources/main/css/gijgo.css">
    <link rel="stylesheet" href="resources/main/css/animate.css">
    <link rel="stylesheet" href="resources/main/css/slick.css">
    <link rel="stylesheet" href="resources/main/css/slicknav.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css">

    <link rel="stylesheet" href="resources/main/css/style2.css">

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5e3c0216298c395d1ce685b1/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script> 
</head>

<body>

    <header>
        <div class="header-area ">
            <div id="sticky-header" class="main-header-area">
                <div class="container-fluid">
                    <div class="header_bottom_border">
                        <div class="row align-items-center">
                            <div class="col-xl-2 col-lg-2">
                                <div class="logo">
                                    <a href="index.html">
                                        <img src="resources/common/logo2.png" width="60%" height="60%" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">


                                            <li><a href="#">후원하기! <i class="ti-angle-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="projectList.do">개인</a></li>
                                                    <li><a href="single-blog.html">기업</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="projectSelect.do">프로젝트 시작하기</a></li>
                                            <li><a href="competView.do">공모전</a></li>
                                            <li><a href="blogHome.do">Blog</a></li>
                                            <li><a href="guideMain.do">가이드</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 d-none d-lg-block">
                                <div class="social_wrap d-flex align-items-center justify-content-end">

                                    <div class="social_links d-none d-xl-block">
                                        <ul>
                                             <c:if test="${empty sessionScope.loginUser}">
                                        
                                            <li><a href="loginView.do"> 로그인 </a></li>
                                            <li><a href="memberInsertInfo.do"> 회원가입 </a></li>
                                        </c:if>
                                        <c:if test="${ !empty sessionScope.loginUser}">                                        
                                           <c:if test="${sessionScope.loginUser.getmName() eq '관리자'}">
                                               <li><a href="managerMain.do" style="font-size:20px; font-weight:bolder;"> 관리자페이지 </a></li>
                                            </c:if>
                                            <c:if test="${sessionScope.loginUser.getmName() ne '관리자'}">
                                               <li class="myPage">마이페이지</li>
                                            </c:if>
                                        </c:if>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="seach_icon">
                                <a data-toggle="modal" data-target="#exampleModalCenter" href="#">
                                    
                                </a>
                            </div>
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <div class="modal fade custom_search_pop" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="serch_form">
                    <input type="text" placeholder="Search">
                    <button type="submit">search</button>
                </div>
            </div>
        </div>
    </div>
    

        <script src="resources/main/js/vendor/modernizr-3.5.0.min.js"></script>
    <script src="resources/main/js/vendor/jquery-1.12.4.min.js"></script>
    <script src="resources/main/js/popper.min.js"></script>
    <script src="resources/main/js/bootstrap.min.js"></script>
    <script src="resources/main/js/owl.carousel.min.js"></script>
    <script src="resources/main/js/isotope.pkgd.min.js"></script>
    <script src="resources/main/js/ajax-form.js"></script>
    <script src="resources/main/js/waypoints.min.js"></script>
    <script src="resources/main/js/jquery.counterup.min.js"></script>
    <script src="resources/main/js/imagesloaded.pkgd.min.js"></script>
    <script src="resources/main/js/scrollIt.js"></script>
    <script src="resources/main/js/jquery.scrollUp.min.js"></script>
    <script src="resources/main/js/wow.min.js"></script>
    <script src="resources/main/js/nice-select.min.js"></script>
    <script src="resources/main/js/jquery.slicknav.min.js"></script>
    <script src="resources/main/js/jquery.magnific-popup.min.js"></script>
    <script src="resources/main/js/plugins.js"></script>
    <script src="resources/main/js/gijgo.min.js"></script>
    <script src="resources/main/js/slick.min.js"></script>
   

    
    <!--contact js-->
    <script src="resources/main/js/contact.js"></script>
    <script src="resources/main/js/jquery.ajaxchimp.min.js"></script>
    <script src="resources/main/js/jquery.form.js"></script>
    <script src="resources/main/js/jquery.validate.min.js"></script>
    <script src="resources/main/js/mail-script.js"></script>
    <script src="resources/main/js/main.js"></script>

     <div class="none">
       <div class="myPageMenu">
          <div class="myName" align="center">
             <button class="closeNone">X</button>
             <img src="${loginUser.filePath }">
             <h3>${loginUsser.mName }</h3>
          </div> 
          <div class="myPageGo">
             <div class="go1 myInfo">내 정보</div>
             <div class="myOpenProject">개설 프로젝트</div>
             <div class="go1 attendProject">관심 프로젝트</div>
             <div class="myInterestProject">참여 프로젝트</div>
             <div class="go1">내 블로그</div>
             <div class="question">문의하기</div>
             <div class="go1 logoutBtn">로그아웃</div>
          </div>
       </div>
    </div>
    <script>
     $(function(){
        $(".myPage").click(function(){
           $(".none").css({"display":"block"})
        }).mouseover(function(){
           $(this).css({"cursor":"pointer"})
        })
        
        $(".closeNone").click(function(){
           $(".none").css({"display":"none"})
        }).mouseover(function(){
           $(this).css({"cursor":"pointer"})
        })
        
        $(".myPageGo div").mouseover(function(){
           $(this).css({"cursor":"pointer"})
        })
        
        $(".myInfo").click(function(){
           location.href="memberUpdateForm.do";
        })
        
         $(".myOpenProject").click(function(){
           location.href="myOpenProject.do";
        })
        
         $(".attendProject").click(function(){
           location.href="attendProject.do";
        })
        
         $(".myInterestProject").click(function(){
           location.href="myInterestProject.do";
        })
        
         $(".myBlog").click(function(){
           location.href="";
        })
        
         $(".question").click(function(){
           location.href="questionForm.do";
        })
        
         $(".logoutBtn").click(function(){
           location.href="logout.do";
        })
     })
    </script>
</body>


</html>