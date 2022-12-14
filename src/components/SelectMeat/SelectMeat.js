import './SelectMeat.scss'
import leafIcon from '../../assets/Images/Logo/logo.png';

import PleaseChoose from '../PleaseChoose/PleaseChoose';

function SelectMeat({ pantryList, dateDifference, handleClick }) {

// Filter Meat Category
    const filterMeat = function(ingredient) {
        if(ingredient.category === "meat"){
            return true
        } else {
            return false
        }
    }
    const meatList = pantryList.filter(filterMeat);

    if(pantryList.length === 0) {
        return <PleaseChoose />
    }

    return(
        meatList.map((meat) => {
            return(
                <article className="ingredient-select__meat-card" key={meat.id}>
                    <img onClick={() => handleClick(meat.id)} className={dateDifference(meat.expiry) === "red" ? "ingredient-select__meat-expiry-red" : dateDifference(meat.expiry) === "yellow" ? "ingredient-select__meat-expiry-yellow" : "ingredient-select__meat-expiry-green"} src={leafIcon} alt="expiry indicator"/>
                    <h4 className="ingredient-select__meat-title">{meat.ingredient_name}</h4>
                </article>
            )
        })
    )
}

export default SelectMeat;