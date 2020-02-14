<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
 <meta charset="utf-8">
	<title>Home</title>
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Jua&display=swap" rel="stylesheet">
	<style>
	#btn2{
	 background-color: #40c8b5;
	}
	*{
	font-family: 'Noto Sans KR', sans-serif;

	}
	
	        #taginner{
            margin-top:2%;
            margin-bottom:2%;
        }
       #tag{
           display: inline;
           margin:1%;
           padding-right: 12px;
           padding-left:12px;
           padding-top:5px;
           padding-bottom:5px;
           border: 1px rgba(179, 179, 179, 0.753) solid;
       }
       
       #tag:hover{
           background-color: rgba(42, 202, 154, 0.753);
       }


       .bContent img{
	width:100%;

       }
       
       
	</style>
	 <link rel="stylesheet" href="resources/css/blog.css">

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<script>
<!-- 좋아요 넣었는지 알아오깅 (넣엇으면 빨간하트 안넣었으면 까만하트) -->
$(document).ready(function () {
    var mNo1 = ${nowUser.mNo};
    var bNo1 = ${likeDetail.bNo};
    
    getReplyList();
    getHeartColor();
    replyList();
    
	function getReplyList(){
    $.ajax({
        url :'myHeart.do',
        type :'POST',
        data : {mNo : mNo1,
        		bNo : bNo1},
        dataType:"text",
        success : function(data){

        	check=data;
        	console.log(check);
        	$('.likeInfo').text("좋아요 "+data);

        },               error:function(e){
              alert("error code : " + e.status + "\n"
                      + "message : " + e.responseText);
             }
    });	
	}

	function getHeartColor(){
	    $.ajax({
	        url :'getHeartColor.do',
	        type :'POST',
	        data : {mNo : mNo1,
	        		bNo : bNo1},
	        dataType:"text",
	        success : function(data){

				console.log(data);
	        	check=data;
	        	console.log(check);

             if(check>0) {
	                $("#heart").prop("src", "resources/common/yesLike.png");
	                console.log("체크됨ㅋㅋ");
	            }
	            else {
	            	console.log("체크안됨ㅋㅋ");
	                $("#heart").prop("src", "resources/common/noLike.png");
	            } 

	        },               error:function(e){
	              alert("error code : " + e.status + "\n"
	                      + "message : " + e.responseText);
	             }
	    });	
		}
   	
    
    $(".heart").on("click", function () {
        var that = $(".heart");
        var mNo = ${nowUser.mNo};
        var bNo = ${likeDetail.bNo};
        
        var sendData={'bNo' : '${likeDetail.bNo}', 'mNo' : ' ${likeDetail.mNo}','heart' : that.prop('name')};

		if(check==0){
			console.log("조아요안함");
			 $.ajax({
		            url :'heartInsert.do',
		            type :'POST',
		            data : sendData,
		            dataType:"text",
		            success : function(data){

		                that.prop('name',data);
		                $('#heart').prop("src","resources/common/yesLike.png");
		                getReplyList();
		                getHeartColor();
		            },               error:function(e){
		                  alert("error code : " + e.status + "\n"
		                          + "message : " + e.responseText);
		                 }
		        });

	}else{
		console.log("조아요함");
		$.ajax({
        	
            url :'heartdelete.do',
            type :'POST',
            data : sendData,
            dataType:"text",
            success : function(data){
                that.prop('name',data);
                $('#heart').prop("src","resources/common/noLike.png");
                getReplyList();
                getHeartColor();
            }
        });

	}
        });
    
});
    
