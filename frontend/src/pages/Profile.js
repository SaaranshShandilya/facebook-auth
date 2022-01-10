import React from 'react'
import {useEffect} from 'react'
import jwt from 'jsonwebtoken'
import {useNavigate} from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                navigate.push('/')
            }
        }

    })

    return (
        <div>
            l;sDMLF
        </div>
    )
}

export default Profile
