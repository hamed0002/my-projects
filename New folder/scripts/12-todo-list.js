const todoList = [{
  name:'make dinner',
  dueDate:'2024/11/16'
},
 { name:'wahs dishes',
dueDate:'2024/11/16'
}];
 


function renderTodoList(){

let todoListHTML = '';

todoList.forEach((todoObject,index) => {
 const {name , dueDate} = todoObject;
 const html = `
 <div>${name}</div>

<div> ${dueDate}</div>
<button class = "delete-todo-button js-delete-todo-button">Delete</button>
 `;
   todoListHTML += html; 
   console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-todo-button').forEach((deleteBtton,index)=>{
  deleteBtton.addEventListener('click',() => {
    todoList.splice(index, 1);
     renderTodoList();
  })

})
})
}

document.querySelector('.js-add-todo-button').addEventListener('click',() => {
  addTodo();
})

function addTodo(){
 const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value
 todoList.push({
  //name:name,
  //dueDate:dueDate
  name,
  dueDate
});

 

 inputElement.value = '';

 renderTodoList()

} 