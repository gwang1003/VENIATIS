# VENIATIS
> 크라우드 펀딩 지원 웹 사이트 프로젝트입니다. <br>
<b>작업 기간</b> : 2020. 01. 18 ~ 2020. 03. 23 <br>
4인 팀프로젝트로 저는 커뮤니티 기반의 <b>'블로그 서비스'</b> 역할을 분담하였습니다.

## 개발 환경
- Java JDK 1.8 / Spring 3.1 / Tomcat 8.5
- Oracle 11 / Mybatis 3.4
- Javascript / JQuery / Ajax
- Html / CSS3 / Bootstrap
- API : KaKao API, Naver Developer, OpenWeather

## 주요 이슈
1. 회원 고유 블로그 주소 지정
   - GET 방식을 사용해 URL형태로 표현하는 것에 대해 많은 고민을 하였습니다.처음에는 단순하게 포스트 번호로만 주소창을 표현할까 생각했지만, 'BLOG 서비스'는 특정 페이지를 타 유저에게 접속하게 하는 것이 주 목적이므로 주소창에 유저의 아이디와 고유의 글번호가 필요하다고 생각해 유저별 포스트 고유번호를 저장하는 UNINO 컬럼을 생성하였습니다.<br>
   구현된 주소창 : `localhost:8800/veniatis/blogDetail.do?userId=user03&uniNo=1`
2. 다양한 API 사용
   - Naver Developer(네이버 스마트 에디터)
   - 카카오 개발자 센터(카카오톡 공유, 카카오맵)
   - HTML5 Geolcation(위도,경도 추출)
   - OpenWeatherMap(현재 날씨) 


