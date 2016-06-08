# swapi-graphql
GraphQL Starwars API (https://swapi.co/) with [Apollo-Server-Tools](https://github.com/apollostack/graphql-tools) and [DataLoader](https://github.com/facebook/dataloader).
## Getting started

```sh
git clone https://github.com/herr-vogel/swapi-graphql.git
cd swapi-graphql
npm install
npm run start
```

Then open [http://localhost:8080/graphql](http://localhost:8080/graphql)

When you paste this on the left side of the page:
```
{
  person(id: 1) {
    name
 		height
    mass
    hair_color
    gender
    homeworld {
      name
    }
    films {
      title
      episode_id
      release_date
    }
    species {
      name
    }
  }
}
```
and hit the play button (cmd-return), then you should get this on the right side:
```
{
  "data": {
    "person": {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "gender": "male",
      "homeworld": {
        "name": "Tatooine"
      },
      "films": [
        {
          "title": "Revenge of the Sith",
          "episode_id": 3,
          "release_date": "2005-05-19"
        },
        {
          "title": "Return of the Jedi",
          "episode_id": 6,
          "release_date": "1983-05-25"
        },
        {
          "title": "The Empire Strikes Back",
          "episode_id": 5,
          "release_date": "1980-05-17"
        },
        {
          "title": "A New Hope",
          "episode_id": 4,
          "release_date": "1977-05-25"
        },
        {
          "title": "The Force Awakens",
          "episode_id": 7,
          "release_date": "2015-12-11"
        }
      ],
      "species": [
        {
          "name": "Human"
        }
      ]
    }
  }
}
```
