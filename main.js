const taskInput = document.querySelector("#input")
const addTask = document.querySelector("#add")
const deleteTask = document.querySelector("#delete")
const taskContainer = document.querySelector("#task-container")



    addTask.addEventListener("click", () => {
        let newTodoDiv = document.createElement("div");
        let newTodo = document.createElement("input");
        let newTodoDelete = document.createElement("button")
        let newDeleteIcon = document.createElement("i")
        let newTodoEdit = document.createElement("button")

        newTodo.value = taskInput.value;

        newTodoDiv.appendChild(newTodo).setAttribute("id","todoInput")
        newTodo.setAttribute("readonly", "readonly")
        newTodo.type="text"

        newTodoDiv.appendChild(newTodoEdit).setAttribute("id","edit")
        newTodoEdit.innerHTML= "Edit"
        
        newTodoDiv.appendChild(newTodoDelete).setAttribute("id","delete")
        newTodoDelete.appendChild(newDeleteIcon).setAttribute("class", "fa-solid fa-trash-can")
        
        newTodoDiv.setAttribute("id","todoDiv")


        if((newTodo.value).length > 0){

            taskContainer.appendChild(newTodoDiv)
            taskInput.value ="";
            
        }

        newTodoDelete.addEventListener("click",()=>{
        taskContainer.removeChild(newTodoDiv)
        })
        
        newTodoEdit.addEventListener("click",()=>{
            if(newTodoEdit.innerHTML =="Edit"){
                newTodo.removeAttribute("readonly") 
                newTodoEdit.innerHTML = "Save"
            }else{
                newTodo.setAttribute("readonly", "readonly")
                newTodoEdit.innerHTML= "Edit"
            }
        })
    })

    deleteTask.addEventListener("click", () =>{
        taskInput.value ="";
    })