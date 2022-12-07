function RecipeDetailsIngredients({ selectedRecipe }) {

    const ingredientList = selectedRecipe.ingredients

    return(
        ingredientList.map((ingredient, index) => {
            return(
                <p key={index}>{ingredient}</p>
            )
        })
    )
}

export default RecipeDetailsIngredients;