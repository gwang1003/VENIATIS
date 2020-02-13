<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/guidecss.css">
</head>
<body class="login">
<jsp:include page="../../common/menubar.jsp"/>
 <div id="omcIndex">
            <a href="#omcGnb" class="shortcut">주메뉴 바로가기</a>
            <a href="#omcSearch" class="shortcut">검색 바로가기</a>
            <a href="#omcBody" class="shortcut">본문 바로가기</a>
        </div>
            <main id="omcContainer" class="cont_mypage">
            
                <div id="cMain">
                    <article id="mContent" class="my_interest_prj">
                        <header class="head_comm">
                            <h1 class="tit_comm">관심프로젝트</h1>
                            <div class="area_delete_selected">
                                <button type="button" class="btn_del" id="btn_del">선택삭제</button>
                            </div>
                        </header>
                        
                        
                        
                        <div class="wrap_project">
                            <span class="screen_out">프로젝트 목록</span>
                            <ul class="list_prj">
                                
                                
                                <li class="prj_type_support"> <!-- 후원형 프로젝트일 경우 class="prj_type_support" -->
                                
                                
                                
                                    <label for="chkPrj_0" class="chk_comm">
                                        <input type="hidden" name="projectSeq" value="7779">
                                        <input type="hidden" name="projectType" value="R">
                                        <input type="hidden" name="createId" value="236857">
                                        <input type="checkbox" id="chkPrj_0" name="deleteCheck" class="inp_chk">
                                        <span class="chk_square"><span class="fa fa-check"></span></span>
                                        <span class="txt_cont">프로젝트 체크</span>
                                    </label>
                                    <div class="box_project">
                                        <div class="related_words">
                                            <a href="/reward/7779" class="link_card">
                                                <span class="thumb_g" style="background-image:url('/uploads/reward/REWARD_20191130033639099.jpg')"></span>
                                            </a>
                                        </div>
                                        <div class="info_project">
                                            <span class="screen_out">프로젝트 제목</span>
                                            <h3 class="tit_project">
                                            <a href="/reward/7779">
                                            영화 〈1975.김상진〉</a></h3>
                                            
                                            
                                                <p class="txt_desc"><span class="screen_out">프로젝트 설명</span>시대의 불꽃 김상진, 영화로 깨어나다</p>
                                            
                                            
    
                                            
    
    
    
    
    
    
    
    
        
            
        
        
    
    <span class="user_profile">
        <span class="img_profile clear_empty_picture">
            
                
                    <img src="/uploads/member/profile/MEMBER_20191130114112328.png" style="background: rgb(255, 255, 255);">
                
                
            
        </span>
        <span class="txt_name">(주)이야기농업</span>
    </span>
    
                                            <span class="txt_cate"><span class="screen_out">카테고리</span>문화예술</span>
                                        </div>
                                        <div class="state_project">
                                            
                                            
                                                <p class="txt_state"><span class="num">83</span>명이 프로젝트를 참여했습니다.<br>
                                                총 <span class="num">26,840,000원</span> 모집<span class="txt_success">성공</span></p>
                                        
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
    
                        
                    </article>
                </div>
            </main>
            </form>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>