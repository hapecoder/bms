//窗体加载
window.onload = function () {
    testBegin(0);
}
//测试开始
function testBegin(val) {
    var bcontent = document.getElementById("batteryIconProgress1");
    var label = document.getElementById("batteryIconContent1");
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


    var bcontent2 = document.getElementById("batteryIconProgress2");
    var label2 = document.getElementById("batteryIconContent2");

     var i2=parseFloat(label2.innerText);
        bcontent2.style.setProperty('width',  i2+'%');
        color2=batteryColor(i2);
        bcontent2.style.setProperty('background', color2);
       label2.innerText = i2+'%';

    var bcontent3 = document.getElementById("batteryIconProgress3");
    var label3 = document.getElementById("batteryIconContent3");

     var i3=parseFloat(label3.innerText);
        bcontent3.style.setProperty('width',  i3+'%');
        color3=batteryColor(i3);
        bcontent3.style.setProperty('background', color3);
        
       label3.innerText = i3+'%';

    var bcontent4 = document.getElementById("batteryIconProgress4");
    var label4 = document.getElementById("batteryIconContent4");

     var i4=parseFloat(label4.innerText);
        bcontent4.style.setProperty('width',  i4+'%');
        color4=batteryColor(i4);
        bcontent4.style.setProperty('background', color4);
        
       label4.innerText = i4+'%';
}


function batteryColor(x){
    var color='';
             if (x<= 30) {
                  color='#ff0000';
          }
             if (x > 30) {
                  color='#ffd800';
          }
             if (x > 60) {
                  color='#00ff21';
          }
    return color
}
    
