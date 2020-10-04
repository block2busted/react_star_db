import React, { Component } from "react";
import { PersonDetails, PersonList } from "../sw-components";
import Row from "../Row";


export default class PersonPage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const { selectedItem } = this.state

        return(
            <Row
                leftBar={<PersonList onItemSelected={this.onItemSelected} />}
                rightBar={<PersonDetails itemId={selectedItem} />}
            />
        )
    }

}