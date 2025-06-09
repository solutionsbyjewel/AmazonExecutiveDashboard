const ctx = document.getElementById('salesChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Monthly Revenue',
      data: [1200000, 1500000, 1700000, 1400000, 2000000, 1800000],
      borderColor: '#ff9900',
      backgroundColor: 'rgba(255,153,0,0.2)',
      tension: 0.3,
      fill: true,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#fff' } }
    },
    scales: {
      x: { ticks: { color: '#ccc' } },
      y: { ticks: { color: '#ccc' } }
    }
  }
});