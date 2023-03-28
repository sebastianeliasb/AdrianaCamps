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
      username
    }
  }
`;

export const createHome = /* GraphQL */ `
  mutation CreateHome(
    $input: CreateHomeInput!
  ) {
    createHome(input: $input) {
      carrouselImages
    }
  }
`;

export const createStudio = /* GraphQL */ `
  mutation CreateStudio(
    $input: CreateStudioInput!
  ) {
    createStudio(input: $input) {
      aboutImage
      aboutMe
      philosophy
      route
      username
    }
  }
`;

export const createConcept = /* GraphQL */ `
  mutation CreateConcept(
    $input: CreateConceptInput!
  ) {
    createConcept(input: $input) {
    conceptsImageMain
    conceptImages
    conceptTitle
    conceptText
    }
  }
`;

export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
  ) {
    createContact(input: $input) {
    contactImage
    contactText
    }
  }
`;

export const createNews = /* GraphQL */ `
  mutation CreateNews(
    $input: CreateNewsInput!
  ) {
    createNews(input: $input) {
    newsYear 
    newsTitle
    newsDate
    newsSource
    newsLink
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
      username
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
      username
    }
  }
`;
