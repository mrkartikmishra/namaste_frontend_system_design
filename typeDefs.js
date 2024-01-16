export const typeDefs = `#graphql

type Language {
    id: ID!
    name: String!
}

type Continent {
    id: ID!
    name: String!
    countries: [Country]
}

type Country {
    id: ID!
    name: String!
    continent: Continent
    language: Language
}

type Query {
    continents: [Continent]
    countries: [Country]
}

type Mutation {
    addLanguage(id: String, name: String): Language!
    addCountry(id: String, name: String, ContId: String, langId: String): Country!
    addContinent(id: String, name: String, countries: [String]): Continent!
}

`;
