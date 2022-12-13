import './RecipeDetails.scss'

function RecipeDetails({ selectedRecipe }) {
    console.log(selectedRecipe)
    return(
        <article className="recipe-page__main-container">
            <div className="recipe-page__image-container">
                <h2 className="recipe-page__main-title">{selectedRecipe[0].recipe_name}</h2>
                <img className="recipe-page__image"src={selectedRecipe[0].image_url} alt={selectedRecipe[0].recipe_name}/>
            </div>
            <div className="recipe-page__content-container">
                <div className="recipe-page__details">
                    <h3 className="recipe-page__title">Details</h3>
                    <p className="recipe-page__content">{selectedRecipe[0].cuisine}</p>
                    <p className="recipe-page__content">{selectedRecipe[0].servings}</p>
                    <p className="recipe-page__content">{selectedRecipe[0].total_cook_time}</p>
                </div>
                <div className="recipe-page__ingredients">
                    <h3 className="recipe-page__title">Ingredients</h3>
                    {/* <RecipeDetailsIngredients 
                    selectedRecipe={selectedRecipe}
                    /> */}
                </div>
            </div>
        </article>
    )
}

export default RecipeDetails;