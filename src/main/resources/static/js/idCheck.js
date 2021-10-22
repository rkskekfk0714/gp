window.onload = function() {
  //isCheck라는 아이디를 가진 객체를 찾아서 값을 false로 설정
  document.getElementById("isCheck").value = "false";

  document.getElementById("checkId").onclick = function() {
   var sid = document.getElementById("id").value;
   if (sid == null || sid.length == 0) {
    alert("아이디를 입력하고 검사하세요");
   } else {
    //새창 출력
    window
      .open("checkId.jsp?id=" + sid, "",
        "width=400 height=400");
   }



  }



/*function openIdChk(){

    window.name = "parentForm";
    window.open("idCheckForm.html",
            "chkForm", "width=500, height=300, resizable = no, scrollbars = no");
}



//아이디 중복확인을 ajax방식으로 처리
  $("#username").keyup(function(){
   var msg="";

   if(validate_username($("#username").val())&& $("#username").val().length>2){
    //유효성 검사를 통과한 경우 중복확인을 하자
    $.ajax({
     <c:url>'>url:"<c:url value='/member/ajaxCheckId.do'/>",
     data:"username="+$("username").val(),
     dataType:"json",
     type:"get",
     success:function(res){
      //true, false
      if(!res){
       msg="이미 등록된 아이디 입니다.";
       $("#checkId").val("N");
      }else{
       msg="사용가능한 아이디 입니다.";
       $("#checkId").val("Y");
      }
      $("#errorMessage").html(msg);
     },
     error:function(xhr, status, error){
      alert(error);
     },
    });
   }else{
    //유효성 검사를 통과하지 못한 경우 - 에러 처리
    msg="아이디 규칙에 맞지 않습니다.";
    $("#checkId").val("Y");
   }
   $("#errorMessage").html(msg);
  });

 }); //document.ready

 */