let tasks = [];

function createTask(title, priority, deadline, tags) {
    return {
        id: Date.now(),
        title: title,
        priority: priority,
        deadline: deadline,
        tags: tags,
        completed: false
    };
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        
        taskDiv.className = "task-item";

        taskDiv.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${task.id})">

        <span>${task.title}</span>

        <span>${task.priority}</span>

        <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(taskDiv);


    });

    renderStats();
}

function searchTasks(query){

    const filtered = tasks.filter(task =>
        task.title.toLowerCase().includes(query.toLowerCase())
    );

    renderFilteredTasks(filtered);

}

function renderFilteredTasks(taskArray){

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    taskArray.forEach(task => {

        const taskDiv = document.createElement("div");

        taskDiv.className = "task-item";

        taskDiv.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${task.id})">
        <span>${task.title}</span>
        <span>${task.priority}</span>
        <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(taskDiv);

    });

}

function sortTasks(){

    const priorityOrder = {
        "High":1,
        "Medium":2,
        "Low":3
    };

    tasks.sort((a,b)=> priorityOrder[a.priority] - priorityOrder[b.priority]);

}

function saveTasks(){

localStorage.setItem("tasks", JSON.stringify(tasks));

}

function addTask(){

    const title = document.getElementById("taskTitle").value;

    const priority = document.getElementById("taskPriority").value;

    const deadline = document.getElementById("taskDeadline").value;

    const tags = document.getElementById("taskTags").value.split(",");

    if(title === "") return;

    const task = createTask(title, priority, deadline, tags);

    tasks.push(task);

    sortTasks();

    saveTasks();

    renderTasks();

}

function toggleTask(id){

    tasks = tasks.map(task => {

        if(task.id === id){
            task.completed = !task.completed;
        }

        return task;

    });

    renderTasks();

    saveTasks();

}

function deleteTask(id){

    tasks = tasks.filter(task => task.id !== id);

    renderTasks();

    saveTasks();

}

function loadTasks(){

const stored = localStorage.getItem("tasks");

if(stored){

tasks = JSON.parse(stored);

renderTasks();

}

}

