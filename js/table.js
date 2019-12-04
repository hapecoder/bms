var i=0;
window.onload = function () {
    
    updateBegin();
}

function updateBegin(){
    i++;
    console.log(i);

    var d_n=new Date().getTime()+8*3600*1000;
    d=Highcharts.dateFormat('%H:%M:%S', d_n) ;
 
    $("tbody").append('  <tr><td>'+d+'</td> <td>-5</td><td>24</td><td>97</td></tr>');
    $("tr").eq(-2).attr("style","background-color: ");
    $("tr:last").attr("style","background-color: azure");
    t=setTimeout(updateBegin, 1000);    
    if(i==10){clearTimeout(t);}
    

    

}