//댓글가져오기
function replyList(){
	var bId = ${post.bNo};
	console.log(bId+"ㅋㅋㅋㅋㅋ");
	$.ajax({
		url:"rList.do",
		data:{bId:bId},
		dataType:"json",
		success:function(data){

			$tableBody = $(".comments-area");
			$tableBody.html("");
			
			if(data.length>0){
			// 댓글등록 됐을 때
			var $r0 = $("<h5>").text(data.length+"개의 댓글");
			$tableBody.append($r0);
			$tableBody.append("<br>");
				for(var i in data){
					
					
					var $r1 = $("<div class='comment-list'>");
					var $r2 = $("<div class='single-comment justify-content-between d-flex'>");
					var $r3 = $("<div class='user justify-content-between d-flex'>");
					var $r4 = $("<div class='thumb'>");
					var $r5 = $("<img>").attr("src",'#');
					var $r6 = $("<div class='desc'>");
					var $r7 = $("<p class='comment'>").text(data[i].rContent); //댓글내용
					var $r8 = $("<div class='d-flex justify-content-between'>");
					var $r9 = $("<div class='d-flex align-items-center'>");
					var $r10 = $("<h5>");
					var $r11 = $("<a href='#'>").text(data[i].rWriter);
					var $r12 = $("<p class='date'>").text(data[i].wDate);
					var $r13 = $("<div class='reply-btn'>");
					var $r14 = $(" <a href='#' class='btn-reply text-uppercase'>reply");


					$tableBody.append($r1);
					$r1.append($r2);
					$r2.append($r3);
					$r3.append($r4);
					$r4.append($r5);
					$r3.append($r6);
					$r6.append($r7);
					$r6.append($r8);
					$r8.append($r9);
					$r9.append($r10);
					$r10.append($r11);
					$r9.append($r12);
					$r8.append($r13);
					$r13.append($r14);						
				}
			}else{
				// 댓글이 등록되지 않았을 때
				var $r0 = $("<h5>").text("등록된 댓글이 없습니다");
				$tableBody.append($r0);
			};
		},
		 error:function(e){
             alert("error code : " + e.status + "\n"
                     + "message : " + e.responseText);
            }
	});
	
	
	


}


</script>

</head>
<body>
 <jsp:include page="menubar.jsp"></jsp:include>

        <div class="container">
            <div class="row" >
                        <div class="col-lg-8 mb-5 mb-lg-10" style='padding-top:10px;'">
            		<h1 style="font-family: 'Jua', sans-serif;">				
            		${ user.mName } 님의 블로그 입니다.</h1>
            </div>
                <div class="col-lg-8 posts-list">
                    <div class="single-post">
                        <div class="feature-img">
                            <img class="img-fluid" src="test.png" alt="">
                        </div>
                        <div class="blog_details">
                            <h2>${post.bTitle }
                            </h2>
                            <ul class="blog-info-link mt-3 mb-4">
                                <li><a href="#"><i class="fa fa-user"></i>${post.cateName}</a></li>
                                <li><a href="#"><i class="fa fa-comments"></i> 댓글 (3)</a></li>
                            </ul>
                            <div class="bContent">
                            <p class="excert">
								${post.bContent }
                            </p>
                            </div>
                        </div>
                    </div><br>
                    <div class="navigation-top">
                        <div class="d-sm-flex justify-content-between text-center" style="font-size:11pt;">
                            
                            <p class="like-info"><span class="align-middle">
                                   <a class="btn btn-outline-green heart">
           <img id="heart" src=""> <b style="color:black" class="likeInfo"></b>
       </a></span></p>
       
       
                           
                            <div class="col-sm-4 text-center my-2 my-sm-0">

                            </div>
                            <c:if test="${nowUser.mId ne user.mId }">
                                 <li><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#zz">스크랩</button></li>
                            </c:if>
                                <li><a href="#">공유하기</i></a></li>
                                <li><a href="#">글 목록</i></a></li>
                                <li><a href="#">댓글 (1) </a></li>
                                <li><a href="#">삭제</i></a></li> 
