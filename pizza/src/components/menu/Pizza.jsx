import React from 'react'
import { Menu } from '../../MenuData'

function Pizza() {

    return (
        <div className="pizzaContainer">
            <div className="customPizzaContainer">
                <h1 className="customPizzaHeader">Pizza</h1>
                <section className="group custom">
                    <h3 className="pizzaSize title">Size</h3>
                    <p className="addons title">Additional Toppings</p>
                    <p className="price title">Price</p>
                    <p className="comboPrice title">Combo Price</p>
                </section>
                {Menu.customPizza.map((item) => {
                    return <section className="group" key={item.pizza}>
                        <h3 className="pizzaSize">{item.pizza}</h3>
                        <p className="addons">{item.additions}</p>
                        <p className="price">{item.price}</p>
                        <p className="comboPrice">{item.comboPrice}</p>
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
                <section className="group">
                    <p className="ingredients">{Menu.calzone.desc}</p>
                    <p className="price">{Menu.calzone.price}</p>
                </section>
            </div>
            <div className="toppingContainer">
                <h1 className="toppingHeader">Toppings</h1>
                <section className="group">
                    {Menu.toppings.map((item) => {
                        return <p className="ingredients" key={item}>{item}</p>
                    })}
                </section>
            </div>
        </div>
    )
}

export default Pizza