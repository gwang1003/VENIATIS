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

<!-- 스타일 -->
	<style>
	    .map_wrap {position:relative;width:350px;height:350px;}
	    .title {font-weight:bold;display:block;}
	    .hAddr {position:absolute;left:10px;top:10px;border-radius: 2px;background:#fff;background:rgba(255,255,255,0.8);z-index:1;padding:5px;}
	    #centerAddr {display:block;margin-top:2px;font-weight: normal;}
	    .bAddr {padding:5px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
	</style>
<script>
document.getElementById('shareBtn').onclick = function() {
  FB.ui({
    display: 'popup',
    method: 'share',
    href: 'https://developers.facebook.com/docs/',
  }, function(response){});
}
</script>

<script>
document.getElementById('ogBtn').onclick = function() {
  FB.ui({
    display: 'popup',
    method: 'share_open_graph',
    action_type: 'og.likes',
    action_properties: JSON.stringify({
        object:'https://developers.facebook.com/docs/',
    })
  }, function(response){});
}
</script>
<script>
document.getElementById('requestsBtn').onclick = function() {
  FB.ui({method: 'apprequests',
      message: 'This is a test message for the requests dialog.'
  }, function(data) {
    Log.info('App Requests Response', data);
  });
}
</script>
</head>
<body>
<jsp:include page="menubar.jsp"></jsp:include>
<h1>Sharing using FB.ui() Dialogs</h1>

<p>Below are some simple examples of how to use UI dialogs in a web page.</p>

<h3>Sharing Links</h3>

<div id="shareBtn" class="btn btn-success clearfix">Share Dialog</div>


<h3>Publishing Open Graph Stories</h3>

<p>The Share Dialog can also be used to publish Open Graph stories without using Facebook Login or the Graph API. <a href="https://developers.facebook.com/docs/sharing/reference/share-dialog">Read our Share Dialog guide</a> to learn more about how it works.</p>

<div id="ogBtn" class="btn btn-success clearfix">Simple OG Dialog</div>



<h3>Sending App Requests</h3>

<p><a href="https://developers.facebook.com/docs/games/requests/">Requests</a> can be sent by any Facebook Apps that are categorised as Games and have a Canvas, iOS, or Android implementation. The JavaScript SDK enables web Canvas games to send requests. <a href="https://developers.facebook.com/docs/games/requests/">Read our guide to Requests</a> to learn more and see more complex examples that you could use.</p>

<div id="requestsBtn" class="btn btn-success clearfix">Basic Request Dialog</div>




<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>




    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
</body>
</html>