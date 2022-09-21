let toDoList = document.getElementById("toDoList");
let newTask = document.getElementById("newTask");
let addButton = document.getElementById("addButton");

// taskText.addEventListener('keypress', (event) => {

//   if (event.code == "13"){
//     let task = {
//       name: newTask.value,
//       id: generateID(),
//     }
//   }p
//   addTaskToList(task);

// })

addButton.addEventListener('click', (event) => {
  let task = {
    name: newTask.value,
    id: generateID(),
  }
  addTaskToList(task);

})

function generateID(){
  return Math.floor(Math.random() * 3000);
}

function addTaskToList(task){
  let li = criateTagli(task);
  toDoList.appendChild(li);
  newTask.value = '';
}

function criateTagli(task){
  let li = document.createElement('li');

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add('taskCheckbox')

  let span = document.createElement('span');
  span.classList.add('newTask');
  span.innerHTML = task.name;

  let removeButton = document.createElement('button');
  removeButton.classList.add('removeTaskButton');
  removeButton.setAttribute('onclick', 'removeTask('+task.id+')');

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removeButton);

  return li;
}

function removeTask(taskID) {
  alert(taskID)
}