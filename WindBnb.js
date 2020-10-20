import React from "react"
import airbnbList from "./stays.json"
function WindBnb() {
console.log(airbnbList);
    return (
          <div className="airbnb-list">
              <header><h2>Stays in Finland</h2></header>

              <div class="container">
                  {airbnbList.map(bnb => (
    
                      <article key={bnb.id} className="article">
                            <ul>
                                <li><img src={bnb.photo} /></li>
                                <li>{bnb.superHost ? "superHost" : ""}</li>
                                <li>{bnb.type}</li>
                                 {bnb.beds ? <li>{bnb.beds} bed(s)</li> : ""}
                                <li>{bnb.rating}</li>
                            </ul>
                            <p>{bnb.title}</p>
                            <p>{bnb.city}</p>
                      </article>
                  ))}
              </div>
          </div>
    )
}
export default WindBnb;