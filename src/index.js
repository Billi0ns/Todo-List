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

const addListeners = () => {
  addExpandListenerToTodo();
  addCollapseListenerToTodo();
  addTodoTitleInputListener();
  addTodoNotesInputListener();
  addCheckboxListener();
  addListenerToDeleteTodoBtns();
  autoResizeNotes();
}

// Input Listeners
const addTodoTitleInputListener = () => {
  const todoTitles = Array.from(document.querySelectorAll('.todo__title'));
  todoTitles.map((todoTitle) => {
    todoTitle.addEventListener('input', (e) => {
      const targetTodo = getTargetTodo(e);
      targetTodo.title = e.target.value;
    });
  })
}

const addTodoNotesInputListener = () => {
  const todoNotes = Array.from(document.querySelectorAll('.todo__notes'));
  todoNotes.map((todoNote) => {
    todoNote.addEventListener('input', (e) => {
      const targetTodo = getTargetTodo(e);
      targetTodo.notes = e.target.value;
    });
  })
}

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
    addListeners();
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
const addListenerToDeleteTodoBtns = () => {
  const deleteTodoBtns = Array.from(document.querySelectorAll('.todo__deleteBtn'));
  deleteTodoBtns.map((deleteTodoBtn) => {
    deleteTodoBtn.addEventListener('click', deleteTodo);
  })
}

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
  const textareas = Array.from(document.querySelectorAll(".resize-ta"));
  textareas.map(textarea => {
    textarea.addEventListener("keyup", () => {
      textarea.style.height = calcHeight(textarea.value) + "px";
    });
  })
};

const calcHeight = (value) => {
  const numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  const newHeight = 20 + numberOfLineBreaks * 16 + 20 ;
  return newHeight;
}

// Define actions when double click on todo (expand)
const addExpandListenerToTodo = () => {
  const todoTitles = Array.from(document.querySelectorAll('.todo__default'));
  todoTitles.map(todoTitle => {
    todoTitle.addEventListener('dblclick', expandTodo);
  })
}

const expandTodo = (e) => {
  const target = e.target;
  // If double click on checkbox or deleteBtn, don't expand todo
  const clickedCheckbox = target.classList.contains('todo__checkbox');
  const clickedDeleteBtn = target.classList.contains('todo__deleteBtn');
  if (clickedCheckbox || clickedDeleteBtn) {
    return;
  }

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
const addCheckboxListener = () => {
  const checkboxes = Array.from(document.querySelectorAll('.todo__checkbox'));
  checkboxes.map((checkbox) => {
    checkbox.addEventListener('click', toggleCheckedState);
  })
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

const toggleCheckedState = (e) => {
  const checkedState = e.target.classList.contains('checked');
  checkedState ? removeCheckedState(e) : addCheckedState(e);
}

// Set current project

renderAllTodos(todos);
addListeners();
