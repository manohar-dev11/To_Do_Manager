document.addEventListener("DOMContentLoaded", () => {

    const addBtn = document.getElementById("addTaskBtn");

    addBtn.addEventListener("click", addTask);

    loadTasks();
    renderChart();

});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {

    searchTasks(e.target.value);

});
