// Global variables to store data
let csvData = [];
let headers = [];

// Get elements
const fileInput = document.getElementById('csvFile');
const dataSection = document.getElementById('dataSection');
const chartSection = document.getElementById('chartSection');
const dataTableDiv = document.getElementById('dataTable');
const xColumnSelect = document.getElementById('xColumn');
const yColumnSelect = document.getElementById('yColumn');
const createChartBtn = document.getElementById('createChart');

// Event listener for file upload
fileInput.addEventListener('change', handleFileUpload);

// TODO: Implement the handleFileUpload function
// This function should:
// 1. Read the selected CSV file
// 2. Parse the CSV data into rows and columns
// 3. Store the data in the csvData variable
// 4. Call displayDataTable() to show the data
// 5. Call populateColumnSelects() to fill the dropdown menus

function handleFileUpload(event) {
    const file = event.target.files[0];
    
    // Your code here to read and parse the CSV file
    // Hint: Use FileReader API
    
}

// TODO: Implement the parseCSV function
// This function should take CSV text and return an array of row objects
function parseCSV(text) {
    // Your code here to parse CSV text
    // Hint: Split by newlines, then by commas
    // Handle the header row separately
    
}

// TODO: Implement the displayDataTable function
// This function should create an HTML table from the csvData
function displayDataTable() {
    // Your code here to create and display a table
    // Show headers and at least first 10 rows
    
}

// TODO: Implement the populateColumnSelects function
// This function should fill the x and y axis dropdown menus with column names
function populateColumnSelects() {
    // Your code here to populate select dropdowns
    
}

// TODO: Implement the createChart function
// This function should create a chart based on selected columns
// You can use Chart.js (uncomment the script tag in HTML) or Canvas API
createChartBtn.addEventListener('click', createChart);

function createChart() {
    // Your code here to create visualizations
    // Get selected columns from xColumnSelect and yColumnSelect
    // Create a chart using the selected data
    
}

// BONUS CHALLENGES:
// - Add different chart types (bar, line, pie)
// - Add filtering/sorting to the data table
// - Add tooltips or hover effects to charts
// - Add ability to download charts as images
