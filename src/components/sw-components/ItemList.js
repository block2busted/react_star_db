import React from "react";
import ItemList from "../ItemList/ItemList";
import {
    withData,
    withSwapiService,
    withChildFunction,
    compose
} from "../hoc-helpers"


const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const PersonList = withSwapiService(
    mapPersonMethodsToProps)(withData(withChildFunction(renderName)
    (ItemList))
)
// compose(
//     withSwapiService(mapPersonMethodsToProps),
//     withData,
//     withChildFunction(renderName)
// )(ItemList)



const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanet
    }
}

const PlanetList = withSwapiService(
    mapPlanetMethodsToProps)(withData(withChildFunction(renderName)
(ItemList))
);

// compose(
//     withSwapiService(mapPlanetMethodsToProps),
//     withData,
//     withChildFunction(renderName)
// )(ItemList);


const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}


const StarshipList = withSwapiService(
    mapStarshipMethodsToProps)
    (withData(withChildFunction(renderName)
    (ItemList))
);

export {
    PersonList,
    PlanetList,
    StarshipList
};

