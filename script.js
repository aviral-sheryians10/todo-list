// MADE USING CREATE ELEMENT METHOD

let main = document.querySelector("main");

let inp = document.querySelector("input");

let addBtn = document.querySelector("#add-btn");

let flag = false;
let warn = document.createElement("p");
warn.textContent = "Enter a task!!"
warn.style.color = "red"

addBtn.addEventListener('click', function(){

    if(inp.value.trim() == ""){
        let inpTask = document.querySelector(".input-task");
        inpTask.before(warn);
        flag = true;
    }
    else{
        if(flag){
            warn.remove();
            flag = false;
        }
        let div = document.createElement("div")
        let p = document.createElement("p");
        let editBtn = document.createElement("button");
        let delBtn = document.createElement("button");
        let divTaskBtn = document.createElement("div")

        p.textContent = inp.value;
        editBtn.textContent = "Edit";
        delBtn.textContent = "Delete";

        div.classList.add("task-div");
        divTaskBtn.classList.add("task-btn");
        editBtn.classList.add("btn");
        delBtn.classList.add("btn");
        editBtn.setAttribute("id","edit-btn");
        delBtn.setAttribute("id","del-btn");

        divTaskBtn.append(editBtn,delBtn);
        div.append(p,divTaskBtn);

        main.append(div)

        delBtn.addEventListener('click',function(){
            div.remove();
        })

         editBtn.addEventListener("click", function () {
        let updatedTask = prompt("Edit Task:", p.textContent);

        if(updatedTask !== null && updatedTask.trim() !== ""){
            p.textContent = updatedTask;
        }
        });

        inp.value = "";
    }
})


