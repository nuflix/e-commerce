document.getElementById("menu-btn").addEventListener("click", menu);

document.getElementById("navBtn").addEventListener("click", menu2);

function menu(){
    
  /*  document.getElementById("nav").style.display="flex";*/
    document.getElementById("nav").style.backgroundColor="white";
    document.getElementById("nav").style.zIndex = "999";
    document.getElementById("nav").classList.add("navAnimation");

}

function menu2(){
    
//document.getElementById("nav").style.display="none";
document.getElementById("nav").classList.remove("navAnimation");

}