<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta property="fb:app_id" content="136982354320438" />
<meta property="og:type" content="website" />
<meta property="og:title" content="웹 페이지 제목" />
<meta property="og:url" content="웹 페이지 URL" />
<meta property="og:description" content="웹 페이지 내용" />
<meta property="og:image" content="웹 페이지 대표 이미지" />
<title>Insert title here</title>

<!-- 부트스트랩,제이쿼리 -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous">
        <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=136982354320438";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>
  
    <script>
    $(document).ready(function(){
    $("#shareBtn").on("click", function(){
  FB.ui({
      method        : 'share_open_graph',

    display: 'popup',
    method: 'share',
    action_type: 'og.shares',
    action_properties: JSON.stringify({
        object: {
            'og:url': 'http://192.168.0.43:8800/board/getBoard?',
            'og:title': 'ㅋㅋㅋㅋㅋㅋㅋㅋ',
            'og:description': '어휴 ㅋㅋㅋ',
            'og:image': '',
        }
    })

  }, function(response){});
});
    });    
    
    
    

    function share() {
      var url = encodeURI(encodeURIComponent(myform.url.value));
      var title = encodeURI(myform.title.value);
      	console.log(url);
      var shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
      document.location = shareURL;
    }
  </script>
  





</head>
<body>


<div id="shareBtn" class="btn btn-success clearfix">Share Dialog</div>


136982354320438
  <form id="myform">
    URL입력:  <input type="text" id="url" value="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&oquery=%EB%84%A4%EC%9D%B4%EB%B2%84+%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%84%BC%ED%84%B0&ie=utf8&query=%EB%84%A4%EC%9D%B4%EB%B2%84+%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%84%BC%ED%84%B0"><br/>
    Title입력:  <input type="text" id="title" value="네이버개발자센터 검색결과"><br/>
  </form>
  <input type="button" value="네이버공유하기" onclick="share()"/>
<span>
	<script type="text/javascript" src="https://ssl.pstatic.net/share/js/naver_sharebutton.js"></script>
	<script type="text/javascript">
	new ShareNaver.makeButton({"type": "a" , "title":"ㅋㅋㅋ"});
	</script>
</span>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
</body>
</html>