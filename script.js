
let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click",()=>{
  if(currMode === "light"){
    currMode = "dark";
    modeBtn.style.backgroundColor = "white";
    body.style.backgroundColor = "black";
    }
else{ 
  currMode = "light";
  modeBtn.style.backgroundColor = "black";
  body.style.backgroundColor = "white";
}
});
