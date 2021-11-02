import React from 'react'
import { Navbar } from './Navbar'
import { Products } from './Products'
import '../css/Home.css'


export const Home = ({user}) =>
{
    return (
        <div className='wrapper'>
            <Navbar user={user}/>
            <Products />
        </div>
    )
}