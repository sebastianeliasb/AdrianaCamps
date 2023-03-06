/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProjects = /* GraphQL */ `
  subscription OnCreateProjects(
    $filter: ModelSubscriptionProjectsFilterInput
    $username: String
  ) {
    onCreateProjects(filter: $filter, username: $username) {
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
      username
    }
  }
`;
export const onUpdateProjects = /* GraphQL */ `
  subscription OnUpdateProjects(
    $filter: ModelSubscriptionProjectsFilterInput
    $username: String
  ) {
    onUpdateProjects(filter: $filter, username: $username) {
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
      username
    }
  }
`;
export const onDeleteProjects = /* GraphQL */ `
  subscription OnDeleteProjects(
    $filter: ModelSubscriptionProjectsFilterInput
    $username: String
  ) {
    onDeleteProjects(filter: $filter, username: $username) {
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
      username
    }
  }
`;
