import React from 'react';

import {ButtonToolbar, Button} from 'react-bootstrap';

const holiday = ({holiday, index}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>{holiday.name}</td>
            <td>{holiday.duration}</td>
            <td>{holiday.from_to}</td>
            <td>
                <ButtonToolbar>
                    <Button variant="outline-primary">See ALL</Button>
                    <Button variant="outline-danger">Delete</Button>
                    <Button variant="outline-success">Update</Button>
                </ButtonToolbar>
            </td>
        </tr>
    );
}

export default(holiday);