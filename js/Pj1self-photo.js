$(document).ready(function() {
    $('[name="edit"]').click(function(){
      window.location.href="Pj1modify.html";
    });
});

function changePage(index) {
  $(".page li a").attr("id", "");
  $(".page li a").get(index-1).id = "selected";
}
