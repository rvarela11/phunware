import gql from 'graphql-tag';

export const getMaxAndPastQuestions = gql`
    query getMaxAndPastQuestions {
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
