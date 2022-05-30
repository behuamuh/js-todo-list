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
const getTodoByEvent = e => e.currentTarget.closest('.todo');

const createTodo = text => {
  const todo = todoTemplateElement.content
    .querySelector('.todo')
    .cloneNode(true);

  todo.querySelector('.todo__text').textContent = text;

  todo.querySelector('.todo__btn_type_delete').addEventListener('click', e => {
    const todo = getTodoByEvent(e);

    todo.remove();
  });

  return todo;
};

const addTodo = text => {
  const todo = createTodo(text);

  todoListElement.prepend(todo);
};

const handleTodoSubmit = e => {
  e.preventDefault();

  const text = todoInputElement.value;

  addTodo(text);

  todoFormElement.reset();
};

todos.forEach(addTodo);

todoFormElement.addEventListener('submit', handleTodoSubmit);
