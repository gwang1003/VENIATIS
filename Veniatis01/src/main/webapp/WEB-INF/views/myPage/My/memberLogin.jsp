<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/guidecss.css">
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous">
    <style>
            #dogimg {
                width: 100%;
                height: 100%;
            }
            
            #inner {
                margin-top: 10%;
            }
            </style>
</head>
<body>
<jsp:include page="../../common/menubar.jsp"/>
<div class="container">
                <div id="inner">
                    <!-- Outer Row -->
                    <div class="row justify-content-center">
                        <div class="col-xl-10 col-lg-12 col-md-9">
                            <div class="card o-hidden border-0 shadow-lg my-5">
                                <div class="card-body p-0">
                                    <div class="row">
                                <div class="col-lg-6 d-none d-lg-block">
                                
                                  <img
                                    src="logo.png"
                                    id="dogimg">
                                </div>
                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <div class="text-center">
                                                    <h1 class="h4 text-gray-900 mb-4">로그인</h1>
                                                </div>
                                                <form id="loginForm" action="login.do" method="post" onsubmit="return validate();">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control form-control-user"
                                                            name="mId" id="mId"
                                                            placeholder="아이디를 입력하세요">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-control form-control-user"
                                                            name="mPwd" id="mPwd" placeholder="비밀번호를 입력하세요">
                                                    </div>
            
                                                    <button id="loginBtn" type="submit"
                                                    class="btn btn-primary btn-user btn-block">로그인</button><br>

            
                                                </form>
                                                <hr>
                                                <div class="text-center">
                                                    <a class="small" href="forgot-password.html">비밀번호 찾기</a>
                                                    &nbsp; &nbsp;&nbsp;&nbsp;  <a class="small"
                                                        href="<%= request.getContextPath() %>/views/member/memberJoin.jsp">회원가입</a>
                                                </div>
            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                        </div>
            
                    </div>
            
                </div>
            </div></div></div>
            
                <script>
                    // 1_2. validate() 작성
                    function validate(){
                        if($("#userId").val().trim().length == 0){
                            alert('아이디를 입력하세요');
                            $("#userId").focus();
                            return false;
                        }
                        
                        if($("#userPwd").val().trim().length == 0){
                            alert('비밀번호를 입력하세요');
                            $("#userPwd").focus();
                            return false;
                        }
                        
                        return true;
                        // 여기까지 작성했으면 LoginServlet 만들러 가기~~~~
                    }
                    
                    
                    // 3. 회원가입 버튼을 눌렀을 경우 회원 가입 페이지로 이동하는 memberJoin() 함수 작성
                    function memberJoin(){
                        location.href = "<%=request.getContextPath() %>/views/member/memberJoinForm.jsp";
                    }
                </script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
crossorigin="anonymous"></script>

<jsp:include page="../../common/footer.jsp"/>
</body>
</html>