const graphql = require('graphql')
const types = require('./types.js')
const logic = require('./logic.js')

module.exports = {
  getLesson: {
    type: types.lessonType,
    args: {
      id: {
        type: new graphql.GraphQLNonNull(graphql.GraphQLString)
      }
    },
    resolve: (root, { id }, context) =>
      logic.getLesson(id, context)
  }
}