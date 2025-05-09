import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { user, setUser } = React.useContext(UserDataContext);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            if (!token) {
                localStorage.removeItem("token");
                navigate('/userlogin');
                return;
            }

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/users/profile`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.status === 200) {
                    setUser(response.data.user);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error(error);
                localStorage.removeItem("token");
                navigate('/userlogin');
            }
        };

        checkAuth();
    }, [token, navigate, setUser]); // Remove user from dependencies

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
}

export default UserProtectWrapper