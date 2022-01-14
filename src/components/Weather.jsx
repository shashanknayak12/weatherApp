import React from 'react';

function Weather({ searchText, onClick, onChange, name, country, current }) {
    return (
        <div className='card '>

            <div>
                <input
                    value={searchText}
                    onChange={onChange}>

                </input>
                <button
                    className='btn btn-primary'
                    onClick={onClick}>
                    search
                </button>
            </div>


            <div>
                <h1>{name},{country}</h1>
                <h2>{current.city}</h2>

            </div>
        </div >
    );
}

export default Weather;