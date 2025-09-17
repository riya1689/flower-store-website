console.log("flower script added");
//task : category button
//1. fetch   ,   load,  show category on html

//1 . fuction for load categories 
const loadCategories = () => {
    console.log("loadCategories created");
    //fetch 
    fetch("https://e2099cae-b9a5-4ef8-81fb-dfb6118f19f2.mock.pstmn.io/flowers/categories")
        .then((res) => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error));
}
const loadFlowers = () => {
    console.log("loadFlowers created");
    //fetch 
    fetch("https://e2099cae-b9a5-4ef8-81fb-dfb6118f19f2.mock.pstmn.io/flowers")
        .then((res) => res.json())
        .then(data => displayFlowers(data.flowers))
        .catch(error => console.log(error));
}


// 2. function for display categories button
/**
 * {
    "category_id": "1007",
    "flowerId": 1,
    "name": "Italian White Sunflower",
    "category": "sunflower",
    "price": 425,
    "season": "Seasonal",
    "image": "https://www.bulkwildflowers.com/cdn/shop/files/sunflower-italian-white-ndp-2.jpg?v",
    "color": [
        "Cream",
        "White",
        "Black"
    ],
    "origin": "Italy",
    "stock_status": "In Stock",
    "flower_details": "An elegant and subtle sunflower with creamy white petals surrounding a contrasting dark chocolate-brown center. A more delicate take on the classic.",
    "care_instructions": "Remove lower leaves before placing in water. Sunflowers are heavy drinkers; check and refill water daily."
}
 */
const displayFlowers = (flowers) => {
    const flowerContainer = document.getElementById("flowers");
    console.log("flowers data");
    flowers.forEach((flower) => {
        console.log(flower);
        const card = document.createElement("div");
        card.classList="card"
        card.innerHTML =
            `
        <figure class="h-[200px]">
        <img
      src=${flower.image}
      class="h-full w-full object-cover"
      alt="Shoes"/>
         </figure>
    <div class="px-0 py-2">
        <div class="info"> 
        <h3 class="font-bold">${flower.name} </h3>
        <p>Origin: ${flower.origin}</p>
        <p>Season: ${flower.season}</p>
        <p>Price: ${flower.price}</p>
        <p>${flower.stock_status}</p>
    </div>
    <hr class="border-gray-300"
    <div class="button flex justify-between items-center">
        <button class="btn btn-outline btn-success">Success</button>
        <button class="btn btn-outline btn-success">Add to Cart</button>
        <button class="btn btn-outline btn-success">Details</button>
    </div>
    </div>
        `;
        flowerContainer.append(card);
    });


}


const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
        console.log(item);
        //create a button
        const button = document.createElement("button");
        button.classList = 'btn';
        button.innerText = item.category;
        //show this button on frontend
        //add button to category container
        categoryContainer.append(button);
    });
}


loadCategories();
loadFlowers();