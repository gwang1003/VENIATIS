<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body> 
		<c:if test="${ empty sessionScope.loginUser }">
			<form action="login.do" method="post">
				<table id="loginTable" style="text-align:center;">
					<tr>
						<td>아이디</td>
						<td><input type="text" name="mId"></td>
						<td rowspan="2">
							<button id="loginBtn">로그인</button>
						</td>
					</tr>
					<tr>
						<td>비밀번호</td>
						<td><input type="password" name="mPwd"></td>
					</tr>
					<tr>
						<td colspan="3">
							<a href="#">회원가입</a>
							<a href="#">아이디/비밀번호 찾기</a>
						</td>
					</tr>
				</table>
			</form>
		</c:if>
				<c:if test="${ !empty sessionScope.loginUser }">
			<h3 align="right">
				<c:out value="${ loginUser.mName }님 환영합니다!!"/>
				<c:url var="myinfo" value="#"/>
				<c:url var="logout" value="logout.do"/>
				
				<c:url var="blogMaina" value="blogMain2.do">
					<c:param name="userId" value="${loginUser.mId }"/>
				</c:url>
				<button onclick="location.href='#'">정보수정</button>
				<button onclick="location.href='${logout }'">로그아웃</button>
				<button onclick="location.href='${ blogMaina }'">내 블로그</button>
			</h3>
		</c:if>
</body>
</html>