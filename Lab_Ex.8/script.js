const product_div=document.getElementById("product_div");
const cat_div=document.getElementById("category");
const search_form=document.getElementById("search_form");
const search_content=document.getElementById("search_content");

// Initial products load
async function loadProducts(){
    let res = await fetch('https://dummyjson.com/products?limit=20')
        .then(products => products.json())
        .then(products_json => {
            products_json.products.forEach(product => {
                product_div.innerHTML+=
                `  
                <div class="card" style="width: 18rem;">
                    <img src="${product.thumbnail}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text"><b>Price</b>: \$${product.price}
                        <br><b>Category</b>: ${product.category}
                        </p>
                        <p class="card-text">${product.description}</p>
                        </div>
                </div>
                `
            });
        });
    
    res = await fetch('https://dummyjson.com/products/categories')
        .then(products => products.json())
        .then(products_json => {
            products_json.forEach(cat => {
                cat_div.innerHTML += `<option value="${cat}">${cat}</option>`;
            });
        });
}

// Searching
search_form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    search_content.innerHTML='';
    let search_term=e.target.search_term.value;
    if(search_term.length !== 0){
        let res= await fetch(`https://dummyjson.com/products/search?q=${search_term}`)
            .then(products_raw => products_raw.json())
            .then(products_json =>{
                
                //sorting   
                if(e.target.price_sort.checked)
                    products_json.products = products_json.products.sort((a,b) => a.price - b.price);

                //enforcing category in search
                let cat_value=e.target.category.value;
                if(cat_value !== "all")
                    products_json.products = products_json.products.filter((item) => item.category == cat_value);              
                
                if(products_json.products.length !== 0){
                    products_json.products.forEach(product => {
                        search_content.innerHTML+=
                        `
                        <div class="card" style="width: 18rem;">
                            <img src="${product.thumbnail}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <b><p class="card-text">Price</b>: \$${product.price}</p>
                                <p class="card-text">${product.description}</p>
                                </div>
                        </div>
                        `
                    });
                }
                else
                    search_content.innerHTML= `<p>No results for the entered search term</p>`;
            });
    }
    else
        search_content.innerHTML = `<p>Enter a search term</p>`;
});

window.onload = () =>{
    loadProducts();
}