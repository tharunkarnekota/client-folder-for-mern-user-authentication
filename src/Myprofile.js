import axios from 'axios'
import React,{useContext,useState,useEffect} from 'react'
import { Redirect } from 'react-router'
import {store} from './App'

const Myprofile = () => {
    const [token,setToken] = useContext(store)
    const [data,setData] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:5000/myprofile',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    })
    if(!token){
        return <Redirect to='/login' />
    }
    return (
        <div>
            <br/>
            <br/>
            <div className="card">
                {data && 
                <center>
                    <br/><br />
                    <h3>welcome user : {data.username} !!</h3>
                    <br />
                    <button class="btn btn-primary" onClick={() => setToken(null)}>Logout</button><br/><br/>
                </center> 
                }
            </div>
        </div>
    )
}

export default Myprofile
