import './MeatCategory.scss';
import leafIcon from '../../assets/Images/Logo/logo.png';

function MeatCategory({ ingredientsList, dateDifference, handleClick, handleDelete }) {

// Filter Meat Category
    const filterMeat = function(ingredient) {
        if(ingredient.category === "meat"){
            return true
        } else {
            return false
        }
    }

    const meatList = ingredientsList.filter(filterMeat);

    return(
        meatList.map((meat) => {
            return(
                <article className="ingredient-list__meat-card" key={meat.id}>
                    <div className="ingredient-list__meat-title-container">
                        <img onClick={() => handleClick(meat.id)} className={dateDifference(meat.expiry) === "red" ? "ingredient-list__meat-expiry-red" : dateDifference(meat.expiry) === "yellow" ? "ingredient-list__meat-expiry-yellow" : "ingredient-list__meat-expiry-green"} src={leafIcon} alt="expiry indicator"/>
                        <h4 className="ingredient-list__meat-title">{meat.ingredient_name}</h4>
                    </div>
                    {/* <img className="ingredient-list__meat-delete" onClick={() => handleDelete(meat.id)} src="{deleteIcon}" alt="delete icon"/> */}
                    <i onClick={() => handleDelete(meat.id)} className="fa-solid fa-trash-can ingredient-list__meat-delete"></i>
                </article>
            )
        })
    )
}

export default MeatCategory;