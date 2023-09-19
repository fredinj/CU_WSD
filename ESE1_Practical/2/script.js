const uname=document.getElementById("name");
const email=document.getElementById("email");
let name_stat=false, email_stat=false;
const button=document.getElementById("btn-submit")
button.disabled=true;

uname.addEventListener("input", ()=>{
    if(uname.value.match(/^[A-Za-z\s]+$/)){
        document.getElementById("nameHelp").innerHTML="";
        name_stat=true;
        buttonState();
    }
    else{
        document.getElementById("nameHelp").innerHTML="Invalid Name";    
        name_stat=false;
        buttonState();
    }
});

email.addEventListener("input", ()=>{
    if(email.value.match(/^[A-Za-z0-9%+._-]+@[A-Za-z0-9%+._-]+\.[A-Za-z]{2,5}$/)){
        document.getElementById("emailHelp").innerHTML="";
        email_stat=true;
        buttonState();
    }
    else{
        document.getElementById("emailHelp").innerHTML="Invalid Email";    
        email_stat=false;
        buttonState();
    }
});

function buttonState(){
    if(name_stat && email_stat)
        button.disabled=false;
    else
        button.disabled=true;
}

button.addEventListener("click", ()=>{
    alert(`Thank you ${uname.value} for your message`);
});