document.getElementById("toggleTheme").onclick = () => {
    document.body.classList.toggle("dark");
  };
  
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const task = document.getElementById(data);
    ev.target.closest(".task-list").appendChild(task);
  }
  
  let taskId = 0;
  
  function addTask() {
    const text = document.getElementById("taskText").value.trim();
    if (!text) return;
  
    const task = document.createElement("div");
    task.className = "task";
    task.id = "task-" + taskId++;
    task.draggable = true;
    task.ondragstart = drag;
    task.textContent = text;
  
    document.querySelector("#todo .task-list").appendChild(task);
    document.getElementById("taskText").value = "";
  }
  