# Calculator App

This is a simple React application for calculating how old a dog is in dog years based on how old the dog is in human years.

## Installation

1. **Clone the repository:**

   ```
   git clone git@github.com:Old-Dead-One/dog-years-calculator.git
   cd dog-years-calculator
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the development server:**

   ```
   npm run dev
   ```

## Code Overview

### `DogYearsCalculator` Component

This component handles the input, calculation, and display logic for the app.

#### State Variables

- `name`: Stores the dog's name.
- `humanYears`: Stores how old the dog is in human years.
- `dogYears`: Stores the dog's age as an object with `years`, `months`, and `days`.

#### Methods

- `handleSubmit(e)`: Handles the form submission, and the calculation logic for dogAge in years, months, and days.

## Usage

1. Open the application in your browser.
2. Enter your dog's name in the "Name" field.
3. Enter how old your dog is in human years in the age field.
4. Click the "Calculate" button.
5. The application will display the number of years, months, and days your dog is in dog years.
