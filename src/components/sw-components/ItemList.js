import React from "react";
import ItemList from "../ItemList/ItemList";
import withData from "../hoc-helpers/withData";
import withSwapiService from "../hoc-helpers/withSwapiService";


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({ name }) => <span>{name}</span>;

const withPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const PersonList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderName)),
                        withPersonMethodsToProps,
                        );

const withPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanet
    }
}

const PlanetList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderName)),
                        withPlanetMethodsToProps);


const withStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}


const StarshipList = withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    withStarshipMethodsToProps)
;

export {
    PersonList,
    PlanetList,
    StarshipList
};
