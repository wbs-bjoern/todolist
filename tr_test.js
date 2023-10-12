import { ToDoItem } from "./tdclasses.js";
import { saveTodoList,loadTodoList } from "./tdfunctions.js";

let todoList = [];
let unusedIDs = [];
let maxID=0;
let user="tilo";


const newTaskInput = document.querySelector('#new_task_input');
const todoListContainer = document.querySelector('#todo_list');

loadTodoList(maxID,todoList,unusedIDs);
todoList.forEach(e => {
    buildTodoHTML(e)
});




document.querySelector('#new_item_form').addEventListener('submit' , (e) => {
    e.preventDefault(); 
    console.log(newTaskInput.value);
    const newTodoItem = new ToDoItem(getUnusedID(unusedIDs),newTaskInput.value,false)
    buildTodoHTML(newTodoItem)
    todoList.push(newTodoItem);
    console.log(todoList);
    saveTodoList(maxID,todoList);
});

function buildTodoHTML(todoItem)
{     
    const tempHTML = document.querySelector('#tmp_todo_element').content.cloneNode(true);
    tempHTML.querySelector('.lbl_task').innerHTML = todoItem.task;
    const doneHTML = tempHTML.querySelector('.lbl_done_or_todo');
    doneHTML.innerHTML = todoItem.done? "Done" : "Todo";
    const btn_edit = tempHTML.querySelector('.btn_edit');
    const frmChangeTask = tempHTML.querySelector('.todoHTML').querySelector('.frm_change_task');
    const inputchangeTask = frmChangeTask.querySelector('.input_change_task');
    inputchangeTask.placeholder=todoItem.task;

    const btnConfirmCHange = frmChangeTask.querySelector('.btn_change_task');
    
    tempHTML.querySelector('.btn_done').addEventListener('click', e => {

        console.table("Object:" + todoItem.task);
        todoItem.changeDone();
        doneHTML.innerHTML = todoItem.done? "Done" : "Todo";
        e.target.value = e.target.value === "todo"? "done" : "todo";
        e.target.textContent = e.target.value === "todo"? "Mark as Done" : "Mark as ToDo";
    });
    tempHTML.querySelector('.btn_edit').addEventListener('click', (e) => {
        console.log("ClickedButtonEdit");
        frmChangeTask.classList.toggle('hidden');
        if(e.target.value ==="off")
        {
            e.target.value ="on";
            e.target.textContent = "Cancel Edit"   
            console.log( e.target.textContent)
            console.log(frmChangeTask)
        }
        else
        {
            e.target.value ="off";
            e.target.textContent = "Edit"
        }
        console.log("EditValue: " + e.target.value);
    });
    frmChangeTask.addEventListener('submit',e => {
        e.preventDefault();
        frmChangeTask.classList.toggle('hidden');
        btn_edit.value ="off";
        btn_edit.textContent = "Edit again";
    }
    );

    todoListContainer.appendChild(tempHTML);
}

function getUnusedID(unusedArray){
    if(unusedArray.length > 0)
    {
        if(unusedArray[0] > maxID) maxID = unusedArray[0];
        let unusedID = unusedArray.shift();
        return unusedID;
    }
    else
    {
        maxID++;
        return maxID;
    }
}



