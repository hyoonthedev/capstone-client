import Header from "../../components/Header/Header";
import './RecipeSearchPage.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import './RecipeSearchPage.scss'

import RecipeListCard from "../../components/RecipeListCard/RecipeListCard";

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_PORT;

function RecipeSearchPage() {

    const [pantryList, setPantryList] = useState(null);
    const [recipeList, setRecipeList] = useState(null);

// Set PantryList to query
    const convertQuery = function(object) {
        const array = []
        for(let i=0; i<object.length; i++) {
            array.push(object[i].ingredient_name)
        } return array.join("%20")
    }

    const convertText = function(object) {
        const array = []
        for(let i=0; i<object.length; i++) {
            array.push(object[i].ingredient_name)
        } return array.join(" & ")
    }

// GET pantry list
    useEffect(() => {
        axios
            .get(`${API_URL}${PORT}/pantry`)
            .then((response) => {
               setPantryList(response.data)
               return response.data
            })
            .then((response) => {
                const query = convertQuery(response)
                axios
                    .post(`${API_URL}${PORT}/recipes/search`, {query})
                    .then((response) => {
                        setRecipeList(response.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

// Catch if pantryList not loading
    if(!pantryList) {
        return "loading"
    };

    return(
        // recipeList.map
        <section className="recipe-search">
            <Header/>
            <h2 className="recipe-search__title">Searching Recipes for:</h2>
            <h2 className="recipe-search__span">{convertText(pantryList)}</h2>
            <div className="recipe-search__card-container">
                <RecipeListCard
                recipeList={recipeList}
                />
            </div>
        </section>
    )
}

export default RecipeSearchPage;