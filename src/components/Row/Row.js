import React, { Component } from "react";


export default class Row extends Component {
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
