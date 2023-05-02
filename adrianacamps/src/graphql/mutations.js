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

export const createHomes = /* GraphQL */ `
  mutation CreateHomes($input: CreateHomesInput!) {
    createHomes(input: $input) {
      id
      name
      carrouselImages
    }
  }
`;

export const createStudios = /* GraphQL */ `
  mutation CreateStudios($input: CreateStudiosInput!) {
    createStudios(input: $input) {
      aboutImage
      aboutMe
      philosophy
      route
      username
    }
  }
`;

export const createConcept = /* GraphQL */ `
  mutation CreateConcept($input: CreateConceptInput!) {
    createConcept(input: $input) {
      conceptsImageMain
      conceptImages
      conceptTitle
      conceptText
    }
  }
`;

export const createContact = /* GraphQL */ `
  mutation CreateContact($input: CreateContactInput!) {
    createContact(input: $input) {
      contactImage
      contactText
    }
  }
`;

export const createNews = /* GraphQL */ `
  mutation CreateNews($input: CreateNewsInput!) {
    createNews(input: $input) {
      newsYear
      newsTitle
      newsDate
      newsSource
      newsLink
      newsImage
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

export const updateContact = /* GraphQL */ `
  mutation UpdateContact($input: UpdateContactInput!) {
    updateContact(input: $input) {
      id
      contactImage
      contactText
    }
  }
`;

export const deleteContact = /* GraphQL */ `
  mutation DeleteContact($input: DeleteContactInput!) {
    deleteContact(input: $input) {
      id
    }
  }
`;

export const deleteHome = /* GraphQL */ `
  mutation DeleteHomes($input: DeleteHomesInput!) {
    deleteHomes(input: $input) {
      id
      name
      carrouselImages
    }
  }
`;

export const deleteStudios = /* GraphQL */ `
  mutation DeleteStudios($input: DeleteStudiosInput!) {
    deleteStudios(input: $input) {
      id
      aboutMe
    }
  }
`;

export const deleteConcept = /* GraphQL */ `
  mutation DeleteConcept($input: DeleteConceptInput!) {
    deleteConcept(input: $input) {
      id
      conceptsImageMain
      conceptImages
      conceptTitle
      conceptText
    }
  }
`;

export const deleteNews = /* GraphQL */ `
  mutation DeleteNews($input: DeleteNewsInput!) {
    deleteNews(input: $input) {
      id
      newsYear
      newsTitle
      newsDate
      newsSource
      newsLink
      newsImage
    }
  }
`;
