let container = document.createElement("div");
container.setAttribute("class","container");

let row = document.createElement("div");
row.setAttribute("class","row");

container.append(row);

async function getMakeupdata()
{
    try{
    let result=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
    let data1 = await result.json();
displayData(data1);
    }
catch(error){console.log(error)
}}
getMakeupdata();
function displayData(data1){
    try{
    for(let i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
         <div class="card h-100">
   <div><h3 id="title" class="text-center">Brand:${data1[i].brand}</h3>
   <h3 class="text-center">Name:${data1[i].name}</h3>
   <h3 class="text-center">Price:${data1[i].price}</h3></div>
   <img src="${data1[i].image_link}"  class="card-img-top" alt="product_image">
  <h5 class="card-title">
    <p class="card-text">ProductLink:${data1[i].product_link}
     <p class="card-text">Description:${data1[i].description}</p>
  </h5></div>
</div></div>`
    }
}
    catch (error){
        console.log(error);
    }
}
document.body.append(container);

