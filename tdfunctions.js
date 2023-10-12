import { ToDoItem } from "./tdclasses.js";

export function saveTodoList(maxID,tolcl_todolist){
    localStorage.setItem('maxID',maxID);
    /*const saveTDList = tolcl_todolist.map((obj) =>(
        {
            task:obj.task,
            done:obj.done

        }
    ));*/
    tolcl_todolist.forEach(obj => {
        localStorage.setItem(obj.getKey(),JSON.stringify({task:obj.task,done:obj.done}));
    });

    console.log(JSON.stringify(tolcl_todolist));
    localStorage.setItem('todoList',JSON.stringify(tolcl_todolist));
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
            //todo add key to unused if not found
            unusedArray.push(i);
        }
        

    }


    /*const obj = localStorage.getItem('todoList');
    const testarray = obj;
    console.log("Load:" + obj);
    console.log("Parse:" + 0);
    const test2= JSON.parse(obj);
    console.log(test2);
    test2.forEach((e) => console.log("E: " + e.name)
        
    );
    return test2;*/
    //todo return array with objects
}