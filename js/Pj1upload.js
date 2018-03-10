$(document).ready(function() {
    $("#account").mouseover(function() {
      $("#my-account").stop(true,true);
        $("#my-account").slideDown("slow");
    });
    $("#account").mouseleave(function () {
      $("#my-account").stop(true,true);
      $("#my-account").slideUp("slow");
    })
});
