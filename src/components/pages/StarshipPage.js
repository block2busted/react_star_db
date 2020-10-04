import React, { Component } from "react";
import { StarshipDetails, StarshipList } from "../sw-components";
import Row from "../Row";


export default class StarshipPage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem: selectedItem
        })
    }

    render() {
        const { selectedItem } = this.state

        return (
            <Row
                leftBar={<StarshipList onItemSelected={this.onItemSelected} />}
                rightBar={<StarshipDetails itemId={selectedItem}/>}
            />
        )
    }
}