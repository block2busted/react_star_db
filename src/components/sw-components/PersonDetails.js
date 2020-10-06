import React from "react";
import ItemDetails, { Record } from "../ItemDetails";
import withSwapiService from "../hoc-helpers/withSwapiService";


const PersonDetails = (props) => {

    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Gender'/>
            <Record field='hairColor' label='Hair Color'/>
            <Record field='height' label='Height'/>
            <Record field='mass' label='Mass'/>
        </ItemDetails>
    )
};


const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImageUrl
    }
}


export default withSwapiService(mapMethodsToProps)(PersonDetails)
