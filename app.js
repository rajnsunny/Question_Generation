const express = require('express');
const app = express();

const Question = require('./models/Question');
const QuestionStore = require('./Store/QuestionStore');
const QuestionPaperGenerator = require('./services/questionPaperGeneration');
const difficultyDistri = require('./utils/difficultyDistribution')

const questionStore = new QuestionStore();

// Load questions from data.json
const data = require('./data/Questions.json');
data.forEach(questionData => {
    const question = new Question(questionData.question, questionData.subject, questionData.topic, questionData.difficulty, questionData.marks);
    questionStore.addQuestion(question);
});


const questionPaperGenerator = new QuestionPaperGenerator(questionStore);



// API endpoint to generate a question paper
app.get('/generate-question-paper', (req, res) => {
    const totalMarks = parseInt(req.query.totalMarks) || 100;
    const easy = parseInt(req.query.easy) || 0;
    const medium = parseInt(req.query.med) || 0;
    const hard = parseInt(req.query.hard) || 0;
    const difficultyDistribution =  difficultyDistri(easy,medium,hard);

    const generatedQuestionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);
    
    res.json(generatedQuestionPaper);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
