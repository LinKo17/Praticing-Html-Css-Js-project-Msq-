let miniAlertLS = document.getElementsByClassName("mini_alert_LS")[0];

let mainForLS = ()=>{
    let innerMiniAlertLSDiv = document.createElement("div");
    innerMiniAlertLSDiv.classList.add("innerMiniAlertLSDiv");

    let textDivFromLS = document.createElement("div");
    textDivFromLS.classList.add("textDivFromLS");
    textDivFromLS.appendChild(document.createTextNode("We use cookie.do you agree to use it?"));

    let btnFromLS = document.createElement("div");
    btnFromLS.classList.add("btnFromLS");
    btnFromLS.appendChild(document.createTextNode("OKEY"));

    innerMiniAlertLSDiv.appendChild(textDivFromLS);
    innerMiniAlertLSDiv.appendChild(btnFromLS);
    miniAlertLS.appendChild(innerMiniAlertLSDiv);

    let toHideBarLS = innerMiniAlertLSDiv.offsetLeft + innerMiniAlertLSDiv.offsetWidth;
    console.log("This is to hdie "+toHideBarLS);

    innerMiniAlertLSDiv.style.left = `-${toHideBarLS}px`;

    setTimeout(()=>{
        innerMiniAlertLSDiv.style.left = `0px`;
    },2000);
    btnFromLS.addEventListener("click",()=>{
        localStorage.setItem("checkingItem","1");
        innerMiniAlertLSDiv.style.left = `-${toHideBarLS}px`;
    })
}

window.addEventListener("load",()=>{

    let takerOfcheckingItem = localStorage.getItem("checkingItem");
    if(takerOfcheckingItem !== "1"){
        mainForLS();
    }
})