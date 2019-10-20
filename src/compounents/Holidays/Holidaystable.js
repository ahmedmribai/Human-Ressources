import React from 'react';
import {Table } from 'react-bootstrap';

import Holiday from './Holiday';

const holidaysTable = ({holidays}) => {
    return (
        <div className = "holidaysTableContainer">
             <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Duration</th>
                <th>From_to</th>
                </tr>
            </thead>
            <tbody>
                {holidays.map((holiday, index) => {
                    return <Holiday key = {index} index = {index} holiday = {holiday} />
                })}
            </tbody>
            </Table>
        </div>
    );
}
export default holidaysTable;