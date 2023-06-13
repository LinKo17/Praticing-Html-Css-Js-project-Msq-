let srhBoxFromAutoComplete = document.getElementsByClassName("srh_For_AutoComplete")[0];
let showBoxFromAutoComplete = document.getElementsByClassName("output_To_Show")[0];

let products;
let fetchDataFromWebsite = fetch("https://fakestoreapi.com/products");
fetchDataFromWebsite
.then((resource)=>{

    let dataTakerFromWebsite = resource.json();
    return dataTakerFromWebsite;
})
.then((data)=>{
    products = data;
    console.log(products)
    srhBoxFromAutoComplete.disabled = false;
})
.catch((error)=>{
    console.log(error);
})
srhBoxFromAutoComplete.addEventListener("keyup",(event)=>{
    showBoxFromAutoComplete.innerHTML ="";
    let userValueTaker = event.target.value.toLowerCase();
    console.log(userValueTaker);
    if(userValueTaker.length===0){
        return;
    }
    
    let userSelectedProducts =products.filter((para)=>{
        return para.title.toLowerCase().includes(userValueTaker);
    })
    console.log(userSelectedProducts);

    if(userSelectedProducts.length ===0){
        return;
    }
    for(let x=0; x<userSelectedProducts.length; x++){
        let parentDiv = document.createElement("div");
        parentDiv.classList.add("parentDiv");

        let innerParentDiv = document.createElement("div");
        innerParentDiv.classList.add("innerParentDivForAuto");
        innerParentDiv.appendChild(document.createTextNode(userSelectedProducts[x].title));

        let imgBox = document.createElement('img');
        imgBox.classList.add("imgBoxForAuto");
        imgBox.src=userSelectedProducts[x].image;

        parentDiv.appendChild(innerParentDiv);
        parentDiv.appendChild(imgBox);

        showBoxFromAutoComplete.appendChild(parentDiv);
    }


})