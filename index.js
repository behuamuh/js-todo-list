const todos = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars',
];

const todosListElement = document.querySelector('.todos__list');
const todosFormElement = document.querySelector('.todos__form');
const todosSubmitBtn = todosFormElement.querySelector('.todos__submit-btn');
const todosInputElement = document.querySelector('.todos__input');
const todosTemplateElement =  document.querySelector('.todo-template');

let editedElement = null;

function addTodoListeners(todo) {
  todo.querySelector('.todo__btn_type_delete').addEventListener('click', handleDelete);
  todo.querySelector('.todo__btn_type_edit').addEventListener('click', handleEdit);
  todo.querySelector('.todo__btn_type_duplicate').addEventListener('click', handleDuplicate);
}

function handleDelete(evt) {
  const todo = evt.currentTarget.parentNode;
  todo.remove();
}

function setTodoToForm(todo) {
  const text = todo.querySelector('.todo__text').textContent;
  todosInputElement.value = text;
  todosSubmitBtn.textContent = 'Сохранить';
}

function resetTodoForm() {
  editedElement = null;
  todosInputElement.value = '';
  todosSubmitBtn.textContent = 'Добавить';
}

function handleEdit(evt) {
  const todo = evt.currentTarget.parentNode;
  
  editedElement = todo;
  setTodoToForm(todo);
}

function handleDuplicate(evt) {
  const todo = evt.currentTarget.parentNode;
  const duplicate = todo.cloneNode(true);

  addTodoListeners(duplicate);
  todo.after(duplicate);
}

function addTodo(text) {
  const todo = todosTemplateElement.content.cloneNode(true);

  todo.querySelector('.todo__text').textContent = text;
  addTodoListeners(todo);

  todosListElement.prepend(todo);
}

function handleFormSubmit (evt) {
  evt.preventDefault();

  const text = todosInputElement.value;

  if (editedElement) {
    editedElement.querySelector('.todo__text').textContent = text;
  } else {
    addTodo(text);
  }

  resetTodoForm();
}

todos.forEach(addTodo);

todosFormElement.addEventListener('submit', handleFormSubmit);
