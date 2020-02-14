<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
.represent-img{
   width:40%;
   height:40%;
}
</style>
<!-- Favicon -->
<link rel="shortcut icon" href="favicon.ico" />

<!-- jQuery --><script
   src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="resources/smartEditor/js/jquery.js"></script>
<script type="text/javascript" src="resources/smartEditor/js/jquery-ui.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/smartEditor/SE2/js/HuskyEZCreator.js"></script>
<script type="text/javascript">
var oEditors = []; // 개발되어 있는 소스에 맞추느라, 전역변수로 사용하였지만, 지역변수로 사용해도 전혀 무관 함.

$(document).ready(function() {
	// Editor Setting
	nhn.husky.EZCreator.createInIFrame({
		oAppRef : oEditors, // 전역변수 명과 동일해야 함.
		elPlaceHolder : "smarteditor", // 에디터가 그려질 textarea ID 값과 동일 해야 함.
		sSkinURI : "resources/smartEditor/SE2/SmartEditor2Skin.html", // Editor HTML
		fCreator : "createSEditor2", // SE2BasicCreator.js 메소드명이니 변경 금지 X
		htParams : {
			// 툴바 사용 여부 (true:사용/ false:사용하지 않음)
			bUseToolbar : true,
			// 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음)
			bUseVerticalResizer : true,
			// 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음)
			bUseModeChanger : true, 
		}
	});

	// 전송버튼 클릭이벤트
	$("#savebutton").click(function(){
		//if(confirm("저장하시겠습니까?")) {
			// id가 smarteditor인 textarea에 에디터에서 대입
			oEditors.getById["smarteditor"].exec("UPDATE_CONTENTS_FIELD", []);

			// 이부분에 에디터 validation 검증
			if(validation()) {
				$("#frm").submit();
			}
		//}
	})
});

// 필수값 Check
function validation(){
	var contents = $.trim(oEditors[0].getContents());
	if(contents === '<p>&nbsp;</p>' || contents === ''){ // 기본적으로 아무것도 입력하지 않아도 <p>&nbsp;</p> 값이 입력되어 있음. 
		alert("내용을 입력하세요.");
		oEditors.getById['smarteditor'].exec('FOCUS');
		return false;
	}

	return true;
}

// 글쓰기 저장 & 수정
// function fWrite() {
// 	if(validation()){
// 		if(confirm("저장하시겠습니까?")) {
// 			oEditors[0].exec("UPDATE_CONTENTS_FIELD", []); // Editor내용을 DB에 가져가기 위해 필수로 작성!
// 														   // oEditors << 전역변수로 선언한 변수명과 동일해야 함.
// 			$("#boardForm").attr('action','${pageContext.request.contextPath}/save').submit();
// 		}
// 	}
// }
</script>
</head>
<body>
 <jsp:include page="menubar.jsp"></jsp:include>
    <div class="container">

<form action="blogInsert.do" method="post" id="frm" enctype="multipart/form-data">
카테고리:
                                <select name="cateNo">
                                <c:forEach var="cate" items="${cate}">  
                                    <option value="${cate.cateNo}">${cate.bCateName}</option>
                                </c:forEach>
                                </select>

<br>

                             썸네일: 
            <div id="represent" class="represent-img">
				<img id="represent1" class="images" src="resources/buploadFiles/BasicThumbs.jpg" width="400px" height="300px">
			</div>
                             
             <input type="file" name="represent" class="hidden" id="represent-btn" onchange="loadImg(this,1)">                            
	<br>           

<br>
제목:<input type="text" name="bTitle" value=""><br><br>
	<textarea name="bContent" id="smarteditor" rows="10" cols="100" style="width:766px; height:412px;"></textarea> 
태그 (,로 분류): <input type ="text" name="bTag" value=""><br>
</form>
<input type="button" id="savebutton" value="글쓰기" />
<br><br>
</div>
<script>
$(function(){
    $("#represent").click(function(e){
       $("#represent-btn").click();
    });
 });

    function loadImg(value,num){
        if(value.files && value.files[0]){
           var reader = new FileReader();
        
           reader.onload = function(e){
              switch(num){
              case 1:
                 $("#represent1").attr("src",e.target.result);//src에다가 읽어온 값 넣는다
                 $("#represent1").css({width:"100%",height:"100%",margin:"0"});
                 break;
              }
           }   
           //파일 읽기 하는 메소드
           reader.readAsDataURL(value.files[0]);
        }
    }
</script>
</body>


</html>