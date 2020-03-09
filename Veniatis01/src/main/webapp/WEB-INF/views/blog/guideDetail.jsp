<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
 <meta charset="utf-8"> 
	<title>Home</title>
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
</script>
	
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
	<style>
	#btn2{
	 background-color: #40c8b5;
	}
	*{
	font-family: 'Noto Sans KR', sans-serif;
	font-size:11pt;
	}
	</style>
	 <link rel="stylesheet" href="resources/css/guidecss.css">
	     <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script>
(function($){
    jQuery(document).ready(function(){
        function initialize(){
            list_accordion();
        };
        initialize();

        function list_accordion(){
            $(".list_accor .tit_accor").on("click",function(){
                if($(this).parent().hasClass("down")){
                    //console.log("닫힌당~");
                    $(this).siblings('.cont_accor').stop().slideUp(300);
                    $(".list_accor>li").removeClass("down");
                }else{
                    //console.log("열린다~");
                    $(".list_accor>li.down").find('.cont_accor').stop().slideUp(300);
                    $(this).siblings('.cont_accor').stop().slideDown(300);
                    $(".list_accor>li").removeClass("down");
                    $(this).parent().addClass("down");
                }
            });
        }

        function toolTip(){
            $(".box_question .ico_question").click(function(){
                if($(this).siblings('.cont_q').hasClass("active")){
                    $(this).siblings('.cont_q').removeClass("active");
                }else{
                    $(this).siblings('.cont_q').addClass("active");
                }
            });
        }

        function btnTop(){
            $(".link_top").click(function(){
                $(".sticky_bar").removeClass("fixed");
            });
        }
    });

})(jQuery);

</script>	

</head>
<body>
<jsp:include page="../common/menubar.jsp"></jsp:include>
   	    <!-- header -->
<main id="omcContainer">
	<div id="cMain">
		<div class="head_guide">
			<div class="wrap_txt">
				<h3 class="tit_gudie" style="color:black;">이용가이드 <span class="sub_tit">Funding Guide</span></h3>
				<p class="sub_txt" style="color:black;">베니아티스 서비스에 대해 안내드립니다.</p>
			</div>
		</div>
		<article id="mContent" class="guide_cont">
			



			<article class="guide_article" style="width:100%;">
				<div class="inner" style="width:100%;">
					<div class="box_guide" id="comCro">
						<h2 class="tit_box">크라우드펀딩이란?</h2>
						<p class="txt_desc">
							자금을 필요로 하는 개인이나 기업, 단체를 위해 불특정 다수(Crowd)가 온라인을 통해 자금을 모으는 활동(Funding)을 일컫습니다.<br>
							누구나 아이디어를 내어 크라우드펀딩을 진행해볼 수 있고, 아이디어에 공감하는 후원자들을 통해 아이디어를 발전시킬 자금도 모을 수 있답니다.
						</p>
											</div>
                    <div class="box_guide" id="comJoi">
                        <h2 class="tit_box">회원가입</h2>
                        <ol class="list_guide">
                            <li>
                                <h3 class="tit_list">1) 회원가입</h3>
								<p class="txt_guide">사이트 우측 상단 ‘회원가입’ 클릭<br><br>일반회원/개인사업자: 개인 및 사업자등록번호가 있는 사업자<br>법인회원: 사업자등록번호와 법인등록번호가 있는 사업자</p>
                            </li>
                            <li>
                                <h3 class="tit_list">2) 이메일 인증</h3>
                                <p class="txt_guide">사용하고 있는 이메일 주소를 입력한 뒤 ‘인증메일’ 전송을 클릭. 입력하신 이메일 주소에서 인증 번호 6자리를 확인 후 인증대기 화면에서 인증 번호를 입력 후 ‘인증하기’ 버튼을 누르세요. 
                                <br>*SNS 회원가입 및 로그인 시 별도의 이메일 인증단계를 거치지 않습니다.</p>
                            </li>
                            <li>
                                <h3 class="tit_list">3) 기본정보입력</h3>
								<p class="txt_guide">회원가입에 필요한 이름, 비밀번호, 휴대폰번호를 입력하세요.</p>
                            </li>
                            <li>
                                <h3 class="tit_list">4) 가입완료 및 로그인</h3>
                            </li>
                        </ol>
                    </div>					
					<div class="box_guide faq_cont" id="comFaq">
						<h2 class="tit_box">FAQ</h2>
						<ul class="list_accor">
						
							<li> <!-- 활성화 클래스 : down  -->
								<em class="tit_accor"><span class="txt_cate">[공통]</span> 크라우드펀딩 개설자, 참여자(투자자)는 무엇인가요?</em>
								<div class="cont_accor">
									<p>-크라우드펀딩 개설자(진행자)는 구체화된 아이디어를 프로젝트를 만들어 소개합니다. 아이디어가 실현될 수 있도록 적극적인 프로젝트 홍보 활동과 더불어 후원자들과 지속적인 관계 맺을 수 있습니다.</p>
