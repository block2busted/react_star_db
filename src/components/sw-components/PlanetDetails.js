import React from "react";
import ItemDetails, { Record } from "../ItemDetails";
import withSwapiService from "../hoc-helpers/withSwapiService";


//itemId={this.state.selectedPerson}


const PlanetDetails = ({itemId, getData, getImageUrl}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getData}
            getImageUrl={getImageUrl}>

            <Record field='population' label='Population'/>
            <Record field='rotationPeriod' label='Rotation period'/>
            <Record field='climate' label='Climate'/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImageUrl
    }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);
