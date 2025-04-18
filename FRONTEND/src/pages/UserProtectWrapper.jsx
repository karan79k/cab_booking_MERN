import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    if(!token) {
        navigate('/userlogin'); // Redirect to login if user is not authenticated
    }
    return (
         <>{children}</>
    )
    
}

export default UserProtectWrapper