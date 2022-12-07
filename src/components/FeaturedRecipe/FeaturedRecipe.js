import './FeaturedRecipe.scss'

function FeaturedRecipe({ featuredRecipes }) {
    return(
        featuredRecipes.map((recipe) => {
            return(
                <article key={recipe.id} className="featured-card">
                    <img className="featured-card__image" src={recipe.image} alt={recipe.name}/>
                    <h3 className="featured-card__name">{recipe.name}</h3>
                    <h3 className="featured-card__cuisine">{recipe.cuisine}</h3>
                </article>
            )
        })
    )
}

export default FeaturedRecipe;