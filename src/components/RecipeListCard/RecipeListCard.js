import './RecipeListCard.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RecipeListCard({ recipeList, loggedUserId, setFavUpdate, favRecipeList, setFavUpdateProfile }) {

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


    if(!recipeList) {
        return(
            favRecipeList.map((recipe) => {
                return(
                    <article  className="recipe-list__card-container"key={recipe.recipe_id}>
                        <span onClick={() => handleFav(recipe.recipe_id)} className={recipe.status === 1 ? "heart-red" : "heart-black"}>
                            <i className="fa-solid fa-heart"></i>
                        </span>
                        <img onClick={() => handleClick(recipe.recipe_id)} className="recipe-list__image" src={recipe.image_url} alt={recipe.recipe_name}/>
                        <p><i className="fa-solid fa-bowl-food recipe-list__icon"></i>{recipe.recipe_name}</p>
                        <p><i className="fa-solid fa-flag recipe-list__icon"></i>{recipe.cuisine}</p>
                    </article>
                )
            })
        )
    }


    if(!recipeList || favRecipeList){
        return "loading"
    }

    return(
        recipeList.data.map((recipe) => {
            return(
                <article  className="recipe-list__card-container"key={recipe.id}>
                    <span onClick={() => handleFav(recipe.id)} className={recipe.favourite === true ? "heart-red" : "heart-black"}>
                        <i className="fa-solid fa-heart"></i>
                    </span>
                    <img onClick={() => handleClick(recipe.id)} className="recipe-list__image" src={recipe.image_url} alt={recipe.recipe_name}/>
                    <p><i className="fa-solid fa-bowl-food recipe-list__icon"></i>{recipe.recipe_name}</p>
                    <p><i className="fa-solid fa-flag recipe-list__icon"></i>{recipe.cuisine}</p>
                </article>
            )
        })
    )
}

export default RecipeListCard;