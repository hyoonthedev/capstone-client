import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import RecipeDetails from '../../components/RecipeDetails/RecipeDetails';
import './RecipePage.scss';

function RecipePage() {

    const params = useParams()
    const API_URL = process.env.REACT_APP_API_URL;
    const PORT = process.env.REACT_APP_PORT;

    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        axios
        .get(`${API_URL}${PORT}/recipes/${params.id}`)
        .then((response) => {
            setSelectedRecipe(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    if(!selectedRecipe) {
        return "loading"
    }

    return(
            <section className="recipe-page">
                <Header />
                <RecipeDetails 
                selectedRecipe={selectedRecipe}
                />
            </section>
            )
}

export default RecipePage;