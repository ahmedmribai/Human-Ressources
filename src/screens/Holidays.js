import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NavbarCustom from '../compounents/NavbarCustom';
import Holidaystable from '../compounents/Holidays/Holidaystable';
import { async } from 'q';

const Holidays = ()=> {
    const [holidays, setHolidays] = useState([]);

    const getHolidaysFromServer = async () => {
        const res = await axios.get("https://humanressources.herokuapp.com/holidays");
        setHolidays(res.data);
    }

    useEffect(() => {
        getHolidaysFromServer();
    })

    /*axios.get('https://humanressources.herokuapp.com/holidays')
    .then(res =>{
        setHolidays(res.data);
    })
    .catch(err => {
        console.log(err);
    });
    */
    return(
        <div className = "holidaysContainer">
            <NavbarCustom />
            <Holidaystable holidays ={holidays} />
        </div>
    );
}

export default Holidays;