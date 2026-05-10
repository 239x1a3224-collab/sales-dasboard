// Set default Chart.js configuration for dark theme
Chart.defaults.color = '#94a3b8';
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.scale.grid.color = 'rgba(51, 65, 85, 0.5)';
Chart.defaults.plugins.legend.labels.color = '#e2e8f0';

const borderThickness = 2;

// 1. Bar chart for monthly sales
const ctxMonthlySales = document.getElementById('monthlySalesChart').getContext('2d');
new Chart(ctxMonthlySales, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Sales ($)',
            data: [65000, 59000, 80000, 81000, 56000, 95000, 105000],
            backgroundColor: 'rgba(59, 130, 246, 0.7)', // blue-500
            borderColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        }
    }
});

// 2. Line chart for revenue trends
const ctxRevenueTrends = document.getElementById('revenueTrendsChart').getContext('2d');
new Chart(ctxRevenueTrends, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Revenue ($)',
            data: [45000, 52000, 48000, 61000, 59000, 75000, 82000],
            backgroundColor: 'rgba(16, 185, 129, 0.2)', // emerald-500
            borderColor: '#10b981',
            borderWidth: borderThickness,
            tension: 0.4, // Smooth curve
            fill: true,
            pointBackgroundColor: '#10b981'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// 3. Pie chart for product categories
const ctxProductCategories = document.getElementById('productCategoriesChart').getContext('2d');
new Chart(ctxProductCategories, {
    type: 'pie',
    data: {
        labels: ['Electronics', 'Clothing', 'Home & Garden', 'Sports'],
        datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
                '#3b82f6', // blue
                '#8b5cf6', // violet
                '#ec4899', // pink
                '#f59e0b'  // amber
            ],
            borderColor: '#1e293b', // Match card background
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'right' }
        }
    }
});

// 4. Doughnut chart for regional sales
const ctxRegionalSales = document.getElementById('regionalSalesChart').getContext('2d');
new Chart(ctxRegionalSales, {
    type: 'doughnut',
    data: {
        labels: ['North America', 'Europe', 'Asia', 'Other'],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: [
                '#0ea5e9', // sky
                '#14b8a6', // teal
                '#f43f5e', // rose
                '#84cc16'  // lime
            ],
            borderColor: '#1e293b',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: { position: 'right' }
        }
    }
});

// 5. Radar chart for team performance
const ctxTeamPerformance = document.getElementById('teamPerformanceChart').getContext('2d');
new Chart(ctxTeamPerformance, {
    type: 'radar',
    data: {
        labels: ['Sales Target', 'Lead Gen', 'Conversion', 'Retention', 'Customer Satisfaction'],
        datasets: [
            {
                label: 'Team Alpha',
                data: [90, 80, 75, 85, 95],
                backgroundColor: 'rgba(139, 92, 246, 0.2)', // violet
                borderColor: '#8b5cf6',
                pointBackgroundColor: '#8b5cf6',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#8b5cf6'
            },
            {
                label: 'Team Beta',
                data: [70, 90, 85, 75, 80],
                backgroundColor: 'rgba(236, 72, 153, 0.2)', // pink
                borderColor: '#ec4899',
                pointBackgroundColor: '#ec4899',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#ec4899'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(148, 163, 184, 0.3)'
                },
                grid: {
                    color: 'rgba(148, 163, 184, 0.3)'
                },
                pointLabels: {
                    color: '#e2e8f0',
                    font: {
                        family: "'Inter', sans-serif"
                    }
                },
                ticks: {
                    display: false,
                    backdropColor: 'transparent'
                }
            }
        }
    }
});
