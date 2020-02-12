//-------------------------------------------------------------------------
// HashMap prototype
//-------------------------------------------------------------------------
	function HashMap()
	{
	    // members
	    this.keyArray = new Array(); // Keys
	    this.valArray = new Array(); // Values
	}

	HashMap.prototype.put = function(key, val){
	    var elementIndex = this.findIt( key );

	    if( elementIndex == (-1) )
	    {
	        this.keyArray.push( key );
	        this.valArray.push( val );
	    }
	    else
	    {
	        this.valArray[ elementIndex ] = val;
	    }
	};

	HashMap.prototype.get = function( key ){
	    var result = null;
	    var elementIndex = this.findIt( key );

	    if( elementIndex != (-1) )
	    {
	        result = this.valArray[ elementIndex ];
	    }

	    return result;
	};

	HashMap.prototype.remove = function ( key )
	{
		
	    var result = null;
	    var elementIndex = this.findIt( key );
	  
	    if( elementIndex != (-1) )
	    {
	    	
	        var part1 = this.keyArray.slice( 0, elementIndex);
	        var part2 = this.keyArray.slice( elementIndex+1 );
	        this.keyArray = part1.concat( part2 );
	     
	        var part3 = this.valArray.slice( 0, elementIndex);
	        var part4 = this.valArray.slice( elementIndex+1 );
	        this.valArray = part3.concat( part4 );
	        
	      
	    }
	 
	    return ;
	};

	HashMap.prototype.size = function()
	{
	    return (this.keyArray.length);
	};

	HashMap.prototype.clear = function()
	{
	    for( var i = 0; i < this.keyArray.length; i++ )
	    {
	        this.keyArray.pop(); this.valArray.pop();
	    }
	};

	HashMap.prototype.keySet = function()
	{
	    return (this.keyArray);
	};

	HashMap.prototype.valSet = function()
	{
	    return (this.valArray);
	};

	HashMap.prototype.showMe = function()
	{
	    var result = "";

	    for( var i = 0; i < this.keyArray.length; i++ )
	    {
	        result += "Key: " + this.keyArray[ i ] + "\tValues: " + this.valArray[ i ] + "\n";
	    }
	    return result;
	};
	
	// Key List 반환 
	HashMap.prototype.showKeyList = function()
	{
		var retArrList = new Array();

	    for( var i = 0; i < this.keyArray.length; i++ )
	    {
	    	retArrList[i] = this.keyArray[ i ];
	    }
	    return retArrList;
	};

	 HashMap.prototype.findIt = function( key )
	{
	    var result = (-1);

	    for( var i = 0; i < this.keyArray.length; i++ )
	    {
	        if( this.keyArray[ i ] == key )
	        {
	            result = i;
	            break;
	        }
	    }
	    return result;
	};

	HashMap.prototype.findCount = function( key )
	{
	    var result = 0;

	    for( var i = 0; i < this.keyArray.length; i++ )
	    {
	    	 
	        if( this.keyArray[ i ] == key )
	        {
	        	//alert('1');
	            result = result++;
	           // break;
	        }
	    }
	    return result;
	};
	
//-------------------------------------------------------------------------
//공백이 있는 값이 있는지 체크하는 함수
//-------------------------------------------------------------------------
    function isEmpty( p_str ) {
       if( p_str == null || typeof p_str == 'undefined' || trim(p_str) == "") {
          return true;
       }
       return false;
    }
    
//-------------------------------------------------------------------------
//좌우측 공백제거 함수
//-------------------------------------------------------------------------
    function trim( p_str ) {
       return ltrim( rtrim( p_str ) );
    }


//-------------------------------------------------------------------------
//좌측 공백제거 함수
//-------------------------------------------------------------------------
    function ltrim( p_str ) {
    
       if (p_str == "") {
          return   p_str;
       }
    
       var len = p_str.length;
       var st = 0;
    
       while ((st < len) && (p_str.charAt(st) <= ' ')) {
          st++;
       }
    
       return   (st > 0) ? p_str.substring(st, len) : p_str;
    
    }

//-------------------------------------------------------------------------
//우측 공백제거 함수
//-------------------------------------------------------------------------
    function rtrim( p_str ) {
    
       if (p_str == "") {
          return   p_str;
       }
    
       var len = p_str.length;
       var st = 0;
    
       while ((st < len) && (p_str.charAt(len - 1) <= ' ')) {
          len--;
       }
    
       return   (len < p_str.length) ? p_str.substring(st, len) : p_str;
    
    }

//-------------------------------------------------------------------------
//char 별로 체크
//-------------------------------------------------------------------------
	  function containsCharsOnly( src , dest){
	     for( var i = 0 ; i < src.length ; i++){
	        if ( dest.indexOf( src.charAt(i) ) < 0 ){
	           return false;
	        }
	     }
	     return true;
	  }
	  
//-------------------------------------------------------------------------
//입력값을 대문자로 변환
//-------------------------------------------------------------------------
	 function toUpper(value) {
		 	var src = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		 	if( containsCharsOnly( value , src ) )
		 		return value.toUpperCase();
		 	return value;
	 }
	 
