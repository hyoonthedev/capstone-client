import './ProfilePage.scss'

import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';

import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeListCard from '../../components/RecipeListCard/RecipeListCard';

function ProfilePage({ loggedUserId, userInfo, favUpdate, setFavUpdate }) {

    const API_URL = process.env.REACT_APP_API_URL;
    const PORT = process.env.REACT_APP_PORT;

    const [favRecipeList, setFavRecipeList] = useState(null);

    useEffect(() => {
        axios
            .get(`${API_URL}${PORT}/favourite/${loggedUserId}`)
            .then((response) => {
                setFavRecipeList(response.data)
                setFavUpdate(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [favUpdate])

    if(!favRecipeList) {
        return <Loading/>
    }

    return(
        <>
            <Header/>
            <section className="profile">
                <div className="profile__user">
                    <div className="profile__image">
                        <i className="fa-solid fa-user-large"></i>
                    </div>
                    <h2>Welcome {userInfo}!</h2>
                    <h2>View Your Favourited Recipes!</h2>
                </div>
                <div className="profile__fav-recipe-container">
                    <RecipeListCard
                    favRecipeList={favRecipeList}
                    setFavUpdate={setFavUpdate}
                    loggedUserId={loggedUserId}
                    />
                </div>
            </section>
        </>
    )
}

export default ProfilePage;