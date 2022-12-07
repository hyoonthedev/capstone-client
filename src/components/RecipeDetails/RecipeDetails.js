import RecipeDetailsIngredients from "./RecipeDetailsIngredients/RecipeDetailsIngredients";
import RecipeDetailsHealth from "./RecipeDetailsHealth/RecipeDetailsHealth";
import RecipeDetailsDiet from "./RecipeDetailsDiet/RecipeDetailsDiet";

import './RecipeDetails.scss'

function RecipeDetails({ selectedRecipe }) {
    return(
        <article className="recipe-page__main-container">
            <div className="recipe-page__image-container">
                <h2 className="recipe-page__main-title">{selectedRecipe.name}</h2>
                <img className="recipe-page__image"src={selectedRecipe.image} alt={selectedRecipe.name}/>
            </div>
            <div className="recipe-page__content-container">
                <div className="recipe-page__details">
                    <h3 className="recipe-page__title">Details</h3>
                    <p className="recipe-page__content">{selectedRecipe.cuisine}</p>
                    <p className="recipe-page__content">{selectedRecipe.mealType}</p>
                    <p className="recipe-page__content">{selectedRecipe.dishType}</p>
                </div>
                <div className="recipe-page__ingredients">
                    <h3 className="recipe-page__title">Ingredients</h3>
                    <RecipeDetailsIngredients 
                    selectedRecipe={selectedRecipe}
                    />
                </div>
                <div className="recipe-page__health">
                    <h3 className="recipe-page__title">Health</h3>
                    <RecipeDetailsHealth
                    selectedRecipe={selectedRecipe}
                    />
                </div>
                <div className="recipe-page__diet">
                    <h3 className="recipe-page__title">Diet</h3>
                    <RecipeDetailsDiet
                    selectedRecipe={selectedRecipe}
                    />
                </div>
            </div>
            <a className="recipe-page__link" href={selectedRecipe.recipeUrl}>View Full Recipe</a>
        </article>
    )
}

export default RecipeDetails;