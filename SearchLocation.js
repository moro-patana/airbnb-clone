import React, { useState } from "react"
import airbnbList from "./stays.json"
import WindBnb from "./WindBnb.js"

function SearchLocation() {

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
                            onChange={(e) => (e.target.value)}
                            />
                        <input type="text"
                            placeholder=" Add Guests"
                            name="guests" />
                        <button>
                            <i><img className="search-icon" src="./search-icon.svg" alt="search icon" /></i>
                        </button>
                    </form>
                </div>
                <h2>Stays in Finland</h2>
                <div className="card-list">
                    {airbnbList.map(bnb => {
                        return (
                            <WindBnb key={bnb.photo} {...bnb} />
                        )
                    }
                    )}
                </div>
            </div>
        </>

    )
}
export default SearchLocation;