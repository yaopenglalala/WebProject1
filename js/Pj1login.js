$(document).ready(function(){
  $('[type="checkbox"]').click(function(){
    if ($('[type="checkbox"]').get(0).checked){
      $('#password').attr("type","text");
    }else{
      $('#password').attr("type","password");
    }
  });
});
