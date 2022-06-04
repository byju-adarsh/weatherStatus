import React from 'react'
import "./style.css"

const Temp = () => {
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder='Enter Your City Name'
                        className='searchTerm'
                        id="search" />
                    <button className="searchButton" type="button">Search</button>
                </div>
            </div>

            <article className="widget">
                <div className="weatherIcon">
                    <i className='wi wi-day-sunny'></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>35.4*C</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">SunnyGa998</div>
                        <div className="place">Allahabad, India</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                {/* 4 section for getting different datas */}

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-day-cloudy"></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:23pm <br />
                                Day-Cloudy
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-day-haze"></i>
                            </p>
                            <p className="extra-info-leftside">
                                09:14pm <br />
                                Day-Haze
                            </p>
                        </div>

                    </div>

                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-day-fog"></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:19pm <br />
                                Day-Fog
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-day-rain"></i>
                            </p>
                            <p className="extra-info-leftside">
                                11:13pm <br />
                                Day-Rain
                            </p>
                        </div>

                    </div>


                </div>

            </article>
        </>
    )
}

export default Temp