async function fetchJson(){
    let response = (await fetch("./jokes.json"));
    let json = await response.json()
    json.map((joke)=>{
        document.getElementById("jokes").innerHTML+=
        `
            <li class="list-group-item"><b>Category</b>: ${joke.Category}<br>
            <b>Joke</b>: ${joke.Joke}</li>
        `;
    })
}

fetchJson();