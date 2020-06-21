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
const todosInputElement = document.querySelector('.todos__input');
const todosTemplateElement =  document.querySelector('.todo-template'); 

function addTodo(text) {
  const todo = todosTemplateElement.content.cloneNode(true);

  todo.querySelector('.todo__text').textContent = text;

  todosListElement.prepend(todo);
}

todos.forEach(addTodo);

todosFormElement.addEventListener('submit', evt => {
  evt.preventDefault();

  const text = todosInputElement.value;
  addTodo(text);
});
