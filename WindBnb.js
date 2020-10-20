import React from "react"
function WindBnb(bnb) {
    return (
        <div>
            <img src={bnb.photo} />
            <div className="list">
                {bnb.superHost ? <button className="super-host">Super Host</button> : ""}
                <span className="type">{bnb.type}</span>
                {bnb.beds ? <span className="beds">{bnb.beds} bed(s)</span> : ""}
                <span className="rating">{bnb.rating}</span>
            </div>
            <p className="title">{bnb.title}</p>
        </div>
    )
}
export default WindBnb;