//------------------------------------------------------------------------- 
//입력값의 byte 길이를 리턴
//-------------------------------------------------------------------------
	function getByteLength(input){
		var byteLength = 0;
		for(var i=0;i<input.length;i++){
			var oneChar = escape(input.charAt(i));
			if(oneChar.length == 1){
				byteLength++;
			}else if(oneChar.indexOf("%u") != -1){
				byteLength += 2;
			}else if(oneChar.indexOf("%") != -1){
				byteLength += oneChar.length/3;
			}
		}
		return byteLength;
	}

//------------------------------------------------------------------------
// 설정된 바이트 만큼 문자열을 잘라내서 리턴
//-------------------------------------------------------------------------
	function cutByLen(str, maxByte) {
		
		var byteLength = 0;
		var i = 0;
		for(;i<str.length;i++) 
		{
			var oneChar = escape(str.charAt(i));
			if(oneChar.length == 1){
				byteLength++;
			}else if(oneChar.indexOf("%u") != -1){
				byteLength += 2;
			}else if(oneChar.indexOf("%") != -1){
				byteLength += oneChar.length/3;
			}

			if (byteLength > maxByte){

				break;
			}

		}
		
		return str.substring(0,i);
	}

	
//-------------------------------------------------------------------------
//숫자로만 이루어져 있는지 체크하는 함수
//-------------------------------------------------------------------------
	function is_number( p_num ) {
	   var v_chars = "0123456789";
	   return containsCharsOnly( p_num, v_chars );
	}
    
//-------------------------------------------------------------------------
//숫자(0~9, ',')로만 구성되었는지 체크하는 함수
//-------------------------------------------------------------------------
	function is_amount( p_amount ) {
	   var chars = "-,0123456789";
	   return containsCharsOnly( p_amount,chars );
	}

//-------------------------------------------------------------------------
//숫자(0~9, '.')로만 구성되었는지 체크하는 함수
//-------------------------------------------------------------------------
	function is_rate( p_rate ) {
	   var chars = "-.0123456789";
	   return containsCharsOnly( p_rate,chars );
	}

//-------------------------------------------------------------------------
//input File 이미지 여부 체크
//-------------------------------------------------------------------------
	function isImageExt(fileName){
		var index = fileName.lastIndexOf("."); 
			if( index > 0 )
			{
			// 파일 확장자
			var extension = toUpper(fileName.substring(index+1));
			if( extension=="GIF" || extension=="JPG" || extension=="JPEG" || extension=="PNG" || extension=="BMP" )
			{
				return true;
			}
			else
			{
				return false;
			}
		}// index > 0
		else
		{
			return false;
		}
	}

//-------------------------------------------------------------------------
//문자열에서 escapmXml문자를 처리하는 함수
//-------------------------------------------------------------------------
	function fn_escapeXml(tmp){
	    var tmpStr = tmp.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("'", "&#39;").replaceAll("\"", "&quot;");
	    return tmpStr;
	}
	
	String.prototype.trim = function()
	{
	  return this.replace(/(^\s*)|(\s*$)/gi, "");
	}
	String.prototype.replaceAll = function(str1, str2)
	{
	  var temp_str = this.trim();
	  temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2);
	  return temp_str;
	}

	
	
//-------------------------------------------------------------------------
//유효한(존재하는) 년(年), 월(月)인지 체크
//-------------------------------------------------------------------------
	function is_valid_yearMonth(p_yyyy, p_mm) {
		return is_valid_year(p_yyyy) && is_valid_month(p_mm);
	}

//-------------------------------------------------------------------------
//유효한(존재하는) 년(年)인지 체크
//-------------------------------------------------------------------------
	function is_valid_year(p_yyyy){
		var y = parseInt(p_yyyy,10);
		return (y >= 1800 && y <= 9999);
	}

//-------------------------------------------------------------------------
//유효한(존재하는) 월(月)인지 체크
//-------------------------------------------------------------------------
	function is_valid_month(p_mm) {
		var m = parseInt(p_mm,10);
		return (m >= 1 && m <= 12);
	}

//-------------------------------------------------------------------------
//유효한(존재하는) 일(日)인지 체크
//-------------------------------------------------------------------------
	function is_valid_day(p_yyyy, p_mm, p_dd) {
		var m = parseInt(p_mm,10) - 1;
		var d = parseInt(p_dd,10);
	
		var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
		if ((p_yyyy % 4 == 0 && p_yyyy % 100 != 0) || p_yyyy % 400 == 0) {
			end[1] = 29;
		}
	
		return (d >= 1 && d <= end[m]);
	}


//-------------------------------------------------------------------------
// 당년월의 마지막 날짜 구하는 함수
//-------------------------------------------------------------------------
	function fn_getLastDay( p_year, p_month) {
	
		var  dayOfMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	
		if ( ((p_year %4 == 0) && (p_year % 100 != 0))||(p_year % 400 == 0) )
			dayOfMonth[1] = 29;
		var v_days = dayOfMonth[p_month-1];
	
		return v_days;
	
	}

