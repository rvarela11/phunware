// @queries
import { getQuizInfoFromState } from '../components/Quiz/queries';

export const defaults = {
    correctAnswers: 0,
    isQuestionAnswered: false,
    maxQuestions: 10,
    pastQuestions: [0]
};

export const resolvers = {
    Mutation: {
        updateQuestionInfo: (_, { isQuestionAnswered, isQuestionCorrect, questionId }, { cache }) => {
            let { correctAnswers, pastQuestions } = cache.readQuery({ query: getQuizInfoFromState });
            correctAnswers = isQuestionCorrect ? correctAnswers += 1 : correctAnswers;
            pastQuestions = questionId ? pastQuestions.concat(questionId) : pastQuestions;
            cache.writeData({
                data: {
                    correctAnswers,
                    isQuestionAnswered,
                    pastQuestions
                }
            });
            return null;
        }
    }
};
