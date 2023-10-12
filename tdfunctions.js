import { ToDoItem } from "./tdclasses.js";

export function saveTodoList(maxID,tolcl_todolist){
    console.log("MAX;" + maxID);
    localStorage.setItem('maxID',maxID);
    /*const saveTDList = tolcl_todolist.map((obj) =>(
        {
            task:obj.task,
            done:obj.done

        }
    ));*/
    tolcl_todolist.forEach(obj => {
        console.table(obj);
        localStorage.setItem(obj.getKey(),JSON.stringify({task:obj.task,done:obj.done}));
    });

    //onsole.log(JSON.stringify(tolcl_todolist));
    //localStorage.setItem('todoList',JSON.stringify(tolcl_todolist));
}

export function loadTodoList(maxID,todoarray, unusedArray){
    console.log("Called LoadTODOList:");

    maxID = localStorage.getItem('maxID');
    for(let i=1;i<= maxID; i++)
    {
        const result = localStorage.getItem(i);
        let newTodoItem;
        if(result)
        {
            const tmpItem= JSON.parse(result);

            
            newTodoItem = new ToDoItem(i,tmpItem.task,tmpItem.done ==="true");
            todoarray.push(newTodoItem);
        }
        else
        {
            
            unusedArray.push(i);
        }
        

    }
    console.table("Unused Keys: " + unusedArray) ;
    console.log("MAX after load;" + maxID);
    return maxID;
}