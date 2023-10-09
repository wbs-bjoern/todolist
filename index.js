const addBtn = document.getElementById("addBtn")
const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

function addTask () {
    const task = taskInput.value;
    if (task !=="") {
        const li = document.createElement("li")
        li.innerHTML = `
        <span class=task>${task}</span>
        <button class="removeBtn" onclick="removeTask(this)">X</button>
       ` ;
        taskList.appendChild(li)
        taskInput.value = "";
    }
}

function removeTask(btn) {
    btn.parentNode.remove();
}

