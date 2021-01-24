import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import './styles/allStyles.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import Footer from './components/Footer'

const App = () => {

  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  )
}
export default App