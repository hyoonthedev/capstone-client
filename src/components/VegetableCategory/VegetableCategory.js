import leafIcon from '../../assets/Images/Logo/logo.png';
import deleteIcon from '../../assets/Images/Icons/close-icon.svg';
import './VegetableCategory.scss';

function VegetableCategory({ ingredientsList, dateDifference, handleClick, handleDelete }) {

// Filter Vegetables
    const filterVegetable = function(ingredient) {
        if(ingredient.category === "vegetables"){
            return true
        } else {
            return false
        }
    }

    const vegetableList = ingredientsList.filter(filterVegetable);

    return(
        vegetableList.map((vegetable) => {
            return(
                <article className="ingredient-list__vegetable-card" key={vegetable.id}>
                    <div className="ingredient-list__vegetable-title-container">
                        <img onClick={() => handleClick(vegetable.id)} className={dateDifference(vegetable.expiry) === "red" ? "ingredient-list__vegetable-expiry-red" : dateDifference(vegetable.expiry) === "yellow" ? "ingredient-list__vegetable-expiry-yellow" : "ingredient-list__vegetable-expiry-green"} src={leafIcon} alt="expiry indicator"/>
                        <h4 className="ingredient-list__vegetable-title">{vegetable.ingredient_name}</h4>
                    </div>
                    <i onClick={() => handleDelete(vegetable.id)} src={deleteIcon} className="fa-solid fa-trash-can ingredient-list__vegetable-delete"></i>
                </article>
            )
        })
    )
}

export default VegetableCategory;