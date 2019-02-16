import gql from 'graphql-tag';

export const getQuizInfoFromState = gql`
    query getQuizInfoFromState {
        correctAnswers @client
        maxQuestions @client
        pastQuestions @client
    }
`;

export const getQuestions = gql`
    query getQuestions($pastQuestions: [Int]) {
        Questions (pastQuestions: $pastQuestions) {
          id
          question
          options
          answer
        }
        isQuestionAnswered @client
    }
`;