<!-- 모달 -->
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
                    <h3 style="margin-bottom: 25px; text-align: center;">스크랩 하기</h3>
                    <div class="form-group">
                        <b>카테고리</b>  <form action="blogScrap.do" method="post">
					<input name = "bNo" type="hidden" value="${post.bNo }">
                        <select name="scrapCate">
                        <c:forEach var="mc" items="${myCate}"> 
                            <option value="${mc.cateNo }">${mc.bCateName }</option>
                        </c:forEach>
                        </select><br><br>
                        <b>추가 메모</b><br>
                        <textarea name="memo" value=" "></textarea>
                        <br><br>
                        <button>스크랩!</button>
                  </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- 모달끝ㅋㅋ -->   
                                                   

                       
                            
                        </div>
                        <div id="taginner">
                          <div id="tag">태그1</div>
                          <div id="tag">태그2</div>
                        </div>
                        <div class="navigation-area">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                    <div class="detials">
                                        <p>이전 게시글</p>
                                        <a href="#">
                                            <h4>이거어ㅣ거저거</h4>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                    <div class="detials">
                                        <p>다음 게시글</p>
                                        <a href="#">
                                            <h4>이거요거저거</h4>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="comments-area">

                        등록된 댓글이 없습니다!
    <script>

    </script>
    
    

                    </div>
                    <div class="comment-form">
                        <h4>댓글 작성</h4>
                        <form class="form-contact comment_form" action="#" id="commentForm">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control w-100" name="comment" id="comment" cols="20" rows="5"
                                            placeholder="입력해주세요"></textarea>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="form-group">
                                <button type="button" id="rSubmit" class="button button-contactForm btn_1 boxed-btn">작성하기</button>
                            </div>
                        </form>
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
                                            data-cf-modified-f49dafb4f642cfc7f83a787a-="">
                                        <div class="input-group-append">
                                            <button class="btn" type="button"><i class="ti-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
                            </form>
                        </aside>
                        <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">관리하기</button>
                        <br><br>
                        <aside class="single_sidebar_widget post_category_widget">
                            <h4 class="widget_title">카테고리</h4>
                            <ul class="list cat-list">
                                <li>
                                    <a href="#" class="d-flex">
                                        <p>ㅋㅋㅋ</p>
                                        <p>(37)</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="d-flex">
                                        <p>하이</p>
                                        <p>(10)</p>
                                    </a>
                                </li>
                              
                            </ul>
                        </aside>
                        <aside class="single_sidebar_widget popular_post_widget">
                            <h3 class="widget_title">최근 게시글</h3>
                            <div class="media post_item">

                                <div class="media-body">
                                    <a href="single-blog.html">
                                        <h3>하이하이</h3>
                                    </a>
                                    <p>1월 12일 2019년</p>
                                </div>
                            </div>
                            <div class="media post_item">

                                <div class="media-body">
                                    <a href="single-blog.html">
                                        <h3>하이하이</h3>
                                    </a>
                                    <p>02 시간 전</p>
                                </div>
                            </div>
                            <div class="media post_item">

                                <div class="media-body">
                                    <a href="single-blog.html">
                                        <h3>하이하이</h3>
                                    </a>
                                    <p>03 시간 전</p>
                                </div>
                            </div>
                        </aside>
                        <aside class="single_sidebar_widget tag_cloud_widget">
                            <h4 class="widget_title">태그</h4>
                            <ul class="list">
                                <li>
                                    <a href="#">project</a>
                                </li>
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
<script>
//댓글작성
$("#rSubmit").click(function(){
	var bNo = ${post.bNo};
	var rContent = $("#comment").val();
	console.log("댓글작성"+rContent);
	
	$.ajax({
		url : "replyInsert.do",
		type : "post",
		dataType : "text",
		data : {rContent:rContent,
				bNo:bNo},
		success: function(data){

			$("#comment").val("");
			replyList();
		},
		error : function(){
             alert("error code : " + e.status + "\n"
                     + "message : " + e.responseText);
		}
	});	
});

</script>



</body>
<jsp:include page="footer3.jsp"></jsp:include>
  
</html>
