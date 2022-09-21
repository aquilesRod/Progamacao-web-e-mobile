let toDoList = document.getElementById("toDoList");
let newTask = document.getElementById("newTask");
let addButton = document.getElementById("addButton");

newTask.addEventListener('keypress', (event) => {
  console.log(event.code)
  if (event.code == "Enter"){
    var task = {
      name: newTask.value,
      id: generateID(),
    }
  }
  addTaskToList(task);

})

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
  li.id = task.id;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add('taskCheckbox');
  checkbox.addEventListener('click', (checkboxEvent) => {
    selectCheckbox(task.id);
  })
  // checkbox.addEventListener('keypress', (checkboxEvent) => {
  //   if(checkboxEvent.key == "Enter")
  //     selectCheckbox(task.id);
  // })

  let span = document.createElement('span');
  span.classList.add('newTask');
  span.innerHTML = task.name;

  let removeButton = document.createElement('button');
  removeButton.classList.add('removeTaskButton');
  removeButton.innerHTML = "remove";
  removeButton.setAttribute('onclick', 'removeTask('+task.id+')');

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removeButton);

  return li;
}

function removeTask(taskID) {
  let confirmation = window.confirm('You really want remove this task?');
  if(confirmation){
    let li = document.getElementById(''+taskID+'');
    if(li) {
      toDoList.removeChild(li);
    }
  }
}

function selectCheckbox(taskID) {
  let currentCheckbox = document.getElementById(''+taskID+'').getElementsByClassName('taskCheckbox');
  
  if(currentCheckbox.item(0).checked) {
    currentCheckbox = document.getElementById(''+taskID+'').getElementsByClassName('newTask').item(0).style.textDecoration = "line-through rgba(0, 0, 0, 0.475)";
    currentCheckbox = document.getElementById(''+taskID+'').style.backgroundColor = "rgb(103, 205, 80)";
  } else {
    currentCheckbox = document.getElementById(''+taskID+'').getElementsByClassName('newTask').item(0).style.textDecoration = "none";
    currentCheckbox = document.getElementById(''+taskID+'').style.backgroundColor = "rgb(152, 152, 152)";
  }
}