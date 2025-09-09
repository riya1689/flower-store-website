console.log("flower script added");

const loadCategories=()=>{
    console.log("loadCategories created");
    //fetch 
    fetch("https://e2099cae-b9a5-4ef8-81fb-dfb6118f19f2.mock.pstmn.io/flowers")
    .then((res)=>res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}


const displayCategories=()=>{

}
loadCategories();