<p>&nbsp;</p>
<p>-프로젝트 참여자는 다양한 프로젝트의 혁신적인 제품과 서비스를 미리 접하고 아이디어가 실현되는 과정을 직접 경험할 수 있습니다.</p>
							    </div>
							</li>
						
							<li> <!-- 활성화 클래스 : down  -->
								<em class="tit_accor"><span class="txt_cate">[공통]</span> 후원형과 증권형 크라우드펀딩은 어떤 점이 다른 건가요?</em>
								<div class="cont_accor">
									<p>-후원형은 개인, 기업 누구나 할 수 있고 리워드는 제품과 서비스로 제공합니다. 증권형은 업력7년 미만의 비상장 주식회사의 경우 프로젝트 개설이 가능하며 채권, 주식 등으로 발행하게 됩니다.</p>
							    </div>
							</li>
						
							<li> <!-- 활성화 클래스 : down  -->
								<em class="tit_accor"><span class="txt_cate">[공통]</span> 후원형의 진행방식은 어떤 것이 있고, 어떤 차이가 있나요? </em>
								<div class="cont_accor">
									<p><strong>후원형 크라우드펀딩은 무조건리워드(Keep it all), 성공해야 리워드 (all or nothig)방식으로 나뉠 수 있습니다.</strong></p>
<p>&nbsp;</p>
<p>-무조건리워드(keep it all) 방식은 목표금액에 도달하지 못해도 모인 금액만큼 돈을 받고 참여자는 예정된 리워드를 받을 수 있습니다.</p>
<p>&nbsp;</p>
<p>-반면, 성공해야 리워드(All or nothing)방식은 목표금액이 100% 달성되어야만 프로젝트 참여 결제, 리워드가 제공됩니다. (성공해야 리워드 결제 방식은 카드결제만 가능) 프로젝트 실패 시 결제 자동 취소, 리워드 제공 불가합니다.</p>
							    </div>
							</li>
						
							<li> <!-- 활성화 클래스 : down  -->
								<em class="tit_accor"><span class="txt_cate">[공통]</span> 마이페이지에서 무엇을 확인할 수 있나요?</em>
								<div class="cont_accor">
									<p><strong>1) </strong><strong>메시지 </strong>프로젝트 개설자로부터 메시지를 받거나 보낼 수 있습니다.<br /><br /></p>
