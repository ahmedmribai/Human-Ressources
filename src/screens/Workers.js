import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Button , ButtonToolbar} from 'react-bootstrap';

// import components
import NavbarCustom from '../compounents/NavbarCustom';
import Workerstable from '../compounents/Workers/Workerstable';

const Workers = () => {
    const [ workers, setWorkers ] = useState([]);
    const history = useHistory();

    const getWorkerFromServer = async () => {
        /*
        axios.get("https://humanressources.herokuapp.com/workers")
        .then(res => {
            setWorkers(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
        */
        const res = await axios.get("https://humanressources.herokuapp.com/workers");
        setWorkers(res.data);
    }

    useEffect(() => {
        getWorkerFromServer();
    })

    return (
        <div className="workersContainer">
            <NavbarCustom />
            <ButtonToolbar>
                <Button variant="primary" onClick={() =>history.push('/workers/addworker')} >NewWorker</Button>
            </ButtonToolbar >
            <Workerstable workers = {workers} />
        </div>
    );
}

export default (Workers);