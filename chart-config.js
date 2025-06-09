// Sales Overview: Monthly revenue (dummy data)
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
  type: 'bar',
  data: {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [{
      label: 'Revenue (USD, $K)',
      data: [420, 510, 480, 610, 700, 820, 900, 860, 790, 950, 1100, 1250],
      backgroundColor: [
        'rgba(255, 153, 0, 0.85)',
        'rgba(255, 153, 0, 0.85)',
        'rgba(255, 153, 0, 0.85)',
        'rgba(0, 204, 153, 0.85)',
        'rgba(255, 153, 0, 0.85)',
        'rgba(255, 153, 0, 0.85)',
        'rgba(255, 153, 0, 0.85)',
        'rgba(255, 153, 0, 0.85)',
        'rgba(255, 153, 0, 0.85)',
        'rgba(255, 153, 0, 0.85)',
        'rgba(255, 153, 0, 0.85)',
        'rgba(255, 153, 0, 0.85)'
      ],
      borderRadius: 8,
      borderSkipped: false,
      maxBarThickness: 32
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#fff', font: { size: 15, weight: 'bold' } }
      },
      tooltip: {
        backgroundColor: '#1f1f1f',
        borderColor: '#ff9900',
        borderWidth: 1,
        titleColor: '#ff9900',
        bodyColor: '#fff'
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#fff', font: { size: 13 } }
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.07)' },
        ticks: { color: '#fff', font: { size: 13 } }
      }
    },
    animation: {
      duration: 1200,
      easing: 'easeOutQuart'
    }
  }
});

// Customer Growth: User growth (dummy data)
const growthCtx = document.getElementById('growthChart').getContext('2d');
const growthChart = new Chart(growthCtx, {
  type: 'line',
  data: {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [{
      label: 'Active Customers (K)',
      data: [120, 135, 150, 170, 210, 260, 300, 340, 390, 460, 540, 630],
      fill: true,
      backgroundColor: 'rgba(0,204,153,0.12)',
      borderColor: '#00cc99',
      pointBackgroundColor: '#ff9900',
      pointBorderColor: '#fff',
      pointRadius: 5,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#fff', font: { size: 15, weight: 'bold' } }
      },
      tooltip: {
        backgroundColor: '#1f1f1f',
        borderColor: '#00cc99',
        borderWidth: 1,
        titleColor: '#00cc99',
        bodyColor: '#fff'
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#fff', font: { size: 13 } }
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.07)' },
        ticks: { color: '#fff', font: { size: 13 } }
      }
    },
    animation: {
      duration: 1200,
      easing: 'easeOutQuart'
    }
  }
});
