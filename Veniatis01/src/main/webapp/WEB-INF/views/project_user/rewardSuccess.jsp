<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="resources/css/hr.css">
<script src="resources/js/hr.js"/>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<!-- 부트 스트랩  -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
	crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
	crossorigin="anonymous"></script>
	
    <title>VENIATIS : 후원형</title>

<style>
    .div_1{
        padding: 50px 0 50px;
        text-align: center;
        background-color: whitesmoke;
        margin-bottom: 50px;
    }
    .btn_page{
        width: 25%;
        height: 50px;
        font-weight: 400;
        font-size: 1.125em;
        line-height: 50px;
        background-color: #40c8b5;
        color: #fff;
        text-align: center;
        margin:10px;
    }
    .btn_box{
        margin:10px 0 10px;            
    }
</style>
    <script type="text/javascript">
        $(document).ready(function () {
            // 참여 단계 네비게이션바 애니메이션 처리
            setTimeout(function () {
                $('.step-progress-bar').css('width', '100%');
            }, 200);

        });

    </script>
</head>

<body>
    <jsp:include page="../common/menubar.jsp" /> 
    <div id="omcWrap">
        <!-- header -->

        <!-- header -->

        <main id="omcContainer" class="cont_support">
            <!-- aside -->

            <!--  aside -->
            <h2 id="omcBody" class="screen_out">후원형 프로젝트</h2>
            <div class="cMain">
                <article id="mContent" class="project_reward">
                    <header class="head_comm">
                        <h1 id="projectName" class="tit_comm">
                                (#) 프로젝트 제목
                        </h1>
                        <div class="author_reward">
                            <span class="txt_author">by</span>

                            <span class="user_profile">
                                <span class="img_profile clear_empty_picture">

                                    <img src="test.png">

                                </span>
                                <span class="txt_name">(#)크리에이터 명</span>
                            </span>

                        </div>
                    </header>
                    <div class="cont_comm reward-join-box">


                        <div class="step-navigation-wrapper reward">
                            <div class="step-navigation-bar">
                                <div class="step-progress-bar" style="width:0%;"></div>
                            </div>
                            <div>

                                <span class="reward-join-step active" style="width: 33.33333333%">1.리워드금액선택</span>
                                <span class="reward-join-step active" style="width: 33.33333333%">2.참여하기</span>
                                <span class="reward-join-step active" style="width: 33.33333333%">3.참여완료</span>

                            </div>
                        </div>
                        <div class="box_comm">
                            <div class="div_1">
                                <span style="padding:20px 0 20px; font-weight: 900; font-size: 40px;">후원 완료</span>
                                <h4 style="padding:40px 0 40px;">참여한 프로젝트는 마이페이지에서 확인 가능합니다.</h4>
                                <div class="btn_box">
                                    <button type="button" class="btn_page">마이페이지</button>
                                    <button type="button" class="btn_page" style="background-color: #999;">홈으로</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>
            </div>
        </main>
        <!-- footer -->
        <footer id="omcFoot">

        </footer>
        <!-- footer -->
    </div>
    <jsp:include page="../common/footer.jsp" /> 
</body>

</html>