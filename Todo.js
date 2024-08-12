

function add(){
var ul=document.getElementById("list-container")
var input=document.getElementById("input")
var listitem=document.createElement("li")
listitem.innerHTML=input.value+"<button onclick='delete1(event)'>DELETE</button>";
ul.append(listitem)
}
function delete1(event){
    event.target.parentElement.remove()
}