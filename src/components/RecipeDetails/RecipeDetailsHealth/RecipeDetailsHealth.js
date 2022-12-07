function RecipeDetailsHealth({ selectedRecipe }) {

    const healthList = selectedRecipe.healthLabels

    return(
        healthList.map((health, index) => {
            return(
                <p key={index}>{health}</p>
            )
        })
    )
}

export default RecipeDetailsHealth;