//-------------------------------------------------------------------------
//윤년체크
//-------------------------------------------------------------------------
	function is_leay_year( p_yyyy ) {
		if ((p_yyyy % 4 == 0 && p_yyyy % 100 != 0) || p_yyyy % 400 == 0) {
			return true;
		}
		return false;
	}
		
		
//-------------------------------------------------------------------------
//유효한(존재하는) 시(時)인지 체크
//-------------------------------------------------------------------------
	function is_valid_hour(p_hh) {
		var h = parseInt(p_hh,10);
		return (h >= 0 && h <= 24);
	}

//-------------------------------------------------------------------------
//유효한(존재하는) 분(分)인지 체크
//-------------------------------------------------------------------------
	function is_valid_min(p_mi) {
		var m = parseInt(p_mi,10);
		return (m >= 0 && m <= 59);
	}

//-------------------------------------------------------------------------
//유효한(존재하는) 초(秒)인지 체크
//-------------------------------------------------------------------------
	function is_valid_sec(p_ss) {
		var s = parseInt(p_ss,10);
		return (s >= 0 && s <= 59);
	}

//-------------------------------------------------------------------------
//email 의 형식에 맞는지 체크하는 함수
//-------------------------------------------------------------------------
	function is_email( p_email ) {
	
		var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
	
		if (p_email.search(format) != -1) {
			return true; //올바른 포맷 형식
		}
		alert("이메일 주소를 정확히 입력해주세요.");
		return false;
	}

