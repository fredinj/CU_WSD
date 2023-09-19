const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
const button=document.getElementById("ajax");
const httpRequest=new XMLHttpRequest();

button.addEventListener("click", ()=>{
    sendReq();
});

function sendReq(){
    httpRequest.onreadystatechange=fetchJoke;
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

function fetchJoke(){
    if (httpRequest.readyState === httpRequest.DONE)
        if(httpRequest.status === 200){
            let response=JSON.parse(httpRequest.responseText);
            
            if(response.type === "twopart"){            
                document.getElementById("joke").innerHTML=
                `<p>${response.setup}</p>
                <p>${response.delivery}</p>`
            }

            else if(response.type === "single"){
                document.getElementById("joke").innerHTML=
                `<p>${response.joke}</p>`
            }
            console.log(response);
        }
}

sendReq();