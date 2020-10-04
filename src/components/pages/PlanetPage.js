import React, { Component } from "react";
import { PlanetDetails, PlanetList } from "../sw-components";
import Row from "../Row";


export default class PlanetPage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const { selectedItem } = this.state

        return (
            <Row
                leftBar={<PlanetList onItemSelected={this.onItemSelected} />}
                rightBar={<PlanetDetails itemId={selectedItem} />}
            />
        )
    }
}