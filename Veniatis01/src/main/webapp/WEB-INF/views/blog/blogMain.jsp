<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
 <meta charset="utf-8">
	<title>Home</title>
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Jua&display=swap" rel="stylesheet">
		 <link rel="stylesheet" href="resources/css/blog2.css">
	<style>
	#btn2{
	 background-color: #40c8b5;
	}
	*{
	font-family: 'Noto Sans KR', sans-serif;
	font-size:11pt;
	}
	
	.card-img{
		opacity:0.4;
	}
	</style>


    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</head>
<body>
<jsp:include page="menubar.jsp"></jsp:include>


<div class="container">
    <section class="blog_area">
		
            <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-10" style='padding-top:10px;'">
            		<h1 style="font-family: 'Jua', sans-serif;">				
            		${ user.mName } 님의 블로 그 입니다.</h1>
            </div>
                <div class="col-lg-8 mb-5 mb-lg-0">
                    <div class="blog_left_sidebar">
                    <!-- 목록 가져오긔 -->
                   
                    <c:forEach var="p" items="${post}"> 
                
                       <article class="blog_item">
                            <div class="blog_item_img">
                                <img class="card-img rounded-0" src="<%= request.getContextPath() %>/resources/buploadFiles/${p.changeName}" style="height:400px; opacity:0.8;">
                                <a href="#" class="blog_item_date">
                                    <h3>15</h3>
                                    <p>Jan</p>
                                </a>
                            </div>
                <c:url var="detail" value="blogDetail.do">
                	<c:param name="userId" value="${p.mId }"/>
					<c:param name="uniNo" value="${p.uniNo }"/>
				</c:url>
                            <div class="blog_details">
                                <a class="d-inline-block" href="${ detail }">
                                    <h2>${p.bTitle}</h2>
                                </a>
                                
                                <ul class="blog-info-link">
                                    <li><a href="#"><i class="fa fa-user"></i>${p.cateName}</a></li>
                                    <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                </ul>
                            </div>
                            
                        </article>
                      </c:forEach>
                        
        
                        <nav class="blog-pagination justify-content-center d-flex">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a href="#" class="page-link" aria-label="Previous">
                                        <i class="ti-angle-left"></i>
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">1</a>
                                </li>
                                <li class="page-item active">
                                    <a href="#" class="page-link">2</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link" aria-label="Next">
                                        <i class="ti-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog_right_sidebar">
                        <aside class="single_sidebar_widget search_widget">
                            <form action="#">
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder='Search Keyword' onfocus="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = ''"
                                            onblur="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = 'Search Keyword'"
                                            data-cf-modified-882eb23b708c715aa9a4c46d-="">
                                        <div class="input-group-append">
                                            <button class="btn" type="button"><i class="ti-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
                            </form>
                        </aside>
                        
                        <c:if test="${loginUser.mId eq user.mId }">

                        
                        
                        				<c:url var="write" value="write2.do"/>
                        				<c:url var="admin" value="badmin.do"/>
                        <button onclick="location.href='${ admin }'" class="button rounded-0 primary-bg text-white w-50 btn_1 boxed-btn" type="submit" style="float:left; background-color:green;"">관리하기</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button onclick="location.href='${ write }'" class="button rounded-0 primary-bg text-white w-40 btn_1 boxed-btn" type="submit">글 작성</button>
                                                <br><br>
                        </c:if>

                        <aside class="single_sidebar_widget post_category_widget">
                            <h4 class="widget_title">Category</h4>
                            <ul class="list cat-list">
                                <c:forEach var="c" items="${cate}">
	                                <li>
	                                    <a href="#">${c.bCateName}</a>
	                                </li>
                            	</c:forEach>
                            </ul>
                        </aside>
                    
                        <aside class="single_sidebar_widget tag_cloud_widget">
                            <h4 class="widget_title">Tag Clouds</h4>
                            <ul class="list">


                                <li>
                                    <a href="#">love</a>
                                </li>
                                <li>
                                    <a href="#">technology</a>
                                </li>
                                <li>
                                    <a href="#">travel</a>
                                </li>
                                <li>
                                    <a href="#">restaurant</a>
                                </li>
                                <li>
                                    <a href="#">life style</a>
                                </li>
                                <li>
                                    <a href="#">design</a>
                                </li>
                                <li>
                                    <a href="#">illustration</a>
                                </li>
                            </ul>
                        </aside>
             
                      
                    </div>
                </div>
            </div>
        </div>
    </section>


 
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
</div>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <script src="blog.js" type="882eb23b708c715aa9a4c46d-text/javascript"></script>

</body>
</html>
