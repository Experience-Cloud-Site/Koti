import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import CHARTJS from '@salesforce/resourceUrl/ChartJS'; // Import the static resource

export default class ProductDashboard extends LightningElement {
    chart; // Holds the chart instance
    chartjsInitialized = false; // Flag to check if Chart.js is loaded

    connectedCallback() {
        if (this.chartjsInitialized) {
            return;
        }
        this.chartjsInitialized = true;

        // Load Chart.js
        loadScript(this, CHARTJS)
            .then(() => {
                console.log('Chart.js loaded successfully');
               /// this.initializeChart(); // Initialize the chart after loading
            })
            .catch((error) => {
                console.error('Error loading Chart.js', error);
            });
    }

    initializeChart() {
        const ctx = this.template.querySelector('canvas.chart').getContext('2d');
        this.chart = new window.Chart(ctx, {
            type: 'bar', // Chart type (bar, line, pie, etc.)
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Sales',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}