//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click',addToDo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterToDo);


function addToDo(event)
{
    
    event.preventDefault();

 

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    

    const newToDo = document.createElement('li');
    
    newToDo.innerText=todoInput.value;

    

    if(newToDo.innerText !== "")
    {
        newToDo.classList.add('todo-item');

        toDoDiv.appendChild(newToDo);
    
        
    
        saveLocalTodos(todoInput.value);
    
      
    
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        toDoDiv.appendChild(completedButton);
    
       
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        toDoDiv.appendChild(trashButton);
    
        
        todoList.appendChild(toDoDiv);
    
        
        todoInput.value = "";
    
    }else
    {
        
        alert("You have entered an invalid string, try again");
    }
    
}

function deleteCheck(e)
{
    const item = e.target;



    if (item.classList[0] === 'trash-btn')
    {
        const todo = item.parentElement;

        //Animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();

        });
      
    }

    
    if  (item.classList[0]==="complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterToDo(e)
{
        const todos = todoList.childNodes;
        
        todos.forEach(function(todo)
        {
            switch(e.target.value)
            {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if(todo.classList.contains('completed'))
                    {
                        todo.style.display='flex';
                    }else
                    {
                        todo.style.display = "none";
                    }
                    break;
                case "notcompleted":
                    if(!todo.classList.contains('completed'))
                    {
                        todo.style.display='flex';
                    }else
                    {
                        todo.style.display = "none";
                    }
                    break;
            }
        });
}

function saveLocalTodos(todo)
{
    

    let todos;

    if  (localStorage.getItem('todos') === null)
    {
        todos= [];
    }else
    {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);

    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos()
{
    let todos;

    if  (localStorage.getItem('todos') === null)
    {
        todos= [];
    }else
    {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo)
    {

         //Todo DIV

        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //Create LI

        const newTodo = document.createElement('li');
        newTodo.innerText=todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //CHECKMARK BUTTON

        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //TRASH BUTTON
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //APPEND TO LIST
        todoList.appendChild(todoDiv);

    });
}

function removeLocalTodos(todo){
    
    let todos;

    if  (localStorage.getItem('todos') === null)
    {
        todos= [];
    }else
    {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos)); 
   
}
