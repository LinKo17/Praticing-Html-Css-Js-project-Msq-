//menu item
let unOrderList =document.getElementsByClassName("unOrderList")[0];
let sliderTag = document.getElementsByClassName("slider")[0];

let tabs=["project-1","project-2","project-3","project-4","project-5","project-6","project-7","project-8","project-9"];

for(let i=0; i<tabs.length; i++){
    let listItem = document.createElement("li");
    listItem.classList.add("listItem");
    listItem.appendChild(document.createTextNode(tabs[i]));
    listItem.id = i;
    unOrderList.appendChild(listItem);

    if(i===0){
        sliderTag.style.width = listItem.offsetWidth+"px";
        
    }

    listItem.addEventListener("click",(event)=>{
        let idTaker = event.target.id;
        let idForUsInJs = document.getElementById(idTaker);

        sliderTag.style.width = idForUsInJs.offsetWidth+"px";
        sliderTag.style.transform = `translate(${idForUsInJs.offsetLeft+"px"})`;
    })

}
//hamburger menu
let hamburgerBox = document.getElementsByClassName("hamburger_Box")[0];
let burgerline1 = document.getElementsByClassName("line1")[0];
let burgerline2 = document.getElementsByClassName("line2")[0];
let burgerline3 = document.getElementsByClassName("line3")[0];

hamburgerBox.addEventListener("click",()=>{
    if(hamburgerBox.classList.contains("checking")){

        hamburgerBox.classList.remove("checking");
        burgerline1.classList.remove("plus45deg");
        burgerline2.classList.remove("hideLine");
        burgerline3.classList.remove("minus45deg");

        setTimeout(()=>{
            innerResMini.style.left = "-400px";
        },500)
        setTimeout(()=>{
            innerResMain.classList.remove("innerResMain");
            innerResMain.innerHTML="";
        },900)
       
    }else{
        hamburgerBox.classList.add("checking");
        burgerline1.classList.add("plus45deg");
        burgerline2.classList.add("hideLine");
        burgerline3.classList.add("minus45deg");
        innerResMain.classList.add("innerResMain");
        showOverlay();
    }
})

let ResMain =document.getElementsByClassName("main_Res")[0];
let innerResMain=document.createElement("div");
let innerResMini;
function showOverlay(){
 
    innerResMini = document.createElement("div");
    innerResMini.classList.add("innerResMini");

    for(let x=0; x<tabs.length; x++){
        let unOrderListForRes = document.createElement("ul");
        unOrderListForRes.classList.add("unOrderListForRes");

        let listItemForRes = document.createElement("li");
        listItemForRes.classList.add("listItemForRes");
        listItemForRes.id =x;
        listItemForRes.appendChild(document.createTextNode(tabs[x]));

        unOrderListForRes.appendChild(listItemForRes);
        innerResMini.appendChild(unOrderListForRes);
    }

    innerResMini.style.left = "-400px";

    setTimeout(()=>{
        innerResMini.style.left = "0px";
    },1000)

    innerResMain.appendChild(innerResMini);
}
ResMain.appendChild(innerResMain);

//theme change
let themeChanger = document.getElementsByClassName("theme_Changer")[0];
let bodyTag = document.getElementsByTagName("body")[0];

if(localStorage.getItem("themer")==="dark"){

    bodyTag.classList.add("theme");
    themeChanger.src="sun.png";
    
}else if(localStorage.getItem("themer")==="light"){

    bodyTag.classList.remove("theme");
    themeChanger.src ="moon.png";
}

themeChanger.addEventListener("click",()=>{

    if(bodyTag.classList.contains("theme")){
        bodyTag.classList.remove("theme");
        themeChanger.src ="moon.png";
        localStorage.setItem("themer","light");
    }else{
        bodyTag.classList.add("theme");
        themeChanger.src="sun.png";
        localStorage.setItem("themer","dark");


    }
})

