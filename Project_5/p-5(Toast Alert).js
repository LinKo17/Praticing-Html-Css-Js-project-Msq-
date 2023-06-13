let btnFromToast = document.getElementsByClassName("btn_From_Toast")[0];
let miniAlertToast = document.getElementsByClassName("mini_Alert_Div")[0];


btnFromToast.addEventListener("click",()=>{
    miniAlertToast.innerHTML =" ";
    let miniAlertToastInnerDiv = document.createElement("div");
    miniAlertToastInnerDiv.classList.add("miniAlertToastInnerDiv");
    miniAlertToastInnerDiv.appendChild(document.createTextNode("You file is successfully saved in memories"));
    miniAlertToast.appendChild(miniAlertToastInnerDiv);

    // let toastAlertLeft = miniAlertToastInnerDiv.offsetLeft;
    
    // miniAlertToastInnerDiv.style.left = `-${toastAlertLeft}px`;
    miniAlertToastInnerDiv.style.left = `-1000px`;


    setTimeout(()=>{
        miniAlertToastInnerDiv.style.left = `0px`;
    },1500)

    setTimeout(()=>{
        // miniAlertToastInnerDiv.style.left = `-${toastAlertLeft}px`;       
        miniAlertToastInnerDiv.style.left=`-1000px`;
    },4000)
})