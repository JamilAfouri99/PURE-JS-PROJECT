//var
var smallScreen=document.getElementById("small");
var bigScreen=document.getElementById("big");
var Equal=document.getElementById("equal");
var Clear=document.getElementById("clear");
var Delete=document.getElementById("delete");


//event listener



//function

function ope(data){
    if(data.innerHTML== "=" && bigScreen.innerHTML.length>0 ){
        bigScreen.innerHTML=eval(smallScreen.innerHTML);
    }
    
    else if(data.innerHTML== "=" && bigScreen.innerHTML.length<1){
        bigScreen.innerHTML="";
    }

    else if(data.innerHTML== "∁"){
        bigScreen.innerHTML="";
        smallScreen.innerHTML="";
    }
    else if(bigScreen.innerHTML=="" && (data.innerHTML=="/" ||data.innerHTML=="*"||data.innerHTML=="+")){
        bigScreen.innerHTML="";
    }
    else if(bigScreen.innerHTML.length>0 && (data.innerHTML=="/"||data.innerHTML=="*"||data.innerHTML=="+"||data.innerHTML=="-")){
        bigScreen.innerHTML="";
        smallScreen.innerHTML+=data.innerHTML;
    }
    else {
        bigScreen.innerHTML+=data.innerHTML;
        smallScreen.innerHTML+=data.innerHTML;
    }
}
function Back(){
    var x=bigScreen.innerHTML;
    var y=smallScreen.innerHTML;
    bigScreen.innerHTML=x.substring(0,x.length-1)
    smallScreen.innerHTML=y.substring(0,y.length-1)
}