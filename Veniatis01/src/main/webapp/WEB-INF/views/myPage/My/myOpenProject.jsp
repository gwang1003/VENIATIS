<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/guidecss.css">
<style>

	.box_txt {
		width:100%;
		height:100%;
	}

	.box_txt button {
		width: 10%;
		border:1px solid black;
	}
</style>
</head>
<body class="login">
<jsp:include page="../../common/menubar.jsp"/>
 <main id="omcContainer" class="cont_mypage">
                <div id="cMain">
                    <article id="mContent" class="mypage_openproject">
                        <header class="head_comm">
                            <h1 class="tit_comm">개설프로젝트</h1>
                        </header>
                        <!-- 2017-11-06 공통 탭수정 -->
                        <div class="cont_comm">
                            <div class="box_comm">
                                <div class="inner_head">
                                    <div class="box_txt">
                                        <button>모두 보기 <p> 11</p></button>
                                        <button>진행중 <p> 7</p></button>
                                        <button>마감 <p> 4</p></button>
                                    </div>
                                    
                                </div>
                                
                                
                                <!-- 프로젝트 신청목록 -->
                                <ul class="list_pjtapply">                                
                                    <li>
                                        <div class="img_thumb">
                                            <div style="width:290px;height:174px"></div>
                                        </div>
                                        <div class="box_text_area">
                                            <dl>
                                                <dt>프로젝트명</dt>
                                                    <dd class="txt_none">미작성</dd>
                                            </dl>
                                            <dl>
                                                <dt>펀딩기간</dt>
                                                    <dd class="txt_none">미작성</dd>
                                            </dl>
                                            <dl>
                                                <dt>상태</dt>       
                                                            <dd>작성중<em class="num_state">(1/5)</em></dd>
                                            </dl>
                                            <dl>
                                                <dt>등록일</dt>
                                                <dd>
                                                    
                                                    2020-01-17
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="box_btn_area">
                                                    <a class="btn_preview" href="/reward/preview/7939" title="미리보기" target="_blank">미리보기</a>											
                                                        <a class="btn_edit" href="/apply/7939/maker" title="수정하기" target="_blank">수정하기</a>
                                            <a class="btn_delete" href="javascript:void(0);" onclick="javascript:fnDeleteProject('','7939'); return false;" title="삭제하기">삭제하기</a>
                                        </div>
                                    </li>
                                </ul>
                                
                                <div id="paging" class="paging_comm">
                                       <a class="link_page on">1</a>&nbsp;
    
                                       <input id="pageIndex" name="pageIndex" type="hidden" value="1">
                                    </div>
                                </div>
                            </div>
                        </article></div>
                    
                </main></div>
<jsp:include page="../../common/footer.jsp"/>
</body>
</html>