//menu item
let unOrderList =document.getElementsByClassName("unOrderList")[0];
let sliderTag = document.getElementsByClassName("slider")[0];

//each page title
let homepage = document.getElementsByClassName("home_Page")[0];
let shoppingpage = document.getElementsByClassName("shopping_List")[0];
let stopWatchPage = document.getElementsByClassName("stop_Watch")[0];
let musicplayerpage = document.getElementsByClassName("music_Player")[0];
let autoCompletePage = document.getElementsByClassName("auto_Complete")[0];
let toastalertPage   = document.getElementsByClassName("toast_alert")[0];
let toastalertLSPage = document.getElementsByClassName("Toast_alert_LS")[0];
let imagemovePage    = document.getElementsByClassName("Img_move")[0];
let sortPage = document.getElementsByClassName("sort_Section")[0];

let tabs=["project-1","project-2","project-3","project-4","project-5","project-6","project-7","project-8","project-9"];

let switchingFunction =(adding)=>{

    switch(adding){
        case "0":
            homepage.style.display             ="block";
            shoppingpage.style.display         ="none";
            stopWatchPage.style.display        ="none";
            musicplayerpage.style.display      ="none";
            autoCompletePage.style.display     ="none";
            toastalertPage.style.display       ="none";
            toastalertLSPage.style.display     ="none";
            imagemovePage.style.display        ="none";
            sortPage.style.display             ="none";
        break;
        case "1":
            homepage.style.display             ="none";
            shoppingpage.style.display         ="block";
            stopWatchPage.style.display        ="none";
            musicplayerpage.style.display      ="none";
            autoCompletePage.style.display     ="none";
            toastalertPage.style.display       ="none";
            toastalertLSPage.style.display     ="none";
            imagemovePage.style.display        ="none";
            sortPage.style.display             ="none";
        break;
        case "2":
            homepage.style.display             ="none";
            shoppingpage.style.display         ="none";
            stopWatchPage.style.display        ="block";
            musicplayerpage.style.display      ="none";
            autoCompletePage.style.display     ="none";
            toastalertPage.style.display       ="none";
            toastalertLSPage.style.display     ="none";
            imagemovePage.style.display        ="none";
            sortPage.style.display             ="none";
        break;
        case "3":
            homepage.style.display             ="none";
            shoppingpage.style.display         ="none";
            stopWatchPage.style.display        ="none";
            musicplayerpage.style.display      ="block";
            autoCompletePage.style.display     ="none";
            toastalertPage.style.display       ="none";
            toastalertLSPage.style.display     ="none";
            imagemovePage.style.display        ="none";
            sortPage.style.display             ="none";
        break;
        case "4":
            homepage.style.display             ="none";
            shoppingpage.style.display         ="none";
            stopWatchPage.style.display        ="none";
            musicplayerpage.style.display      ="none";
            autoCompletePage.style.display     ="block";
            toastalertPage.style.display       ="none";
            toastalertLSPage.style.display     ="none";
            imagemovePage.style.display        ="none";
            sortPage.style.display             ="none";
        break;
        case "5":
            homepage.style.display             ="none";
            shoppingpage.style.display         ="none";
            stopWatchPage.style.display        ="none";
            musicplayerpage.style.display      ="none";
            autoCompletePage.style.display     ="none";
            toastalertPage.style.display       ="block";
            toastalertLSPage.style.display     ="none";
            imagemovePage.style.display        ="none";
            sortPage.style.display             ="none";
        break;
        case "6":
            homepage.style.display             ="none";
            shoppingpage.style.display         ="none";
            stopWatchPage.style.display        ="none";
            musicplayerpage.style.display      ="none";
            autoCompletePage.style.display     ="none";
            toastalertPage.style.display       ="none";
            toastalertLSPage.style.display     ="block";
            imagemovePage.style.display        ="none";
            sortPage.style.display             ="none";
        break;
        case "7":
            homepage.style.display             ="none";
            shoppingpage.style.display         ="none";
            stopWatchPage.style.display        ="none";
            musicplayerpage.style.display      ="none";
            autoCompletePage.style.display     ="none";
            toastalertPage.style.display       ="none";
            toastalertLSPage.style.display     ="none";
            imagemovePage.style.display        ="block";
            sortPage.style.display             ="none";
        break;
        case "8":
            homepage.style.display             ="none";
            shoppingpage.style.display         ="none";
            stopWatchPage.style.display        ="none";
            musicplayerpage.style.display      ="none";
            autoCompletePage.style.display     ="none";
            toastalertPage.style.display       ="none";
            toastalertLSPage.style.display     ="none";
            imagemovePage.style.display        ="none";
            sortPage.style.display             ="block";
        break;


    }
}
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

        switchingFunction(idTaker);



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
            let innerCourt = innerResMini.offsetLeft+innerResMini.offsetWidth;
            innerResMini.style.left = "-"+innerCourt+"px";
        },500)
        setTimeout(()=>{
            innerResMain.classList.remove("innerResMain");
            innerResMain.innerHTML="";
        },1000)
       
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
        // unOrderListForRes.id =x;
       

        let listItemForRes = document.createElement("li");
        listItemForRes.classList.add("listItemForRes");
        listItemForRes.id =x;
        
        listItemForRes.appendChild(document.createTextNode(tabs[x]));

        unOrderListForRes.appendChild(listItemForRes);
        innerResMini.appendChild(unOrderListForRes);

        listItemForRes.addEventListener("click",(event)=>{
            let hamburgertaker = event.target.id;

            switchingFunction(hamburgertaker);
        })
        // unOrderListForRes.addEventListener("click",(event)=>{
        //     console.log("ul"+event.target.id)
        // })

    }

    // let taking = innerResMini.offsetLeft+innerResMini.offsetWidth+"px";
    // innerResMini.style.left =`-${taking}`;
    innerResMini.style.left = "-1000px";
    setTimeout(()=>{
        innerResMini.style.left = "0px";
    },600)

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

