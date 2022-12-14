import './RecipeDetails.scss'

import RecipeDetailsIngredients from './RecipeDetailsIngredients/RecipeDetailsIngredients';
import RecipeDetailsInstructions from './RecipeDetailsIngredients/RecipeDetailsInstructions';

import { useState } from 'react';
import axios from 'axios';

import closeIcon from '../../assets/Images/Icons/close-icon.svg';

function RecipeDetails({ selectedRecipe, loggedUserId }) {

    const [closeModal, setCloseModal] = useState(false);

    const API_URL = process.env.REACT_APP_API_URL;
    const PORT = process.env.REACT_APP_PORT;

    const handleDeletePantry = (e) => {
        axios
            .delete(`${API_URL}${PORT}/pantry/user/${e}`)
            .then(() => {
                setCloseModal(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return(
        <>
            <article className="recipe-page__main-container">
                <div className="recipe-page__image-container">
                    <h2 className="recipe-page__main-title">{selectedRecipe[0].recipe_name}</h2>
                    <div>
                        <img className="recipe-page__image"src={selectedRecipe[0].image_url} alt={selectedRecipe[0].recipe_name}/>
                        <div onClick={() => setCloseModal(true)} className="recipe-page__complete">Complete</div>
                    </div>
                </div>
                <div className="recipe-page__content-container">
                    <div className="recipe-page__details">
                        <h3 className="recipe-page__title">Details</h3>
                        <p className="recipe-page__content">Cuisine: {selectedRecipe[0].cuisine}</p>
                        <p className="recipe-page__content">Servings: {selectedRecipe[0].servings}</p>
                        <p className="recipe-page__content">Total Cook Time: {selectedRecipe[0].total_cook_time} minutes</p>
                    </div>
                    <div className="recipe-page__ingredients">
                        <h3 className="recipe-page__title">Ingredients</h3>
                        <RecipeDetailsIngredients 
                        selectedRecipe={selectedRecipe}
                        />
                    </div>
                    <div>
                        <h3 className="recipe-page__title">Instructions</h3>
                        <ol>
                        <RecipeDetailsInstructions
                            selectedRecipe={selectedRecipe}
                            /> 
                        </ol>
                    </div>
                </div>
            </article>
            <div className={closeModal === false ? "recipe-page__modal-hidden" : "recipe-page__modal-display"}>
                <div className="recipe-page__modal">
                <div className="login-modal__close-container">
                    <img onClick={() => setCloseModal(false)} className="login-modal__close-button"src={closeIcon} alt="close icon"/>
                </div>
                    <h3 className="recipe-page__modal-title">Recipe Complete</h3>
                    <p className="recipe-page__modal-content">Completeing the recipe will clear all ingredients from your pantry</p>
                    <div onClick={() => handleDeletePantry(loggedUserId)} className="recipe-page__modal-confirm">Confirm</div>
                </div>
                <div onClick={() => setCloseModal(false)} className="recipe-page__modal-overlay"></div>
            </div>
        </>
        
    )
}

export default RecipeDetails;