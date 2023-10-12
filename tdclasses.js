export class ToDoItem{

    //#todoHTML;
    #task;
    #done;
    #key;

    constructor(key,task,done)
    {
        //this.#todoHTML=todoHTML;
        this.#task = task;
        this.#done = done;
        this.#key = key;
        console.log("Created " + this.#task + " mit ID " + this.#key)
    }

    /*get key(){
        return this.#key;
    }*/

    /*set key(keyvalue){
        keyvalue? this.#key=true : this.#key = false;
    }*/

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
        this.#task=taskvalue;
    }
    changeDone()
    {
        this.#done === false ? this.#done=true : this.#done = false;
    }
    getKey()
    {
        return this.#key;
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