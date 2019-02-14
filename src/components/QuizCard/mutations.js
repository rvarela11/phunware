import gql from 'graphql-tag';

export const updateQuestionInfo = gql`
    mutation updateQuestionInfo(
        $isQuestionAnswered: Boolean, 
        $isQuestionCorrect: Boolean,
        $questionId: Int
    ) {
        updateQuestionInfo(
            isQuestionAnswered: $isQuestionAnswered, 
            isQuestionCorrect: $isQuestionCorrect,
            questionId: $questionId
        ) @client
    }
`;
