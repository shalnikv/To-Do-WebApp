const form = document.getElementById('taskForm');
const list = document.getElementById('taskList');

function loadTasks() {
  fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => {
      list.innerHTML = '';
      data.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `${task.title} (Due: ${task.due_date}, Priority: ${task.priority})
          <button onclick="deleteTask(${task.id})">Delete</button>`;
        list.appendChild(li);
      });
    });
}

form.onsubmit = (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const due_date = document.getElementById('due_date').value;
  const priority = document.getElementById('priority').value;
  fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, due_date, priority })
  }).then(() => {
    form.reset();
    loadTasks();
  });
};

function deleteTask(id) {
  fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' })
    .then(() => loadTasks());
}

loadTasks();
