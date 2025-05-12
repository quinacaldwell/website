// Example 1: Interactive Data Visualization Dashboard
// This code snippet shows how to fetch data and render a simple bar chart using Chart.js

// Assume you have an HTML canvas element with id="myChart"
// <canvas id="myChart"></canvas>
// And you have included the Chart.js library in your HTML:
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

async function fetchDataAndCreateChart() {
    try {
        // Replace 'data.json' with the actual path to your data file or API endpoint
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Assume data is an array of objects like:
        // [{ label: 'Category A', value: 20 }, { label: 'Category B', value: 35 }, ...]

        const labels = data.map(item => item.label);
        const values = data.map(item => item.value);

        const ctx = document.getElementById('myChart').getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'bar', // Or 'line', 'pie', etc.
            data: {
                labels: labels,
                datasets: [{
                    label: 'Sample Data',
                    data: values,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                responsive: true, // Make the chart responsive
                maintainAspectRatio: false // Allow chart to resize freely
            }
        });

    } catch (error) {
        console.error('Error fetching data or creating chart:', error);
    }
}

// Call the function to fetch data and create the chart when the page loads
window.onload = fetchDataAndCreateChart;
