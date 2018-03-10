$(document).ready(function() {
    $('#title-search').click(function() {
        $('[name="content"]').attr("placeholder", "以标题搜索");
    });
    $('#description-search').click(function() {
        $('[name="content"]').attr("placeholder", "以描述搜索");
    });

    var height = $("#show-photo a.img").width();
    $("#show-photo a.img").css("height", height);
    $("#show-photo ul li").css("height", height);
    $(window).resize(function() {
        var height = $("#show-photo a.img").width();
        $("#show-photo a.img").css("height", height);
        $("#show-photo ul li").css("height", height);
    });
});
function changePage(index) {
  $(".page li a").attr("id", "");
  $(".page li a").get(index-1).id = "selected";
}
