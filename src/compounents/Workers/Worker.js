import React from 'react';

import {ButtonToolbar, Button} from 'react-bootstrap';

const worker = ({worker, index}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>{worker.name}</td>
            <td>{worker.contract}</td>
            <td>{worker.group}</td>
            <td>{worker.salary}</td>
            <td>{worker.working_time}</td>
            <td>{worker.engagement_date}</td>
            <td>{worker.status}</td>
            <td>{worker.days_holiday}</td>
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

export default(worker);