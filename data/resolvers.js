import rp from 'request-promise';
import { loadById } from './functions'

const url = 'http://swapi.co/api/';

const resolvers = {
  Query: {
    people(root, args, info) {
      return rp({uri: `${url}people`, json: true})
          .then(res => {
            return res.results;
          })
    },
    person(root, {id}, {loaders}) {
      return loaders.query.load(`${url}people/${id}`)
    },
    films(root, args, info) {
      return rp({uri: `${url}films`, json: true})
          .then(res => {
            return res.results;
          })
    },
    film(root, {id}, {loaders}) {
      return loaders.query.load(`${url}films/${id}`)
    },
    starships(root, args, info) {
      return rp({uri: `${url}starships`, json: true})
          .then(res => {
            return res.results;
          })
    },
    starship(root, {id}, info) {
      return loaders.query.load(`${url}starships/${id}`)
    },
    vehicles(root, args, info) {
      return rp({uri: `${url}vehicles`, json: true})
          .then(res => {
            return res.results;
          })
    },
    vehicle(root, {id}, info) {
      return loaders.query.load(`${url}vehicles/${id}`)
    },
    allSpecies(root, args, info) {
      return rp({uri: `${url}species`, json: true})
          .then(res => {
            return res.results;
          })
    },
    species(root, {id}, info) {
      return loaders.query.load(`${url}species/${id}`)
    }
  },
  Person: {
    species(person,_,{loaders}) {
      return loaders.query.loadMany(person.species)
    },
    films(person,_,{loaders}) {
      return loaders.query.loadMany(person.films)
    },
    homeworld(person,_,{loaders}) {
      return loaders.query.load(person.homeworld)
    },
    vehicles(person,_,{loaders}) {
      return loaders.query.loadMany(person.vehicles)
    },
    starships(person,_,{loaders}) {
      return loaders.query.loadMany(person.starships)
    }
  },
  Planet: {
    residents(planet,_,{loaders}) {
      return loaders.query.loadMany(planet.residents)
    },
    films(planet,_,{loaders}) {
      return loaders.query.loadMany(planet.films)
    }
  },
  Film: {
    characters(film,_,{loaders}) {
      return loaders.query.loadMany(film.characters)
    },
    planets(film,_,{loaders}) {
      return loaders.query.loadMany(film.planets)
    },
    starships(film,_,{loaders}) {
      return loaders.query.loadMany(film.starships)
    },
    vehicles(film,_,{loaders}) {
      return loaders.query.loadMany(film.vehicles)
    },
    species(film,_,{loaders}) {
      return loaders.query.loadMany(film.species)
    }
  },
  Starship: {
    pilots(starship,_,{loaders}) {
      return loaders.query.loadMany(starship.pilots)
    },
    films(starship,_,{loaders}) {
      return loaders.query.loadMany(starship.films)
    }
  },
  Vehicle: {
    pilots(vehicle,_,{loaders}) {
      return loaders.query.loadMany(vehicle.pilots)
    },
    films(vehicle,_,{loaders}) {
      return loaders.query.loadMany(vehicle.films)
    }
  },
  Species: {
    people(species,_,{loaders}) {
      return loaders.query.loadMany(species.people)
    },
    films(species,_,{loaders}) {
      return loaders.query.loadMany(species.films)
    }
  }
}

export default resolvers;
