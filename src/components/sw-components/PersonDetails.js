import React from "react";
import ItemDetails, { Record } from "../ItemDetails";
import { SwapiServiceConsumer } from "../SwapiServiceContext/SwapiServiceContext";


//itemId={this.state.selectedPerson}

const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersonImageUrl }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPerson}
                            getImageUrl={getPersonImageUrl}>
                            
                            <Record field='gender' label='Gender'/>
                            <Record field='hairColor' label='Hair Color'/>
                            <Record field='height' label='Height'/>
                            <Record field='mass' label='Mass'/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};


const PlanetDetails = ({itemId}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetImageUrl }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}
                            getImageUrl={getPlanetImageUrl}>

                            <Record field='population' label='Population'/>
                            <Record field='rotationPeriod' label='Rotation period'/>
                            <Record field='climate' label='Climate'/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    )
};


const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getStarship, getStarshipImageUrl }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getStarship}
                            getImageUrl={getStarshipImageUrl}>

                            <Record field='starshipClass' label='Starship class'/>
                            <Record field='model' label='Model'/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};
