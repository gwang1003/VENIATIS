<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!-- 부트스트랩,제이쿼리 -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous">
    
<!-- 테스트용코드 -->    
    <script>
    function share() {
      var url = encodeURI(encodeURIComponent(myform.url.value));
      var title = encodeURI(myform.title.value);
      var shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
      document.location = shareURL;
    }
  </script>



<!-- 스타일 -->
<style>
	.mobile-social-share {
	    background: none repeat scroll 0 0 #EEEEEE;
	    display: block !important;
	    min-height: 70px !important;
	    margin: 50px 0;
	}
	
	body {
	    color: #777777;
	    font-family: "Lato","Helvetica Neue","Arial","Helvetica",sans-serif;
	    font-size: 13px;
	    line-height: 19.5px;
	}
	
	
	.mobile-social-share h3 {
	    color: inherit;
	    float: left;
	    font-size: 15px;
	    line-height: 20px;
	    margin: 25px 25px 0 25px;
	}
	
	.share-group {
	    float: right;
	    margin: 18px 25px 0 0;
	}
	
	.btn-group {
	    display: inline-block;
	    font-size: 0;
	    position: relative;
	    vertical-align: middle;
	    white-space: nowrap;
	}
	
	.mobile-social-share ul {
	    float: right;
	    list-style: none outside none;
	    margin: 0;
	    min-width: 61px;
	    padding: 0;
	}
	
	.share {
	    min-width: 17px;
	}
	
	.mobile-social-share li {
	    display: block;
	    font-size: 18px;
	    list-style: none outside none;
	    margin-bottom: 3px;
	    margin-left: 4px;
	    margin-top: 3px;
	}
	
	.btn-share {
	    background-color: #BEBEBE;
	    border-color: #CCCCCC;
	    color: #333333;
	}
	
	.btn-twitter {
	    background-color: #3399CC !important;
	    width: 51px;
	    color:#FFFFFF!important;
	}
	
	.btn-facebook {
	    background-color: #3D5B96 !important;
	    width: 51px;
	    color:#FFFFFF!important;
	}
	
	.btn-facebook {
	    background-color: #3D5B96 !important;
	    width: 51px;
	    color:#FFFFFF!important;
	}
	
	.btn-google {
	    background-color: #DD3F34 !important;
	    width: 51px;
	    color:#FFFFFF!important;
	}
	
	.btn-linkedin {
	    background-color: #1884BB !important;
	    width: 51px;
	    color:#FFFFFF!important;
	}
	
	.btn-pinterest {
	    background-color: #CC1E2D !important;
	    width: 51px;
	    color:#FFFFFF!important;
	}
	
	.btn-mail {
	    background-color: #FFC90E !important;
	    width: 51px;
	    color:#FFFFFF!important;
	}
	
	.caret {
	    border-left: 4px solid rgba(0, 0, 0, 0);
	    border-right: 4px solid rgba(0, 0, 0, 0);
	    border-top: 4px solid;
	    display: inline-block;
	    height: 0;
	    margin-left: 2px;
	    vertical-align: middle;
	    width: 0;
	}
	
	#socialShare {
	    max-width:59px;
	    margin-bottom:18px;
	}
	
	#socialShare > a{
	    padding: 6px 10px 6px 10px;
	}
	
	@media (max-width : 320px) {
	    #socialHolder{
	        padding-left:5px;
	        padding-right:5px;
	    }
	    
	    .mobile-social-share h3 {
	        margin-left: 0;
	        margin-right: 0;
	    }
	    
	    #socialShare{
	        margin-left:5px;
	        margin-right:5px;
	    }
	    
	    .mobile-social-share h3 {
	        font-size: 15px;
	    }
	}
	
	@media (max-width : 238px) {
	    .mobile-social-share h3 {
	        font-size: 12px;
	    }
	}
</style>
</head>
<body>
<jsp:include page="menubar.jsp"></jsp:include>
테스트화면^_^
       

  <form id="myform">
    URL입력:  <input type="text" id="url" value="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&oquery=%EB%84%A4%EC%9D%B4%EB%B2%84+%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%84%BC%ED%84%B0&ie=utf8&query=%EB%84%A4%EC%9D%B4%EB%B2%84+%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%84%BC%ED%84%B0"><br/>
    Title입력:  <input type="text" id="title" value="네이버개발자센터 검색결과"><br/>
  </form>
  <input type="button" value="네이버공유하기" onclick="share()"/>



<br>
<br>
<br>
<div class="container">
	<div class="row mobile-social-share">
    		<div class="col-md-9">
                <h3>Share this content</h3>
            </div>
            <div id="socialHolder" class="col-md-3">
        		<div id="socialShare" class="btn-group share-group">
                    <a data-toggle="dropdown" class="btn btn-info">
                         <i class="fa fa-share-alt fa-inverse"></i>
                    </a>
    				<button href="#" data-toggle="dropdown" class="btn btn-info dropdown-toggle share">
    					<span class="caret"></span>
    				</button>
    				<ul class="dropdown-menu">
        				<li>
    					    <a data-original-title="Twitter" rel="tooltip"  href="#" class="btn btn-twitter" data-placement="left">
								<i class="fa fa-twitter"></i>
							</a>
    					</li>
    					<li>
    						<a data-original-title="Facebook" rel="tooltip"  href="#" class="btn btn-facebook" data-placement="left">
								<i class="fa fa-facebook"></i>
							</a>
    					</li>					
    					<li>
    						<a data-original-title="Google+" rel="tooltip"  href="#" class="btn btn-google" data-placement="left">
								<i class="fa fa-google-plus"></i>
							</a>
    					</li>
    				    <li>
    						<a data-original-title="LinkedIn" rel="tooltip"  href="#" class="btn btn-linkedin" data-placement="left">
								<i class="fa fa-linkedin"></i>
							</a>
    					</li>
    					<li>
    						<a data-original-title="Pinterest" rel="tooltip"  class="btn btn-pinterest" data-placement="left">
								<i class="fa fa-pinterest"></i>
							</a>
    					</li>
                        <li>
    						<a  data-original-title="Email" rel="tooltip" class="btn btn-mail" data-placement="left">
								<i class="fa fa-envelope"></i>
							</a>
    					</li>
                    </ul>
    			</div>
            </div>
        </div>
	</div>
</div>











    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
</body>
</html>