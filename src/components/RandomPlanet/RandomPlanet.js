import React, {Component} from "react";
import PropTypes from "prop-types";

import SwAPIService from "../../services/SwAPIService";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

import "./RandomPlanet.css";


export default class RandomPlanet extends Component {

    swapiService = new SwAPIService()

    static defaultProps = {
        updateInterval: 10000
    }

    static propTypes = {
        updateInterval: PropTypes.number.isRequired
    }

    state = {
        planet: {},
        loading: true,
        error: false
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 15) + 3
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    componentDidMount() {
        const { updateInterval } = this.props
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { planet, loading, error } = this.state

        const hasData = (!loading || !error);

        const errorMessage = error ? <ErrorIndicator />: null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className='planet-data'>
                <div className="row">
                    { errorMessage }
                    { spinner }
                    { content }
                </div>
            </div>
        )
    }
}



const PlanetView = ( {planet} ) => {

    const { id, name, population, rotationPeriod, climate } = planet;

    return (
        <React.Fragment>
            <div className="col-sm-6 col-md-4">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                     alt=''
                     className="img-rounded img-responsive planet-image"/>
            </div>
            <div className="col-sm-6 col-md-8">
                <h4>
                    {name}
                </h4>
                <p>
                    <i className="glyphicon glyphicon-envelope"/>Population: {population}
                    <br/>
                    <i className="glyphicon glyphicon-globe"/>Rotation period: {rotationPeriod}
                    <br/>
                    <i className="glyphicon glyphicon-gift"/>Climate: {climate}</p>
            </div>
        </React.Fragment>
    )
}
