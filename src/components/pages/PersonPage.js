import React from "react";
import { withRouter } from "react-router-dom";
import { PersonDetails, PersonList } from "../sw-components";
import Row from "../Row";


const PersonPage = ({ history, match }) => {
    const { id } = match.params

    return(
        <Row
            leftBar={<PersonList onItemSelected={(id) => history.push(id)} />}
            rightBar={<PersonDetails itemId={id} />}
        />
        )
}

export default withRouter(PersonPage);
