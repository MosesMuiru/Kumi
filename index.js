const changeLayer = document.getElementsByClassName(".layer")
const btn = document.getElementById("open-icon")
const navlinks = document.getElementById("navlinks")

function openBtn(){
    navlinks.style.right="0px"
    btn.style.display="none"
    
}
// if(navlinks.style.right==="0px"){
//     btn.style.display="none";
// }
// else{
//     btn.style.display="inline"
// }
 
 function closeBtn(){
        navlinks.style.right="-300px"
        btn.style.display="inline"
        
}


function clickingme(){
    console.log("you clicked")

}



