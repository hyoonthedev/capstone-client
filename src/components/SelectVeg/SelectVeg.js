import './SelectVeg.scss';
import leafIcon from '../../assets/Images/Logo/logo.png';
import PleaseChoose from '../PleaseChoose/PleaseChoose';

function SelectVeg({ pantryList, dateDifference, handleClick }) {

// Filter Vegetables
    const filterVegetable = function(ingredient) {
        if(ingredient.category === "vegetables"){
            return true
        } else {
            return false
        }
    }

    const vegetableList = pantryList.filter(filterVegetable);

    if(pantryList.length === 0) {
        return <PleaseChoose />
    }

    return(
        vegetableList.map((veg) => {
            return(
                <article className="ingredient-select__veg-card" key={veg.id}>
                    <img onClick={() => handleClick(veg.id)} className={dateDifference(veg.expiry) === "red" ? "ingredient-select__veg-expiry-red" : dateDifference(veg.expiry) === "yellow" ? "ingredient-select__veg-expiry-yellow" : "ingredient-select__veg-expiry-green"} src={leafIcon} alt="expiry indicator"/>
                    <h4 className="ingredient-select__veg-title">{veg.ingredient_name}</h4>
                </article>
            )
        })
    )
}

export default SelectVeg;