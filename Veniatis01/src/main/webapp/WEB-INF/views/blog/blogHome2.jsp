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
	
	
	</style>
	 <link rel="stylesheet" href="resources/css/네이버2.css">

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<title>Insert title here</title>
</head>
<body>
<jsp:include page="../common/menubar.jsp"></jsp:include>

    <!-- ngIf: $root.isReadOnly -->
    <header id="header" class="header">
        <div class="header_common">
            <div class="inner">
                <div class="area_logo">
                    
                    <h1>

                        <a class="link_blog"><img src="<%= request.getContextPath() %>/resources/buploadFiles/blogBanner.png" width="80px" height="40px" style="margin-bottom:7px"></a>
                    </h1>
                </div>
                <div class="area_search" role="search">
                    <form action="" method="" class="ng-pristine ng-valid ng-valid-maxlength">
                        <fieldset>
                            <legend class="blind">검색창 </legend>
                            <div class="search" style="border:0px;">

                                <input type="text" class="textbox ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength"
                                    maxlength="255" autocomplete="off" value="" placeholder="검색어를 입력하세요!">
                            </div>
                            <a href="#" class="button button_blog"
                                aria-label="블로그 검색" role="button"><img src="<%= request.getContextPath() %>/resources/buploadFiles/search.png" width="20px" height="20px" style="margin-bottom:7px" ></a>

                        </fieldset>
                    </form>
                </div>

            </div>
        </div>

    </header>
    </div>

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
                                <!-- [D] 활성화된 .item에 aria-current="true"를 추가해주세요. -->
                                <!-- ngRepeat: postView in todayHotTopic.hotTopicPostViewList | limitTo : 3 -->
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
                                            <img bg-image="test.png" alt="블로거섬네일" width="46" height="46" class="img_author"
                                                src="resources/img/test.png">
                                        </div>
                                        <span class="nickname">${popPost[0].mId}
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
                                            <img bg-image="resources/img/test.png" alt="블로거섬네일" width="46" height="46" class="img_author"
                                                src="resources/img/test.png">
                                        </div>
                                        <span class="nickname">${popPost[1].mId}</span>
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
                                            <img bg-image="resources/img/test.png" alt="블로거섬네일" width="46" height="46" class="img_author"
                                                src="resources/img/test.png">
                                        </div>
                                           <span class="nickname">${popPost[2].mId}</span>
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
                            <h3 class="title_heading">테마별 최근글</h3>
                            <div class="area_dropdown" data-set="buddy">
                              	  분류 선택 :
                                <select>
                                    <option>창업&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                    <option>IT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                    <option>일상&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                </select>
                            </div>
                        </div>
                        <div class="list_post_article list_post_article_comments">
                            <div class="item">
                                <div class="item_inner">
                                    <div class="info_post only_post">
                                        <a class="author">
                                            <div class="thumbnail_author">
                                                <img alt="블로거 썸네일" bg-image="" class="img_author no_image" height="32"
                                                    width="32" src="resources/img/test.png">
                                            </div>
                                            <div class="info_author">
                                                <em class="name_author">누구누구</em>
                                                <span class="time">2020. 1. 27.</span>
                                            </div>
                                        </a>
                                        <a href="#" class="button_del_post" aria-label="삭제" role="button"><i class="sp_common icon_delete">삭제</i></a><!-- end ngIf: blogHomeCtrl.isBuddyPost -->
                                        <div class="desc">
                                            <a ng-href="#" class="desc_inner" href="#">
                                                <strong class="title_post" ng-bind="post.title">글 제목</strong>
                                            </a>
                                            <a class="text" href="#">글 내용</a>
                                        </div>
                                        <div class="comments">
                                            <div class="like" ng-if="post.sympathyEnable">
                                                <div class="u_likeit_list_module _reactionModule">
                                                    <a href="#" class="u_likeit_list_btn _button off double_heart" role="button"
                                                        data-type="like" data-ishiddenzerocount="true" aria-pressed="false">
                                                        <span class="u_ico _icon"></span>
                                                        <em class="u_txt _label">좋아요</em>
                                                        <em class="u_cnt _count">111</em>
                                                    </a>
                                                </div>
                                            </div>
                                            <a ng-href="#" href="#"><span class="reply"><i class="sp_common icon_comment2">댓글</i>
                                                    <em>332</em></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list_post_article list_post_article_comments">
                                <div class="item">
                                    <div class="item_inner">
                                        <div class="info_post only_post">
                                            <a class="author">
                                                <div class="thumbnail_author">
                                                    <img alt="블로거 썸네일" bg-image="" class="img_author no_image" height="32"
                                                        width="32" src="resources/img/test.png">
                                                </div>
                                                <div class="info_author">
                                                    <em class="name_author">누구누구</em>
                                                    <span class="time">2020.
                                                        1. 27.</span>
                                                </div>
                                            </a>
                                            <a href="#" class="button_del_post" aria-label="삭제" role="button"><i class="sp_common icon_delete">삭제</i></a><!-- end ngIf: blogHomeCtrl.isBuddyPost -->
                                            <div class="desc">
                                                <a ng-href="#" class="desc_inner" href="#">
                                                    <strong class="title_post" ng-bind="post.title">글 제목</strong>
                                                </a>
                                                <a class="text" href="#">글 내용</a>
                                            </div>
                                            <div class="comments">
                                                <div class="like" ng-if="post.sympathyEnable">
                                                    <div class="u_likeit_list_module _reactionModule">
                                                        <a href="#" class="u_likeit_list_btn _button off double_heart" role="button"
                                                            data-type="like" data-ishiddenzerocount="true" aria-pressed="false">
                                                            <span class="u_ico _icon"></span>
                                                            <em class="u_txt _label">좋아요</em>
                                                            <em class="u_cnt _count">111</em>
                                                        </a>
                                                    </div>
                                                </div>
                                                <a ng-href="#" href="#"><span class="reply"><i class="sp_common icon_comment2">댓글</i>
                                                        <em>332</em></span></a>
                                            </div>
                                        </div>
    
    
                                    </div>
                                </div>
                            </div>
                            <div class="list_post_article list_post_article_comments">
                                    <div class="item">
                                        <div class="item_inner">
                                            <div class="info_post only_post">
                                                <a class="author">
                                                    <div class="thumbnail_author">
                                                        <img alt="블로거 썸네일" bg-image="" class="img_author no_image" height="32"
                                                            width="32" src="resources/img/test.png">
                                                    </div>
                                                    <div class="info_author">
                                                        <em class="name_author">누구누구</em>
                                                        <span class="time">2020.
                                                            1. 27.</span>
                                                    </div>
                                                </a>
                                                <a href="#" class="button_del_post" aria-label="삭제" role="button"><i class="sp_common icon_delete">삭제</i></a><!-- end ngIf: blogHomeCtrl.isBuddyPost -->
                                                <div class="desc">
                                                    <a ng-href="#" class="desc_inner" href="#">
                                                        <strong class="title_post" ng-bind="post.title">글 제목</strong>
                                                    </a>
                                                    <a class="text" href="#">글 내용</a>
                                                </div>
                                                <div class="comments">
                                                    <div class="like">
                                                        <div class="u_likeit_list_module _reactionModule">
                                                            <a href="#" class="u_likeit_list_btn _button off double_heart">
                                                                <span class="u_ico _icon"></span>
                                                                <em class="u_txt _label">좋아요</em>
                                                                <em class="u_cnt _count">111</em>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a ng-href="#" href="#"><span class="reply"><i class="sp_common icon_comment2">댓글</i>
                                                            <em>332</em></span></a>
                                                </div>
                                            </div>
        
        
                                        </div>
                                    </div>
                                </div>

                                <!-테마별 최근 글 끝-->

                </section>
            </div>

            <aside class="aside">
                <div class="wrap_my_information">
                    <div >
                        <div class="area_my_account" >
                            <a  class="name" alt="내 블로그" href="#"><span class="thumbnail"><img bg-image="" width="46" height="46" alt="프로필" class="no_image" src="${loginUser.filePath }"></span><span>${loginUser.mName } 님</span></a>
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
                            <a href="#" class="item">내 소식</a>
                            <a href="#" class="item">내가 남긴 글</a>
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
			 </div>
		 </div>
                        </div>
                        <div class="area_pagination">
                            <div class="pagination" role="navigation" data-page="my_pagination">
                                <a href="#" class="button_prev" ><i class="sp_common icon_arrow_left">이전</i></a>
                                <a href="#" class="button_next"><i class="sp_common icon_arrow_right">다음</i></a>
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
    				location.href="blogHome.do"; // 아작스만들기존나귀찬은데........나중에 시간나면 만들긔 ^_^
    			},
    			error : function(){
    				console.log('ajax 통신 실패');
    			}
    		});	
    	}
    </script>
</body>
</html>