import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectWrapper = ({children}) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            if (!token || !captain?.vehicle) {
                localStorage.removeItem("token");
                navigate('/captainlogin');
                return;
            }

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captains/profile`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.status === 200) {
                    setCaptain(response.data.captain);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error(error);
                localStorage.removeItem("token");
                navigate('/captainlogin');
            }
        };

        checkAuth();
    }, [token, captain, navigate, setCaptain]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
}

export default CaptainProtectWrapper