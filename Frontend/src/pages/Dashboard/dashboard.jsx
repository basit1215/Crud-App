import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const [istoken,setisTOken] = useState(token)
    const handleLogout = ()=>{
        localStorage.clear('token')
        navigate('/login')
    }
    useEffect(()=>{
        if(!istoken){
            navigate('/login')
        }
    },[token])

    return (
        <div>dashboard
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}

export default Dashboard