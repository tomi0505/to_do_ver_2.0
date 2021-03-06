import tasks from './tasks.js';
import { paginationData } from './paginationTasks.js';
import { paginationTasksToLeft } from './paginationTasks.js';
import removeTask from './removeTask.js';

const removeSelectedTasks = function() {
  const tasksContainer = document.querySelector('.tasks-container');
  let checkboxItem = tasksContainer.querySelectorAll('.tasks-container__task-item > .tasks-container__task-content-container > .tasks-container__task-checked-item');
  let removeTaskBtns = tasksContainer.querySelectorAll('.tasks-container__task-item > .tasks-container__remove-task-item');

  for(let checkbox of checkboxItem) {
    if(checkbox.checked) {
      let removeTaskBtns = checkbox.parentNode.parentNode.querySelector('.tasks-container__remove-task-item');
      removeTask(removeTaskBtns);
    }
  }
};

export default removeSelectedTasks;