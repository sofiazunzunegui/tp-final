// Obtener elementos del DOM
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("new-task-input");
const taskItems = document.getElementById("task-items");

// Agregar evento de envío del formulario
taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir envío del formulario

  const taskName = taskInput.value; // Obtener nombre de la tarea

  if (taskName) {
    const task = createTask(taskName.toUpperCase()); // Crear tarea

    taskItems.appendChild(task); // Agregar tarea a la lista

    taskInput.value = ""; // Limpiar campo de entrada
  }
});

// Función para crear una nueva tarea
function createTask(name) {
  const task = document.createElement("tr");

  const taskName = document.createElement("td");
  taskName.textContent = name;
  task.appendChild(taskName);

  const taskStatus = document.createElement("td");
  const selectElement = document.createElement("select");
  selectElement.className = "custom-select";
  selectElement.innerHTML = `
      <option value="new">Nueva</option>
      <option value="pending">Pendiente</option>
      <option value="completed">Finalizada</option>
    `;
  selectElement.addEventListener("change", function () {
    updateTaskStatus(task, selectElement.value);
  });
  taskStatus.appendChild(selectElement);
  task.appendChild(taskStatus);

  task.classList.add("new"); // Aplica la clase 'new' por defecto

  return task;
}

// Función para actualizar el estado de la tarea
function updateTaskStatus(task, status) {
  task.classList.remove("new", "pending", "completed");
  task.classList.add(status);

  const taskStatus = task.querySelector("select");
  taskStatus.value = status;
}
