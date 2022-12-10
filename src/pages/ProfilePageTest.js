import axios from "axios";
import { useEffect, useState } from 'react';

function ProfilePageTest() {

    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = sessionStorage.getItem('JWTtoken')
        console.log(token)

        if(!token) {
            return;
        }

        axios
        .get('http://localhost:8080/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then((response) => {
            console.log(response);
            setIsLoading(false);
            setUserInfo(response.data.username);
        });
    },[])
    console.log(userInfo)
    return isLoading ? <h1>Loading...</h1> : <h1>Welcome {userInfo}!</h1>;
}

export default ProfilePageTest;