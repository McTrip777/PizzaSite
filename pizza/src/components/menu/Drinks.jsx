import React from 'react'
import { Menu } from '../../MenuData'

function Drinks() {
    return (
        <div className="drinksContainer">
            <h1 className="drinksHeader">Drinks</h1>
            {Menu.drinks.map((item) => {
                return < section className="group" key={item.size}>
                    <h3 className="drinkSize">{item.size}</h3>
                    {/* <p className="desc">{item.desc}</p> */}
                    <p className="price">{item.price}</p>
                </section>
            })}
            <section className="drinkList">
                {Menu.drinkFlavors.map((item) => {
                    return <h3 className="drinkName" key={item}>{item}</h3>
                })}
            </section>
        </div >
    )
}

export default Drinks
