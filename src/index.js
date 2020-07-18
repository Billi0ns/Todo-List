import "./style.scss";

let globalTodoIndex = 3;
let todos = [
  {
    title: 'Buy milk on my way home',
    notes: 'One litter of milk',
    checkedState: '',
    todoid: '1',
    project: 'default',
  },
  {
    title: 'Drink milk',
    notes: 'Drink a glass of milk',
    checkedState: 'checked',
    todoid: '2',
    project: 'default',
  }
]


const initListeners = () => {
  todoListClickHandler();
  todoListDoubleClickHandler();
  todoListInputHandler();
  autoResizeNotes();
  addCollapseListenerToTodo();
}

// To-Do list event delegation
const todoListClickHandler = () => {
  const todoList = document.getElementById('todo-list');
  todoList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('todo__checkbox')) {
      toggleCheckedState(e);
    } else if (target.classList.contains('todo__deleteBtn')) {
      deleteTodo(e);
    }
  })
}

const todoListDoubleClickHandler = () => {
  const todoList = document.getElementById('todo-list');
  todoList.addEventListener('dblclick', (e) => {
    const target = e.target;
    if (target.classList.contains('todo__title') || target.classList.contains('todo__default')) {
      expandTodo(e);
    } 
  })
}

const todoListInputHandler = () => {
  const todoList = document.getElementById('todo-list');
  todoList.addEventListener('input', (e) => {
    const target = e.target;
    const targetTodo = getTargetTodo(e);

    if (target.classList.contains('todo__title')) {
      targetTodo.title = target.value;
    } else if (target.classList.contains('todo__notes')) {
      targetTodo.notes = target.value;
    }
  })
}

// Input Listeners
const getTargetTodo = (e) => {
  const todoid = e.target.dataset.todoid;
  const targetTodo = todos.find((todo) => todo.todoid === todoid);
  return targetTodo;
}

// Add To-Do button
const addListenerToAddTodoBtn = () => {
  const addTodoBtn = document.querySelector('.addTodoBtn');
  addTodoBtn.addEventListener('click', (e) => {
    globalTodoIndex += 1;
    const newTodoObject = todoFactory();
    todos.push(newTodoObject);
    renderTodo(newTodoObject);
  })
}

addListenerToAddTodoBtn();

const todoFactory = () => ({
  title: '',
  notes: '',
  checkedState: '',
  todoid: `${globalTodoIndex}`,
  project: document.querySelector('.project-title').textContent,
})

// Delete To-Do button 
const deleteTodo = (e) => {
  const targetTodo = getTargetTodo(e);
  const toBeDeleted = e.target.closest('.todo');
  toBeDeleted.remove();
  todos.splice(todos.indexOf(targetTodo), 1);
  console.log(todos)
}

// Render To-Do
const renderTodo = (todo) => {
  const todoList = document.querySelector('.todo-list');
  const todoHTML = `
  <div class="todo">
      <div class="todo__default">
          <div class="todo__checkbox ${todo.checkedState}"></div>
          <input type="text" value="${todo.title}" class="todo__title ${todo.checkedState}" data-todoid="${todo.todoid}" placeholder="New To-Do" readonly ></input>
          <button class="todo__deleteBtn" data-todoid="${todo.todoid}"></button>
      </div>
      <div class="todo__expand">
          <textarea class="todo__notes resize-ta" placeholder="Notes" data-todoid="${todo.todoid}">${todo.notes}</textarea>
      </div>
  </div>`;
  todoList.insertAdjacentHTML('beforeend', todoHTML);
}

const renderAllTodos = (todos) => {
  todos.map((todo) => renderTodo(todo));
}

// Auto resize notes based on line break
const autoResizeNotes = () => {
  const todoList = document.getElementById('todo-list');
  todoList.addEventListener('keyup', (e) => {
    if (e.target.classList.contains('resize-ta')) {
      e.target.style.height = calcHeight(e.target.value) + "px";
    }
  })
};

const calcHeight = (value) => {
  const numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  const newHeight = 20 + numberOfLineBreaks * 16 + 20 ;
  return newHeight;
}

// Define actions when double click on todo (expand)
const expandTodo = (e) => {
  const target = e.target;
  // If double click on checkbox or deleteBtn, don't expand todo
  const clickedCheckbox = target.classList.contains('todo__checkbox');
  const clickedDeleteBtn = target.classList.contains('todo__deleteBtn');
  if (clickedCheckbox || clickedDeleteBtn) return;

  target.closest('.todo').classList.add('expanded');
  document.querySelector('.todo.expanded .todo__title').removeAttribute('readonly');
  // Remove any accidentally selected text
  window.getSelection().removeAllRanges();
}

// Define actions when click outside of todo when expanded (collapse)
const addCollapseListenerToTodo = () => {
  window.addEventListener('click', e => {  
    const expandedTodo = document.querySelector('.todo.expanded'); 
    const clickedOutsideTodo = expandedTodo && !expandedTodo.contains(e.target);

    if (clickedOutsideTodo) {
      document.querySelector('.todo.expanded .todo__title').setAttribute('readonly', 'true');
      const expandedClass = Array.from(document.querySelectorAll('.expanded'));
      expandedClass.map(x => {
        x.classList.remove('expanded');
      })
    }
  });
}

// Define actions when clicked on checkbox
const toggleCheckedState = (e) => {
  const checkedState = e.target.classList.contains('checked');
  checkedState ? removeCheckedState(e) : addCheckedState(e);
}

const addCheckedState = (e) => {
  const target = e.target;
  target.classList.add('checked');
  target.nextElementSibling.classList.add('checked');
}

const removeCheckedState =  (e) => {
  const target = e.target;
  target.classList.remove('checked');
  target.nextElementSibling.classList.remove('checked');
}



// Set current project

renderAllTodos(todos);
initListeners();
