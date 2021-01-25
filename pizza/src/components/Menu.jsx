import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MenuNav from './MenuNav'
import dough from '../img/dough.jpg'
import Pizza from './menu/Pizza'
import Sauce from './menu/Sauce'
import Appetizers from './menu/Appetizers'
import Drinks from './menu/Drinks'

function Menu() {
    const Child = ({ match }) => {
        if (match.params.id === 'pizza') return <Pizza />
        else if (match.params.id === 'sauce') return <Sauce />
        else if (match.params.id === 'appetizers') return <Appetizers />
        else if (match.params.id === 'drinks') return <Drinks />
    }
    return (

        <div className="menuContainer">
            <MenuNav />
            <img src={dough} alt="" />
            <div className="menuContent">
                <Route path="/menu/:id" component={Child} />
            </div>
        </div>
    )
}

export default Menu
