import "./style.scss";

// Setup localStorage variables
let globalTodoIndex = 7;
let globalProjectIndex = 4;

if (localStorage.getItem('globalTodoIndex')) {
  globalTodoIndex = JSON.parse(localStorage.getItem('globalTodoIndex'));
}
localStorage.setItem('globalTodoIndex', JSON.stringify(globalTodoIndex));

if (localStorage.getItem('globalProjectIndex')) {
  globalProjectIndex = JSON.parse(localStorage.getItem('globalProjectIndex'));
}
localStorage.setItem('globalProjectIndex', JSON.stringify(globalProjectIndex));

let todos = [
  {
    title: 'Welcome to this To-Do list app',
    notes: '',
    checkedState: '',
    todoid: '1',
    notesHeight: '40px',
    project: 'Get Started',
  },
  {
    title: 'Double click to expand todo',
    notes: 'Click outside current todo to collapse',
    checkedState: '',
    todoid: '2',
    notesHeight: '40px',
    project: 'Get Started',
  },
  {
    title: 'Check off todo by clicking on the checkbox',
    notes: '',
    checkedState: '',
    todoid: '3',
    notesHeight: '40px',
    project: 'Get Started',
  },
  {
    title: 'View checked todos by clicking Logbook section',
    notes: '',
    checkedState: '',
    todoid: '4',
    notesHeight: '40px',
    project: 'Get Started',
  },
  {
    title: 'Delete by clicking on the trash icon',
    notes: '',
    checkedState: '',
    todoid: '5',
    notesHeight: '40px',
    project: 'Get Started',
  },
  {
    title: 'Do the laundry',
    notes: '',
    checkedState: '',
    todoid: '6',
    notesHeight: '40px',
    project: 'Chores',
  },

]

let projects = [
  {
    title: 'All Tasks',
    projectid: '0',
    selectState: 'selected-project default',
  },
  {
    title: 'Get Started',
    projectid: '1',
    selectState: '',
  },
  {
    title: 'Chores',
    projectid: '2',
    selectState: '',
  },
  {
    title: 'Logbook',
    projectid: 'logbook',
    selectState: '',
  }
]

if (localStorage.getItem('todosRef')) {
  todos = JSON.parse(localStorage.getItem('todosRef'));
} 
localStorage.setItem('todosRef', JSON.stringify(todos));


if (localStorage.getItem('projectsRef')) {
  projects = JSON.parse(localStorage.getItem('projectsRef'));
} 
localStorage.setItem('projectsRef', JSON.stringify(projects));

// Initialize listeners
const initListeners = () => {
  todoListClickHandler();
  todoListDoubleClickHandler();
  todoListInputHandler();
  autoResizeNotes();
  addCollapseListenerToTodo();
  addListenerToAddTodoBtn();
  sidebarClickHandler();
  addListenerToSidebarBtn();
}

// To-Do list event delegation
const todoListClickHandler = () => {
  const todoList = document.getElementById('todo-list');
  todoList.addEventListener('click', (e) => {
    const target = e.target;
    const projectTitle = document.getElementById('project-title').textContent;

    if (target.classList.contains('todo__checkbox') && projectTitle === 'Logbook') {
      toggleCheckedState(e);
      logbookUncheck(e);
    } else if (target.classList.contains('todo__checkbox')) {
      toggleCheckedState(e);
    } else if (target.classList.contains('deleteBtn')) {
      deleteTodo(e);
    } 
    localStorage.setItem('todosRef', JSON.stringify(todos));
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
    localStorage.setItem('todosRef', JSON.stringify(todos));
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
    const projectTitle = document.getElementById('project-title').textContent;
    if (projectTitle === 'Logbook') {
      alert("You can't add new todo under Logbook\nPlease switch to other project");
      return;
    }

    const newTodoObject = todoFactory();
    globalTodoIndex += 1;
    todos.push(newTodoObject);
    renderTodo(newTodoObject);
    setTimeout(()=>{ 
      const newTodo = document.getElementById('todo-list').lastElementChild;
      expandTodo(newTodo);
    },50);

    localStorage.setItem('todosRef', JSON.stringify(todos));
    localStorage.setItem('globalTodoIndex', JSON.stringify(globalTodoIndex));
  })
}

