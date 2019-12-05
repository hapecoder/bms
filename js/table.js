var i=0;
var x=1;
mydata = {
	"name":"bms",
	"battery": {
        "1":{"u":"30",
             "i":"-5",
             "soc":"97"   
            },
        "2":{"u":"20",
            "i":"-4",
            "soc":"96"   
           },
        "3":{"u":"10",
           "i":"-3",
           "soc":"95"   
          },
	}
}

window.onload = function () {
    $("#warningled").hide();
    updateBegin(1);
}

function updateBegin(x){
    i++;
    
    var d_n=new Date().getTime()+8*3600*1000;
    d=Highcharts.dateFormat('%H:%M:%S', d_n) ;
 
    $("tbody").append('  <tr><td>'+d+'</td> <td>'+mydata.battery[x]["i"]+'</td><td>'+
    mydata.battery[x]["u"]+'</td><td>25</td><td>'+mydata.battery[x]["soc"]+'</td></tr>');

    if(mydata.battery[x]["soc"]<96){
        $("#warningled").show(100);

    }
    if(mydata.battery[x]["soc"]>=96){
        $("#warningled").hide(100);

    }
    $("tr").eq(-2).attr("style","background-color: "); //倒数第二个变回原色
    $("tr:last").attr("style","background-color: azure");


    t=setTimeout(updateBegin, 1000, x);    
    if(i==10){clearTimeout(t);}
    

}
$(document).ready(function(){
    $(".dropdown-item").click(function(){
        var num=parseInt($(this).text());
        
        clearTimeout(t);
        $("tbody").empty();  //只删除子元素
        i=0;
        updateBegin(num);
        console.log(num);
    });
});