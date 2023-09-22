product_div=document.getElementById("product_div");

async function loadProducts(){
    let res = await fetch('https://dummyjson.com/products?limit=10');
    let products = await res.json();
    products.products.forEach(product => {
        product_div.innerHTML+=
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

window.onload = () =>{
    loadProducts();
}