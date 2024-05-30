const inptBox=document.getElementById("inputBox");
const listConta=document.getElementById("listContainer");

function addTask(){
    if(inptBox.value ===''){
        alert("You must write something!");

    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inptBox.value;
        listConta.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inptBox.value="";
    saveData();
}
listConta.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listConta.innerHTML);
}
function showList(){
    listConta.innerHTML=localStorage.getItem("data");
}
showList();

