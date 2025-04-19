import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserLogout = () => {
    const navigate = useNavigate()
    const { setUser } = React.useContext(UserDataContext)
    
    useEffect(() => {
        const logoutUser = async () => {
            try {
                const token = localStorage.getItem("token")
                if (!token) {
                    navigate('/userlogin')
                    return
                }

                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/users/logout`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                )

                if (response.status === 200) {
                    localStorage.removeItem("token")
                    setUser(null)
                }
            } catch (error) {
                console.error('Logout error:', error)
            } finally {
                // Always navigate to login, even if API call fails
                localStorage.removeItem("token")
                setUser(null)
                navigate('/userlogin')
            }
        }

        logoutUser()
    }, [navigate, setUser])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-gray-600">Logging out...</div>
        </div>
    )
}

export default UserLogout