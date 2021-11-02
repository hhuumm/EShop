import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { AddProduct } from './components/AddProduct'
import { ProductsContextProvider } from './global/ProductContext'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { auth,db } from './config/Config'
import { CartContextProvider } from './global/CartContext'
import { Cart } from './components/Cart'

export class App extends Component 
{

  state={
    user:null
  }
  componentDidMount()
  {
    auth.onAuthStateChanged(user=>{
      console.log(user)
      if(user){
        db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot=>{
          this.setState({user:snapshot.data().Name})
        })
      }
      else{
        this.setState({user:null})
      }

    })
  }
    render()
    {
      return (
        <ProductsContextProvider>
          <CartContextProvider>
              <BrowserRouter>
                  <Switch>
                    <Route exact path = '/' component = {()=><Home user={this.state.user} />} />
                    <Route path = '/addproducts' component = {AddProduct} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/login' component={Login} />
                    <Route path ='/cartproducts' component={()=><Cart user ={this.state.user}/>} />
                  </Switch>
              </BrowserRouter>
          </CartContextProvider>
        </ProductsContextProvider>
      )
    }

}

export default App