import React from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function Weather({ searchText, onClick, onChange, name, country, currentIndex, daily, setSelectedIndex }) {


    return (
        <div className='card-wrapper '>
            <div className='search-sec'>
                <input
                    className='input-sec'
                    value={searchText}
                    onChange={onChange}>

                </input>
                <button
                    className='btn btn-primary mt-2 mb-4 ps-5 pe-5'
                    onClick={onClick}>
                    search
                </button>
            </div>


            <div className={`current-weather-card  ${daily && daily.length > 0 && daily[currentIndex].weather[0].icon.endsWith('d') ? 'dbg' : 'nbg'}`} >
                <div className='flex-grow-1 weather-report'>

                    <h1>{name},{country}</h1>
                    <h5>Humidity:{daily && daily.length > 0 && daily[currentIndex].humidity}</h5>
                    <h5>Pressure:{daily && daily.length > 0 && daily[currentIndex].pressure}</h5>
                    <h5>Temparature:{daily && daily.length > 0 && daily[currentIndex].temp.day}</h5>
                </div>

                <div className='img-desc-responsive'>
                    <h3>
                        {daily && daily.length > 0 &&


                            <img className='weatherCurrentImg'
                                alt={daily[currentIndex].weather[0].description}
                                src={`http://openweathermap.org/img/wn/${daily[currentIndex].weather[0].icon}@2x.png`}>

                            </img>
                        }
                    </h3>
                    <h3>{daily && daily.length > 0 && daily[currentIndex].weather[0].description}</h3>


                </div>


            </div>




            <div className=' week-sec'>
                {daily.map((each, index) => {
                    const date = new Date(each.dt * 1000)
                    const day = days[date.getDay()]

                    return (
                        <div className='weekWeatherCard' key={each.dt} onClick={() => setSelectedIndex(index)}>
                            {day}
                            <img className='weatherImg' alt={each.description} src={`http://openweathermap.org/img/wn/${each.weather[0].icon}@2x.png`}></img>
                            {date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()}
                            <p>
                                {each.weather[0].main}
                            </p>

                        </div>
                    )
                })}
            </div>
        </div >
    );
}

export default Weather;