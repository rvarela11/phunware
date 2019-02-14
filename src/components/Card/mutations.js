import gql from 'graphql-tag';

export const updateIsQuestionAnswered = gql`
    mutation updateIsQuestionAnswered($isQuestionAnswered: Boolean) {
        updateIsQuestionAnswered(isQuestionAnswered: $isQuestionAnswered) @client
    }
`;