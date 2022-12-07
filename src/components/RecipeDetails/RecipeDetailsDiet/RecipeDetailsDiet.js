function RecipeDetailsDiet({ selectedRecipe}) {

    const dietList = selectedRecipe.dietLabels

if(!dietList.length) {
    return(
        <p>No Specific Dietary Traits</p>
    )
}

    return(
        dietList.map((diet, index) => {
            return(
                <p key={index}>{diet}</p>
            )
        })
    )
}

export default RecipeDetailsDiet;