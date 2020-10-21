import React, { useState } from "react"
import airbnbList from "./stays.json"
import WindBnb from "./WindBnb.js"

function SearchLocation() {
const [location, setLocation] = useState('')
const [searchResult, setSearchResult] = useState([]);
const [guest, setGuest] = useState([]);

const handleChange = (e) => {
    setLocation(e.target.value);
     setSearchResult(airbnbList)
    }
    const filterCity = airbnbList.filter(place => place.city.toLowerCase().includes(location))
    const filterGuest = airbnbList.filter(guests => guests.maxGuests == guest || guests.maxGuests > guest)
    const handleGuest = (e) => {
        setGuest(e.target.value);
    }

    const hostSearch = async (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div>
                <div className="search">
                    <form onSubmit={hostSearch}>
                    <select name="select-city" id="city" onChange={handleChange} value={location}>
                        <option value="">Add location</option>
                        <option value="oulu">Oulu</option>
                        <option value="vaasa">Vaasa</option>
                        <option value="turku">Turku</option>
                        <option value="helsinki">Helsinki</option>
                    </select>
                        <input type="number"
                            placeholder=" Add Guests"
                            name="guests" 
                            value={guest}
                            onChange={handleGuest}
                            />
                        <button type="submit">
                            <i><img className="search-icon" src="./search-icon.svg" alt="search icon" /></i>
                        </button>
                    </form>
                </div>
                <h2>Stays in Finland</h2>
                <div className="card-list">
                {location === "" ? airbnbList.map(bnb => 
                    <WindBnb key={bnb.photo} {...bnb} />
                    ) 
                    :
                    filterCity.map(bnb => 
                            <WindBnb key={bnb.photo} {...bnb} />
                    )}
                </div>
                <div>
                {guest === "" ? airbnbList.map(bnb => 
                    <WindBnb key={bnb.photo} {...bnb} />
                    ) 
                    :
                    filterGuest.map(bnb => 
                            <WindBnb key={bnb.photo} {...bnb} />
                    )}

                </div>
            </div>
        </>

    )
}
export default SearchLocation;