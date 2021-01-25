import React from 'react'
import { Menu } from "../../MenuData"

function Sauce() {
    return (
        <div className="sauceContainer">
            <h1 className="sauceHeader">Sauce</h1>
            {Menu.sauces.map((item) => {
                return < section className="group" key={item.name}>
                    <h3 className="sauceName">{item.name}</h3>
                    {/* <p className="desc">{item.desc}</p> */}
                    <p className="price">{item.price}</p>
                </section>
            })}
        </div >
    )
}

export default Sauce
