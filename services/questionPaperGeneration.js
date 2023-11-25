
class QuestionPaperGenerator {
    constructor(questionStore) {
        this.questionStore = questionStore;
    }

    generateQuestionPaper(totalMarks, difficultyDistribution) {
        const questionPaper = [];

        for (const [difficulty, percentage] of Object.entries(difficultyDistribution)) {
            const difficultyQuestions = this.questionStore.getQuestionsByDifficulty(difficulty);
            const possibleQuestion = (Math.floor(totalMarks * percentage / 100))/this.calculateWeight(difficulty);
            const numQuestions = Math.min(possibleQuestion, difficultyQuestions.length);
            
            const selectedQuestions = this.weightedRandomSelection(difficultyQuestions, numQuestions);
            questionPaper.push(...selectedQuestions);
        }

        return questionPaper;
    }

    weightedRandomSelection(questions, numQuestions) {
        const weightedQuestions = questions.map(question => ({
            ...question,
            weight: this.calculateWeight(question.difficulty, question.marks),
        }));

        const selectedQuestions = [];

        while (numQuestions > 0 && weightedQuestions.length > 0) {
            const totalWeight = weightedQuestions.reduce((sum, question) => sum + question.weight, 0);
            const randomValue = Math.random() * totalWeight;

            let cumulativeWeight = 0;
            let selectedQuestionIndex = -1;

            for (let i = 0; i < weightedQuestions.length; i++) {
                cumulativeWeight += weightedQuestions[i].weight;
                if (randomValue <= cumulativeWeight) {
                    selectedQuestionIndex = i;
                    break;
                }
            }

            if (selectedQuestionIndex !== -1) {
                selectedQuestions.push(weightedQuestions[selectedQuestionIndex]);
                weightedQuestions.splice(selectedQuestionIndex, 1);
                numQuestions--;
            }
        }

        return selectedQuestions;
    }

    calculateWeight(difficulty) {
        
            switch (difficulty) {
                case 'Easy':
                    return 2;
                case 'Medium':
                    return 5;
                case 'Hard':
                    return 10;
                default:
                    return 1;
            }
        
    }
}

module.exports = QuestionPaperGenerator;
