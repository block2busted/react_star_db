import React, { Component } from "react";

import './App.css';

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import RandomPlanetHide from "../RandomPlanetHide";
import ErrorIndicator from "../ErrorIndicator";
import SwAPIService from "../../services/SwAPIService";
import {SwapiServiceProvider} from "../SwapiServiceContext/SwapiServiceContext";
import ErrorBoundry from "../ErrorBoudry";
import {
    PersonPage,
    PlanetPage,
    StarshipPage,
    SecretPage,
    LoginPage
} from "../pages"

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import StarshipDetails from "../sw-components/StarshipDetails";


export default class App extends Component {

    state ={
        showRandomPlanet: true,
        hasError: false,
        swapiService: new SwAPIService(),
        isLoggedIn: false
    }

    onLogin = () => {
        console.log(this.state.isLoggedIn)
        this.setState({
            isLoggedIn: true
        })
    }

    onPlanetHide = () => {
        const { showRandomPlanet } = this.state;
        this.setState({
            showRandomPlanet: !showRandomPlanet
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const { showRandomPlanet } = this.state

        const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className='container'>
                            <Header />
                            { randomPlanet }
                            <RandomPlanetHide onPlanetHide={this.onPlanetHide} />

                            <Switch>
                                <Route path="/"
                                       render={()=> <h2>Welcome to StarDB</h2>}
                                       exact />
                                <Route path="/people/:id?" component={PersonPage} />
                                <Route path="/planets/" component={PlanetPage} />
                                <Route path="/starships/" exact component={StarshipPage} />
                                <Route path="/starships/:id/"
                                       render={({ match }) => {
                                           const { id } = match.params
                                           return <StarshipDetails itemId={id} />
                                       }} />
                                <Route path="/secret"
                                       render={() => {
                                           return <SecretPage isLoggedIn={this.state.isLoggedIn} />
                                       }} />
                                <Route path="/login"
                                       render={() => {
                                           return <LoginPage
                                               isLoggedIn={this.state.isLoggedIn}
                                               onLogin={this.onLogin}
                                           />
                                       }} />
                                <Route
                                    render={() => {
                                        return <h3>404 error, page not found...</h3>
                                    }} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}
