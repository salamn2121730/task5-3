fetch('https://restcountries.com/v3.1/all').then(function(result){
    return result.json();
}).then(function(result){
    console.log(result);
display(result)

})

const flages = document.querySelector(".flag");

function display(arr){
    // console.log(arr);
    
arr.forEach((element) => {

    flages.innerHTML +=`<li><img class="image" src=${element.flags.svg}>${element.cca2}</li>`



});
}

fetch('https://dummyjson.com/products').then(function(result){
    return result.json();
}).then(function(result){
    console.log(result);
displaycard(result.products)

})
const card = document.querySelector(".cardarrivals");
function displaycard(result){
     
for (let index = 0; index < 5; index++) {
    const element = result[index];
    card.innerHTML +=`<div class="card"><img  class="imgarrival" src=${element.images[0]}>
     <h2 class="text-center">${element.title}</h2>
     <p class="text-center">*****</p>
    <p class="text-center">${element.price}$</p></div>`
}
}
