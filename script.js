// Akan names arrays
const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// get from and results elements
const form = document.getElementById('akanForm');
const resultDiv = document.getElementById('result');
const akanNameElement = document.getElementById('akanName');
const dayInfoElement = document.getElementById('dayInfo');

// Add event listener to form
form.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateAkanName();
});

/**
 * Main function to calculate and display Akan name
 */
function calculateAkanName() {
    // Get form values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validates inputs
    if (!validateInputs(day, month, year, gender)) {
        return;
    }

    // Calculate day of week
    const dayOfWeek = calculateDayOfWeek(day, month, year);

    // Get Akan name based on gender
    const akanName = getAkanName(dayOfWeek, gender.value);

    // Display result
    displayResult(akanName, daysOfWeek[dayOfWeek]);

    // Clear form fields
    clearForm();
}

/**
 * Validates user inputs
 * @param {number} day - Day of birth
 * @param {number} month - Month of birth
 * @param {number} year - Year of birth
 * @param {object} gender - Selected gender radio button
 * @returns {boolean} - Returns true if valid, false otherwise
 */
function validateInputs(day, month, year, gender) {
    // Check if all fields are filled
    if (!day || !month || !year || !gender) {
        alert('Please fill in all fields including gender selection.');
        return false;
    }

    // Validate day
    if (day < 1 || day > 31) {
        alert('Invalid day! Please enter a day between 1 and 31.');
        return false;
    }

    // Validate month
    if (month < 1 || month > 12) {
        alert('Invalid month! Please enter a month between 1 and 12.');
        return false;
    }

    // Validate days in specific months
    if (!isValidDate(day, month, year)) {
        alert('Invalid date! The day you entered does not exist in the selected month.');
        return false;
    }

    // Validate year (reasonable range)
    if (year < 1900 || year > new Date().getFullYear()) {
        alert(`Invalid year! Please enter a year between 1900 and ${new Date().getFullYear()}.`);
        return false;
    }

    return true;
}

/**
 * Checks if a date is valid for the given month and year
 * @param {number} day - Day of birth
 * @param {number} month - Month of birth
 * @param {number} year - Year of birth
 * @returns {boolean} - Returns true if date is valid
 */
function isValidDate(day, month, year) {
    // Days in each month
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Check for leap year
    if (isLeapYear(year)) {
        daysInMonth[1] = 29;
    }
    
    // Check if day is valid for the month
    return day <= daysInMonth[month - 1];
}

/**
 * Checks if a year is a leap year
 * @param {number} year - Year to check
 * @returns {boolean} - Returns true if leap year
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Calculates the day of the week using the given formula
 * Formula: d = ((CC/4 - 2*CC - 1) + (5*YY/4) + (26*(MM+1)/10) + DD) mod 7
 * @param {number} day - Day of birth
 * @param {number} month - Month of birth
 * @param {number} year - Year of birth
 * @returns {number} - Day of week (0-6, where 0 is Sunday)
 */
function calculateDayOfWeek(day, month, year) {
    // Extract century and year
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    // Apply the formula
    const d = ((Math.floor(CC / 4) - 2 * CC - 1) + 
               (Math.floor(5 * YY / 4)) + 
               (Math.floor(26 * (MM + 1) / 10)) + 
               DD) % 7;

    // Ensure result is positive (JavaScript modulo can return negative values)
    return ((d % 7) + 7) % 7;
}

/**
 * Gets the Akan name based on day of week and gender
 * @param {number} dayOfWeek - Day of week (0-6)
 * @param {string} gender - Gender ('male' or 'female')
 * @returns {string} - Akan name
 */
function getAkanName(dayOfWeek, gender) {
    if (gender === 'male') {
        return maleNames[dayOfWeek];
    } else {
        return femaleNames[dayOfWeek];
    }
}

/**
 * Displays the result on the webpage
 * @param {string} name - Akan name
 * @param {string} day - Day of the week
 */
function displayResult(name, day) {
    akanNameElement.textContent = name;
    dayInfoElement.textContent = `You were born on a ${day}!`;
    
    // Show result with animation
    resultDiv.classList.remove('hidden');
    
    // Scroll to result smoothly
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Clears the form fields after submission
 */
function clearForm() {
    document.getElementById('day').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
    
    // Uncheck radio buttons
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => radio.checked = false);
}