document.addEventListener("DOMContentLoaded", function() {
    // Task 1: Display the current year in the footer's first paragraph
    const currentYear = new Date().getFullYear(); // Get the current year
    const yearElement = document.getElementById('currentyear'); // Find the element where the year should go
    yearElement.textContent = currentYear; // Set the text content to the current year

    // Task 2: Display the last modified date of the document in the second paragraph
    const lastModified = document.lastModified; // Get the last modified date of the document
    const lastModifiedElement = document.getElementById('lastModified'); // Find the element where the last modified date should go
    lastModifiedElement.textContent = `Last modified: ${lastModified}`; // Display the last modified date
});