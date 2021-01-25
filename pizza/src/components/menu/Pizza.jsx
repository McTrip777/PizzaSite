import React from 'react'
import { Menu } from '../../MenuData'

function Pizza() {

    return (
        <div className="pizzaContainer">
            <div className="customPizzaContainer">
                <h1 className="customPizzaHeader">Custom Pizza</h1>
                {Menu.customPizza.map((item) => {
                    return <section className="group" key={item.pizza}>
                        <h3 className="pizzaSize">{item.pizza}</h3>
                        <p className="addons">Additional Toppings {item.additions}</p>
                        <p className="price">Price {item.price}</p>
                        <p className="comboPrice">Combo Price {item.comboPrice}</p>
                    </section>
                })}
            </div>
            <div className="comboPizzaContainer">
                <h1 className="comboPizzaHeader">Combos</h1>
                {Menu.comboPizza.map((item) => {
                    return < section className="group" key={item.pizzaName}>
                        <h3 className="comboName">{item.pizzaName}</h3>
                        <p className="ingredients">{item.ingredients}</p>
                    </section>
                })}
            </div>
            <div className="calzoneContainer">
                <h1 className="calzoneHeader">Calzones</h1>
                <p className="ingredients">{Menu.calzone.desc}</p>
                <p className="price">{Menu.calzone.price}</p>
            </div>
        </div>
    )
}

export default Pizza