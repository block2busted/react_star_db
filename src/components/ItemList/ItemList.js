import React from 'react';
import PropTypes from "prop-types";

import './ItemList.css';


const ItemList = (props) => {
    const { data, onItemSelected, children: renderName } = props

    const elements = data.map((item) => {
        const { id } = item
        const label = renderName(item)
        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)} >
                {label}
            </li>
        )
    })

    return (
        <ul className="list-group">
            {elements}
        </ul>
    )
}

ItemList.defaultProps = {
    onItemSelected: () => {}
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
}

export default ItemList