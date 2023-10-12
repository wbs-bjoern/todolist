const addBtn = document.getElementById("addBtn")
const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

function addTask () {
    const task = taskInput.value;
    if (task !=="") {
        const li = document.createElement("li")
        li.innerHTML = `
        <input type="checkbox" class="markBtn" />
        <span class=task>${task}</span>
        <button class="removeBtn" onclick="removeTask(this)">X</button>
        <button class="editBtn" onclick="editTask(this)">E</button>` ;
        taskList.appendChild(li)
        taskInput.value = "";
        // const markBtn = li.querySelector(".markBtn");
        // markBtn.addEventListener("change", function() {
        //     if (this.checked) {
        //         li.classList.add("completed");
        //     } else {
        //         li.classList.remove("completed");
        //     }
        // });
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));


    }
}

function removeTask(btn) {
    btn.parentNode.remove();
}

function editTask(btn) {
    const task = btn.parentNode;
    const taskText = task.querySelector(".task");
    const editInput = document.createElement("input");
    editInput.value = taskText.textContent;
    task.replaceChild(editInput, taskText);
    editInput.focus();
    editInput.addEventListener("blur", function() {
        taskText.textContent = editInput.value;
        task.replaceChild(taskText, editInput);
    });
}

const loadBtn = document.getElementById("loadBtn");

loadBtn.addEventListener("click", function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        // Add the task to the task list
        const li = document.createElement("li");
        li.innerHTML = `
        <input type="checkbox" class="markBtn" />
        <span class="task">${task}</span>
        <button class="removeBtn" onclick="removeTask(this)">X</button>
        <button class="editBtn" onclick="editTask(this)">E</button>`;
        taskList.appendChild(li);
    });
});
