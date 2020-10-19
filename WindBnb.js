import React from "react"
import airbnbList from "./stays.json"
function WindBnb() {
console.log(airbnbList);
    return (
          <article>
              <header><h2>Stays in Finland</h2></header>
              {airbnbList.map(bnb => (
                        <ul>
                            <li><img src={bnb.photo} /></li>
                            <li>{bnb.superHost ? "superHost" : ""}</li>
                            <li>{bnb.type}</li>
                            <li>{bnb.rating}</li>
                        </ul>
              ))}
          </article>
    )
}
export default WindBnb;