<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
	<style>
		#btn2{
		 background-color: #40c8b5;
		}
		*{
		font-family: 'Noto Sans KR', sans-serif;
		font-size:11pt;
		}
		
		.header_common{
			background-color:#84ddd1 !important;
			border-bottom:1px solid #84ddd1 !important;
			
		}
		
		.search{
			border: 0px solid #440c8b5 !important;
		
		}
		
		.tag {
	    width: 10%;
	    height: 45px;
	    cursor: pointer;
	    margin: 0 auto;
	    border: .5px solid rgb(232, 238, 241);
	    border-radius: 28px;
	    font: normal 14px/28px "Advent Pro", Helvetica, sans-serif;
	    color: rgb(119, 126, 128);
	    text-align: center;
	    -o-text-overflow: clip;
	    text-overflow: clip;
	    letter-spacing: 1px;
	    background: rgba(0,0,0,0);
		}
		
		.wrap_my_information .area_my_content .my_content_news, .wrap_my_information .area_my_content .my_content_written, .wrap_my_information .area_my_content .my_content_buddy {
			height:310px !important;
		
		}
	
	</style>
	 <link rel="stylesheet" href="resources/css/네이버2.css">

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

	<script>

	</script>

<title>Insert title here</title>
</head>
<body>
<jsp:include page="../common/menubar.jsp"></jsp:include>
    <header id="header" class="header">
        <div class="header_common">
            <div class="inner">
                <div class="area_logo">
                    <h1>
                        <a class="link_blog"><img src="<%= request.getContextPath() %>/resources/buploadFiles/blogBanner.png" width="80px" height="40px" style="margin-bottom:7px"></a>
                    </h1>
                </div>
                <div class="area_search" role="search">
                    <form action="blogAllSearch.do" method="" class="ng-pristine ng-valid ng-valid-maxlength">
                        <fieldset>
                            <legend class="blind">검색창 </legend>
                            <div class="search" style="border:0px;">
                                <input type="text" class="textbox ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength"
                                    maxlength="255" autocomplete="off" value="" placeholder="검색어를 입력하세요!" name="searchValue">
                            </div>
                            <button class="button button_blog"
                                aria-label="블로그 검색" role="button"><img src="<%= request.getContextPath() %>/resources/buploadFiles/search.png" width="20px" height="20px" style="margin-bottom:7px" ></button>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>

    </header>
    
    <main id="container" class="container">
        <div class="layout_content">
            <div id="content" class="content">
                <section class="wrap_search_list">
                    <div class="category_search">
                        <div class="search_information">
                            <span class="search_result">
                                <span class="search_result"><strong class="search_keyword">${sv }</strong>에 대한 검색결과 입니다.
                                    <em class="search_number"></em></span>
                            </span>
                           
                    </div>
                    

                    <bg-search-result-info search-display-info="postSearchCtrl.searchDisplayInfo" empty-result="postSearchCtrl.emptyResult"
                        result-loaded="postSearchCtrl.loaded" is-adult-user="postSearchCtrl.isAdultUser">
                    </bg-search-result-info>
                    <div class="area_list_search" >
	                        <c:if test="${empty bp }">
		                        <br><br>
		                     	검색 결과가 없습니다!
		                     	<br><br>
	                   		</c:if>
                    	<c:forEach var="b" items="${bp}"> 
                        <div class="list_search_post">
                            <div class="item multi_pic">
                                <div class="info_post">
                                    <div class="desc">
                                        <a class="desc_inner" href="#">
                                            <strong class="title_post">
                                                <span class="title" ng-bind-html="post.title">${b.bTitle }</span>
                                                <span class="date">2020. 1. 11.</span>
                                            </strong>
                                        </a><a ng-href="#"
                                            class="text" href="#">${b.bTContent }</a><!-- end ngIf: post.contents -->

                                    </div>
                                    <a class="author" href="#">

                                        <em class="name_author">${b.mName }</em>
                                    </a>
                                </div>
                                <div class="thumbnail_post">
                                    <div class="thumbnail_area">
                                      <a class="thumbnail_inner" href="#">
                                            <img width="167" height="167" class="img_post" src="<%= request.getContextPath() %>/resources/buploadFiles/${b.changeName}">
                                        </a>

                                        <div class="plus_thumbnail_list" style="left: 0px; display: none;">
                                            <a class="list_inner" href="#">
                                                <div class="plus_item">
                                                    <img class="plus_img" src="#">
                                                </div>
                                                <div class="plus_item">
                                                    <img width="167" height="167" class="plus_img" src="#">
                                                </div>
                                                <div class="plus_item">
                                                    <img idth="167" height="167" class="plus_img" src="#">
                                                </div>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </c:forEach>
                        </div>
                    </div>

                </section>
            </div>
            
        </div>
    </main>


    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    

</body>
</html>