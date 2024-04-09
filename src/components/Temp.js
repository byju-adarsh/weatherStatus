import React, { useState } from 'react'
import { Alert, Input, Button } from "reactstrap"

import { isEmpty } from 'lodash';

import "./style.css"
import WeatherCard from './weatherCard';

const Temp = () => {
    const [searchValue, setSearchValue] = useState();
    const [tempInfo, setTempInfo] = useState({});
    const [error, setError] = useState(null);
    const getWeatherInfo = async () => {
        try {
            let url = ` https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=faa56f509560f76d7cfac36f410a192d`
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);          // Excess of all the data from where we are going to destructuring it
            const { temp, pressure, humidity } = data.main;
            const { main: weatherMood } = data.weather[0];  // To rename it from main to weatherMood
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp, humidity, pressure, weatherMood, name, speed, country, sunset
            };

            setTempInfo(myNewWeatherInfo);
            setError(null);
            setSearchValue('');

        } catch (error) {
            setError(`Please enter correct city name`);
            setSearchValue('');
            console.log(error);
        }
    };


    return (
        <>
            {/* Search in the city */}
            <div className="wrap">
                <div className="search">
                    <Input type="search"
                        placeholder='Enter Your City Name'
                        className='searchTerm'
                        id="search"
                        value={searchValue}  /* To take input and store the data in searchValue*/
                        onChange={(e) => setSearchValue(e.target.value)} />    {/* To take input */}
                    <Button
                        type="button"
                        color='primary'
                        onClick={getWeatherInfo}
                    >
                        Search
                    </Button >
                    {/* </button> */}
                </div>
            </div>
            {
                !isEmpty(error) && (<>
                    <Alert color="danger">
                        Hey! Please Enter correct city name.
                    </Alert>
                </>)
            }
            {!isEmpty(tempInfo) && isEmpty(error) &&
                <WeatherCard
                    tempInfo={tempInfo}
                />
            }
        </>
    )
}

export default Temp