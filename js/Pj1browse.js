function changePage(index) {
  $(".page li a").attr("id", "");
  $(".page li a").get(index-1).id = "selected";
}
