<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> 
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
	
	.tag{
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
	  .enjoy-css {
	  width: 200px;
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
	
	/* enable absolute positioning */
	.enjoy-cssx {
	  width: 250px;
	  height: 45px;
	  border-radius: 28px;
	  font: normal 14px/28px "Advent Pro", Helvetica, sans-serif;
	  background: rgb(255, 255, 255);
	}
	
	.inner-addon { 
	    position: relative; 
	}
	
	/* style icon */
	.inner-addon .glyphicon {
	  position: absolute;
	  padding: 13px;
	  pointer-events: none;
	}
	
	/* align icon */
	.left-addon .glyphicon  { left:  0px;}
	.right-addon .glyphicon { right: 0px;}
	
	/* add padding  */
	.left-addon input  { padding-left:  30px; }
	.right-addon input { padding-right: 30px; }
	

</style>
<link rel="shortcut icon" href="favicon.ico" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="resources/smartEditor/js/jquery.js"></script>
<script type="text/javascript" src="resources/smartEditor/js/jquery-ui.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/smartEditor/SE2/js/HuskyEZCreator.js"></script>

<!-- 스마트 에디터 설정 -->
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
</script>
</head>
<body>
<jsp:include page="../common/menubar.jsp"></jsp:include>
    <div class="container">
		<form action="blogUpdate.do" method="post" id="frm" enctype="multipart/form-data" onsubmit="values();">
			<select name="cateNo">
				
					<c:forEach var="cate" items="${cate}">  
						<c:if test="${cate.bCateName eq post.cateName}" >
						<option value="${cate.cateNo}" selected >${cate.bCateName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>	
						</c:if>
						<c:if test="${cate.bCateName ne post.cateName}" >
						<option value="${cate.cateNo}">${cate.bCateName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
						</c:if>						
						
					</c:forEach>
            </select>
            <br>
	            <div id="represent" class="represent-img">
					<img id="represent1" class="images" src="<%= request.getContextPath() %>/resources/buploadFiles/${post.changeName}" width="400px" height="300px">
				</div>                
				<input type="file" name="represent" style="display:none;"class="hidden" id="represent-btn" onchange="loadImg(this,1)">                            
				<input type="hidden" name ="bTContent" id ="bTContent" value="">
			<br>           
			<br>
			제목:
				<input type="text" name="bTitle" value="${post.bTitle } "><br><br>
				<textarea name="bContent" id="smarteditor" rows="10" cols="100" style="width:766px; height:412px;">${post.bContent }</textarea> 
			태그:
	    		<div id="taglist" style="display:inline;">
	    		<%int a=1; %>
	    		<c:forEach var="t" items="${detailTagList}"> 
	    			<input type='text'  readonly  class='tag' id="num<%=a %>" value='#${t}'>
	    			<%a=a+1; %>
	    		</c:forEach>
	    		
	    		</div>
				<br>
	    		<div class="inner-addon right-addon enjoy-cssx" style="float:left;">
					<input type="text"  id="test1" onKeyDown="onKeyDown();"  placeholder="#태그입력" class="form-control enjoy-css" />
	    		</div>
			<input type="button" id="savebutton" value="글쓰기" />
			${fn:length(detailTagList)} 
			<input type="hidden" name="uniNo" value="${post.uniNo }">
	</form>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
	</div>
<script>
	var num = 1;
	if(${fn:length(detailTagList)} >0){
		num=${fn:length(detailTagList)}+1;
	}
	// 태그 생성
	function onKeyDown() {
	    //엔터 눌러졌을 때 (태그 생성)
	    if (event.keyCode == 13) {
	        var a = $("#test1").val();
	        if(a!=""){
		        $("#taglist").append("<input type='text'  readonly  class='tag' id='num"+num+"' value='#"+a+"'> &nbsp;");
		        num = num + 1;
		        $("#test1").val("");
		        console.log("더해졌을때="+num);
	        };
	    }
	
	    //아무것도 없는상태에서 백스페이스 눌렀을 때(태그 제거)
	    if(num>1){
	    if ($("#test1").val() == "" && event.keyCode == 8) {
	    	$("#num" + (num-1)).remove();
	        console.log("백스페이스");
	        num = num - 1;
	        
	        console.log("빼졌을때="+num);
	    }
	    }
	}

	// 썸네일 추가 클릭했을 때
	$(function(){
	    $("#represent").click(function(e){
	       $("#represent-btn").click();
	    });   
	 });

	//썸네일 미리보기
    function loadImg(value,n){
        if(value.files && value.files[0]){
           var reader = new FileReader();
           reader.onload = function(e){
              switch(n){
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
    
	// 내용 정리, 태그 넣기
    function values(){
		//내용 정리(태그 제외)
    	var a=$("#smarteditor").val();
    	document.getElementById('bTContent').value=a.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
        
    	// 태그 넣기
    	var ab="";
        for(var i=1; i<num; i++){
            var b = $("#num"+i).val();
            ab= ab+b;
        }
        
        $("#taglist").append("<input type='hidden' name='bTag' value='"+ab+"'> &nbsp;");
    }

</script>
</body>

</html>