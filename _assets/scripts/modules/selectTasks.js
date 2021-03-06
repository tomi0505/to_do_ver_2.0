import tasks from './tasks.js';
import { updateFilterResultsByFilterInput } from './filteringTasksList.js';
import { darkenRemoveTaskBtn } from './../app.js';

const selectedTasks = {
  selected: 0,
  unselected: 0
};

const selectedTasksLength = () => {
  const selectedTasksLengthEl = document.querySelector('.to-do__selected-tasks-length');

  selectedTasksLengthEl.innerHTML = selectedTasks.selected;
}

const selectedTasksInfo = function() {
  const tasksContainer = document.querySelector('.tasks-container');
  let checkboxItem = tasksContainer.querySelectorAll('.tasks-container__task-item > .tasks-container__task-content-container > .tasks-container__task-checked-item');

  selectedTasks.selected = 0;
  selectedTasks.unselected = 0;

  for(let checkbox of checkboxItem) {
    checkbox.checked? selectedTasks.selected++ : selectedTasks.unselected++;
  }

  return selectedTasks;
}

const showSelectedTasksOperationPanel = () => {
  const selectedTasksOperationPanelEl = document.querySelector('.to-do__selected-tasks-operation-panel');

  const selectedTasks = selectedTasksInfo();

  selectedTasks.selected? selectedTasksOperationPanelEl.classList.add('visible') : selectedTasksOperationPanelEl.classList.remove('visible');
}

const selectTasks = function(e) {

  this.blur();

  if(tasks.length) {
    const tasksContainer = document.querySelector('.tasks-container');
    let checkboxItem = tasksContainer.querySelectorAll('.tasks-container__task-item > .tasks-container__task-content-container > .tasks-container__task-checked-item');

    const optValue = this.options[this.selectedIndex].value;

    if(optValue === 'selectAll') {
      for(let checkbox of checkboxItem) {
        if(!checkbox.checked) {
          checkbox.checked = true;
          darkenRemoveTaskBtn(checkbox);
        }
      }
    } else if(optValue === 'uncheckAll') {
      for(let checkbox of checkboxItem) {
        if(checkbox.checked) {
          checkbox.checked = false;
          darkenRemoveTaskBtn(checkbox);
        }
      }
    } else if(optValue === 'selectReverse') {
      for(let checkbox of checkboxItem) {
        if(checkbox.checked) {
          checkbox.checked = false;
          darkenRemoveTaskBtn(checkbox);
        } else {
          checkbox.checked = true;
          darkenRemoveTaskBtn(checkbox);
        }
      }
    }

    this.selectedIndex = 0;
    showSelectedTasksOperationPanel();
    updateFilterResultsByFilterInput();
    selectedTasksLength();
  }
}

export default selectTasks;
export { showSelectedTasksOperationPanel };
export { selectedTasksLength };
export { selectedTasks };