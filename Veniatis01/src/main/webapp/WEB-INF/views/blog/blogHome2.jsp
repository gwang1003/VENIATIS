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

<title>Insert title here</title>
</head>
<body>
<jsp:include page="../common/menubar.jsp"></jsp:include>
    <header id="header" class="header">
        <div class="header_common">
            <div class="inner">
                <div class="area_logo">
                    <h1>
                        <a class="link_blog">
                        	<img src="<%= request.getContextPath() %>/resources/buploadFiles/blogBanner.png" width="80px" height="40px" style="margin-bottom:7px">
                        </a>
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

    <main id="container" class="">
        <h2 class="blind">블로그 홈</h2>
        <section class="hot_topic">
            <div class="inner">
                <div class="area_topic">
                    <div class="heading">
                        <h3 class="title"><a href="#" class="link">오늘의 인기 게시글들을 만나보세요~!</a></h3>
                    </div>
                    <div class="list_group">
                        <div class="list_hottopic">
                            <div class="item_wrap">
							 <div class="item">
                                    <a ng-href="" class="item_inner" href="<%= request.getContextPath() %>/blogDetail.do?userId=${popPost[0].mId}&uniNo=${popPost[0].uniNo}">
                                        <img bg-image="<%= request.getContextPath() %>/resources/buploadFiles/${popPost[0].changeName}"
                                        width="252" height="240" src="<%= request.getContextPath() %>/resources/buploadFiles/${popPost[0].changeName}">
                                        <div class="desc_post">
                                            <div class="title">
                                                <span class="title_inner">
                                                    <strong class="title_post">${popPost[0].bTitle}</strong>
                                                </span>
                                            </div>
                                            <p class="text_post">${popPost[0].bTContent}</p>
                                        </div>
                                    </a>
                                    <a ng-href="#" class="link_author" href="#">
                                        <div class="thumbnail_author">
                                       
                                        </div>
                                        <span class="nickname">${popPost[0].mName}(${popPost[0].mId})</span>
                                    </a>
                                </div>
                                <div class="item">
                                    <a ng-href="#" class="item_inner" href="<%= request.getContextPath() %>/blogDetail.do?userId=${popPost[1].mId}&uniNo=${popPost[1].uniNo}">
                                       <img bg-image="<%= request.getContextPath() %>/resources/buploadFiles/${popPost[1].changeName}"
                                        width="252" height="240" src="<%= request.getContextPath() %>/resources/buploadFiles/${popPost[1].changeName}">
                                        <div class="desc_post">
                                            <div class="title">
                                                <span class="title_inner">
                                                     <strong class="title_post">${popPost[1].bTitle}</strong>
                                                </span>
                                            </div>
 <p class="text_post">${popPost[1].bTContent}</p>
                                        </div>
                                    </a>
                                    <a ng-href="#" class="link_author" href="#">
                                        <div class="thumbnail_author">
                                       
                                        </div>
                                        <span class="nickname">${popPost[1].mName}(${popPost[1].mId})</span>
                                    </a>
                                </div>
                                <div class="item">
                                    <a ng-href="#" class="item_inner" href="<%= request.getContextPath() %>/blogDetail.do?userId=${popPost[2].mId}&uniNo=${popPost[2].uniNo}">
                                        <img bg-image="<%= request.getContextPath() %>/resources/buploadFiles/${popPost[2].changeName}"
                                        width="252" height="240" src="<%= request.getContextPath() %>/resources/buploadFiles/${popPost[2].changeName}">
                                        <div class="desc_post">
                                            <div class="title">
                                                <span class="title_inner">
                                                   <strong class="title_post">${popPost[2].bTitle}</strong>
                                                </span>
                                            </div>
											 <p class="text_post">${popPost[2].bTContent}</p>
                                        </div>
                                    </a>
                                    <a ng-href="#" class="link_author" href="#">
                                        <div class="thumbnail_author">
                                        
                                        </div>
                                           <span class="nickname">${popPost[2].mName}(${popPost[2].mId})</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="area_promotion">
                    <div class="list_group">
                        <div class="list_promotion">
                            <div class="item ng-hide"><a href="#"> <img width="280" height="240" src="<%= request.getContextPath() %>/resources/buploadFiles/ad.jpg"></a></div><!-- end ngRepeat: mainBanner in mainBannerList -->
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </section>
        <div class="layout_content">
            <div id="content" class="content">
                <section class="wrap_thumbnail_post_list" data-post-type="buddy">
                    <div class="heading">
                        <div class="title _buddy_dropdown_container">
                            <h3 class="title_heading">구독 블로거 최근글</h3> 
                        </div>
                <c:if test="${empty sp  }">
                	최근 글이 없습니다!
                </c:if>       
				<c:forEach var="sp" items="${sp}">                
                        <div class="list_post_article list_post_article_comments">
                            <div class="item">
                                <div class="item_inner">
                                    <div class="info_post only_post">
                                        <a class="author">

                                            <div class="info_author">
                                                <em class="name_author">${sp.mName } (${sp.mId }) &nbsp;&nbsp;<span class="time">${sp.bEnrollDate }</span></em>
                                                
                                            </div>
                                        </a>
                                        
                                        <div class="desc">
                                            <a ng-href="#" class="desc_inner" href="blogDetail.do?userId=${sp.mId}&uniNo=${sp.uniNo}">
                                                <strong class="title_post" ng-bind="post.title">${sp.bTitle }</strong>
                                            </a>
                                            <a class="text" href="blogDetail.do?userId=${sp.mId}&uniNo=${sp.uniNo}">${sp.bTContent }</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                </c:forEach>    
                                <!-테마별 최근 글 끝-->

                </section>
            </div>

            <aside class="aside">
                <div class="wrap_my_information">
                    <div >
                        <div class="area_my_account" >
                            <a  class="name" alt="내 블로그" href="#"><span class="thumbnail"><img bg-image="" width="46" height="46" alt="프로필" class="no_image" src="${loginUser.filePath }"></span><span>${loginUser.mName } 님</span></a>
                            (${loginUser.mId}) <a href="testDisplay.do">테스트</a>
                            </div>
                        <nav class="menu_my_blog">
                        
                <c:url var="blogMaina" value="blogMain2.do">
					<c:param name="userId" value="${loginUser.mId }"/>
				</c:url>
                            <a class="item" alt="내 블로그" href="${ blogMaina }">내 블로그</a>
                            <a class="item" alt="관리하기" href="badmin.do">관리하기</a>
                        </nav>
                    </div>
                    <div class="login">
                        <div class="menu_my_article" role="tablist">
                            <a href="#" class="item">내 소식 <b>${pi.currentPage } / ${pi.maxPage }</b></a>
                            
                        </div>
                        <div class="area_my_content">
                            <div class="my_content_news"  id="my_content_news">
			<div class="list_news">
			<!-- 좋아요 알림 -->
				<c:forEach var="a" items="${alert}"> 
					<c:if test="${a.lNo eq 0 }">
	                <div class="item">
	                
	                <i class="sp_common icon_comment" ></i>
	                    	<a href="blogDetail.do?userId=${loginUser.mId}&uniNo=${a.uniNo}">
	                    	<strong class="title_my_post">${a.mName }</strong> 님께서
	                        <strong class="title_my_post">${a.bTitle }</strong><span><span>&nbsp;글에 댓글을 남기셨습니다.</span></span>
	                    </a>
	                    <span class="text_datetime">${a.inDate }</span>
	                    <a href="javascript:deleteAlert(${a.baNo});" class="button_delete">
	                        <i class="sp_common icon_delete"></i>
	                    </a>
	                </div>
	               </c:if>
			<!-- 댓글 알림 -->
				<c:if test="${a.rNo eq 0 }">
	                <div class="item">
	                    <i class="sp_common icon_likes"></i>
	                    	<a href="blogDetail.do?userId=${loginUser.mId}&uniNo=${a.uniNo}">
	                    	<strong class="title_my_post">${a.mName }</strong> 님이
	                        <strong class="title_my_post">${a.bTitle }</strong><span><span>&nbsp;글을 좋아합니다.</span></span>
	                    </a>
	                    <span class="text_datetime">${a.inDate }</span>
	                    <a href="javascript:deleteAlert(${a.baNo});" class="button_delete">
	                        <i class="sp_common icon_delete"></i>
	                    </a>              
	                </div>
	            </c:if>
	            </c:forEach>
	       <!-- 암것도 없을 때 -->
	       		<c:if test="${empty alert  }">
	       			알림이 없습니다!
	       		</c:if>
			 </div>
		 </div>
                        </div>
                        <div class="area_pagination">
                      
                            <div class="pagination" role="navigation" data-page="my_pagination">
                            
                          
                            <c:if test="${pi.currentPage <= 1 }">
                            	<a href="#" class="button_prev" ><i class="sp_common icon_arrow_left">이전</i></a>
                            </c:if>
                            
                            
                            <c:if test="${pi.currentPage >1 }">
								<c:url var="before" value="blogHome.do">
									<c:param name="page" value="${pi.currentPage -1 }" />
								</c:url>
								<a href="${before}" class="button_prev" ><i class="sp_common icon_arrow_left">이전</i></a>
							</c:if>
							
							
							<c:if test="${pi.currentPage>= pi.maxPage }">
									<a href="#" class="button_next"><i class="sp_common icon_arrow_right">다음</i></a>
							</c:if>

							<c:if test="${pi.currentPage < pi.maxPage}">
								<c:url var="after" value="blogHome.do">
									<c:param name="page" value="${pi.currentPage +1 }" />
								</c:url>
								<a href="${after}" class="button_next"><i class="sp_common icon_arrow_right">다음</i></a>
							</c:if>





						</div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        </aside>
        </div>
    </main>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    
    <script>
    	function deleteAlert(baNo){
    		$.ajax({
    			url : "deleteAlert.do",
    			type : "post",
    			dataType : "text",
    			data : {baNo:baNo},
    			success: function(data){
    				location.href="blogHome.do"; 
    			},
    			error : function(){
    				console.log('ajax 통신 실패');
    			}
    		});	
    	}
    </script>
</body>
</html>