<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
 <meta charset="utf-8">
	<title>Home</title>
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
	<style>
	#btn2{
	 background-color: #40c8b5;
	}
	*{
	font-family: 'Noto Sans KR', sans-serif;
	font-size:11pt;
	}
	</style>
	 <link rel="stylesheet" href="resources/css/네이버2.css">

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</head>
<body>
<jsp:include page="menubar.jsp"></jsp:include>

    <!-- ngIf: $root.isReadOnly -->
    <header id="header" class="header">
        <div class="header_common">
            <div class="inner">
                <div class="area_logo">
                    <br>
                    <h1>

                        <a class="link_blog" bg-nclick="gnb.blogmain" href="#" ng-click="navigationCtrl.goOrReload('blogHome')">블로그</a>
                    </h1>
                </div>
                <div class="area_search" role="search">
                    <form action="" method="" class="ng-pristine ng-valid ng-valid-maxlength">
                        <fieldset>
                            <legend class="blind">검색창</legend>
                            <div class="search">

                                <input type="text" class="textbox ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength"
                                    maxlength="255" autocomplete="off" value="" placeholder="">
                            </div>
                            <a href="#" bg-nclick="gnb.blogsearch" ng-click="navigationCtrl.search()" class="button button_blog"
                                aria-label="블로그 검색" role="button"><i class="sp_common icon_search"></i></a>

                        </fieldset>
                    </form>
                </div>

            </div>
        </div>

    </header>
    </div>

    <main id="container" class="container">
        <h2 class="blind">블로그 홈</h2>
        <section class="hot_topic">
            <div class="inner">
                <div class="area_topic">
                    <div class="heading">
                        <h3 class="title"><a href="#" ng-click="blogHomeCtrl.goState('hotTopicChallenge')" class="link"
                                bg-nclick="htp.htp">핫토픽</a></h3>
                    </div>
                    <div class="list_group">
                        <div class="list_hottopic">
                            <div class="item_wrap">
                                <!-- [D] 활성화된 .item에 aria-current="true"를 추가해주세요. -->
                                <!-- ngRepeat: postView in todayHotTopic.hotTopicPostViewList | limitTo : 3 -->
                                <div class="item">
                                    <a ng-href="#" class="item_inner" href="#">
                                        <img bg-image="resources/img/test.png" alt="핫토픽섬네일" width="252" height="240" src="resources/img/test.png">
                                        <div class="desc_post">
                                            <div class="title">
                                                <span class="title_inner">
                                                    <strong class="title_post">생각지 못하게 위로받은 곳</strong>
                                                </span>
                                            </div>
                                            <p class="text_post">​블로그 씨의 질문을 보고 그냥 지나칠
                                                수 없어서 기록해보는 포스팅-​가끔은 혼자만의 깊은 사색이 필요한 순간이 있다.연휴...</p>
                                        </div>
                                    </a>
                                    <a ng-href="#" class="link_author" href="#">
                                        <div class="thumbnail_author">
                                            <img bg-image="test.png" alt="블로거섬네일" width="46" height="46" class="img_author"
                                                src="resources/img/test.png">
                                        </div>
                                        <span class="nickname">오월의
                                            팔레트</span>
                                    </a>
                                </div><!-- end ngRepeat: postView in todayHotTopic.hotTopicPostViewList | limitTo : 3 -->
                                <div class="item">
                                    <a ng-href="#" class="item_inner" href="#">
                                        <img bg-image="resources/img/test.png" alt="핫토픽섬네일" width="252" height="240" src="resources/img/test.png">
                                        <div class="desc_post">
                                            <div class="title">
                                                <span class="title_inner">
                                                    <strong class="title_post">생각지 못하게 위로받은 곳</strong>
                                                </span>
                                            </div>
                                            <p class="text_post">​블로그 씨의 질문을 보고 그냥 지나칠
                                                수 없어서 기록해보는 포스팅-​가끔은 혼자만의 깊은 사색이 필요한 순간이 있다.연휴...</p>
                                        </div>
                                    </a>
                                    <a ng-href="#" class="link_author" href="#">
                                        <div class="thumbnail_author">
                                            <img bg-image="resources/img/test.png" alt="블로거섬네일" width="46" height="46" class="img_author"
                                                src="resources/img/test.png">
                                        </div>
                                        <span class="nickname">오월의
                                            팔레트</span>
                                    </a>
                                </div>
                                <div class="item">
                                    <a ng-href="#" class="item_inner" href="#">
                                        <img bg-image="resources/img/test.png" alt="핫토픽섬네일" width="252" height="240" src="resources/img/test.png">
                                        <div class="desc_post">
                                            <div class="title">
                                                <span class="title_inner">
                                                    <strong class="title_post">생각지 못하게 위로받은 곳</strong>
                                                </span>
                                            </div>
                                            <p class="text_post">​블로그 씨의 질문을 보고 그냥 지나칠
                                                수 없어서 기록해보는 포스팅-​가끔은 혼자만의 깊은 사색이 필요한 순간이 있다.연휴...</p>
                                        </div>
                                    </a>
                                    <a ng-href="#" class="link_author" href="#">
                                        <div class="thumbnail_author">
                                            <img bg-image="resources/img/test.png" alt="블로거섬네일" width="46" height="46" class="img_author"
                                                src="resources/img/test.png">
                                        </div>
                                        <span class="nickname">오월의
                                            팔레트</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="area_promotion">

                    <div class="list_group">
                        <div class="list_promotion">
                            <div class="item ng-hide"><a href="#"> <img width="280" height="240" src="resources/img/test.png"></a></div><!-- end ngRepeat: mainBanner in mainBannerList -->
                        </div>
                    </div>
                </div>


            </div>


            </div>

            </div>
        </section>

        <div class="layout_content">
            <div id="content" class="content">
                <!-- ngIf: blogHomeCtrl.isLoadBuddyOfBuddyView && blogHomeCtrl.isBuddyGroupView && blogHomeCtrl.isLoadPostList -->
                <section class="wrap_thumbnail_post_list" data-post-type="buddy">
                    <div class="heading">
                        <div class="title _buddy_dropdown_container">
                            <h3 class="title_heading">테마별 최근글</h3>
                            <div class="area_dropdown" data-set="buddy">
                                분류 선택 :
                                <select>
                                    <option>창업</option>

                                    <option>IT</option>
                                    <option>일상</option>
                                </select>



                            </div>
                        </div>



                        <!-- 이웃 새글-->
                        <!-- ngIf: blogHomeCtrl.isBuddyPost -->
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

                                <!-테마별 최근 글 끝-->

                </section><!-- end ngIf: blogHomeCtrl.isLoadBuddyOfBuddyView && blogHomeCtrl.isBuddyGroupView && blogHomeCtrl.isLoadPostList -->
            </div>

            <aside class="aside">
                <div class="wrap_my_information">
                    <div >

                        <div class="area_my_account" >
                            <a  ng-href="#" target="_blank" class="name"
                                alt="내 블로그" href="https://blog.naver.com/MyBlog.nhn"><span class="thumbnail"><img
                                        bg-image="" width="46" height="46" alt="프로필" class="no_image" src="resources/img/test.png"></span><span>로그인한인간</span></a>
                            </div>
                        <nav class="menu_my_blog" ng-show="loginCtrl.loggedIn">
                <c:url var="blogMaina" value="blogMain2.do">
					<c:param name="userId" value="${loginUser.mId }"/>
				</c:url>
                            <a 
                                class="item" alt="내 블로그" href='${ blogMaina }>?userId=${loginUser.mId}'>내 블로그</a>
                            <a 
                                target="_blank" class="item" alt="관리하기" href="#">관리하기</a>
                        </nav>
                    </div>

                </div>


        </div>
        </div>
        </aside>
        </div>

    </main>


    </div>

</body>
</html>