//-------------------------------------------------------------------------
//휴대폰 번호의 형식에 맞는지 체크하는 함수.
//-------------------------------------------------------------------------
function is_mobile_number( phoneNum ) {

    var regExp =/(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;

    if (!regExp.test(phoneNum)) {
        alert("휴대폰번호를 정확히 입력해주세요.");
        return false
    }
    return true;

}

//-------------------------------------------------------------------------
// 입력받은 문자열에서 숫자만 필터한 문자열을 반환
//-------------------------------------------------------------------------/
	function fn_getNumber(sVal)
	{
		var pstr, sstr, ii;
		sstr = sVal;
		pstr = "";
		for(ii=0; ii<sstr.length; ii++) {
			//isNaN() : 입력파라미터의 값이 숫자면 false,숫자가 아니면 true를 반환
			if( !isNaN(sstr.substr(ii, 1)) )
				pstr = pstr + sstr.substr(ii, 1);
		}
		return pstr;
	}
		
//-------------------------------------------------------------------------
//날짜 유효성을 체크하기 사용하는 함수 변수 포함
//-------------------------------------------------------------------------
	function is_valid_date(p_date,in_param){
		var p_param = in_param || "";
		var v_date = p_date;
	
		if ( isEmpty(v_date) ) {
			alert("날짜가 입력되지 않았습니다.");
			return false;
		}
	
		v_date = fn_getNumber(v_date);
	
		if ( v_date.length != 8 ){
			alert(p_param+'날짜가 잘못 입력되었습니다.');
			return false;
		}
	
		if ( !is_number(v_date)){
			alert(p_param+'날짜는 숫자만 입력할 수 있습니다.');
			return false;
		}
	
		var v_year    = parseInt(v_date.substring(0,4),10);
		var v_month   = parseInt(v_date.substring(4,6),10);
		var v_day     = parseInt(v_date.substring(6,8),10);
	
		if ( !is_valid_year(v_year) ){
			alert(p_param+'날짜가 잘못 입력되었습니다. 년도는 1800년에서 9999년까지 입니다.');
			return false;
		}
		if ( !is_valid_month(v_month) ){
			alert(p_param+'날짜가 잘못 입력되었습니다. 달은 1월에서 12월까지 입니다.');
			return false;
		}
		if ( v_day < 1 || v_day > fn_getLastDay(v_year, v_month) ){
			alert(p_param+'날짜가 잘못 입력되었습니다.'+v_year+'년 '+v_month+'월에는 '+v_day+'일이 없습니다.');
			return false;
		}
	
		return true;
	}

//-------------------------------------------------------------------------
//시간의 유효성을 체크하기 위해 사용되는 함수
//-------------------------------------------------------------------------
	function is_valid_time( p_time ) {
	
		var v_time  = p_time;
	
		if ( isEmpty(v_time) ) {
			alert("시간을 입력해 주십시오");
			return false;
		}
	
		v_time = fn_getNumber(v_time);
	
		if ( v_time.length != 6 ){
			alert('시간이 잘못 입력되었습니다.');
			return false;
		}
	
		if ( !is_number(v_time)){
			alert('시간은 숫자만 입력할 수 있습니다.');
			return false;
		}
	
		var v_hour  = parseInt(v_time.substring(0,2),10);
		var v_min   = parseInt(v_time.substring(2,4),10);
		var v_sec   = parseInt(v_time.substring(4,6),10);
	
		if( !is_valid_hour(v_hour) ){
			alert("시간이 잘못 입력되었습니다.시간은 0~24까지 입니다.");
			return false;
		}
		if( !is_valid_min(v_min) ){
			alert("분이 잘못 입력되었습니다.분은 0~59까지 입니다.");
			return false;
		}
		if( !is_valid_sec(v_sec) ){
			alert("초가 잘못 입력되었습니다.초는 0~59까지 입니다.");
			return false;
		}
		return true;
	}


//-------------------------------------------------------------------------
//시간의 유효성을 체크하기 위해 사용되는 함수
//-------------------------------------------------------------------------
	function is_valid_timehm( p_time ) {
	
		var v_time  = p_time;
	
		if ( isEmpty(v_time) ) {
			alert("시간을 입력해 주십시오");
			return false;
		}
	
		v_time = fn_getNumber(v_time);
	
		if ( v_time.length != 4 ){
			alert('시간이 잘못 입력되었습니다.');
			return false;
		}
	
		if ( !is_number(v_time)){
			alert('시간은 숫자만 입력할 수 있습니다.');
			return false;
		}
	
		var v_hour  = parseInt(v_time.substring(0,2),10);
		var v_min   = parseInt(v_time.substring(2,4),10);
	
		if( !is_valid_hour(v_hour) ){
			alert("시간이 잘못 입력되었습니다.시간은 0~24까지 입니다.");
			return false;
		}
		if( !is_valid_min(v_min) ){
			alert("분이 잘못 입력되었습니다.분은 0~59까지 입니다.");
			return false;
		}
		return true;
	}

//-------------------------------------------------------------------------
//기간 유효성을 체크하기 위해 사용되는 함수
//is_valid_period(시작일, 종료일)
//-------------------------------------------------------------------------
	function is_valid_period( p_date1, p_date2 , p_name1 , p_name2 ) {
	
		var v_date1 = p_date1;
		var v_date2 = p_date2;
	
		var v_name1 = p_name1 || "";
		var v_name2 = p_name2 || "";
	
		if ( !is_valid_date(v_date1) ){
			return false;
		}
		if ( !is_valid_date(v_date2) ){
			return false;
		}
		if ("" == v_name1) {
			v_name1 = "시작일";
		}
		if ("" == v_name2) {
			v_name2 = "종료일";
		}
	
		if ( v_date1 > v_date2 ){
			alert(v_name1 + "("+v_date1+")은 " + v_name2 + "("+v_date2+")보다 이전이어야 합니다.");
			return false;
		}
	
		return true;
	
	}

//-------------------------------------------------------------------------
//숫자 세자리마다 콤마찍기
//-------------------------------------------------------------------------
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//-------------------------------------------------------------------------
// 글자수 길이 체크후 초과시 삭제처리
// @param aro_name {object} 길이 체크를 할 input element
// @param ari_max {number} 제한 길이
// @param displayId {string} 현재 글자수를 출력하는 HTML 요소의 아이디
// @param propertyName {string} 체크하는 속성의 이름
//-------------------------------------------------------------------------
function fc_chk_length(aro_name, ari_max, displayId, propertyName){
    var content = aro_name.value;

    if(content.length > ari_max){
        alert(propertyName + '는 최대 ' + ari_max + '자까지 작성 가능합니다.');
        aro_name.value = content.slice(0, ari_max);
    }

    $('#'+displayId).html(aro_name.value.length);
}


//-------------------------------------------------------------------------
//로그아웃
//-------------------------------------------------------------------------
function fnGoLogout() {
	location.href = "/admin/login/logout.do";
}

function openPopup(url, width, height, popupName, scrollFlag){
	
	var popWidth = width;
    var popHeight = height;
    var winHeight = document.body.clientHeight;	// 현재창의 높이
    var winWidth = document.body.clientWidth;	// 현재창의 너비
    var winX = window.screenX || window.screenLeft || 0;// 현재창의 x좌표 
    var winY = window.screenY || window.screenTop || 0;	// 현재창의 y좌표 
    var popX = winX + (winWidth - popWidth) / 2;
    var popY = winY + (winHeight - popHeight) / 2;
    
    var scrollbars = "yes";
    if(scrollFlag){
    	scrollbars = scrollFlag;
    }    
    
    window.open(url, popupName, "width=" + popWidth + ",height=" + popHeight + ",top=" + popY + ",left=" + popX + ",scrollbars=" + scrollbars);
}



/**
 * 두 날짜의 차이를 일자로 구한다.(조회 종료일 - 조회 시작일)
 *
 * @param val1 - 조회 시작일(날짜 ex.2002-01-01)
 * @param val2 - 조회 종료일(날짜 ex.2002-01-01)
 * @return 기간에 해당하는 일자
 */
function calDateRange(d1, d2)
{
    var val1 = $.trim(d1);
    var val2 = $.trim(d2);
    var FORMAT = "-";

    // FORMAT을 포함한 길이 체크
    if (val1.length != 10 || val2.length != 10){
        return null;
    }


    // FORMAT이 있는지 체크
    if (val1.indexOf(FORMAT) < 0 || val2.indexOf(FORMAT) < 0) {
        return null;
    }

    // 년도, 월, 일로 분리
    var start_dt = val1.split(FORMAT);
    var end_dt = val2.split(FORMAT);



    // 월 - 1(자바스크립트는 월이 0부터 시작하기 때문에...)
    // Number()를 이용하여 08, 09월을 10진수로 인식하게 함.
    start_dt[1] = (Number(start_dt[1]) - 1) + "";
    end_dt[1] = (Number(end_dt[1]) - 1) + "";

    var from_dt = new Date(start_dt[0], start_dt[1], start_dt[2]);
    var to_dt = new Date(end_dt[0], end_dt[1], end_dt[2]);


    return (to_dt.getTime() - from_dt.getTime()) / 1000 / 60 / 60 / 24;
}

/**
 * 오늘날짜 구하기
 * */
function getToday(){

    var date = new Date();

    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 0부터 시작하므로 1더함 더함
    var day   = date.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }

    return year +"-"+ month +"-"+ day;

}



//-------------------------------------------------------------------------
// 숫자만입력, 1000단위 콤마
//-------------------------------------------------------------------------
function inputNumberFormat(obj) {
    $(obj).keyup(function(){
        $(this).val(comma(uncomma($(this).val().replace(/[^0-9]/g,""))));
    });
}

//-------------------------------------------------------------------------
// 1000단위 콤마(,)
//-------------------------------------------------------------------------
function comma(str) {
	str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

//-------------------------------------------------------------------------
// 콤마(,) 제거
//-------------------------------------------------------------------------
function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

//-------------------------------------------------------------------------
// 하이픈(-) 제거
//-------------------------------------------------------------------------
function unHyphen(str) {
    str = String(str);
    return str.replace(/\-/g,'');
}

//-------------------------------------------------------------------------
// 예약결제 상태표시
//-------------------------------------------------------------------------
function scheduleStateTxt(scheduleState) {
	var returnTxt = "";
    if(scheduleState == '0'){
        returnTxt = "결제완료"
	}else if(scheduleState == '1'){
        returnTxt = "결제대기"
    }else if(scheduleState == '2'){
        returnTxt = "결제취소"
    }else if(scheduleState == '8'){
        returnTxt = "포인트사용"
    }else if(scheduleState == '7'){
        returnTxt = "최종결제실패"
    }else{
        returnTxt = "결제실패"
	}
    return returnTxt;
}

(function(window, document, navigator) {
    /**
	 * 혼잡한 스코프 정리를 위해, 점진적으로 공통 함수를 여기로 옮깁니다.
     */
	var CommonUtil = {};

    /**
	 * 모바일인지 여부 판단
     * @return {boolean} true면 모바일, false면 데스크탑
     */
    CommonUtil.isMobile = function() {
		var isMobile = false; //initiate as false
		// device detection
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

		return isMobile;
	};

    /**
	 * SNS 공유
     * @param {object} options
     * @param {string} options.platform SNS 서비스 종류 (facebook | twitter | kakaolink | band)
	 * @param {string} options.title 제목
	 * @param {string} options.description 설명
	 * @param {string} options.url 공유 페이지의 주소
	 * @param {string} options.image 대표 이미지 주소
     */
	CommonUtil.sendSns = function(options) {
		var platform = options.platform;
		var title = options.title;
        var description = options.description;
		var url = options.url;
		var image = options.image;

        var titleReplaced = title.replace(/<(\/)?([a-zA-Z1-9]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/g,"");
        var descriptionReplaced = description.replace(/<(\/)?([a-zA-Z1-9]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/g,"");

        if(platform === 'kakaolink' || platform === 'band'){
            if(!isMobile.any){
                alert("모바일 기기에서 이용가능한 기능입니다. 스마트폰에서 이용해주세요.");
                return false;
            }
        }

        switch (platform) {
			case 'facebook':
				FB.ui({
					method: 'share',
					href: url
				}, function() {
                    $("#sns_layer_popup").hide();
				});
				break;
			case 'twitter':
				window.open('http://twitter.com/intent/tweet?text=' + title + '&url=' + encodeURIComponent(url),
                    'intent', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
				break;
			case 'kakaolink':
                Kakao.Link.sendDefault({
                    objectType: 'feed',
                    content: {
                        title: titleReplaced,
                        description: descriptionReplaced,
                        imageUrl: image,
                        link: {
                            mobileWebUrl: url,
                            webUrl: url
                        }
                    },
                    fail:function(){
                        alert("모바일 기기에서 이용가능한 기능입니다. 스마트폰에서 이용해주세요.");
                    },
                    success:function()
                    {
                        $("#sns_layer_popup").hide();
                    }
                });
				break;
            case 'band':
                window.open("http://www.band.us/plugin/share?body="+ encodeURIComponent(titleReplaced) + encodeURIComponent('\r\n') + encodeURIComponent(url) + "&route=" + url + "", "share_band", "width=410, height=540, resizable=no");
                break;
            default:
                alert('지원하지 않는 SNS입니다.');
                return false;
		}
	};

    /**
	 * Hash fragments 값을 key, value 형태의 객체로 반환
     */
	CommonUtil.getHashParam = function() {
        var hashParams = {};
        var e,
            a = /\+/g,
            r = /([^&;=]+)=?([^&;]*)/g,
            d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
            q = window.location.hash.substring(1);

        while (e = r.exec(q))
            hashParams[d(e[1])] = d(e[2]);

        return hashParams;
    };

	/**
	 * 프로젝트 투자자 임시 테이블 _ 중간저장
	 */
    CommonUtil.setInvestorTmp = function(investorData){
    	var flag = false;
        var rewardInvestor = {}
			, rewardProject = {};

        if('Y' == investorData.simulationFlag){
            rewardInvestor.investType = "모의투자";
        }else if('N' == investorData.simulationFlag){
            rewardInvestor.investType = "투자";
        }

        /* 참여(투자)내역 값 세팅 */
		if(investorData.investorSeq) rewardInvestor.investorSeq = investorData.investorSeq;
		if(investorData.projectSeq) rewardInvestor.projectSeq = investorData.projectSeq;
		if(investorData.omcpay) rewardInvestor.omcpay = investorData.omcpay;
		if(investorData.couponId) rewardInvestor.couponId = investorData.couponId;
		if(investorData.couponPoint) rewardInvestor.couponPoint = investorData.couponPoint;
		if(investorData.paymethod) rewardInvestor.paymethod = investorData.paymethod;
		if(investorData.investorHp) rewardInvestor.investorHp = investorData.investorHp;
		if(investorData.receiveName) rewardInvestor.receiveName = investorData.receiveName;
		if(investorData.hp) rewardInvestor.hp = investorData.hp;
		if(investorData.email) rewardInvestor.email = investorData.email;
		if(investorData.postno) rewardInvestor.postno = investorData.postno;
		if(investorData.addr1) rewardInvestor.addr1 = investorData.addr1;
		if(investorData.addr2) rewardInvestor.addr2 = investorData.addr2;
		if(investorData.memo) rewardInvestor.memo = investorData.memo;
		if(investorData.supportComment) rewardInvestor.supportComment = investorData.supportComment;
		if(investorData.addAmt) rewardInvestor.addAmt = investorData.addAmt;
		if(investorData.expenseAmt) rewardInvestor.expenseAmt = investorData.expenseAmt;
		if(investorData.orderno) rewardInvestor.orderno = investorData.orderno;

        /* 프로젝트 값 세팅 */
        if(investorData.fundingType) rewardProject.fundingType = investorData.fundingType;

        var param = {
			rewardItemList: investorData.rewardItemList,
			rewardInvestor: rewardInvestor,
			rewardProject: rewardProject
		};

		$.ajax({
			method: 'POST',
			url: '/reward/save/investorTmpAjax.do',
			async: false,
			dataType : 'json',
			contentType:"application/json; charset=UTF-8" ,
			data: JSON.stringify(param),
			success: function(data) {
				if(data.rewardJoinVO.rewardInvestor.investorSeq){
					$("#investorSeq").val(data.rewardJoinVO.rewardInvestor.investorSeq);
				}
				if(data.code == 200){
                    flag = true;
				}else if(data.code == 401){
                   // - 로그인 한 사용자 없을 경우 : 로그인 페이지로 이동
                    alert("로그인 후 이용이 가능합니다.");
                    var returnUrl = "";
                    if(investorData.projectSeq){
                        returnUrl = 'returnUrl=/reward/'+investorData.projectSeq;
					}
                    $(location).attr('href', '/login/form?'+returnUrl);
                    return;
				}else{
					alert("잠시후 다시 이용해 주시기 바랍니다.");
                    if(investorData.projectSeq){
                        $(location).attr('href', '/reward/'+investorData.projectSeq);
                    }else{
                        $(location).attr('href', '/main');
					}
				}
			},
			error: function() {
				alert('잠시후 다시 이용해 주시기 바랍니다.');
                if(investorData.projectSeq){
                    $(location).attr('href', '/reward/'+investorData.projectSeq);
                }else{
                    $(location).attr('href', '/main');
                }
			}
		});
    	return flag;
	};

    /**
     * 콤마(,) 포매팅이 되있는 문자열 또는 input 요소의 문자열을 숫자로 변환
     * @param target {string|object}
     * @return {number} 변환 결과, 실패시 NaN
     */
	CommonUtil.getNumberFrom = function(target) {
		var str;

		if (typeof target === 'string') {
			str = target;
        } else if (typeof target === 'object' && typeof target.val === 'function') {
			str = target.val();
		} else {
			console.warn('CommonUtil.getNumberFrom:: 잘못된 입력입니다.');
		}

		str = (typeof str === 'string') ? uncomma(str.trim()) : '';

		return parseInt(str);
	};

    /**
     * 마우스 우클릭 || 새로고침 이벤트 방지
     * @param target {$(document)}
     * @return false
     */
    CommonUtil.setRefreshKeyControl = function(target) {
        target.document.contextmenu(function (e) {
           return false;
        });
        target.document.keydown(function (e) {
            if (e.which === 116) {
                if (typeof event == "object") {
                    event.keyCode = 0;
                }
            return false;
            } else if ((e.which === 78 || e.which === 82 || e.which === 85) && e.ctrlKey) {
                return false;
            }
        });
    };

    /**
     * 뒤로가기 이벤트 막기
     * @param target {window, history}
     */
    CommonUtil.historyBackControl = function(target) {
        target.history.pushState(null, null, target.location.href);
        target.window.onpopstate = function (event) {
            target.history.go(1);
        };
    };

    /**
	 * 특정 실수의 버림값 반환
	 * @param {number} value 원본값
	 * @param {number} exp 자리수
	 * @return {number} 변환 결과
     */
    CommonUtil.floor10 = function(value, exp) {
        return decimalAdjust('floor', value, exp);
    };

    /**
     * 특정 실수의 반올림값 반환
     * @param {number} value 원본값
     * @param {number} exp 자리수
	 * @return {number} 변환 결과
     */
    CommonUtil.round10  = function(value, exp) {
        return decimalAdjust('round', value, exp);
    };

    /**
     * 특정 실수의 올림값 반환
     * @param {number} value 원본값
     * @param {number} exp 자리수
     * @return {number} 변환 결과
     */
    CommonUtil.ceil10  = function(value, exp) {
        return decimalAdjust('ceil', value, exp);
    };

    /**
	 * CommonUtil.floor10, round10, ceil10을 위한 공통 함수
     * @param type 변환 종류,(버림, 반올림, 올림)
     * @param value 원본 값
     * @param exp 자리수
     * @returns {*}
     */
    function decimalAdjust(type, value, exp) {
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // 소수점 변환 처리
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

	CommonUtil.getTinymceConfig = function (options) {
		var contentCss = options.contentCss;
		var alignUse = options.alignUse;
		var widthRate = options.widthRate;
		var mode = options.mode;
		var initCall = options.initCall;
		var fullscreen = options.fullscreen;

    	var config = {
			selector: '#content',
			content_css : contentCss,
			plugins: [
				'advlist autolink autosave link image lists charmap print preview hr anchor pagebreak',
				'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
				'contextmenu directionality emoticons template textcolor paste textpattern'
			],
			language: 'ko_KR',
			color_map: [
				'000000', 'Black',
				'80c72d', 'Green',
				'1568a6', 'Blue'
			],
			toolbar : 'undo redo styleselect forecolor bold italic underline strikethrough superscript subscript hr blockquote | link | media | image',
			body_class: 'edit-style',
			formats: {
				underline: {inline: 'u'},
				strikethrough: {inline: 's'},
				subscript: {inline: 'sup'},
				superscript: {inline: 'sub'}
			},
			extended_valid_elements: 'area[shape|coords|href|target|onfocus]',
			style_formats: [{
				title: '큰 제목',
				block: 'h2'
			}, {
				title: '중간 제목',
				block: 'h3'
			}, {
				title: '작은 제목',
				block: 'h4'
			}, {
				title: '본문',
				block: 'p'
			}],
			forced_root_block: 'p',
			statusbar: false,
			menubar: false,
			media_live_embeds: true,
			default_link_target: '_blank',
			height: 500,
			image_title: false,
			image_description: false,
			image_caption: true,
			automatic_uploads: false,
			relative_urls: false,
			file_picker_types: 'image',
			paste_preprocess: function(plugin, args) {
				var regExp = '<table[^<]*>';
				if (args.content.match(regExp) != null) {
					alert("표는 입력할 수 없습니다.");
					args.content = "";
				}
				var styleRegExp = /([ ]+style='[^']+')|([ ]+style="[^"]+")/gi;
				args.content = args.content.replace(styleRegExp, '');

				var classRegExp = /([ ]+class='[^']+')|([ ]+class="[^"]+")/gi;
				args.content = args.content.replace(classRegExp, '');

				var idRegExp = /([ ]+id='[^']+')|([ ]+id="[^"]+")/gi;
				args.content = args.content.replace(idRegExp, '');
			},
			images_upload_handler: function (blobInfo, success, failure) {
				var xhr, formData;

				xhr = new XMLHttpRequest();
				xhr.withCredentials = false;
				xhr.open('POST', '/cmm/fms/insertEditorImageAjax');

				xhr.onload = function() {
					var json;

					if (xhr.status !== 200) {
						failure('HTTP Error: ' + xhr.status);
						return;
					}

					json = JSON.parse(xhr.responseText);

					if (!json || typeof json.location != 'string') {
						failure('Invalid JSON: ' + xhr.responseText);
						return;
					}

					success(json.location);
				};

				formData = new FormData();
				formData.append('file', blobInfo.blob(), blobInfo.filename());

				xhr.send(formData);
			},
            setup: function (editor) {
                var addEventTimer;
                var triggerClickTimer;

                function triggerClickUploadTab() {
                    var uploadTab = $('.tox-dialog__body-nav-item').eq(1);
                    if (uploadTab.length) {
                        uploadTab.trigger('click');
                        clearInterval(triggerClickTimer);
                    }
                }

                function addEventHandler() {
                    var imageToolbarButton = $('button[title="이미지 삽입/수정"]');
                    if (imageToolbarButton.length) {
                        imageToolbarButton.click(function() {
                            triggerClickTimer = setInterval(triggerClickUploadTab, 10);
                        });
                        clearInterval(addEventTimer);
                    }
                }

                editor.on('init', function () {
                    addEventTimer = setInterval(addEventHandler, 100);
                });
            }
		};

    	if (alignUse) {
    		config.toolbar = config.toolbar + ' | alignleft aligncenter alignright';
		}
    	if (widthRate != null) {
			config.width = widthRate;
		}
    	if (mode) {
    		delete config.selector;
    		config.mode = 'textareas';
		}
    	if (initCall) {
    		config.init_instance_callback = function(){
				endScript();
			}
		}
    	if (fullscreen) {
			config.toolbar = 'fullscreen | ' + config.toolbar;
		}

		return config;
	};

	CommonUtil.getSimpleTinymceConfig = function (mode) {
		var config = {
			selector: '#content',
			plugins: [
				"advlist autolink autosave link image lists charmap print preview hr anchor pagebreak",
				"searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
				"contextmenu directionality emoticons template textcolor paste textcolor colorpicker textpattern"
			],
			language: "ko_KR",
			toolbar: "undo redo | styleselect | bold italic underline strikethrough forecolor backcolor superscript subscript hr charmap emoticons blockquote | link | media | image | custom_image",
			content_css:"/omc/asset/css/edit.css",
			body_class: "edit-style",
			statusbar:false,
			menubar: false,
			media_live_embeds: true,
			default_link_target: "_blank",
			height: 500,
			relative_urls : false,
			image_title: true,
			automatic_uploads: false,
			file_picker_types: 'image',
			paste_preprocess: function(plugin, args) {
				var regExp = '<table[^<]*>';
				if (args.content.match(regExp) != null) {
					alert("표는 입력할 수 없습니다.");
					args.content = "";
				}
				var styleRegExp = /([ ]+style='[^']+')|([ ]+style="[^"]+")/gi;
				args.content = args.content.replace(styleRegExp, '');

				var classRegExp = /([ ]+class='[^']+')|([ ]+class="[^"]+")/gi;
				args.content = args.content.replace(classRegExp, '');
			},
			images_upload_handler: function (blobInfo, success, failure) {
				var xhr, formData;

				xhr = new XMLHttpRequest();
				xhr.withCredentials = false;
				xhr.open('POST', '/cmm/fms/insertEditorImageAjax');

				xhr.onload = function() {
					var json;

					if (xhr.status !== 200) {
						failure('HTTP Error: ' + xhr.status);
						return;
					}

					json = JSON.parse(xhr.responseText);

					if (!json || typeof json.location != 'string') {
						failure('Invalid JSON: ' + xhr.responseText);
						return;
					}

					success(json.location);
				};

				formData = new FormData();
				formData.append('file', blobInfo.blob(), blobInfo.filename());

				xhr.send(formData);
			},
			setup: function (editor) {
				var addEventTimer;
				var triggerClickTimer;

				function triggerClickUploadTab() {
					var uploadTab = $('.tox-dialog__body-nav-item').eq(1);
					if (uploadTab.length) {
						uploadTab.trigger('click');
						clearInterval(triggerClickTimer);
					}
				}

				function addEventHandler() {
					var imageToolbarButton = $('button[title="이미지 삽입/수정"]');
					if (imageToolbarButton.length) {
						imageToolbarButton.click(function() {
							triggerClickTimer = setInterval(triggerClickUploadTab, 10);
						});
						clearInterval(addEventTimer);
					}
				}

				editor.on('init', function () {
					addEventTimer = setInterval(addEventHandler, 100);
				});
			}
		};

		if ('faq' === mode) {
			config.toolbar = 'undo redo | styleselect | bold italic underline strikethrough forecolor backcolor superscript subscript hr charmap emoticons blockquote | link | media | image | custom_image';
		} else if ('inquiry' === mode) {
			config.selector = '#answerContent';
			config.toolbar = 'undo redo | styleselect | bold italic underline strikethrough forecolor backcolor superscript subscript hr charmap emoticons blockquote | link';
		} else if ('investor' === mode) {
			config.toolbar = 'undo redo | styleselect | bold italic underline strikethrough forecolor backcolor superscript subscript hr charmap emoticons blockquote | link | media | image | custom_image';
			config.menubar = true;
			config.height = 300;

		}

		return config;
	};

	window.CommonUtil = CommonUtil;
})(window, document, navigator);


//-------------------------------------------------------------------------
// Emojis 문자 체크
//-------------------------------------------------------------------------
function check_emojis (string) {
    var pattern = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    if(pattern.test(string)){
    	return true;
	}
	return false;
}

//-------------------------------------------------------------------------
// Emojis 문자 제거
//-------------------------------------------------------------------------
function remove_emojis (string) {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return string.replace(regex, '');
}
//-------------------------------------------------------------------------
// Text 내 URL에 대하여 하이퍼링크 삽입
//-------------------------------------------------------------------------
function addHyperLinkInText (string) {
 var regex = /((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/gi;
 return string.replace(regex, '<a href="$1" target="_blank">$1</a>');
}