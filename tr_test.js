const todoList = [];
const todoList2 = [1,2,3,4];

const newItemNameInput = document.querySelector('#new_item_name');
const newItemContentInput = document.querySelector('#new_item_content');

loadTodoList();
localStorage.setItem('test1',todoList2);
localStorage.setItem('test2','test');

document.querySelector('#new_item_form').addEventListener('submit' , (e) => {
    e.preventDefault();
    console.log(newItemNameInput.value);
    console.log(newItemContentInput.value);

    const newItem = {name:newItemNameInput.value , content:newItemContentInput.value};
    todoList.push(newItem);
    console.log(todoList);


    saveTodoList(todoList);

});



function saveTodoList(tolcl_todolist){
    //stringify each object
    const toLocalList = [];
    todoList.forEach((e) => {

        toLocalList.push(JSON.stringify(e));

    });
    localStorage.setItem('todoList',toLocalList);
}

function loadTodoList(){
    const obj = localStorage.getItem('todoList');
    const testarray = obj;
    console.log("Load:" + obj);
    console.log("Parse:" + 0);
    //const test2= JSON.parse('[{"name":"1","content":"aaaaa"},{"name":"2","content":"aaaaa"}]');
    const test2= JSON.parse('[' + obj + ']');
    console.log(test2);
    test2.forEach((e) => console.log("E: " + e.name)
        
    );
    return test2;
    //todo return array with objects
}