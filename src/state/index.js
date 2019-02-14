export const defaults = {
    correctAnswers: [],
    isQuestionAnswered: false,
    maxQuestions: 10,
    pastQuestions: [0]
};

export const resolvers = {
    Mutation: {
        updateQuestionInfo: (_, { isQuestionAnswered, isQuestionCorrect, questionId }, { cache }) => {
            cache.writeData({
                data: {
                    correctAnswers: isQuestionCorrect ? defaults.correctAnswers.push(1) : null,
                    isQuestionAnswered,
                    questionId: questionId ? defaults.pastQuestions.push(questionId) : null
                }
            });
            return null;
        }
    }
};
