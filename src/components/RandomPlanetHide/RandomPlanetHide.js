import React, {Component} from "react";

import './RandomPlanetHide.css';

export default class RandomPlanetHide extends Component {

    state = {
        show: true,
    }

    onHideRandomPlanet = () => {
        const { show } = this.state;

        this.setState({
            show: !show
        })

        this.props.onPlanetHide()

    }

    render() {

        const { show } = this.state

        const showHideValue = show ? 'Hide' : 'Show'

        return (
            <button className='btn btn-sm mt-2'
                    onClick={this.onHideRandomPlanet}
            >
                { showHideValue } random planet
            </button>
        )
    }

}