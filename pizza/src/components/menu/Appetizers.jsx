import React from 'react'
import { Menu } from '../../MenuData'

function Appetizers() {

    return (
        <div className="appetizerContainer">
            <h1 className="appetizerHeader">Appetizers</h1>
            {Menu.appetizers.map((item) => {
                return < section className="group" key={item.name}>
                    <h3 className="appName">{item.name}</h3>
                    <p className="desc">{item.desc}</p>
                    <p className="price">{item.price}</p>
                </section>
            })}
        </div >
    )
}

export default Appetizers
