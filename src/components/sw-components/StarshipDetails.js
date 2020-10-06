import React from "react";
import ItemDetails, { Record } from "../ItemDetails";
import withSwapiService from "../hoc-helpers/withSwapiService";

//itemId={this.state.selectedPerson}

// or
// const StarshipDetails = (props) => {
//     return (
//         <ItemDetails {...props} >
//             <Record field='starshipClass' label='Starship class'/>
//             <Record field='model' label='Model'/>
//         </ItemDetails>
//     )
// };



const StarshipDetails = ({itemId, getData, getImageUrl}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getData}
            getImageUrl={getImageUrl}>

            <Record field='starshipClass' label='Starship class'/>
            <Record field='model' label='Model'/>
        </ItemDetails>
    )
};


const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImageUrl
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
