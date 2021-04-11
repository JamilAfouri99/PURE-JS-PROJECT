var Submit=document.getElementById("Submit"),
    namy=document.querySelector(".in1"),
    nameRight=document.querySelector(".one"),
    nameError=document.querySelector(".two"),

    emaily=document.querySelector(".in2"),
    emailRight=document.querySelector(".onee"),
    emailError=document.querySelector(".twoo"),

    passy=document.querySelector(".in3"),
    passRight=document.querySelector(".oneee"),
    passError=document.querySelector(".twooo"),

    passy2=document.querySelector(".in4"),
    pass2Right=document.querySelector(".oneeee"),
    pass2Error=document.querySelector(".twoooo");


    function userName(){
        if(namy.value ==="" || namy.value.length<10){ 
            namy.setAttribute("class","error");
            nameRight.style.display="none";
            nameError.style.display="flex";
        }else{
            namy.setAttribute("class","right");
            nameRight.style.display="flex";
            nameError.style.display="none";
        }
    }

    function Emaily(){
        if(emaily.value==="" || emaily.value.length<4){
            emaily.setAttribute("class","error");
            emailError.style.display="flex";
            emailRight.style.display="none";
        }else{
            emaily.setAttribute("class","right");
            emailError.style.display="none";
            emailRight.style.display="flex";
        }
    }

    function passsy(){
        if(passy.value==="" || passy.value.length<3){
            passy.setAttribute("class","error");
            passError.style.display="flex";
            passRight.style.display="none";
        }else{
            passy.setAttribute("class","right");
            passError.style.display="none";
            passRight.style.display="flex";
        }
    }

    function passsy2(){
        if(passy2.value==="" || passy2.value != passy.value || passy2.value.length<3){
            passy2.setAttribute("class","error");
            pass2Error.style.display="flex";
            pass2Right.style.display="none";
        }else{
            passy2.setAttribute("class","right");
            pass2Error.style.display="none";
            pass2Right.style.display="flex";
        }
    }

    Submit.onsubmit=function(e){
        if(
            namy.value ==="" || namy.value.length<10 ||
            emaily.value==="" || emaily.value.length<4 ||
            passy.value==="" || passy.value.length<3 ||
            passy2.value==="" || passy2.value != passy.value || passy2.value.length<3) {
                e.preventDefault();
            }else{
                
                var r=prompt("Copy this signiture to prove your information \n 'YES'\n Thank you");
                if(r==="YES"){
                    e.preventDefault();
                    console.log(location.href="https://jamilafouri99.github.io/WEBSITE-OLD-UPDATE/");
                }else{
                    alert("sorry but you are not sure about your");
                    e.preventDefault();
                }
            }
    }
