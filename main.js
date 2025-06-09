// Light/Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Persist theme in localStorage
function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.innerHTML = theme === "dark"
    ? '<span class="material-icons">light_mode</span>'
    : '<span class="material-icons">dark_mode</span>';
}

// On load, set theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Chart.js - Line Chart: Monthly Revenue
const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [{
      label: 'Revenue',
      data: [950, 1050, 1200, 1300, 1250, 1400, 1550, 1700, 1600, 1750, 1850, 2000],
      borderColor: '#ff9900',
      backgroundColor: 'rgba(255,153,0,0.07)',
      pointBackgroundColor: '#ff9900',
      tension: 0.35,
      fill: true
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { color: getComputedStyle(root).getPropertyValue('--text') } },
      x: { ticks: { color: getComputedStyle(root).getPropertyValue('--text') } }
    }
  }
});

// Chart.js - Pie Chart: Category Sales
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Electronics', 'Home', 'Fashion', 'Books', 'Toys'],
    datasets: [{
      data: [35, 22, 18, 15, 10],
      backgroundColor: [
        '#ff9900', '#232f3e', '#34a853', '#1a73e8', '#ea4335'
      ]
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: getComputedStyle(root).getPropertyValue('--text') }
      }
    }
  }
});

// Chart.js - Bar Chart: Inventory Levels
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Electronics', 'Home', 'Fashion', 'Books', 'Toys'],
    datasets: [{
      label: 'Inventory',
      data: [3200, 2100, 1800, 900, 1200],
      backgroundColor: [
        '#ff9900', '#232f3e', '#34a853', '#1a73e8', '#ea4335'
      ]
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { color: getComputedStyle(root).getPropertyValue('--text') } },
      x: { ticks: { color: getComputedStyle(root).getPropertyValue('--text') } }
    }
  }
});

// Responsive Table Data
const orders = [
  { id: 'A1001', product: 'Echo Dot (4th Gen)', customer: 'Alice Smith', date: '2025-06-07', status: 'Delivered' },
  { id: 'A1002', product: 'Fire TV Stick', customer: 'Bob Lee', date: '2025-06-07', status: 'Shipped' },
  { id: 'A1003', product: 'Kindle Paperwhite', customer: 'Carlos Diaz', date: '2025-06-06', status: 'Pending' },
  { id: 'A1004', product: 'Amazon Basics Mouse', customer: 'Dana White', date: '2025-06-06', status: 'Cancelled' },
  { id: 'A1005', product: 'Echo Show 8', customer: 'Eve Black', date: '2025-06-05', status: 'Delivered' },
  { id: 'A1006', product: 'Ring Doorbell', customer: 'Frank Green', date: '2025-06-05', status: 'Shipped' },
  { id: 'A1007', product: 'Fire HD 10 Tablet', customer: 'Grace Kim', date: '2025-06-04', status: 'Delivered' },
  { id: 'A1008', product: 'Amazon Smart Plug', customer: 'Henry Gold', date: '2025-06-04', status: 'Pending' }
];

const statusClass = {
  'Delivered': 'delivered',
  'Pending': 'pending',
  'Cancelled': 'cancelled',
  'Shipped': 'shipped'
};

function populateOrdersTable() {
  const tbody = document.getElementById('ordersTableBody');
  tbody.innerHTML = '';
  orders.forEach(order => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${order.id}</td>
      <td>${order.product}</td>
      <td>${order.customer}</td>
      <td>${order.date}</td>
      <td><span class="status ${statusClass[order.status]}">${order.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

populateOrdersTable();

// Update Chart.js colors on theme change
function updateChartColors() {
  const textColor = getComputedStyle(root).getPropertyValue('--text');
  [lineChart, pieChart, barChart].forEach(chart => {
    if (chart.options.scales) {
      if (chart.options.scales.x) chart.options.scales.x.ticks.color = textColor;
      if (chart.options.scales.y) chart.options.scales.y.ticks.color = textColor;
    }
    if (chart.options.plugins && chart.options.plugins.legend && chart.options.plugins.legend.labels)
      chart.options.plugins.legend.labels.color = textColor;
    chart.update();
  });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  setTheme(e.matches ? 'dark' : 'light');
  updateChartColors();
});

themeToggle.addEventListener('click', updateChartColors);
