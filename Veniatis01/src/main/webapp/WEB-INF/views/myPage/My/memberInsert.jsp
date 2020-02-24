<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="resources/css/회원가입.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous">
<link rel="stylesheet" href="resources/css/guidecss.css">
</head>
<body onload="email1();">
<jsp:include page="../../common/menubar.jsp"/>
<!--  	<div class="container2"> -->
        <div class="container">
            <div class="tableArea">
                <div id="">
                    <form id="joinForm" name="joinForm" action="memberInsert.do" method="post" onsubmit="return joinValidate();"
                    enctype="multipart/form-data">
                        <div class="xans-element- xans-member xans-member-edit">
                            <h3>회원가입</h3>
                            <div class="boardWrite">
                                <table border="1" summary="">
                                    <tbody>
                                        <tr>
                                            <th scope="row">* 아이디</th>
                                            <td><input id="userId" name="mId"
                                                class="inputTypeText" placeholder="" type="text"
                                                maxlength="13" required /> <span id="pwd">(영문소문자/숫자,
                                                    4~13자)</span>
                                                <button id="idCheck" type="button">중복확인</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">* 비밀번호</th>
                                            <td><input id="userPwd" name="mPwd" maxlength="16"
                                                value="" type="password" required /> <span id="pwd">(영문
                                                    대소문자/숫자 사용가능(첫글자는 영문만 가능)  8자~14자)</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">* 비밀번호 확인</th>
                                            <td><input id="userPwd2" name="mPwd2" maxlength="16"
                                                value="" type="password" required /></td>
                                        </tr>
                                        <tr style="display: 1">
                                            <th scope="row">* 이름</th>
                                            <td><span id="name_contents"> <input type="text"
                                                    maxlength="5" id="text" name="mName" required>
                                            </span></td>
                                        </tr>
                                        <tr class="">
                                            <th scope="row">* 생년월일 (8자리 숫자로 입력 ex.19950101)</th>
                                            <td><input type="text" name="mBirth" id="birth"
                                                maxlength="8"></td>
                                        </tr>
                                        <tr class="">
                                            <th scope="row">성별</th>
                                            <td><input id="man" name="gender"
                                                value="man" type="radio" /><label for="is_sex0">남자</label> <input
                                                type="radio"id="woman" name="gender"
                                                value="woman"><label for="is_sex1">여자</label></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">주소</th>
                                            <td><input id="postcode1" name="post" class="postcodify_postcode5" placeholder=""
                                                maxlength="14" type="text" required/> 
                                                <button type="button" id="postcodify_search_button">검색</button><br>
                                                <input type="text" name="address1" class="postcodify_address" value="" style="width:300px;"/><br>
                                                <input type="text" name="address2" class="postcodify_extra_info" value="" style="width:300px;"/></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">휴대전화</th>
                                            <td>
                                                <input id="mPhone" name="mPhone" maxlength="11" type="text" required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">* 이메일 (인증 필수)</th>
                                            <td>
                                                <div id="email">
                                                     <input name="mEmail" class="emailcheck0" id="mEmail">
                                                    <button class="btn" type="button" onclick="emailCheck();"
                                                        id="emailcheck1" name="emailcheck">인증하기</button><br>
                                                        <input name="email" class="emailcheck5" id="text">
                                                        <button class="btn" type="button" onclick="emailCheck1();"
                                                        id="emailcheck2" name="emailcheck1">인증번호 확인</button><br>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">관심 분야</th>
                                            <td>
                                                <div id="email">
                                                    <input type="checkbox" name="mInterest" value="공간/리빙">공간/리빙 &nbsp;&nbsp;
                                                    <input type="checkbox" name="mInterest" value="사회이슈">사회이슈 &nbsp;&nbsp;
                                                    <input type="checkbox" name="mInterest" value="교육/출판">교육/출판 &nbsp;&nbsp;
                                                    <br>
                                                    <input type="checkbox" name="mInterest" value="문화예술">문화예술 &nbsp;&nbsp;
                                                    <input type="checkbox" name="mInterest" value="지역재생">지역재생 &nbsp;&nbsp;
                                                    <input type="checkbox" name="mInterest" value="푸드">푸드&nbsp;&nbsp;
                                                    <br>
                                                    <input type="checkbox" name="mInterest" value="테크">테크&nbsp;&nbsp;
                                                    <input type="checkbox" name="mInterest" value="뷰티/패션">뷰티/패션 &nbsp;&nbsp;
                                                    <input type="checkbox" name="mInterest" value="여행">여행 &nbsp;&nbsp;
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사진</th>
                                            <td>
                                                <div id="file">
                                                     <input type="file" id="thumbnailImg1" 
                                                     name="UserImg" onchange="loadImg(this,1)">
                                                    <div id="contentImgArea1">
                                                        <img id="contentImg1" width="120" height="100">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
    
                                    </tbody>
                                </table>
                            </div>
                            <div class="btnArea">
                        <button id="toMain" onclick="returnToMain()">메인으로</button>
                        <button id="joinBtn">가입하기</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
        <script src="//d1p7wdleee1q2z.cloudfront.net/post/search.min.js"></script>
		<script> $(function() { $("#postcodify_search_button").postcodifyPopUp(); }); </script>
        <script>
        var key;
        var okEmail = false;
                            function loadImg(value, num){
                            // value => input type="file"
                            // num => 조건문을 통해 미리보기 div 지정
                            // file이 존재하는지 조건문
                            if(value.files && value.files[0]){
                                // 파일을 읽어 들일 FileReader 객체 생성
                                var reader = new FileReader();
                                
                                // 파일 읽기가 완료 되었을 때 실행 되는 메소드 설정
                                reader.onload = function(e){
                                    switch(num){
                                    case 1:
                                        $("#contentImg1").attr("src", e.target.result);
                                        break;
                                    }
                                
                                }
                                // 파일 읽기 하는 메소드
                                reader.readAsDataURL(value.files[0]);
                            }
                        }
                        
        
        
        function emailCheck(){
        	alert("이메일이 전송되었습니다");
				var email = $("#mEmail").val();
				
				$.ajax({
					// url : 데이터를 전송할 url(필수!!!)
					url : "email.do",
					
					// data : 요청 시 전달할 파라미터 설정
					data:{email:email},
					// key:value
					
					// type : 전송 방식(GET / POST)
					type : "get",
					
					// success : Ajax 통신 성공 시 처리할 함수를 지정하는 속성
					success : function(data){
						// result 매개변수 : 서버에서 응답이 왔을 때 그 값이 저장 되는 변수
						// 매개변수명 임의 지정 가능
						key = data;
					},
					
					// error : Ajax 통신 실패 시 처리할 함수를 지정하는 속성
					error : function(){
						console.log('Ajax 통신 실패...');
						checkEmail = false;
					}					
				});
				
        }
        
       function emailCheck1() {
    	   var code = $(".emailcheck5").val();
			if(key == code) {
				alert("인증되었습니다.")
				okEmail = true;
			}else {
				alert("인증번호가 일치하지 않습니다.")
			}
       }
        
            // 1. 메인으로 돌아가기
            function returnToMain(){
                location.href="<%= request.getContextPath() %>";
            }
    
            // 2. 유효성 검사
            function joinValidate(){
                if(!(/^[a-z][a-z\d]{3,11}$/.test($("#joinForm input[name=userId]").val()))){
                    alert('아이디는 영소문자로 시작해서 4~12자 입력(숫자 포함 가능)');
                    $("#joinForm input[name=mId]").select();
                    return false;
                }
                
                if($("#joinForm input[name=mPwd]").val() != $("#joinForm input[name=mPwd2]").val()){
                    $("#pwdResult").text("비밀번호 불일치").css("color","red");
                    return false;
                }
                
                if(!(/^[가-힣]{2,}$/.test($("#joinForm input[name=mName]").val()))){
                    alert('이름은 한글로 2글자 이상 입력');
                    $("#joinForm input[name=mName]").select();
                    return false;
                }	
                
                if(!(/^[a-zA-Z][a-zA-Z\d]{8,13}$/.test($("#joinForm input[name=mPwd]").val()))){
                    alert('비밀번호는 8자 이상 15자 미만으로 숫자와 영문(대, 소문자)만 입력해주세요(첫글자는영어만 사용가능)');
                    $("#joinForm input[name=mPwd]").select();
                    return false;
                }	 
                
                if(okEmail == false) {
                	alert("이메일 인증을 해주세요.")
                	return false
                }
                
                
                return true;		
            }
             function sample4_execDaumPostcode() {
                 new daum.Postcode(
                         {
                            oncomplete : function(data) {
                               // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
    
                               // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                               // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                               var addr = ''; // 주소 변수
                               var extraAddr = ''; // 참고항목 변수
    
                               //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                               if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                                  addr = data.roadAddress;
                               } else { // 사용자가 지번 주소를 선택했을 경우(J)
                                  addr = data.jibunAddress;
                               }
    
                               // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                               if (data.userSelectedType === 'R') {
                                  // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                                  // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                                  if (data.bname !== ''
                                        && /[동|로|가]$/g.test(data.bname)) {
                                     extraAddr += data.bname;
                                  }
                                  // 건물명이 있고, 공동주택일 경우 추가한다.
                                  if (data.buildingName !== ''
                                        && data.apartment === 'Y') {
                                     extraAddr += (extraAddr !== '' ? ', '
                                           + data.buildingName
                                           : data.buildingName);
                                  }
                                  // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                                  if (extraAddr !== '') {
                                     extraAddr = ' (' + extraAddr + ')';
                                  }
                               }
                               // 우편번호와 주소 정보를 해당 필드에 넣는다.
                               document.getElementById('postcode1').value = data.zonecode;
                               document.getElementById("addr1").value = addr;
                               // 커서를 상세주소 필드로 이동한다.
                               document.getElementById("addr2")
                                     .focus();
                            }
                         }).open();
                }
             <!--  // 우편번호 서비스 --> 
    
        
        $(function(){
            
            var isUsable = false;
            // 아이디 중복 시 false, 아이디 사용 가능 시 true -> 나중에 유효성 검사
            
            $("#idCheck").click(function(){
                var userId = $("#joinForm input[name='userId']");
                
                if(!userId || userId.val().length < 4){
                    alert("아이디는 최소 4자리 이상이어야 합니다.");
                    userId.focus();
                }else{
                    // ajax로 중복 여부 확인
                    $.ajax({
                        url : "<%=request.getContextPath()%>/IdCheckServlet",
                        type : "post",
                        data : {userId:userId.val()},
                        success : function(data){
                            if(data == "fail"){
                                alert('사용할 수 없는 아이디입니다.');
                                userId.focus();
                            }else{
                                if(confirm("사용 가능한 아이디입니다. 사용하시겠습니까?")){
                                    userId.prop('readonly', true); 
                                    // -> 더 이상 userId에 값 입력해서 변경할 수 없도록
                                    isUsable = true;
                                    // -> 사용 가능하다는 flag 값
                                }else{
                                    userId.focus();
                                }
                            }
                            if(isUsable){
                                // 아이디 중복 체크 후 사용 가능한 아이디이며 사용하기로 한 경우
                                // 회원가입 버튼 활성화
                                $("#joinBtn").removeAttr("disabled");
                            }
                        },
                        error : function(){
                            console.log('서버 통신 안됨');
                        }
                    });
                }
            });
        });
    
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>
