/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProjects = /* GraphQL */ `
  mutation CreateProjects(
    $input: CreateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    createProjects(input: $input, condition: $condition) {
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
export const updateProjects = /* GraphQL */ `
  mutation UpdateProjects(
    $input: UpdateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    updateProjects(input: $input, condition: $condition) {
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
export const deleteProjects = /* GraphQL */ `
  mutation DeleteProjects(
    $input: DeleteProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    deleteProjects(input: $input, condition: $condition) {
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
