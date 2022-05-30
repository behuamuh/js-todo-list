const todos = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  // 'Сделать фронт для своего проекта',
  // 'Погулять с собакой',
  // 'Разобраться в замыканиях',
  // 'Решить задачу на Codewars',
];

const todoListElement = document.querySelector('.todos__list');
const todoFormElement = document.querySelector('.todos__form');
const todoInputElement = todoFormElement.querySelector('.todos__input');
const todoTemplateElement = document.querySelector('.todo-template');
const todoSubmitButtonElement = document.querySelector('.todos__submit-btn');
const getTodoByEvent = e => e.currentTarget.closest('.todo');
const getTodoTextElement = todo => todo.querySelector('.todo__text');

let editedTodo = null;

const deleteTodo = e => {
  const todo = getTodoByEvent(e);

  todo.remove();
};

const editTodo = e => {
  const todo = getTodoByEvent(e);

  editedTodo = todo;

  todoInputElement.value = getTodoTextElement(editedTodo).textContent;
  todoSubmitButtonElement.textContent = 'Сохранить';
};

const duplicateTodo = e => {
  const todo = getTodoByEvent(e);
  const duplicatedTodo = todo.cloneNode(true);

  addTodoListeners(duplicatedTodo);
  
  todo.after(duplicatedTodo);
};

const addTodoListeners = todo => {
  todo.querySelector('.todo__btn_type_delete').addEventListener('click', deleteTodo);
  todo.querySelector('.todo__btn_type_edit').addEventListener('click', editTodo);
  todo.querySelector('.todo__btn_type_duplicate').addEventListener('click', duplicateTodo);
};

const createTodo = text => {
  const todo = todoTemplateElement.content
    .querySelector('.todo')
    .cloneNode(true);

  getTodoTextElement(todo).textContent = text;
  addTodoListeners(todo);

  return todo;
};

const addTodo = text => {
  const todo = createTodo(text);

  todoListElement.prepend(todo);
};

const handleTodoSubmit = e => {
  e.preventDefault();

  const text = todoInputElement.value;

  if (editedTodo) {
    getTodoTextElement(editedTodo).textContent = text;
    todoSubmitButtonElement.textContent = 'Добавить';

    editedTodo = null;
  } else {
    addTodo(text);
  }

  todoFormElement.reset();
};

todos.forEach(addTodo);

todoFormElement.addEventListener('submit', handleTodoSubmit);
