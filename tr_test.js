class ToDoItem{

    //#todoHTML;
    #task;
    #done;

    constructor(task,done)
    {
        //this.#todoHTML=todoHTML;
        this.#task = task;
        this.#done = done;
    }

    get done(){
        return this.#done;
    }

    set done(donevalue){
        donevalue? this.#done=true : this.#done = false;
    }

    get task(){
        return this.#task;
    }

    set task(taskvalue){
        taskvalue? this.#task=true : this.#task = false;
    }
    changeDone()
    {
        this.#done === false ? this.#done=true : this.#done = false;
    }


}

class ToDoItemHTML{
    #dataItem

    constructor(dataItem)
    {
        this.#dataItem = dataItem;
    }

    addHTML()
    {


    }
}



let todoList = [];
const todoList2 = [1,2,3,4];

const newItemNameInput = document.querySelector('#new_item_name');
const newItemContentInput = document.querySelector('#new_item_content');

const todoListContainer = document.querySelector('#todo_list');

//todoList = loadTodoList();

todoList.push(new ToDoItem("Wischen", false))
todoList.push(new ToDoItem("Abwaschen", false))

todoList.forEach(e => {
    buildTodoHTML(e)

});

//buildArrayTodoHTML(todoList);





localStorage.setItem('test1',todoList2);
localStorage.setItem('test2','test');

document.querySelector('#new_item_form').addEventListener('submit' , (e) => {
    e.preventDefault();
    console.log(newItemNameInput.value);
    console.log(newItemContentInput.value);

    const newItem = {name:newItemNameInput.value , content:newItemContentInput.value, done:false};


    const newTodoItem = new ToDoItem(newItemContentInput.value,false)



    todoList.push(newItem);
    //todo, construct new html with new item
    console.log(todoList);


    saveTodoList(todoList);
    todoListContainer.innerHTML="";
    buildArrayTodoHTML(todoList);

});



function saveTodoList(tolcl_todolist){
    //stringify each object
    /*const toLocalList = [];
    todoList.forEach((e) => {

        toLocalList.push(JSON.stringify(e));

    });*/
    //localStorage.setItem('todoList',toLocalList);
    localStorage.setItem('todoList',JSON.stringify(todoList));

}

function loadTodoList(){
    console.log("Called LoadTODOList:");
    const obj = localStorage.getItem('todoList');
    const testarray = obj;
    console.log("Load:" + obj);
    console.log("Parse:" + 0);
    //const test2= JSON.parse('[{"name":"1","content":"aaaaa"},{"name":"2","content":"aaaaa"}]');
    //const test2= JSON.parse('[' + obj + ']');
    const test2= JSON.parse(obj);
    console.log(test2);
    test2.forEach((e) => console.log("E: " + e.name)
        
    );
    return test2;
    //todo return array with objects
}

/*function buildArrayTodoHTML(contentArray)
{

    contentArray.forEach( e => {    
        const span = document.createElement('span');
        span.innerHTML=e.content;
        todoListContainer.appendChild(span);
        todoListContainer.appendChild(document.createElement('br'));
        const tempHTML = document.querySelector('#tmp_todo_element').content.cloneNode(true);
        tempHTML.querySelector('p').innerHTML = "Text"
        todoListContainer.appendChild(tempHTML);
    }
    )
}*/

function buildTodoHTML(todoItem)
{     
    const tempHTML = document.querySelector('#tmp_todo_element').content.cloneNode(true);
    tempHTML.querySelector('.lbl_task').innerHTML = todoItem.task;
    console.table("tempHTML:" + tempHTML.querySelector('.lbl_task').innerHTML);
    console.log("Object" + todoItem.task);    
    const doneHTML = tempHTML.querySelector('.lbl_done_or_todo');
    doneHTML.innerHTML = todoItem.done? "dada" : "Todo";
    
    tempHTML.querySelector('.btn_done').addEventListener('click', e => {

        console.log("ClickedButtonDone")
        todoItem.changeDone();
        doneHTML.innerHTML = todoItem.done? "Done" : "Todo";
    });
    tempHTML.querySelector('.btn_edit').addEventListener('click', e => {

        console.log("ClickedButtonEdit")
        //Todo, edit Logic
    });
    todoListContainer.appendChild(tempHTML);
    //attach setters to Buttons



}

function scanAllHTMLIntoArray()
{


}

