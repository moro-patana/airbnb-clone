import React, { useState } from "react"
import airbnbList from "./stays.json"
import WindBnb from "./WindBnb.js"

function SearchLocation() {
const [location, setLocation] = useState('')
const [searchResult, setSearchResult] = useState([]);

const handleChange = (e) => {
    setLocation(e.target.value);
    const filterCity = airbnbList.filter(place => place.city.toLowerCase().includes(location))
     setSearchResult(filterCity)
}

    const hostSearch = async (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div>
                <div className="search">
                    <form onSubmit={hostSearch}>
                        <input type="text"
                            placeholder=" Search location"
                            name="location" 
                            value={location}
                            onChange={handleChange}
                        />
                        <input type="text"
                            placeholder=" Add Guests"
                            name="guests" 
                            onChange={handleChange}
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

                    searchResult.map(bnb => 
                            <WindBnb key={bnb.photo} {...bnb} />
                    )}
                </div>
            </div>
        </>

    )
}
export default SearchLocation;