mydata = {
	"name":"bms",
	"battery": {
        "1":{"u":"30",
             "i":"-5",
             "soc":"97"   
            },
        "2":{"u":"20",
            "i":"-4",
            "soc":"56"   
           },
        "3":{"u":"10",
           "i":"-3",
           "soc":"25"   
          },
	}
}



//窗体加载
window.onload = function () {
    testBegin(0);
}
//测试开始
function testBegin(val) {

    var bat7=document.getElementById("battery7");

    for (var i = val; i <= 100; i++) {
       

        cname7=Findcname(i);
        bat7.style.setProperty('width',i+'%');
        bat7.className=cname7;
        bat7.innerText=i+'%';


        window.setTimeout("testBegin(" + ++i + ")", 200);
        break
      }


    var bat1=document.getElementById("battery1");
    var soc1=mydata.battery[1]["soc"];
    var u1=mydata.battery[1]["u"];
    var i1=mydata.battery[1]["i"];
    bat1.style.setProperty('width',soc1+'%');
    bat1.className=Findcname(soc1);
    bat1.innerText=soc1+'%';
    $('#u1').text(u1);
    $('#i1').text(i1);
    
    var bat2=document.getElementById("battery2");
    var soc2=mydata.battery[2]["soc"];
    var u2=mydata.battery[2]["u"];
    var i2=mydata.battery[2]["i"];
    bat2.style.setProperty('width',soc2+'%');
    bat2.className=Findcname(soc2);
    bat2.innerText=soc2+'%';
    $('#u2').text(u2);
    $('#i2').text(i2);

    var bat3=document.getElementById("battery3");
    var soc3=mydata.battery[3]["soc"];
    var u3=mydata.battery[3]["u"];
    var i3=mydata.battery[3]["i"];
    bat3.style.setProperty('width',soc3+'%');
    bat3.className=Findcname(soc3);
    bat3.innerText=soc3+'%';
    $('#u3').text(u3);
    $('#i3').text(i3);


    var bat8=document.getElementById("battery8");
    bat8.style.setProperty('width','99%');
    bat8.className='progress-bar progress-bar-striped progress-bar-animated bg-success';
    bat8.innerText='99%';




}





function Findcname(x){
    var cname='';
             if (x<= 30) {
                  cname='progress-bar progress-bar-striped progress-bar-animated bg-danger';
          }
             if (x > 30) {
                  cname='progress-bar progress-bar-striped progress-bar-animated bg-warning';
          }
             if (x > 60) {
                  cname='progress-bar progress-bar-striped progress-bar-animated bg-success';
          }
    return cname
}

