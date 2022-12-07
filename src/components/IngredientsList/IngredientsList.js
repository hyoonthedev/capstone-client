import './IngredientsList.scss'
import axios from 'axios';

import MeatCategory from '../MeatCategory/MeatCategory';
import VegetableCategory from '../VegetableCategory/VegetableCategory';
import OtherCategory from '../OtherCategory/OtherCategory';

function IngredientsList({ ingredientsList, API_URL, PORT, setSubmitState, dateDifference, handleDelete }) {

// Handle onClick move ingredient to pantry
    const handleClick = (event) => {
        axios
            .post(`${API_URL}${PORT}/ingredients/${event}`)
            .then((_response) => {
                setSubmitState(true)
            })
            .catch((err) => {
                console.log(err)
            })
        }

    return(
        <div>
            <h2 className="ingredient-list__title">Pantree</h2>
            <section className="ingredient-list">
                <div className="ingredient-list__meat">
                    <h3 className="ingredient-list__subtitle">Meats</h3>
                    <MeatCategory 
                    ingredientsList={ingredientsList}
                    dateDifference={dateDifference}
                    handleClick={handleClick}
                    handleDelete={handleDelete}
                    />
                </div>
                <div className="ingredient-list__veg">
                    <h3 className="ingredient-list__subtitle">Vegetables</h3>
                    <VegetableCategory 
                    ingredientsList={ingredientsList}
                    dateDifference={dateDifference}
                    handleClick={handleClick}
                    handleDelete={handleDelete}
                    />
                </div>
                <div className="ingredient-list__other">
                    <h3 className="ingredient-list__subtitle">Other</h3>
                    <OtherCategory
                    ingredientsList={ingredientsList}
                    dateDifference={dateDifference}
                    handleClick={handleClick}
                    handleDelete={handleDelete}
                    />
                </div>
            </section>
        </div>
    )
}

export default IngredientsList;