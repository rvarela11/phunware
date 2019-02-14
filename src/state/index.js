export const defaults = {
    isQuestionAnswered: false,
    correctAnswers: [],
    pastQuestions: [0],
    maxQuestions: 10
};

export const resolvers = {
    Mutation: {
        updateQuestionInfo: (_, { isQuestionAnswered, isQuestionCorrect, questionId }, { cache }) => {
            cache.writeData({
                data: {
                    isQuestionAnswered,
                    correctAnswers: isQuestionCorrect ? defaults.correctAnswers.push(1) : null,
                    questionId: questionId ? defaults.pastQuestions.push(questionId) : null
                }
            });
            return null;
        }
    }
};