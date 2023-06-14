let sortMainBox = document.getElementsByClassName("sort_Section_Main_Box")[0];
let sortItem = document.querySelectorAll(".dropdown-item");

for(let n=0; n<sortItem.length; n++){
    sortMainBox.innerHTML = " ";
    sortItem[n].addEventListener("click",(event)=>{
        let sortIdTaker = event.target.id;
        console.log("ID "+sortIdTaker);
        

        if(sortIdTaker === "absending"){
            let absendingForSort = videoInfo.sort((a,b)=>a.date.getTime() - b.date.getTime())
            sortFunction(absendingForSort);

        }else if(sortIdTaker === "desending"){

            let desendingForSort = videoInfo.sort((a,b)=>b.date.getTime() - a.date.getTime())
            sortFunction(desendingForSort);

        }else if(sortIdTaker === "lessView"){
            let lessViewForSort =videoInfo.sort((a,b)=>a.view - b.view);
            sortFunction(lessViewForSort);
        }else if(sortIdTaker === "mostView"){

            let mostViewForSort =videoInfo.sort((a,b)=>b.view - a.view);
            sortFunction(mostViewForSort);
        }
    })
}

let videoInfo =[
    {
        image:"Project_8/sortimg/thumbnail_82.png",
        title:"Myanmar Frontend Beginner Epi-82 localStorage(Part-1)",
        date:new Date(2023,0,1),
        view:4000

    },
    {
        image:"Project_8/sortimg/thumbnail_83.png",
        title:"Myanmar Frontend Beginner Epi-83 localStorage(Part-2)",
        date:new Date(2023,0,2),
        view:7000

    },
    {
        image:"Project_8/sortimg/thumbnail_84.png",
        title:"Myanmar Frontend Beginner Epi-84 JSON(Part-1)",
        date:new Date(2023,0,3),
        view:2800

    },
    {
        image:"Project_8/sortimg/thumbnail_85.png",
        title:"Myanmar Frontend Beginner Epi-85 JSON(Part-2)",
        date:new Date(2023,0,4),
        view:3000

    },


]

let sortFunction =(video)=>{
    sortMainBox.innerHTML = "";
    for(let y=0; y<video.length; y++){

        let innerVideoDiv = document.createElement("div");
        innerVideoDiv.classList.add("innerVideoDiv");
    
        let imageForVideo = document.createElement("img");
        imageForVideo.classList.add("imageForVideo");
        imageForVideo.src=video[y].image;
    
        let titleForVideo = document.createElement("div");
        titleForVideo.classList.add("titleForVideo");
        titleForVideo.appendChild(document.createTextNode("title : "+video[y].title));
    
        let dateForVideo = document.createElement("div");
        dateForVideo.classList.add("dateForVideo");
        dateForVideo.appendChild(document.createTextNode("date : "+video[y].date.toLocaleDateString()));
    
        let viewForVideo = document.createElement("div");
        viewForVideo.classList.add("viewForVideo");
        viewForVideo.appendChild(document.createTextNode("view : "+video[y].view));
    
    
        innerVideoDiv.appendChild(imageForVideo);
        innerVideoDiv.appendChild(titleForVideo);
        innerVideoDiv.appendChild(dateForVideo);
        innerVideoDiv.appendChild(viewForVideo);
    
        sortMainBox.appendChild(innerVideoDiv);
    }
}
sortFunction(videoInfo);