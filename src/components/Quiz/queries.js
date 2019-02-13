import gql from 'graphql-tag';

export const getQuestions = gql`
    query getQuestions {
        Questions {
          id
          question
          options
          answer
        }
    }
`;
