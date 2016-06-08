const typeDefinitions = `

type Starship {
  name: String
  model: String
  manufacturer: String
  cost_in_credits: String
  length: String
  max_atmosphering_speed: String
  crew: String
  passengers: String
  cargo_capacity: String
  consumables: String
  hyperdrive: String
  MGLT: String
  starship_class: String
  pilots: [Person]
  films: [Film]
  url: String
}

type Vehicle {
  name: String
  model: String
  manufacturer: String
  cost_in_credits: String
  length: String
  max_atmosphering_speed: String
  crew: String
  passengers: String
  cargo_capacity: String
  consumables: String
  vehicle_class: String
  pilots: [Person]
  films: [Film]
  url: String
}

type Planet {
  name: String
  rotation_period: String
  orbital_period: String
  diameter: String
  climate: String
  gravity: String
  terrain: String
  surface_water: String
  population: String
  residents: [Person]
  films: [Film]
  url: String
}

type Film {
  title: String
  episode_id: Int
  opening_crawl: String
  producer: String
  release_date: String
  characters: [Person]
  planets: [Planet]
  starships: [Starship]
  vehicles: [Vehicle]
  species: [Species]
  url: String
}

type Species {
  name: String
  classification: String
  designation: String
  average_height: String
  skin_color: String
  hair_color: String
  eye_color: String
  average_lifespan: String
  language: String
  people: [Person]
  films: [Film]
  url: String
}

type Person {
  name: String
  height: String
  mass: String
  hair_color: String
  skin_color: String
  eye_color: String
  birth_year: String
  gender: String
  url: String
  films: [Film]
  species: [Species]
  homeworld: Planet
  vehicles: [Vehicle]
  starships: [Starship]
}

type Query {
  people: [Person]
  person(id: Int!): Person
  films: [Film]
  film(id: Int!): Film
  starships: [Starship]
  starship(id: Int!): Starship
  vehicles: [Vehicle]
  vehicle(id: Int!): Vehicle
  allSpecies: [Species]
  species(id: Int!): Species
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
