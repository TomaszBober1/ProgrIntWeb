"use strict"

let x = 0;
let $text = "";
const addPos = () => {

    const ul = document.getElementById("ListaZak");
    const cand = document.getElementById("newPos");

    if(cand.value === ""){
        alert("Input is empty!");
        console.warn("Input is empty!");
        return
    }
	
    if(cand.value.trim().length === 0){
        alert("Input contains only spaces!");
        console.warn("Input contains only spaces!");
        return
    }
	
    const li = document.createElement("li");
    li.setAttribute('id', cand.value + "_" + x);
    li.appendChild(document.createTextNode(cand.value));
    li.classList.add("list-group-item");
    li.classList.add("list-group-item-action");
    li.classList.add("list-group-item-secondary");
    const button = li.appendChild(document.createElement('button'));
    button.type = 'button';
    button.innerHTML = '.';
    button.classList.add("btn-close");
    button.classList.add("cl_button");
    button.classList.add("btn-outline-danger");
    button.setAttribute('id', cand.value + "_" + x + "b" );
    x++;
    button.removeEventListener("click", cross);
    button.addEventListener("click", remove);
    ul.appendChild(li);
    li.addEventListener("click", cross);
}

const cross = (event) => {

    const date = new Date();
	if(event.target.classList.contains("active")){

		event.target.classList.remove("active");
        const child = event.target.lastElementChild;
        event.target.removeChild(child);
	} else {
        event.target.classList.add("active");
        const pol = event.target.appendChild(document.createElement('section'));
        pol.classList.add('list-group-item-info');
        pol.removeEventListener("click", cross);
        pol.textContent = new Date().toDateString();
        event.target.classList.toggle("base");
	}
}

const remove = (event) => {
   $("#modal_remove").toggle();
   const $rem = $(event.target);

   $("#modal_conf").click((event) => {
    console.warn(event.currentTarget);
    $rem.closest('li').remove();
    $text = $($rem.closest('li')).text();
    console.log($text);
    let $last ="";
    $last = $text.slice(-1);
    while($last !== "."){
    $text = $text.slice(0, -15);    
    $last = $text.slice(-1);
    console.log($last);
    }
    $text = $text.slice(0, -1);
    console.log($text);
    $("#modal_remove").hide();
    return;}
    )
    $("#modal_remove").click(() =>{
    $("#modal_remove").hide();
    })
   }

const undo = () => {
    if($text===""){
        console.warn("Nothing to recover");
        return;
    }
    const ul = document.getElementById("ListaZak");
    const cand = document.getElementById("newPos");

	
    const li = document.createElement("li");
    li.setAttribute('id', $text + "_" + x);
    li.appendChild(document.createTextNode($text));
    li.classList.add("list-group-item");
    li.classList.add("list-group-item-action");
    li.classList.add("list-group-item-secondary");
    const button = li.appendChild(document.createElement('button'));
    button.type = 'button';
    button.innerHTML = '.';
    button.setAttribute('id', $text + "_" + x + "b" );
    x++;
    button.addEventListener("click", remove);
    button.classList.add("btn-close");
    button.classList.add("cl_button");
    button.classList.add("btn-outline-danger");
    ul.appendChild(li);
    li.addEventListener("click", cross);
    $text = "";
}