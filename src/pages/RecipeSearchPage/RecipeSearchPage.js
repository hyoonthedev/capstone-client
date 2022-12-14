import Header from "../../components/Header/Header";
import './RecipeSearchPage.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import './RecipeSearchPage.scss'

import RecipeListCard from "../../components/RecipeListCard/RecipeListCard";
import NoRecipe from "../../components/NoRecipe/NoRecipe";
import Loading from "../../components/Loading/Loading";

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_PORT;

function RecipeSearchPage({ loggedUserId, favUpdate, setFavUpdate }) {

    const [pantryList, setPantryList] = useState(null);
    const [recipeList, setRecipeList] = useState(null);
    // const [favUpdate, setFavUpdate] = useState(false);

// Convert Object to String
    const convertText = function(object) {
        const array = []
        for(let i=0; i<object.length; i++) {
            array.push(object[i].ingredient_name)
        } return array.join(" & ")
    }

// GET pantry list
    useEffect(() => {
        axios
            .get(`${API_URL}${PORT}/recipes/${loggedUserId}/search`)
            .then((response) => {
                setRecipeList(response)
            })
            .then(() => {
                axios
                    .get(`${API_URL}${PORT}/pantry/user/${loggedUserId}`)
                    .then((response) => {
                        setPantryList(response)
                        setFavUpdate(false)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    },[favUpdate])

// Catch if pantryList not loading
    if(!pantryList || !recipeList) {
        return <Loading/>
    }
    if(recipeList.data.length === 0) {
        return <NoRecipe />
        }

    return(
            <>
            <Header/>
                <section className="recipe-search">
                    <h2 className="recipe-search__title">Searching Recipes for:</h2>
                    <h2 className="recipe-search__span">{convertText(pantryList.data)}</h2>
                    <div className="recipe-search__card-container">
                        <RecipeListCard
                        recipeList={recipeList}
                        loggedUserId={loggedUserId}
                        setFavUpdate={setFavUpdate}
                        />
                    </div>
                </section>
            </>
    )
}

export default RecipeSearchPage;