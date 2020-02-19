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
      var url = "http://localhost:8800/veniatis/blogDetail.do?userId=user01&uniNo=11";
      var title = encodeURI(myform.title.value);
      var shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
      console.log(url);
      
      console.log(shareURL);
      document.location = shareURL;
      
    }
  </script>



<!-- 스타일 -->
<style>

</style>
</head>
<body>
<jsp:include page="menubar.jsp"></jsp:include>
<img src="resources/buploadFiles/ad.jpg">
테스트화면^_^
ㅋㅋㅋ

  <form id="myform">
    URL입력:  <input type="text" id="url" value="www.daum.net"><br/>
    Title입력:  <input type="text" id="title" value="네이버개발자센터 검색결과"><br/>
  </form>
  <input type="button" value="네이버공유하기" onclick="share()"/>



	
<span>
	<script type="text/javascript" src="https://ssl.pstatic.net/share/js/naver_sharebutton.js"></script>
	<script type="text/javascript">
	new ShareNaver.makeButton({"type": "a" , "title":""});
	</script>
</span>







    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
</body>
</html>