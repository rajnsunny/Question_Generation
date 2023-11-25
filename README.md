
# Question Paper Generation System

This is a Question Paper Generation System implemented in JavaScript. The system allows users to generate question papers with different difficulty levels and customizable marks distribution.

## Table of Contents

- [Algorithms](#algorithms)
  - [Marks Distribution Algorithm](#marks-distribution-algorithm)
  - [Question Generation Algorithm](#question-generation-algorithm)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Algorithms

### Marks Distribution Algorithm

The marks distribution algorithm determines how the total marks are distributed among easy, medium, and hard questions. The distribution percentages are customizable and can be adjusted based on your requirements.

#### Function Signature

```javascript
function generateMarksDistribution(difficulty = 'easy', totalMarks = 100)
```

#### Parameters

- `difficulty` (optional, default: 'easy'): The difficulty level for which marks distribution is generated ('easy', 'medium', or 'hard').
- `totalMarks` (optional, default: 100): The total marks for the question paper.

#### Return Value

An object containing the marks distribution for easy, medium, and hard questions.

### Question Generation Algorithm

The question generation algorithm utilizes the marks distribution to select a specific number of questions for each difficulty level from a pool of predefined questions.

#### Function Signature

```javascript
function generateQuestions(difficulty, totalMarks, questions)
```

### EndPoint
```
BASEURL/generate-question-paper?totalMarks=100&easy=20&mediun=50&hard=30
```

#### Parameters

- `difficulty`: The difficulty level for which questions are generated ('easy', 'medium', or 'hard').
- `totalMarks`: The total marks for the question paper.
- `questions`: An array of predefined questions with their difficulty levels and marks.

#### Return Value

An array of selected questions based on the specified difficulty level and marks.



## Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rajnsunny/Question_Generation.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Question_Generation
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. Modify the `questions.json` file to include your questions with difficulty levels and marks.

2. Adjust the marks distribution algorithm parameters in `questionPaperGeneration.js` if needed.

3. Run the application:

   ```bash
   node app.js
   ```

4. View the generated question paper in the console.
