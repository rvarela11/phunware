export const defaults = {
    isQuestionAnswered: false
};

export const resolvers = {
    Mutation: {
        updateIsQuestionAnswered: (_, { isQuestionAnswered }, { cache }) => {
            cache.writeData({
                data: {
                    isQuestionAnswered
                }
            });
            return null;
        }
    }
};
