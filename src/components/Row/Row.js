import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Row extends Component {

    static propTypes = {
        leftBar: PropTypes.node,
        rightBar: PropTypes.node
    }

    render() {
        const { leftBar, rightBar } = this.props

        return (
            <div className='row list-detail-block'>
                <div className="col-md-4">
                    {leftBar}
                </div>
                <div className="col-md-8">
                    {rightBar}
                </div>
            </div>
        )
    }
}
