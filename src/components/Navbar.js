import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () =>
{
    return(
        <div className='navbox'>
            
            <div className='leftside'>
                <i class="fas fa-cart-plus fa-3x" style={{paddingTop:"15px"}}></i>

            </div>
            <div className='rightside'>
                <Link to='/signup' className='navlinks'>SIGN UP</Link>
                <Link to='/login' className='navlinks'>LOGIN</Link>
            </div>

        </div>
    )
}