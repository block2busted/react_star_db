import React, { Component } from "react";

import './ErrorIndicator.css';
import icon from './death_star.png'

export default class ErrorIndicator extends Component {
    render() {
        return(
            <div className='error-indicator'>
                <img className='error-icon' src={icon} alt="error-icon"/>
                <span className='boom'>
                    BOOM!
                </span>
                <span>
                    Something broken,
                </span>
                <span>
                    but our droids is repair it...
                </span>
            </div>
        )
    }
}