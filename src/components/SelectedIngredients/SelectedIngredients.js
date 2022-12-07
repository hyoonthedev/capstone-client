import './SelectedIngredients.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import SelectMeat from '../SelectMeat/SelectMeat';
import SelectVeg from '../SelectVeg/SelectVeg';
import SelectOther from '../SelectOther/SelectOther';

function SelectedIngredients({ pantryList, dateDifference, setSubmitState, API_URL, PORT }) {

// Handle onclick move pantry to ingredient
    const handleClick = (event) => {
        axios
            .post(`${API_URL}${PORT}/pantry/${event}`)
            .then((_response) => {
                setSubmitState(true)
            })
            .catch((err) => {
                console.log(err)
            })
        }

    const navigate = useNavigate();

    return(
        <div>
            <h3 className="ingredient-select__title">Selected</h3>
            <section className="ingredient-select">
                <div className="ingredient-select__meat">
                    <h3 className="ingredient-select__subtitle">Meats</h3>
                    <SelectMeat
                    pantryList={pantryList}
                    dateDifference={dateDifference}
                    handleClick={handleClick}
                    />
                </div>
                <div className="ingredient-select__veg">
                    <h3 className="ingredient-select__subtitle">Vegetables</h3>
                        <SelectVeg
                        pantryList={pantryList}
                        dateDifference={dateDifference}
                        handleClick={handleClick}
                        />
                </div>
                <div className="ingredient-select__other">
                    <h3 className="ingredient-select__subtitle">Other</h3>
                        <SelectOther
                        pantryList={pantryList}
                        dateDifference={dateDifference}
                        handleClick={handleClick}
                        />
                </div>
                <div>
                    <div onClick={() => navigate('/recipes')} className="ingredient-select__button">Make Recipes</div>
                </div>
            </section>
        </div>
    )
}

export default SelectedIngredients;