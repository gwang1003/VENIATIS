<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
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
         .heading {
            border-bottom: 3px solid #ddd;
        }

        .twitter-hover {
            background-image: url('https://lut.im/SRoUJUn7V4/cORSlFIVBlR7M8Zv.png');
        }

        .facebook-hover {
            background-image: url('https://lut.im/9LlTfOBMjB/ccPwdiudyoF3x1wE.png');
        }

        .google-hover {
            background-image: url('resources/buploadFiles/kakao.png');
        }

        .linkedin-hover {
            background-image: url('resources/buploadFiles/naver.png');
        }

        .instagram-hover {
            background-image: url('https://lut.im/0LARg4VaCM/bWRJ8RbjK0r14RdO.png');
        }


        .social-slide {
            height: 48px;
            width: 48px;
            margin: 5px;
            float: left;
            -webkit-transition: all ease 0.3s;
            -moz-transition: all ease 0.3s;
            -o-transition: all ease 0.3s;
            -ms-transition: all ease 0.3s;
            transition: all ease 0.3s;
        }

        .social-slide:hover {
            background-position: 0px -48px;
            box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.8);
        }      
       
	</style>


    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<script>
<!-- 좋아요 넣었는지 알아오깅 (넣엇으면 빨간하트 안넣었으면 까만하트) -->
$(document).ready(function () {
    var mNo1 = ${nowUser.mNo};
    var bNo1 = ${likeDetail.bNo};
    
    getHeartList();
    getHeartColor();
    replyList();
    
	function getHeartList(){
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
        
        var sendData={'bNo' : '${likeDetail.bNo}', 
        				'mNo' : ' ${likeDetail.mNo}',
        				'heart' : that.prop('name'),
        				'no' : '${user.mNo}'};

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
		                getHeartList();
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
                getHeartList();
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
					var $r11 = $("<a href='blogMain2.do?userId="+data[i].rWriter+"'>").text(data[i].rWriter);
					var $r12 = $("<p class='date'>").text(data[i].wDate);
					var $r13 = $("<div class='reply-btn'>");
					var $r14 = $(" <a href='#' class='btn-reply text-uppercase'>reply");
					var $r15="";
					var $r16="";
					var $r17 ="";
					var $r18 ="";
					// 삭제,수정
					if('${nowUser.mNo}'==data[i].mNo){
						 $r15 =  $("<a href = 'javascript:rUpdate("+data[i].rNo+");' class='rUpdate' id='"+data[i].rNo+"' style='color:black;'>").text("수정");
						 $r16 =  $("<a href = 'javascript:rDelete("+data[i].rNo+");' class='rDelete' id='"+data[i].rNo+"' style='color:red;'>").text("삭제");
						 
						 $r17 = $("<span style='display:none;' class='replyNo'>").text(data[i].rNo);
						 $r18 = $("<span style='display:none;' class='replyContent'>").text(data[i].rContent);

					}

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
					$r9.append($r15);
					$r9.append($r16);
					$r9.append($r17);
					$r9.append($r18);
					
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
<jsp:include page="../common/menubar.jsp"></jsp:include>
        <div class="container">
            <div class="row" >
                        <div class="col-lg-8 mb-5 mb-lg-10" style='padding-top:10px;'">
            		<a href="blogMain2.do?userId=${user.mId}"><h1 style="font-family: 'Jua', sans-serif;">				
            		${ user.mName } 님의 블로그 입니다.</h1></a>
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
                                <li>
    <a href="https://twitter.com/intent/tweet?text=VENIATIS에서 공유합니다! '${post.bTitle}' &url=http%3a%2f%2flocalhost%3a8800%2fveniatis%2fblogDetail.do%3fuserId%3d${post.mId }%26uniNo%3d${post.uniNo}">
        <div class="twitter-hover social-slide"></div>
    </a>
    <a href="javascript::;">
        <div class="google-hover social-slide"></div>
    </a>
    <a href="javascript::;">
        <div class="linkedin-hover social-slide"></div>
    </a>                                                       
                                </li>
                                <li><a href="#">글 목록</i></a></li>
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
                        
                           	<c:forEach var="dt" items="${detailTagList}"> 
                           	  <div id="tag">#${dt }</div>
                            </c:forEach>
                        
                        </div><br>
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
                        <c:if test="${loginUser.mId eq user.mId }">
                        				<c:url var="write" value="write2.do"/>
                        				<c:url var="admin" value="badmin.do"/>
                        <button onclick="location.href='${ admin }'" class="button rounded-0 primary-bg text-white w-50 btn_1 boxed-btn" type="submit" style="float:left; background-color:green;"">관리하기</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button onclick="location.href='${ write }'" class="button rounded-0 primary-bg text-white w-40 btn_1 boxed-btn" type="submit">글 작성</button>
                                                <br><br>
                        </c:if>
                        <aside class="single_sidebar_widget post_category_widget">
                            <h4 class="widget_title">카테고리</h4>
                            <ul class="list cat-list">
								 <c:forEach var="c" items="${nowCate}">
	                                <li>
	                                    <a href="blogMainCate.do?cateNo=${c.cateNo}&mId=${user.mId}">${c.bCateName}</a>
	                                </li>
                            	</c:forEach>
                              
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
<!-- 태그 -->                    
                        <aside class="single_sidebar_widget tag_cloud_widget">
                            <h4 class="widget_title">Tag Clouds</h4>
                            <ul class="list">
                                 <c:choose>
                            		<c:when test = "${fn:length(tags)==1 }">
	                            	등록된 태그가 없습니다!
	                           		 </c:when>
	                           		 		
									<c:when test="${fn:length(tags)<15 }">
										<c:forEach var="i" begin="1" end="${fn:length(tags)-1}">
											<li>
											<a href="blogTag.do?tags=${tags[i]}&userId=${user.mId}">#${tags[i]}</a><br>
											</li>
										</c:forEach>
									</c:when>
									<c:when test="${fn:length(tags)>15 }">
										<c:forEach var="i" begin="1" end="10">
											<li>
											<a href="blogTag.do?tags=${tags[i]}&userId=${user.mId}">#${tags[i]}</a><br>
											</li>
										</c:forEach>
										&nbsp;&nbsp;&nbsp;더보기
									</c:when>
									<c:otherwise>
										등록된 태그가 없습니다!
									</c:otherwise>
								</c:choose>
                            
                            
                            
                            
	                            <!-- 태그가 10개 이하일 때 : 전체 출력-->
	                            <%-- <c:if test = "${fn:length(tags)<15 }">
										<c:forEach var="i" begin="0" end="${fn:length(tags)-1}">
											<li>
											<a href="#">#${tags[i]}</a><br>
											</li>
										</c:forEach>
								</c:if>
								<!-- 태그가 10개 이상일 때  :10개까지만 출력, 더보기 버튼 클릭-->
	                            <c:if test = "${fn:length(tags)>15 }">
										<c:forEach var="i" begin="0" end="10">
											<li>
											<a href="#">#${tags[i]}</a><br>
											</li>
	
										</c:forEach>
										&nbsp;&nbsp;&nbsp;더보기
								</c:if>							
								
								<c:if test = "${fn:length(tags)==0 }">
	                            	등록된 태그가 없습니다!
	                            </c:if>       --%>                    
                            </ul>
                        </aside>
<!--  -->   
                        
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
	var mId = "${post.mId}";
	console.log("댓글작성"+rContent);
	
	$.ajax({
		url : "replyInsert.do",
		type : "post",
		dataType : "text",
		data : {rContent:rContent,
				bNo:bNo,
				mId:mId},
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

function rDelete(a){
	console.log("삭제!!"+a);
	var rNo= a;
	$.ajax({
		url : "blogReplyDelete.do",
		type : "post",
		dataType : "text",
		data : {rNo:rNo},
		success: function(data){
			alert("댓글이 삭제되었습니다");
			replyList();
		},
		error : function(){
			console.log('ajax 통신 실패');
		}
	});	
	
	
}
</script>


<br><br><br><br><br><br><br><br><br><br><br>
</body>

</html>