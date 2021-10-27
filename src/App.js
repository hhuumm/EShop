import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { AddProduct } from './components/AddProduct'

export class App extends Component 
{
    render()
    {
      return (
        <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/addproducts' component = {AddProduct} />
        </Switch>
        
        </BrowserRouter>
      )
    }

}

export default App