<p><strong>2) </strong><strong>최근소식</strong> 참여한 프로젝트에 대해 업데이트된 최근 소식을 확인할 수 있습니다.<br /><br /></p>
<p><strong>3) </strong><strong>계정정보</strong> 나의 개인정보(프로필, 주소, 연락처 등)를 확인, 변경이 가능합니다.<br /><br /></p>
<p><strong>4) </strong><strong>지불정보</strong> 후원형 프로젝트 참여 결제를 위한 카드번호 등록, 수정, 삭제가 가능합니다.<br /><br /></p>
<p><strong>5) </strong><strong>투자자인증 </strong>증권형 프로젝트 투자를 위해서는 비대면실명인증이 필요합니다. 투자자인증 및 투자자 유형변경의 서비스를 이용 가능합니다.<br /><br /></p>
<p><strong>6) </strong><strong>참여 프로젝트</strong> 후원형, 증권형, 모의투자 등 나의 프로젝트 참여/투자 현황 확인과 결제취소가 가능합니다.<br /><br /></p>
<p><strong>7) </strong><strong>개설 프로젝트</strong> 프로젝트 신청 및 개설한 프로젝트의 확인 및 수정과 개설자 전용 페이지로 이동이 가능합니다.<br /><br /></p>
<p><strong>8) </strong><strong>관심 프로젝트</strong> 프로젝트에 참여하기 전 관심 있는 프로젝트 선택하여 모아 볼 수 있습니다.<br /><br /></p>
<p><strong>9) </strong><strong>포인트</strong> 베니아티스에서 발급받은 포인트 번호를 등록해 후원형 프로젝트 결제 시 현금처럼 사용할 수 있습니다.<br /><br /></p>
<p><strong>10) </strong><strong>문의하기</strong> 베니아티스 사이트 이용, 결제, 프로젝트 개설 및 참여에 대한 문의를 관리자에게 보낼 수 있습니다.</p>
							    </div>
							</li>
						
							<li> <!-- 활성화 클래스 : down  -->
								<em class="tit_accor"><span class="txt_cate">[공통]</span> 회원을 탈퇴하고 싶어요.</em>
								<div class="cont_accor">
									<p>-마이페이지 ▶ 계정 정보 ▶ 회원탈퇴에서 아이디와 비밀번호 입력 후 탈퇴 가능합니다. 단, 참여한 프로젝트가 종료 전이라면 탈퇴하실 수 없습니다.</p>
<p>&nbsp;</p>
<p>-네이버와 페이스북 계정으로 회원가입이 되어 있는 경우, &lsquo;관리자에게 문의하기&rsquo;에서 탈퇴 신청이 가능합니다.</p>
							    </div>
							</li>
						
							<li> <!-- 활성화 클래스 : down  -->
								<em class="tit_accor"><span class="txt_cate">[공통]</span> 사전예약은 무엇인가요?</em>
								<div class="cont_accor">
									<p>사전예약이란 곧 진행될 프로젝트를 미리 간단하게 소개하는 곳으로 관심있는 프로젝트가 있다면 로그인 후 사전 예약할 수 있습니다. 사전 예약을 하시면 가장 먼저 프로젝트 오픈 소식을 문자로 알려드립니다. 진행될 모든 프로젝트를 사전예약으로 등록할 수 있는 것은 아니며, 아래의 경우에 해당하는 프로젝트만 등록 가능합니다.<br /><br />● 증권형: 본 프로젝트 오픈일 최소 8일 전 사전예약 프로젝트로 등록 가능한 소개 자료가 준비된 모든 프로젝트<br />● 후원형: 아래의 경우에 모두 해당되는 프로젝트<br />1) 본 프로젝트 오픈일 최소 8일 전 사전예약 프로젝트로 등록 가능하도록 소개 자료가 준비된 경우<br />2) 얼리버드, 수량한정 등의 리워드 설계를 한 경우<br />3) 참여자에게 제공하려는 리워드 제공 계획이 확실한 경우<br />4) 참여자에게 제공하려는 리워드 설명 및 사진이 충분한 경우</p>
<p><br /><span style="color: #800000;">*사전예약 프로젝트는 본 프로젝트 내용을 축약하여 베니아티스에서 직접 등록합니다. </span><br /><span style="color: #800000;">*사전예약 프로젝트로 등록했던 본 프로젝트는 오픈 예정일 오전 중 오픈됩니다.</span></p>
							    </div>
							</li>
						
							<li> <!-- 활성화 클래스 : down  -->
								<em class="tit_accor"><span class="txt_cate">[공통]</span> 회원가입을 해야만 참여(투자)할 수 있나요?</em>
								<div class="cont_accor">
									<p>베니아티스는 온라인 크라우드펀딩 플랫폼이기 때문에 회원가입을 필수로 하셔야만 참여(투자)가 가능합니다. 기존에 네이버와 페이스북 등의 계정이 있으시다면 별도의 이메일 인증단계를 거치지 않는 상대적으로 간편한 SNS 회원가입 및 로그인을 이용해주세요.</p>
							    </div>
							</li>
						
						</ul>
					</div>
				</div>
			</article>
       	</article>
	</div>
</main>



	</div>
	<!--Start of Tawk.to Script-->

<!--End of Tawk.to Script-->	


</body>
<jsp:include page="../common/footer.jsp"></jsp:include>
</html>
