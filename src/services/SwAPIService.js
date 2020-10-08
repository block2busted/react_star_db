export default class SwAPIService {

    _apiBase = `https://swapi.dev/api/`
    _imageBase = `https://starwars-visualguide.com/assets/img/`

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`, {headers: {
            //'Access-Control-Allow-Origin': '*',
        }});
        if (!res.ok) {
            throw new Error(`Could't fetch ${url}, received ${res.status}`)
        }
        return await res.json()
    }

    getAllPeople = async () => {
        const res = await this.getResource(`people/`);
        return res.results.map(this._transformPerson)
    }

    getPerson = async (id) => {
        const personData = await this.getResource(`people/${id}/`);
        return this._transformPerson(personData)
    }

    getAllPlanet = async () => {
        const res = await this.getResource(`planets/`)
        return res.results.map(this._transformPlanet)
    }

    getPlanet = async (id)  => {
        const planetData = await this.getResource(`planets/${id}/`)
        return this._transformPlanet(planetData)
    }

    getAllStarships = async () => {
        const res = await this.getResource(`starships/`)
        return res.results.map(this._transformStarship)
    }

     getStarship = async (id) => {
        const starshipData = await this.getResource(`starships/${id}`);
        return this._transformStarship(starshipData)
    }

    _extractID = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractID(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            climate: planet.climate,
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractID(person),
            name: person.name,
            gender: person.gender,
            height: person.height,
            hairColor: person.hair_color,
            mass: person.mass,
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractID(starship),
            name: starship.name,
            model: starship.model,
            starshipClass: starship.starship_class,
            passengers: starship.passengers,
        }
    }

    getPersonImageUrl = ({id}) => {
        return `${this._imageBase}characters/${id}.jpg`
    }

    getPlanetImageUrl = ({id}) => {
        return `${this._imageBase}planets/${id}.jpg`
    }

    getStarshipImageUrl = ({id}) => {
        return `${this._imageBase}starships/${id}.jpg`
    }
}