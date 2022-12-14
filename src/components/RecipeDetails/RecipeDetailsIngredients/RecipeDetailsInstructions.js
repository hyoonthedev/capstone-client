function RecipeDetailsInstructions({ selectedRecipe }) {

    const { instructions } = selectedRecipe[0]
    return(
        instructions.map((instruction) => {
            return(
                <li className="recipe-page__content">{instruction}</li>
            )
        })
    )
}

export default RecipeDetailsInstructions;