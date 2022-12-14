import './SelectOther.scss';
import leafIcon from '../../assets/Images/Logo/logo.png';
import PleaseChoose from '../PleaseChoose/PleaseChoose';

function SelectOther({ pantryList, dateDifference, handleClick }) {

    // Filter other category
    const filterOther = function(ingredient) {
        if(ingredient.category === "other"){
            return true
        } else {
            return false
        }
    }

    const otherList = pantryList.filter(filterOther);

    if(pantryList.length === 0) {
        return <PleaseChoose />
    }

    return(
        otherList.map((other) => {
            return(
                <article className="ingredient-select__other-card" key={other.id}>
                    <img onClick={() => handleClick(other.id)} className={dateDifference(other.expiry) === "red" ? "ingredient-select__other-expiry-red" : dateDifference(other.expiry) === "yellow" ? "ingredient-select__other-expiry-yellow" : "ingredient-select__other-expiry-green"} src={leafIcon} alt="expiry indicator"/>
                    <h4 className="ingredient-select__other-title">{other.ingredient_name}</h4>
                </article>
            )
        })
    )
}

export default SelectOther;