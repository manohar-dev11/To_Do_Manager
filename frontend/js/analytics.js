function calculateStats() {
  const total = tasks.length;

  const completed = tasks.filter((t) => t.completed).length;

  const pending = tasks.filter((t) => !t.completed).length;

  const productivity = total === 0 ? 0 : Math.round((completed / total) * 100);

  return {
    total,
    completed,
    pending,
    productivity,
  };
}

function renderStats() {
  const stats = calculateStats();

  document.getElementById("totalTasks").textContent = stats.total;

  document.getElementById("completedTasks").textContent = stats.completed;

  document.getElementById("pendingTasks").textContent = stats.pending;

  document.getElementById("productivityRate").textContent =
    stats.productivity + "%";
}

function renderChart() {
  const ctx = document.getElementById("productivityChart");

  const stats = calculateStats();

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Pending"],
      datasets: [
        {
          data: [stats.completed, stats.pending],
        },
      ],
    },
  });
}