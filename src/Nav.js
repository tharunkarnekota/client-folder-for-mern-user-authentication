import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import {store} from './App'

const Nav = () => {
    const [token,setToken] = useContext(store)
    return (
        <div>
            {!token &&
            <ul>
                <Link to='/register' ><li className="btn btn-secondary">Register</li></Link>&nbsp;&nbsp;
                <Link to='/login' ><li className="btn btn-secondary">Login</li> </Link>
            </ul>
            }
        </div>
    )
}

export default Nav
