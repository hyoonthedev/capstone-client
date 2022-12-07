// import './HomePage.scss';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import FeaturedRecipe from '../../components/FeaturedRecipe/FeaturedRecipe';
// import HomeHero from '../../components/HomeHero/HomeHero';

// const API_URL = process.env.REACT_APP_API_URL;
// const PORT = process.env.REACT_APP_PORT

// function HomePage() {
//     const [featuredRecipes, setFeaturedRecipes] = useState([])

//     useEffect(() => {
//         axios
//             .get(`${API_URL}${PORT}/recipes/featured`)
//             .then((response) => {
//                 setFeaturedRecipes(response.data)
//                 console.log('hi axios call')
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     },[])

//     console.log(featuredRecipes)
//     return(
//         <>
//             <HomeHero />
//             <h2>Featured Recipes</h2>
//             <FeaturedRecipe 
//             featuredRecipes={featuredRecipes}
//             />
//         </>
//     )
// }

// export default HomePage;