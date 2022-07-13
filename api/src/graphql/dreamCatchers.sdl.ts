export const schema = gql`
  type DreamCatcher {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    dreamCatchers: [DreamCatcher!]! @requireAuth
    dreamCatcher(id: Int!): DreamCatcher @requireAuth
  }

  input CreateDreamCatcherInput {
    title: String!
    body: String!
  }

  input UpdateDreamCatcherInput {
    title: String
    body: String
  }

  type Mutation {
    createDreamCatcher(input: CreateDreamCatcherInput!): DreamCatcher!
      @requireAuth
    updateDreamCatcher(
      id: Int!
      input: UpdateDreamCatcherInput!
    ): DreamCatcher! @requireAuth
    deleteDreamCatcher(id: Int!): DreamCatcher! @requireAuth
  }
`
