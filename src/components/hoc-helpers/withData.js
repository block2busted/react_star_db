import React, {Component} from "react";
import Spinner from "../Spinner";


const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            isError: false
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.getData !== prevProps.getData) {
                this.update()
            }
        }
        update() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    }
                )
            })
        }
        componentDidMount() {
            this.update()
        }

        render() {
            const { data } = this.state

            if (!data) {
                return <Spinner />
            }

            return <View {...this.props} data={data} />
        }
    }
}

export default withData;
