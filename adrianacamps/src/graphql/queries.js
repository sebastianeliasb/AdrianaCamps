/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProjects = /* GraphQL */ `
  query GetProjects($id: ID!) {
    getProjects(id: $id) {
      id
      name
      subName
      location
      date
      description
      subDescription
      client
      photographer
      surface
      projectImages
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        subName
        location
        date
        description
        subDescription
        client
        photographer
        surface
        projectImages
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
