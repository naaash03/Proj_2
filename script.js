document.addEventListener('DOMContentLoaded', function () {
  
    const taskForm = document.getElementById('taskForm');
   
    const taskList = document.getElementById('taskList');
   
   
    const tasks = [];
 
    function addTask(title, priority, status) {
       if (title === '') {
          alert("Write Something Down!");
       } else {
          const newTask = { title, priority, status };
          tasks.push(newTask);
          updateTaskList();
          taskForm.reset();
       }
    }
 
    function updateTaskList() {
       taskList.innerHTML = '';
       tasks.forEach((task, index) => {
          const li = document.createElement('li');
          li.className = 'list-group-item d-flex justify-content-between align-items-center';
 


          li.innerHTML = `

             <span class="task-title">${task.title}</span>
             <span class="task-priority badge badge-pill badge-info">${task.priority}</span>
             <span class="task-status badge badge-pill badge-${task.status === 'completed' ? 'success' : 'warning'}">${task.status}</span>
             <button class="btn btn-danger btn-sm remove-btn" data-index="${index}">Remove</button>
             <button class="btn btn-success btn-sm complete-btn" data-index="${index}">Complete</button>
          `;
 


          taskList.appendChild(li);
 
          li.querySelector('.remove-btn').addEventListener('click', function () {
             removeTask(index);
          });
 

          li.querySelector('.complete-btn').addEventListener('click', function () {
             markAsComplete(index);
          });


       });


    }


 
    function removeTask(index) {
       tasks.splice(index, 1);
       updateTaskList();
    }
 
    function markAsComplete(index) {
       tasks[index].status = 'completed';
       updateTaskList();
    }
 



    taskForm.addEventListener('submit', function (event) {
       event.preventDefault();

       const title = document.getElementById('taskTitle').value;
       const priority = document.getElementById('taskPriority').value;
       const status = document.querySelector('input[name="taskStatus"]:checked').value;
       addTask(title, priority, status);
    });


 });
 