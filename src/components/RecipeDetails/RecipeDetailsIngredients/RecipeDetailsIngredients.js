function RecipeDetailsIngredients({ selectedRecipe }) {

    const { ingredients_line } = selectedRecipe[0];
    
    return(
        ingredients_line.map((ingredient) => {
            return(
                <p className="recipe-page__content" key={ingredient.index}>{ingredient}</p>
            )
        })
    )
}

export default RecipeDetailsIngredients;