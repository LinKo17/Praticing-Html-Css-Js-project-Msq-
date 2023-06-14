let imageChanger =document.getElementsByClassName("Img_From_Img_Move")[0];
let imageChangeLeft = document.getElementsByClassName("btn_From_Left")[0];
let imageChangeRight = document.getElementsByClassName("btn_From_Right")[0];
let imageChnageReset = document.getElementsByClassName("btn_From_Reset")[0];

let imagemover = -1;
let imageTab =[
    "Project_7/imgFromImgMove/wolf2.jpg",
    "Project_7/imgFromImgMove/wolf3.jpg",
    "Project_7/imgFromImgMove/wolf4.jpg",
    "Project_7/imgFromImgMove/wolf5.jpg"
]
imageChangeLeft.addEventListener("click",()=>{

    if(imagemover ===-1){
       imagemover =3
       imageChanger.src=imageTab[imagemover];
       return;
    }else if(imagemover === 0){
        imagemover =-1;
        imageChanger.src="Project_7/imgFromImgMove/wolf1.jpg" ;
        return;
    }
    imagemover -=1;
    imageChanger.src=imageTab[imagemover];
})
imageChangeRight.addEventListener("click",()=>{
    if(imagemover === 3){
        imagemover =-1;
        imageChanger.src="Project_7/imgFromImgMove/wolf1.jpg" ;
        return;
    }
    imagemover +=1;
    imageChanger.src=imageTab[imagemover];

})
imageChnageReset.addEventListener("click",()=>{
    imagemover = 0;
    imageChanger.src="Project_7/imgFromImgMove/wolf1.jpg";
})