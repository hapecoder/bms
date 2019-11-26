//窗体加载
window.onload = function () {
    testBegin(0);
}
//测试开始
function testBegin(val) {
    var bcontent = document.getElementById("batteryIconProgress");
    var label = document.getElementById("batteryIconContent");
    for (var i = val; i <= 100; i++) {
        bcontent.style.setProperty('width',  i+'%');
        if (i <= 20) {
              bcontent.style.setProperty('background', '#ff0000');
      }
         if (i > 20) {
              bcontent.style.setProperty('background', '#ffd800');
      }
         if (i > 60) {
              bcontent.style.setProperty('background', '#00ff21');
      }
       label.innerText = ((i) + "%");
        window.setTimeout("testBegin(" + ++i + ")", 200)
       break;
      }
}