// Factories
const todoFactory = () => ({
  title: '',
  notes: '',
  checkedState: '',
  todoid: `${globalTodoIndex}`,
  notesHeight: '40px',
  project: document.getElementById('project-title').textContent,
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
  if (project.projectid === 'logbook') return;
  const addProject = document.getElementById('sidebar__addProject');
  const projectHTML = `
  <div class="sidebar__item ${project.selectState}" data-projectid="${project.projectid}">
      <div data-projectid="${project.projectid}">${project.title}</div>
      <button class="deleteBtn" data-projectid="${project.projectid}"></button>
  </div>`;

  addProject.insertAdjacentHTML('beforebegin', projectHTML);
}

const renderAllProjects = (projects) => {
  projects.map((project) => renderProject(project));
}

const filterProjectTodos = (selectedProjectTitle) => {
  const targetTodos = todos.filter((todo) => todo.project === selectedProjectTitle);
  const uncheckedTargetTodos = targetTodos.filter((todo) => todo.checkedState !== 'checked');
  return uncheckedTargetTodos;
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
      localStorage.setItem('todosRef', JSON.stringify(todos));
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
  const target = e.target ? e.target : e;
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
      expandedClass.map(x => x.classList.remove('expanded'));
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
  target.closest('.todo').classList.add('checked');
}

const removeCheckedState =  (e) => {
  const target = e.target;
  target.classList.remove('checked');
  target.nextElementSibling.classList.remove('checked');
  target.closest('.todo').classList.remove('checked')
}

const logbookUncheck = (e) => {
  const currentTodo = e.target.closest('.todo');
  currentTodo.remove();
}

// Set current project
const sidebarClickHandler = () => {
  const sidebar = document.getElementById('sidebar__list');
  sidebar.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.selected-project')) return;

    if (target.classList.contains('deleteBtn') && target.closest('.logbook')) {
      deleteAllCheckedTodos();
    } else if (target.classList.contains('deleteBtn')) {
      deleteProject(e);
    } else if (target.classList.contains('sidebar__addProjectBtn')) {
      addProject(e);
    } else if (target.closest('.sidebar__item') && !target.closest('.sidebar__addProject'))  {
      setCurrentProject(e);
    }

    localStorage.setItem('todosRef', JSON.stringify(todos));
    localStorage.setItem('projectsRef', JSON.stringify(projects));
  })
}

const setCurrentProject = (e) => {
  let selectedProjectTitle;
  if (e.target.firstElementChild) {
    selectedProjectTitle = e.target.firstElementChild.textContent;
  } else {
    selectedProjectTitle = e.target.textContent;
  }
  
  const projectFilteredTodos = filterProjectTodos(selectedProjectTitle);
  selectProject(e);
  document.getElementById('project-title').textContent = selectedProjectTitle;
  removeAllTodoListItems();
  if (e.target.closest('.default')) {
    const unCheckedTodos = todos.filter((todo) => todo.checkedState !== 'checked');
    renderAllTodos(unCheckedTodos);
  } else if (e.target.closest(".logbook")) {
    const checkedTodos = todos.filter((todo) => todo.checkedState === 'checked');
    renderAllTodos(checkedTodos);
  } else {
    renderAllTodos(projectFilteredTodos);
  }
}

const selectProject = (e) => {
  const target = e.target.closest('.sidebar__item');
  const previousSelectedProject = document.querySelector('.selected-project');
  
  if (target === previousSelectedProject) return;
  
  previousSelectedProject.classList.remove('selected-project');
  target.classList.add('selected-project');
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

const deleteAllCheckedTodos = () => {
  if (confirm('Are you sure you want to delete all checked todos?')) {
    todos = todos.filter((todo) => todo.checkedState !== 'checked');
  }
}

// Add project 
const addProject = (e) => {
  const addProjectInputText = document.getElementById('sidebar__addProject--text');
  let newProjectTitle = addProjectInputText.value;

  if (newProjectTitle) {
    const newProjectObject = projectFactory(newProjectTitle);
    globalProjectIndex += 1;
    projects.push(newProjectObject);
    renderProject(newProjectObject);
    addProjectInputText.value = '';

    localStorage.setItem('globalProjectIndex', JSON.stringify(globalProjectIndex));
  }
}

// Sidebar collapse
const addListenerToSidebarBtn = () => {
  const sidebarBtn = document.getElementById('sidebarCollapseBtn');
  sidebarBtn.addEventListener('click', toggleSidebar);
}

const toggleSidebar = (e) => {
  const collapsedState = e.target.classList.contains('collapsed');
  collapsedState ? removeCollapsedState(e) : addCollapsedState(e);
}

const addCollapsedState = (e) => {
  e.target.classList.add('collapsed')
  document.getElementById('container').classList.add('collapsed');
}

const removeCollapsedState = (e) => {
  e.target.classList.remove('collapsed')
  document.getElementById('container').classList.remove('collapsed');
}


const unCheckedTodos = todos.filter((todo) => todo.checkedState !== 'checked');
renderAllTodos(unCheckedTodos);
renderAllProjects(projects);
initListeners();
