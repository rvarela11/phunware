export const defaults = {
    isQuestionAnswered: false,
    grade: [],
    pastQuestions: [0],
    maxQuestions: 10
};

export const resolvers = {
    Mutation: {
        updateQuestionInfo: (_, { isQuestionAnswered, isQuestionCorrect, questionId }, { cache }) => {
            cache.writeData({
                data: {
                    isQuestionAnswered,
                    grade: isQuestionCorrect ? defaults.grade.push(1) : null,
                    questionId: questionId ? defaults.pastQuestions.push(questionId) : null
                }
            });
            return null;
        }
    }
};
