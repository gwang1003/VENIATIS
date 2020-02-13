<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5e3c0216298c395d1ce685b1/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>    <link rel="stylesheet" type="text/css" href="resources/css/회원가입.css">
	     <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous">
    
</head>
<body>
<jsp:include page="menubar.jsp"></jsp:include>
zzz
        <script>
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
            window.open("emailCheckForm.jsp", "checkForm", "width=400, height=200");
        }
        
            // 1. 메인으로 돌아가기
            function returnToMain(){
                location.href="<%= request.getContextPath() %>";
            }
    
            // 2. 유효성 검사
            function joinValidate(){
                if(!(/^[a-z][a-z\d]{3,11}$/.test($("#joinForm input[name=userId]").val()))){
                    alert('아이디는 영소문자로 시작해서 4~12자 입력(숫자 포함 가능)');
                    $("#joinForm input[name=userId]").select();
                    return false;
                }
                
                if($("#joinForm input[name=userPwd]").val() != $("#joinForm input[name=userPwd2]").val()){
                    $("#pwdResult").text("비밀번호 불일치").css("color","red");
                    return false;
                }
                
                if(!(/^[가-힣]{2,}$/.test($("#joinForm input[name=userName]").val()))){
                    alert('이름은 한글로 2글자 이상 입력');
                    $("#joinForm input[name=userName]").select();
                    return false;
                }	
                
                if(!((/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9가-힣]).{8,}/.test($("#joinForm input[name=userPwd]").val())))){
                    alert('비밀번호는 8자 이상으로 영문 대소문자, 숫자, 특수문자 1개 이상 포함해주세요');
                    $("#joinForm input[name=userPwd]").select();
                    return false;
                }	
                
                if($(".emailcheck").length==0){
                    alert('이메일 인증을 해주세요');
                    return false;
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
</body>
</html>