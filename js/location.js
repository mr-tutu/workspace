function modifycss() {
    // var percent = document.getElementsByClassName("percent")[0].innerHTML = "60%"
    // // console.log(percent)
    // var per = (percent + "").replace("%", "")
    // // console.log(per)
    // var onewidth = document.getElementById("one").style.width = 470 * (per / 100)
    // console.log(onewidth)
    // document.getElementsByClassName("skill-one").style.width = 470 * (per / 100)




    //表示获取html中第1个样式表中的第1条规则
    //     document.styleSheets[0].cssRules[0].deleteRule("100%")
    //     document.styleSheets[0].cssRules[0].rule
    //     // WebkitCSSKeyFramesRule.deleteRule(“50%”);
    //     // WebkitCSSKeyFramesRule.findRule(“50%”);
    //     // WebkitCSSKeyFramesRule.insertRule(“50%”, “{left: 0px}”);
    // //     rule.deleteRule("100%");
    // //     // rule.findRule("100%");
    // //     rule.insertRule("100%", "{width: 120px}");    
}

//窗口向下移动超1000显示返回顶部按钮
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    // console.log(121);
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("totopbtn").style.display = "block";
    } else {
        document.getElementById("totopbtn").style.display = "none";
    }
};

function backtotop() {
    var timer = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 20;
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });


}
