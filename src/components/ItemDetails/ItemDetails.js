import React, { Component } from "react";

import './ItemDetails.css';
import Spinner from "../Spinner";


export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        imageUrl: null
    }

    onItemSelected = (item) => {
        this.setState({
            item: item,
            loading: true
        });
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    loading: false,
                    imageUrl: getImageUrl(item)
                })
            })
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        this.updateItem()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }
    }

    render() {
        if (!this.state.item) {
            return <span>Select person, please</span>
        }

        const { loading } = this.state

        const { item, imageUrl } = this.state

        const onLoaded = !loading ? <ItemView
                                        item={item}
                                        imageUrl={imageUrl}
                                        lookupFields={this.props.children}
                                        onItemSelected={this.updateItem}
        /> : null
        const spinner = loading ? <Spinner /> : null

        return(
            <div className='row'>
                {spinner}
                {onLoaded}
            </div>
        )
    }
}


const ItemView = ( {item, imageUrl, lookupFields} ) => {
    const { id, name } = item

    return (
        <React.Fragment>
            <div className="col-sm-6 col-md-4" id={id}>
                <img src={imageUrl}
                     alt='item-img'
                     className="img-rounded img-responsive planet-image"/>
            </div>
            <div className="col-sm-6 col-md-8">
                <h4>{name}</h4>
                {
                    React.Children.map(lookupFields, (child) => {
                        return React.cloneElement(child, { item });
                    })
                }
            </div>
        </React.Fragment>
    );
}








const Record = ({item, field, label}) => {
    return (
        <p>
            <i className="glyphicon glyphicon-envelope" />{label}: {item[field]}
        </p>
    )
}

export {
    Record
}