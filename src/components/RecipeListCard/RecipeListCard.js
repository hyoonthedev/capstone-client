import './RecipeListCard.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function RecipeListCard({ recipeList, loggedUserId, setFavUpdate }) {

    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;
    const PORT = process.env.REACT_APP_PORT;

// Handle navigate to recipe
    const handleClick = (event) => {
        navigate(`/recipe/${event}`)
    }

// Handle set favourite
    const handleFav = (event) => {
        axios
            .post(`${API_URL}${PORT}/favourite/${loggedUserId}/${event}`)
            .then(() => {
                setFavUpdate(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    if(!recipeList){
        return "loading"
    }
    return(
        recipeList.data.map((recipe) => {
            return(
                <article  className="recipe-list__card-container"key={recipe.id}>
                    <img className="recipe-list__image" src={recipe.image_url} alt={recipe.recipe_name}/>
                    <p>{recipe.recipe_name}</p>
                    <p>{recipe.cuisine}</p>
                    <div onClick={() => handleFav(recipe.id)}>Like me!</div>
                    <div className={recipe.favourite === true ? "heart-red" : "heart-black"}>HEART</div>
                    <div onClick={() => handleClick(recipe.id)}>view recipe</div>
                </article>
            )
        })
    )
}

export default RecipeListCard;