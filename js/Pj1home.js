var switchImage;
var switchNext;
var timer;

$(document).ready(function() {
    var list = Array($("#b1"), $("#b2"), $("#b3"));
    var list1 = Array($("#r1"), $("#r2"), $("#r3"))
    var cur = 0;
    var n = list.length;
    switchImage = function(index) {
        if (cur == index) {
            return;
        }
        list[cur].fadeOut("slow");
        list[index].fadeIn("slow");
        cur = index;
        $("div#hotest-img li").attr("class","");
        $("div#hotest-img li#r" + (cur+1)).attr("class","selected");
    }
    switchNext = function() {
        switchImage((cur + 1) % n);
    }
    timer = setInterval("switchNext()", 3000);
    $("#hotest-img li").click(function() {
        if ($(this).attr("id") == "r1") {
            switchImage(0);
        } else if ($(this).attr("id") == "r2") {
            switchImage(1);
        } else if ($(this).attr("id") == "r3") {
            switchImage(2);
        }
        clearInterval(timer);
        timer = setInterval("switchNext()", 3000);
    });
    $("#left-arrow").click(function() {
        switchImage((n + cur - 1) % n);
        clearInterval(timer);
        timer = setInterval("switchNext()", 3000);
    });
    $("#right-arrow").click(function() {
        switchNext();
        clearInterval(timer);
        timer = setInterval("switchNext()", 3000);
    });
});