## 구현 내용
* 블로그 서비스
    * 블로그 메인 홈
         - 알림 기능 : 타 회원이 자신의 게시글에 댓글을 달거나 좋아요를 했을 경우 알림 표시됨. X를 통해 제거 가능. + 페이징 처리
         - 인기글 표시 : 좋아요가 가장 많은 게시글 순서대로 정렬함.
         - 구독 블로그 최신글 : 자신이 구독한 블로그의 일주일 내로 작성된 글이 있을 경우 표시됨.
    * 블로그 생성
         - 블로그에 접속 했을 때 Controller에서 생성여부 확인 후 처음 접속한 것이라면 자동으로 블로그가 생성 됨.
         - 블로그 제목과 소개글은 기본값으로 설정 됨.
    * 포스트 작성 / 수정 / 삭제
         - 썸네일 입력
         - 네이버 스마트 에디터를 통해 글 작성
         - 태그 입력 : JQuery를 이용하여 input 창에 엔터 입력시 태그 생성, 비어있는 상태에서 백스페이스 입력 시 태그 제거
    * 블로그 메인 
         - 썸네일과 함께 최신순대로 포스트 정렬 + 페이징 처리
         - 타인 블로그 접속 시 블로그 소개글 영역에 '구독하기' 버튼 출현. 클릭 시 Ajax를 이용해 구독목록 추가, '구독해제' 로 텍스트 변경됨.( 구독해제 동일하게 AJax 이용, 해제시 다시 '구독하기' 텍스트로 변경 됨.
         - 우측 사이드바 : 검색, 카테고리(카테고리별 포스트 정렬), 해시태그(해시태그별 포스트 정렬), 현재 위치에 기반한 날씨(OpenWeather API 사용), 시간, 현재 위치(KaKao Map API 사용)
    * 포스트 상세 
         - 포스트 내용 열람 가능
         - 좋아요 : 좋아요를 이미 했을 시에 빨간색 하트 이미지 출현, 미반영 시에 검정 하트 출현. 버튼 클릭 시 Ajax를 이용하여 좋아요 반영, 이미지 변경 됨(좋아요 된 상태에서 다시 클릭 했을 시에는 역시 Ajax를 이용하여 좋아요 취소)
         - 스크랩 : 타인의 블로그에 접속했을 때 버튼 출현, 포스트 제목 + 내용 + 추가 메모 내역을 스크랩 함. 스크랩 될 때 제목 앞에 [스크랩] 이라고 표시됨.
         - SNS 공유 : 트위터 - a태그를 이용해 트위터로 포스트 내용을 공유함 / 카카오톡 : Kakao 공유 API를 통해 카카오톡으로 포스트 내용을 공유함
         - 댓글 : Ajax를 이용하여 댓글 입력. 수정/ 삭제 역시 Ajax 이용
         - 답글 : Ajax를 이용하여 답글 입력. 수정/ 삭제 역시 Ajax 이용 (답글을 불러오기 위해 댓글조회 Ajax를 동기식으로 변경하고, 한 개의 댓글을 불러올 때 답글 Ajax를 동기식으로 작성하여 동시 호출시시킴). margin-left 값을 주어 일반 댓글인지 구별 가능
    * 블로그 관리     
         - 기본정보 관리 : 블로그 이름, 소개글 변경
         - 게시글 관리 : 포스트 내역 조회, 삭제, 카테고리 이동
         - 카테고리 관리 : 카테고리 추가, 이름 변경, 제거
         - 블로그 꾸미기 : colorpicker를 이용해 배경 색 변경, 우측 사이드바 내역(태그,날씨,시간) 변경
         - 구독 관리 : 구독한 블로그 조회, 구독 

## 코드 소개
 - 블로그 메인화면을 뷰로 보내기 위한 controller 코드
```sh
	@RequestMapping("blogMain.do")
	public ModelAndView blogList(ModelAndView mv, @RequestParam(value = "page", required = false) Integer page,
			HttpServletRequest request, @RequestParam("userId") String userId) {
		
      // get방식을 이용하여 RequestParam을 통해 userId값을 가져오고 userId를 Service로 보내 DB에서 유저 정보 가져오기
		Member m = mService.selectOneMember(userId);
		HttpSession session = request.getSession();
		Member nowUser = (Member) session.getAttribute("loginUser");
		
		// 유저에 할당하는 블로그 정보를 갖고온다.
		BlogDetail bd = bService.selectBlogDetail(m.getmNo());
		
		if (bd == null) {
			// 만약에 그 블로그 정보가 비어있다면? 블로그 서비스에 처음 접속하는 것 이므로 블로그를 생성한다.
			Member newM = mService.selectOneMember(userId);
			newM.setmName(newM.getmName() + " 님의 블로그입니다.");
			bService.insertBlogDetail(newM);

			// 기본 카테고리도 만들어준다.
			bService.insertNewCate(newM.getmId());
			
			// 다 갖추어졌으니 블로그 정보를 갖고온다.
			bd = bService.selectBlogDetail(m.getmNo());
		}

		// 카테고리 목록 갖고오기
		ArrayList<BlogCate> cate = bService.selectCateList(userId);

		// 포스트 목록 갖고오기
		int currentPage = page != null ? page : 1;
		ArrayList<BlogPost> post = bService.selectPostList(userId, currentPage);

		// 태그 전체 갖고오기
		// 1. 전체 게시글을 갖고온다 (한개의 게시글당 여러태그가 존재하므로
		ArrayList<BlogPost> allPost = bService.selectPostList(userId);
		// 태그 목록을 한 곳에 담을 String 변수를 선언한다.
		String allTag = "";
		
		// 2. allPost에 태그가 있다면 allTag 변수에 추가한다.
		for (int i = 0; i < allPost.size(); i++) {
			if (allPost.get(i).getbTag() != null) {
				allTag = allTag + allPost.get(i).getbTag();
			}
		}
		
		// 3. split 메소드를 통해 tag 배열에 담는다.
		String tags[] = allTag.split("#");
		
		// 4. ArrayList에 담는다
		ArrayList<String> realtags = new ArrayList();

		for (int i = 0; i < tags.length; i++) {
			realtags.add(tags[i]);
		}
		
		// 5. 중복제거
		for (int i = 0; i < realtags.size(); i++) {
			for (int j = 0; j < realtags.size(); j++) {
				if (i == j) {

				} else if (realtags.get(j).equals(realtags.get(i))) {
					realtags.remove(j);
				}
			}
		}

		// 지금 접속하려는 블로그가 나의 구독상탠지 아닌지 알아보기
		// 1.먼저 내 구독리스트를 갖고 온다
		//   구독 블로거들 ID를 갖고 온다. subId에 담겨져 있음
		ArrayList<BlogSub> subList = bService.selectSubList(nowUser.getmId());
		// 2. 비교한다. true면 구독 되어있는 상태, false면 미구독 상태
		boolean sub = false;
		for (int i = 0; i < subList.size(); i++) {
			if (subList.get(i).getSubId().equals(userId)) {
				sub = true;
			}
		}

		mv.addObject("subtf", sub);// 구독확인
		mv.addObject("bd", bd); // 블로그디테일
		mv.addObject("user", m); // 유저(블로그주인)
		mv.addObject("tags", tags); // 태그
		mv.addObject("cate", cate); // 카테고리
		mv.addObject("post", post); // 포스트목록
		mv.addObject("tags", realtags); // 태그
		mv.addObject("pi", BlogPagination.getPageInfo()); /// 페이징바
		mv.setViewName("blog/blogMain2");

		return mv;
	}
```
