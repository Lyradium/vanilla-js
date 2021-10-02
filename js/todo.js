const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODO_KEY = "todos";

let todos = [];

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  todos = todos.filter(todo => todo.id !== parseInt(li.id));
  saveTodo();
}

function paintDoto(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = newTodo.text;
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todos.push(newTodoObj);
  paintDoto(newTodoObj);
  saveTodo();
}

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
  todos.forEach(paintDoto);
}

todoForm.addEventListener("submit", handleTodoSubmit);
