import "./style.scss";

const todoFactory = () => {
  
}

// Auto resize notes based on line break
const resizeNote = (() => {
  const textareas = Array.from(document.querySelectorAll(".resize-ta"));
  textareas.map(textarea => {
    textarea.addEventListener("keyup", () => {
      textarea.style.height = calcHeight(textarea.value) + "px";
    });
  })
})();

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
    todoTitle.addEventListener('dblclick', (e) => expandTodo(e));
  })
}

addExpandListenerToTodo();

const expandTodo = (e) => {
  const target = e.target;
  target.closest('.todo').classList.add('expanded');
  target.closest('.todo__default').classList.add('expanded');
  document.querySelector('.todo__default.expanded .todo__title').removeAttribute('readonly');
  // Remove any selected text
  window.getSelection().removeAllRanges();
}

// Define actions when click outside of todo when expanded (collapse)
const addCollapseListenerToTodo = () => {
  window.addEventListener('click', e => {  
    const expandedTodo = document.querySelector('.todo.expanded'); 
    const clickedOutsideTodo = expandedTodo && !expandedTodo.contains(e.target);

    if (clickedOutsideTodo) {
      document.querySelector('.todo__default.expanded .todo__title').setAttribute('readonly', 'true');
      const expandedClass = Array.from(document.querySelectorAll('.expanded'));
      expandedClass.map(x => {
        x.classList.remove('expanded');
      })
    }
  });
}

addCollapseListenerToTodo();

// Define actions when clicked on checkbox
const checkboxes = Array.from(document.querySelectorAll('.todo__checkbox'));
checkboxes.map((checkbox) => {
  checkbox.addEventListener('click', (e) => toggleCheckedState(e));
})

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

// Todo have title, notes, deadline


// Create new todo


// Delete todo