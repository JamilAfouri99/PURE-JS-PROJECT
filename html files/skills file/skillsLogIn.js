var inn=document.getElementById("A"),
inn2=document.getElementById("B"),
i1=document.getElementById("onei"),
i2=document.getElementById("twoi");

inn.onclick =function(){
    inn.removeAttribute("placeholder");
}
inn.onblur=function(){
    inn.setAttribute("placeholder","Username");
}
inn2.onclick=function(){
    inn2.removeAttribute("placeholder");
}
inn2.onblur=function(){
    inn2.setAttribute("placeholder","Username");
}

i1.onclick=function(){
    inn2.setAttribute("type","text");
    i1.style.display="none";
    i2.style.display="flex";
}
i2.onclick=function(){
    inn2.setAttribute("type","password");
    i1.style.display="flex";
    i2.style.display="none";
}