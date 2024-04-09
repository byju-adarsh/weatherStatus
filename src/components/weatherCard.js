import moment from 'moment';
import React, { useEffect } from 'react'

const WeatherCard = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = React.useState("");
    const {
        temp, humidity, pressure, weatherMood, name, speed, country, sunset
    } = tempInfo;

    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds": setWeatherState("wi-day-cloudy")
                    break;
                case "Haze": setWeatherState("wi-fog")
                    break;
                case "Clear": setWeatherState("wi-day-sunny")
                    break;
                case "Mist": setWeatherState("wi-dust")
                    break;
                default: setWeatherState("wi-day-sunny")
                    break;
            }
        }
    }, [weatherMood])


    // Conversion of milliseconds into appropriate time. 
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weatherMood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date">{moment(new Date().toLocaleString()).format('lll')}</div>

                {/* 4 section for getting different datas */}

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-day-cloudy"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr}<br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-day-haze"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>

                    </div>

                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-day-fog"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-day-rain"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed}<br />
                                Speed
                            </p>
                        </div>

                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard