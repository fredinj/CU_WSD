const pattern_email=/^[a-zA-Z0-9_.%+-]+@[a-zA-Z0-9_.]+\.[a-zA-Z]{2,7}$/;
const pattern_special=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]+/;
const pattern_alpha=/[A-Za-z]+/;
const pattern_num=/[0-9]+/
const pattern_min=/.{8,}/

let user_email=document.getElementById("user_email");
let user_password=document.getElementById("user_password");
let user_password_confirm=document.getElementById("user_password_confirm");
let user_dob=document.getElementById("user_dob");
let submit_btn = document.getElementById("submit_btn");
let verify_dob=false, verify_email=false, verify_password=false, verify_password_confirm=false;

submit_btn.disabled = true;

// Email validaion
user_email.addEventListener("input", () =>{
    if(pattern_email.test(user_email.value))
    {
        verify_email=true;
        user_email.style.borderColor="green";
        document.getElementById("emailHelp").style.display = "none";
    }
    else
    {
        verify_email=false;
        user_email.style.borderColor="red";
        document.getElementById("emailHelp").style.display = "inline";
    }
    submit_state();
});

// Password validation
user_password.addEventListener("input", () =>{
    if(pattern_special.test(user_password.value) && pattern_alpha.test(user_password.value) && pattern_num.test(user_password.value) && pattern_min.test(user_password.value))
    {
        verify_password=true;
        user_password.style.borderColor="green";
        document.getElementById("passwordHelp").style.color = "green";
        document.getElementById("passwordHelp").innerHTML = "Valid Password"
        document.getElementById("passwordHelp").style.display = "inline";
    }
    else
    {    
        verify_password=false;
        user_password.style.borderColor="red";
        document.getElementById("passwordHelp").style.color = "red";
        document.getElementById("passwordHelp").innerHTML = "Include special symbols, alphabets and numbers. Min 8 characters"
        document.getElementById("passwordHelp").style.display = "inline";
    }
    submit_state();
});

// Password confirm validation
user_password_confirm.addEventListener("input", () =>{
    if(user_password.value === user_password_confirm.value)
    {    
        verify_password_confirm=true;
        user_password_confirm.style.borderColor="green";
        document.getElementById("passwordConfirmHelp").style.display = "none";
    }
    else
    {    
        verify_password_confirm=false;
        user_password_confirm.style.borderColor="red";
        document.getElementById("passwordConfirmHelp").style.color = "red";
        document.getElementById("passwordConfirmHelp").innerHTML = "Match the entered password";
        document.getElementById("passwordConfirmHelp").style.display = "inline";
    }
    submit_state();
});


// DOB validation
user_dob.addEventListener("input", () => {
    let user_dob_value = new Date(user_dob.value);
    let today = new Date();
    let age = today.getFullYear() - user_dob_value.getFullYear();

    if (user_dob_value.getMonth() > today.getMonth() || (today.getMonth() === user_dob_value.getMonth() && user_dob_value.getDate() > today.getDate()))
        age--;

    if (age < 18)
    {
        verify_dob = false;
        user_dob.style.borderColor="#dee2e6";
        document.getElementById("dobHelp").innerHTML = "You must be atleast 18 years of age or older."
        document.getElementById("dobHelp").style.display = "inline";
    }
    else
    {
        verify_dob = true;
        user_dob.style.borderColor="green";
        document.getElementById("dobHelp").style.display = "none";
    }
    
    submit_state();
});

const submit_state = () => {
    if (verify_dob && verify_email && verify_password && verify_password_confirm)
    {
        submit_btn.disabled = false;
        document.getElementById("form_box").style.borderColor="green";
    }
    else
    {
        submit_btn.disabled = true;
        document.getElementById("form_box").style.borderColor="black";
    }
};