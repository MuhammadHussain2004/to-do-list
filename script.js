  
const inputText=document.getElementById("input-text");
const list=document.getElementById("list-container");
const addTask=()=>{
    if(inputText===""){
        alert("Enter Task First");
    }
    else{
      const li= document.createElement("LI");
      const span= document.createElement("SPAN");
      li.innerHTML=inputText.value;
      span.innerHTML="\u00d7";
      list.appendChild(li);
      li.appendChild(span);
 }
    inputText.value="";
    saveData();
}

list.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
          e.target.classList.toggle("checked");
          saveData();
    }
    else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
    }
}, false );

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    list.innerHTML=localStorage.getItem("data");
}
showData();