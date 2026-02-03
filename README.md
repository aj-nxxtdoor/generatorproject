Akan Name Generator

project description

The Akan Name Generator is a web application that calculates the day of the week a user was born and assigns them an Akan name based on their gender. Akan names are derived from Ghanaian culture, where children are traditionally named according to the day of the week they were born.

This interactive application allows users to input their birthdate and gender, then displays their corresponding Akan name along with the day of the week they were born.

author

abdifatah

Email: abdifatah6002@gmail.com
Set Up Instructions

Prerequisites

A modern web browser (Chrome, Firefox, Safari, or Edge)
Git installed on your computer
A text editor (VS Code, Sublime Text, etc.)
Installation

Clone the repository

git clone https://github.com/yourusername/akan-name-generator.git
Navigate to the project directory**

cd akan-name-generator
Open the project**

Simply open index.html in your web browser, or
Use a local server (e.g., Live Server in VS Code)
Behavior-Driven Development (BDD)

User Stories and Scenarios

Story 1: User enters valid birthdate and gender

Given the user is on the Akan Name Generator page
When the user enters a valid day (1-31), month (1-12), year, and selects a gender
And clicks "Find My Akan Name"
Then the application displays the correct Akan name
And shows the day of the week they were born
Story 2: User enters invalid day

Given the user is on the Akan Name Generator page
When the user enters a day outside the range of 1-31
Then the application displays an alert message
And does not calculate the Akan name
Story 3: User enters invalid month

Given the user is on the Akan Name Generator page
When the user enters a month outside the range of 1-12
Then the application displays an alert message
And does not calculate the Akan name
Story 4: User submits form without selecting gender

Given the user is on the Akan Name Generator page
When the user enters date information but does not select a gender
And clicks "Find My Akan Name"
Then the application displays an alert message requesting gender selection
Story 5: User enters invalid date for a specific month

Given the user is on the Akan Name Generator page
When the user enters February 30th or any other invalid date
Then the application displays an alert message
And does not calculate the Akan name
Technologies Used

HTML5 - Structure and content
CSS3 - Styling and layout
Flexbox for responsive design
CSS Grid for layout
CSS animations and transitions
Custom CSS variables for theming
JavaScript (ES6) - Logic and interactivity
DOM manipulation
Event handling
Form validation
Mathematical calculations
Arrays and functions
Features

✅ User-friendly interface with clear instructions
✅ Form validation to ensure data integrity
✅ Date validation including leap year checking
✅ Responsive design that works on all devices
✅ Smooth animations for better user experience
✅ Automatic form clearing after submission
✅ Reference table showing all Akan names
✅ Portfolio-quality design with modern aesthetics
How It Works

The Day Calculation Formula

The application uses the following formula to calculate the day of the week:

d = ((CC/4 - 2*CC - 1) + (5*YY/4) + (26*(MM+1)/10) + DD) mod 7
Where:

CC = Century (first two digits of the year)
YY = Year (last two digits of the year)
MM = Month
DD = Day
mod = Modulus operator (%)
Akan Names
Day	Male Name	Female Name
Sunday	Kwasi	Akosua
Monday	Kwadwo	Adwoa
Tuesday	Kwabena	Abenaa
Wednesday	Kwaku	Akua
Thursday	Yaw	Yaa
Friday	Kofi	Afua
Saturday	Kwame	Ama
Code Quality

✅ Proper indentation and formatting
✅ Clear and descriptive variable names
✅ Comprehensive code comments
✅ Modular functions with single responsibilities
✅ Input validation and error handling
✅ Follows JavaScript best practices
Testing
To test the application:

Valid inputs: Try entering your actual birthdate
Invalid day: Try entering 32 or 0
Invalid month: Try entering 13 or 0
Invalid dates: Try February 30th or April 31st
Missing gender: Submit without selecting gender
Leap years: Test with leap year dates (e.g., Feb 29, 2000)
Browser Compatibility
✅ Chrome (recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

license
Copyright © 2026[abdifatah]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Contact Information
For any questions, suggestions, or feedback:

abdifatah6002@gmail.com

acknoledgments
Ghanaian culture for the Akan naming tradition
Moringa School for the project requirements
All contributors and testers
Made with ❤️ by [abdifatah]
