

/* start body*/

var bady=document.querySelector("#mainContainer");
var loa=document.querySelector("#load");
var sta=document.querySelector("#op");
var imm=document.querySelector("#im");
var count=document.querySelector("#threee");
function appearBody(){
    "use strict"
    bady.style.display="contents";
    loa.style.display="none";
}
setTimeout(appearBody,200);

/* End body*/


/*start list*/

var one=document.getElementById("one");
var two=document.getElementById("two");
var myDiv=document.getElementById("sos");
one.onclick=function(){
    if(myDiv.style.right=="-400px" && two.style.display=="none"){
        myDiv.style.right="0px";
        two.style.display="flex";
                one.style.display="none";
                myDiv.style.transition="all 0.5s ease-in-out";
            }else{
                myDiv.style.right="-400px";
                two.style.display="none";
            }
        }
        two.onclick=function(){
            if(myDiv.style.right=="0px" && one.style.display=="none"){
                myDiv.style.right="-400px";
                two.style.display="none";
                one.style.display="flex";
                myDiv.style.transition="all 0.5s ease-in-out";
            }else{
                myDiv.style.right="0px";
                two.style.display="flex";
            }
        }

/*End list*/


// start slider header

var imgShow=document.querySelector("img");
var back=document.querySelector("#back" );
var next=document.querySelector("#next");
var span=document.querySelectorAll(".spany > span");
var items=['../pics/cover.jpg','../pics/1.jpg','../pics/2.jpg','../pics/3.jpg']
var index=0


// add event listener

next.addEventListener("click",increment)
back.addEventListener("click",decrement)

// functions
function increment(){
    if(index<items.length-1){
        zeros()
        index++
        imgShow.src=items[index]
        span[index].setAttribute("id","activey")
    clearInterval(handleset)    }else{
        zeros()
        index=0
        imgShow.src=items[index]
        span[index].setAttribute("id","activey")
        clearInterval(handleset)
    }
}
function decrement(){
    if(index<=items.length-1 && index > 0){
        zeros()
        index--
        imgShow.src=items[index]
        span[index].setAttribute("id","activey")
        clearInterval(handleset)
    }else{
        zeros()
        index=items.length-1
        imgShow.src=items[index]
        span[index].setAttribute("id","activey");
        clearInterval(handleset)
    }
}
// console.log(items.length)
function zeros(){
    for(let i=0;i<=items.length-1;i++){
        span[i].setAttribute("id","")
    }
}

// End slider header


// start list of positions

var here=document.querySelector("#multitext")
var cards=["Front-end Developer      ","Graphic Designer       ","Freelancer      "]
var count=0
var index=0
var word=""

function handley(){
    word=cards[count]
    here.innerHTML+=word[index]
    index++
    if(index>=word.length){
        index=0
        count++
        here.innerHTML=""
    }
    if(count>=cards.length){
        index=0
        count=0
    }
}
var handleset=setInterval(handley,300)
// End list of positions


/* start slider button*/
var button=document.getElementById("buttonTestJS");
button.onclick=function(){
    open("https://skillcrush.com/blog/skills-to-become-a-front-end-developer/","_blank","","");
}
/* End slider button*/

/* start resume button*/
        var P=document.getElementById("print");
        P.onclick=function(){
            var y=window.confirm("Are you sure you want to download it?");
            if(y===true){
                print();
            }else{
                alert("sorry you can not download it if you do not sure!")
            }
        }
/* End resume button*/


/* Start my scroll*/
var uppp=document.getElementById("upIcon");
window.onscroll=function(){
    if(window.pageYOffset>600){
        uppp.style.display="flex"
    }else{
        uppp.style.display="none"
    }
}
uppp.onclick=function(){
    scrollTo(0,0);
}
/* End my scroll*/

/* start clock*/
function clok(){
    var
    H=document.getElementById("h"),
    M=document.getElementById("m"),
    S=document.getElementById("s"),
    clock=new Date(),
    hours=clock.getHours(),
    minutes=clock.getMinutes(),
    seconds=clock.getSeconds();
    if(hours <10){
        H.textContent= "0"+hours;
    }else{H.textContent=hours;}
    if(minutes <10){
        M.textContent= "0"+minutes;
    }else{M.textContent=minutes;}
    if(seconds <10){
        S.textContent= "0"+seconds;
    }else{S.textContent=seconds;}
}
        window.onload=function(){
            setInterval(clok,10)
        }
/* End clock*/

/*start text area*/
var text=document.getElementById("text"),
    num=document.getElementById("number");

    text.oninput=function(){
        num.textContent=100-this.value.length
        if(text.value.length===100){
            num.style.color="red"
        }else{
            num.style.color="#2DCC70"
        }
    }

/*End text area*/
