import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogout = () => {
    const navigate = useNavigate()
    const { setCaptain } = React.useContext(CaptainDataContext)
    
    useEffect(() => {
        const logoutCaptain = async () => {
            try {
                const token = localStorage.getItem("token")
                if (!token) {
                    navigate('/captainlogin')
                    return
                }

                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captains/logout`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                )

                if (response.status === 200) {
                    localStorage.removeItem("token")
                    localStorage.removeItem("captain") // Also remove captain data
                    setCaptain(null)
                }
            } catch (error) {
                console.error('Logout error:', error)
            } finally {
                // Always navigate to login, even if API call fails
                localStorage.removeItem("token")
                localStorage.removeItem("captain")
                setCaptain(null)
                navigate('/captainlogin')
            }
        }

        logoutCaptain()
    }, [navigate, setCaptain])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-gray-600">Logged out...</div>
        </div>
    )
}

export default CaptainLogout