import './AddIngredientsPage.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import IngredientsList from '../../components/IngredientsList/IngredientsList';
import SelectedIngredients from '../../components/SelectedIngredients/SelectedIngredients';
import Loading from '../../components/Loading/Loading';

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_PORT;

function AddIngredientsPage({ loggedUserId }) {

    const [ingredientsList, setIngredientsList] = useState(null);
    const [pantryList, setPantryList] = useState(null);
    const [submitState, setSubmitState] = useState(false);
    const [formError, setFormError] = useState(false);

// GET current ingredients list
    useEffect(() => {
           axios
            .get(`${API_URL}${PORT}/ingredients/user/${loggedUserId}`)
            .then((response) => {
                setIngredientsList(response.data)
                setSubmitState(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [submitState])

// GET current pantry list
    useEffect(() => {
        axios.get(`${API_URL}${PORT}/pantry/user/${loggedUserId}`)
        .then((response) => {
            setPantryList(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}, [submitState])

// Handle Form Submit
    const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmitState(false);
    
    const lowerCase = (event.target[0].value).toLowerCase();

    const newIngredient = {
        ingredient_name: lowerCase,
        expiry: event.target[1].value,
        category: event.target[2].value,
        user_id: loggedUserId
    };

    if(!event.target[0].value || !event.target[1].value || event.target[2].value === "#") {
        return setFormError(true)
    }
    axios
        .post(`${API_URL}${PORT}/ingredients/user/${loggedUserId}`, newIngredient)
        .then((_response) => {
            event.target[0].value = ""
            event.target[1].value = ""
            event.target[2].value = "#"
            setSubmitState(true);
            setFormError(false)
        })
        .catch((err) => {
            console.log(`An error occured: ${err}`)
        })
}

// OnClick Delete
const handleDelete = (event) => {
    axios
        .delete(`${API_URL}${PORT}/ingredients/${event}`)
        .then((_data) => {
            setSubmitState(true)
        })
        .catch((err) => {
            console.log(err)
        })
}

// Calculate Expiry difference
const dateDifference = function(timestamp) {
    const convertExpiry = new Date(timestamp).valueOf()
    const currentDate = Date.now()
    const timeDiff = currentDate - convertExpiry
    if(timeDiff < 259200000) {
        return "green"
    } 
    if(timeDiff < 586800000) {
        return "yellow"
    } 
    else {
        return "red"
    }
}
// // Catch if axios still getting info
    if(!ingredientsList || !loggedUserId || !pantryList) {
        return <Loading/>
    }


    return(
        <>
            <Header />
            <section className="ingredients">
                <div className="ingredients__container">
                    <div>   
                        <h2 className="ingredients__add-main-title">Add Ingredients</h2>
                        <form onSubmit={handleFormSubmit} className="ingredients__add-container">
                            <label className="ingredients__add-title">Ingredient Name</label>
                            <input onClick={() => setFormError(false)} className="ingredients__add-input-name" type="text" placeholder="Enter Ingredient"></input>
                            <label className="ingredients__add-title">Date Purchased</label>
                            <input onClick={() => setFormError(false)} className="ingredients__add-input-timestamp" type="date" placeholder="YYYY-MM-DD"></input>
                            <label className="ingredients__add-title">Food Category</label>
                            <select onClick={() => setFormError(false)} className="ingredients__add-input-select">
                                <option value="#">Select a Category</option>
                                <option value="meat">Meat</option>
                                <option value="vegetables">Vegetable</option>
                                <option value="other">Other</option>
                            </select>
                            <p className={formError === false ? "ingredients__add-error-msg-hidden" : "ingredients__add-error-msg"}>Missing Form Value</p>
                            <button className="ingredients__add-submit" type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="ingredients__list">
                        <IngredientsList
                        ingredientsList={ingredientsList}
                        API_URL={API_URL}
                        PORT={PORT}
                        setSubmitState={setSubmitState}
                        dateDifference={dateDifference}
                        handleDelete={handleDelete}
                        />
                        <SelectedIngredients 
                        pantryList={pantryList}
                        API_URL={API_URL}
                        PORT={PORT}
                        dateDifference={dateDifference}
                        setSubmitState={setSubmitState}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddIngredientsPage;