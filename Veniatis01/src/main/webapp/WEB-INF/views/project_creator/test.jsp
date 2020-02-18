<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>jQuery UI Datepicker - Default functionality</title>

<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.0/themes/base/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
<script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>


<script type="text/javascript">
$(document).ready(
      function() {
         $.datepicker.setDefaults($.datepicker.regional['ko']);
         $(".startDate")
               .datepicker(
                     {
                        changeMonth : true,
                        changeYear : true,
                        nextText : '다음 달',
                        prevText : '이전 달',
                        dayNames : [ '일요일', '월요일', '화요일', '수요일',
                              '목요일', '금요일', '토요일' ],
                        dayNamesMin : [ '일', '월', '화', '수', '목',
                              '금', '토' ],
                        monthNamesShort : [ '1월', '2월', '3월', '4월',
                              '5월', '6월', '7월', '8월', '9월',
                              '10월', '11월', '12월' ],
                        monthNames : [ '1월', '2월', '3월', '4월',
                              '5월', '6월', '7월', '8월', '9월',
                              '10월', '11월', '12월' ],
                        dateFormat : "dd",
                        minDate : 0, // 선택할수있는 최소날짜, ( 0 : 오늘 이후 날짜 선택 불가)
                     });
         
      });
</script>

</head>
<body>
 <p>
  Date2s: <input type="text" id="datepicker" class="startDate"/>
 </p>
</body>
</html>
</body>
</html>