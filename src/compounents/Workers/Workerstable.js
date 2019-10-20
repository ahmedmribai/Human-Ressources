import React from 'react';

import {Table } from 'react-bootstrap';

import Worker from './Worker';

const WorkersTable = ({workers}) => {
    return (
        <div className = "WorkersTableContainer">
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Contract</th>
                <th>group</th>
                <th>Salary</th>
                <th>Working_time</th>
                <th>engagement date</th>
                <th>Status</th>
                <th>days of holiday</th>
                </tr>
            </thead>
            <tbody>
                { workers.map((worker, index) => {
                    return <Worker key={index} index={index} worker = {worker} />
                }) }
            </tbody>
            </Table>
        </div>
    );
}

export default WorkersTable;