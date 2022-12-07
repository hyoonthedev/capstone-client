import './RecipeListCard.scss'
import { useNavigate } from 'react-router-dom';

function RecipeListCard({ recipeList }) {

    const navigate = useNavigate();
    const handleClick = (event) => {
        navigate(`/recipe/${event}`)
    }
    if(!recipeList){
        return "loading"
    }
    return(
        recipeList.map((recipe) => {
            return(
                <article onClick={() => handleClick(recipe.id)} className="recipe-list__card-container"key={recipe.id}>
                    <img src={recipe.image} alt={recipe.name}/>
                    <p>{recipe.name}</p>
                    <p>{recipe.cuisine}</p>
                    <p>{recipe.mealType}</p>
                    <p>{recipe.dishType}</p>
                </article>
            )
        })
    )
}

export default RecipeListCard;