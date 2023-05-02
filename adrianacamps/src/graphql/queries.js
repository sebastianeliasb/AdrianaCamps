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
      username
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
        username
      }
      nextToken
    }
  }
`;

export const listHomes = /* GraphQL */ `
  query ListHomes(
    $filter: TableHomesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        carrouselImages
      }
      nextToken
    }
  }
`;

export const listStudios = /* GraphQL */ `
  query ListStudios(
    $filter: TableStudiosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aboutImage
        aboutMe
        philosophy
        route
        username
      }
      nextToken
    }
  }
`;

export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: TableContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contactImage
        contactText
      }
      nextToken
    }
  }
`;

export const listConcepts = /* GraphQL */ `
  query ListConcepts(
    $filter: TableConceptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConcepts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        conceptsImageMain
        conceptImages
        conceptTitle
        conceptText
      }
      nextToken
    }
  }
`;

export const listNews = /* GraphQL */ `
  query ListNews(
    $filter: TableNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        newsYear
        newsTitle
        newsDate
        newsSource
        newsLink
        newsImage
      }
      nextToken
    }
  }
`;
