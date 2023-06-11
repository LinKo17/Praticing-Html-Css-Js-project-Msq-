console.log("Thit is shopping List");
console.log("Is this working or not?");

let srhBox = document.getElementsByClassName("srh")[0];
let userShowBox = document.getElementsByClassName("output_show_box")[0];

let orderNumber =0;
srhBox.addEventListener("change",(event)=>{
    let userSrh = event.target.value;
    console.log(userSrh);
    
    if(userSrh.length >0){
        srhBox.value ="";
        orderNumber +=1;
        let parentDiv = document.createElement("div");
        parentDiv.classList.add("parentDiv");


        let innerParentDiv = document.createElement("div");
        innerParentDiv.classList.add("innerParentDiv");


        let spanDivFromInnerParentDiv = document.createElement("span");
        spanDivFromInnerParentDiv.classList.add("spanDivFromInnerParentDiv");
        spanDivFromInnerParentDiv.appendChild(document.createTextNode(orderNumber+". "+userSrh));
        innerParentDiv.appendChild(spanDivFromInnerParentDiv);

        let trashDiv = document.createElement("div");
        trashDiv.classList.add("trashDiv");
        trashDiv.appendChild(document.createTextNode("DELETE"))

        parentDiv.appendChild(innerParentDiv);
        parentDiv.appendChild(trashDiv);

        userShowBox.appendChild(parentDiv);


        trashDiv.addEventListener("click",()=>{
            parentDiv.remove();
        })

        let check =false;
        innerParentDiv.addEventListener("click",()=>{
            if(check === true){

               check=false;
                spanDivFromInnerParentDiv.style.textDecoration ="none";
            }else{

                check=true;
                spanDivFromInnerParentDiv.style.textDecoration ="line-through"
            }
        })

    }

    

})