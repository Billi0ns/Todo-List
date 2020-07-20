import "./style.scss";

let globalTodoIndex = 4;
let globalProjectIndex = 4;

let todos = [
  {
    title: 'Buy milk on my way home',
    notes: 'One litter of milk',
    checkedState: '',
    todoid: '1',
    notesHeight: '40px',
    project: 'Default',
  },
  {
    title: 'Drink milk',
    notes: 'Drink a glass of milk',
    checkedState: 'checked',
    todoid: '2',
    notesHeight: '40px',
    project: 'Default',
  },
  {
    title: 'Welcome to this To-Do list app',
    notes: '',
    checkedState: '',
    todoid: '3',
    notesHeight: '40px',
    project: 'Welcome',
  }
]

let projects = [
  {
    title: 'Default',
    projectid: '1',
    selectState: 'selected-project',
  },
  {
    title: 'Welcome',
    projectid: '2',
    selectState: '',
  }
]


const initListeners = () => {
  todoListClickHandler();
  todoListDoubleClickHandler();
  todoListInputHandler();
  autoResizeNotes();
  addCollapseListenerToTodo();
  sidebarClickHandler();
}

// To-Do list event delegation
const todoListClickHandler = () => {
  const todoList = document.getElementById('todo-list');
  todoList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('todo__checkbox')) {
      toggleCheckedState(e);
    } else if (target.classList.contains('deleteBtn')) {
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

// Get target object
const getTargetTodo = (e) => {
  const todoid = e.target.dataset.todoid;
  const targetTodo = todos.find((todo) => todo.todoid === todoid);
  return targetTodo;
}

const getTargetProject = (e) => {
  let projectid;
  if (e.target) {
    projectid = e.target.dataset.projectid;
  } else {
    projectid = e.dataset.projectid;
  }
  const targetProject = projects.find((project) => project.projectid === projectid);
  return targetProject;
}

// Add To-Do 
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

// Factories
const todoFactory = () => ({
  title: '',
  notes: '',
  checkedState: '',
  todoid: `${globalTodoIndex}`,
  notesHeight: '40px',
  project: document.querySelector('.project-title').textContent,
})

const projectFactory = (projectTitle) => ({
  title: projectTitle,
  projectid: `${globalProjectIndex}`,
  selectedState: '',
})

// Delete To-Do
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
          <div class="todo__checkbox ${todo.checkedState}" data-todoid="${todo.todoid}"></div>
          <input type="text" value="${todo.title}" class="todo__title ${todo.checkedState}" data-todoid="${todo.todoid}" placeholder="New To-Do" readonly ></input>
          <button class="deleteBtn" data-todoid="${todo.todoid}"></button>
      </div>
      <div class="todo__expand">
          <textarea class="todo__notes resize-ta" placeholder="Notes" data-todoid="${todo.todoid}" style="height: ${todo.notesHeight};">${todo.notes}</textarea>
      </div>
  </div>`;
  todoList.insertAdjacentHTML('beforeend', todoHTML);
}

const renderAllTodos = (todos) => {
  todos.map((todo) => renderTodo(todo));
}

// Render projects
const renderProject = (project) => {
  const addProject = document.getElementById('sidebar__addProject');
  const projectHTML = `
  <div class="sidebar__item ${project.selectState}" data-projectid="${project.projectid}">
      <div>${project.title}</div>
      <button class="deleteBtn" data-projectid="${project.projectid}"></button>
  </div>`;

  addProject.insertAdjacentHTML('beforebegin', projectHTML);
}

const renderAllProjects = (projects) => {
  projects.map((project) => renderProject(project));
}

const filterProjectTodos = (selectedProjectTitle) => {
  const targetTodos = todos.filter((todo) => todo.project === selectedProjectTitle);
  return targetTodos;
}

// Auto resize notes based on line break
const autoResizeNotes = () => {
  const todoList = document.getElementById('todo-list');
  todoList.addEventListener('keyup', (e) => {
    if (e.target.classList.contains('resize-ta')) {
      const targetTodo = getTargetTodo(e);
      const notesHeight = calcHeight(e.target.value) + 'px';

      targetTodo.notesHeight = notesHeight;
      e.target.style.height = notesHeight;
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
  const clickedDeleteBtn = target.classList.contains('deleteBtn');
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
  const targetTodo = getTargetTodo(e);
  const checkedState = e.target.classList.contains('checked');

  if (checkedState) {
    removeCheckedState(e);
    targetTodo.checkedState = '';
  } else {
    addCheckedState(e);
    targetTodo.checkedState = 'checked';
  }
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
const sidebarClickHandler = () => {
  const sidebar = document.getElementById('sidebar__list');
  sidebar.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('sidebar__item') && !target.classList.contains('sidebar__addProject')) {
      setCurrentProject(e);
    } else if (target.classList.contains('deleteBtn')) {
      deleteProject(e);
    } else if (target.classList.contains('sidebar__addProjectBtn')) {
      addProject(e);
    }
  })
}

const setCurrentProject = (e) => {
  const selectedProjectTitle = e.target.firstElementChild.textContent;
  const projectFilteredTodos = filterProjectTodos(selectedProjectTitle);
  console.log(selectedProjectTitle)

  selectProject(e);
  document.getElementById('project-title').textContent = selectedProjectTitle;
  removeAllTodoListItems();
  renderAllTodos(projectFilteredTodos);
}

const selectProject = (e) => {
  const target = e.target;
  const targetProject = getTargetProject(e);
  const previousSelectedProject = document.querySelector('.selected-project');
  const previousSelectedTargetProject = getTargetProject(previousSelectedProject);
  
  if (target === previousSelectedProject) return;
  
  previousSelectedProject.classList.remove('selected-project');
  previousSelectedTargetProject.selectState = ''; 
  target.classList.add('selected-project');
  targetProject.selectState = 'selected-project';
}

const removeAllTodoListItems = () => {
  const todoList = document.getElementById('todo-list');
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
}

// Delete project 
const deleteProject = (e) => {
  if (confirm('Are you sure you want to delete this project?')) {
    const selectedProjectTitle = e.target.previousElementSibling.textContent;
    const toBeDeletedTodos = filterProjectTodos(selectedProjectTitle);
    const targetProject = getTargetProject(e);

    projects = projects.filter((project) => !(targetProject === project));
    todos = todos.filter((todo) => !toBeDeletedTodos.includes(todo));
    e.target.closest('.sidebar__item').remove();
  }
}

// Add project 
const addProject = (e) => {
  const addProjectInputText = document.getElementById('sidebar__addProject--text');
  let newProjectTitle = addProjectInputText.value;
  if (newProjectTitle) {
    const newProjectObject = projectFactory(newProjectTitle);
    projects.push(newProjectObject);
    renderProject(newProjectObject);
    addProjectInputText.value = '';
  }
}


renderAllTodos(todos);
renderAllProjects(projects);
initListeners();
