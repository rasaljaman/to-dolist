// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task
addTaskBtn.addEventListener("click", function() {
  const taskValue = taskInput.value.trim();

  if (taskValue !== "") {
    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = taskValue;
    taskText.addEventListener("click", function() {
      this.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
      taskList.removeChild(li);
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field
  }
});