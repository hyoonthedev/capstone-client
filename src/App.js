import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages and Components
import LandingPage from './pages/LandingPage/LandingPage';
import AddIngredientsPage from './pages/AddIngredientsPage/AddIngredientsPage';
import RecipeSearchPage from './pages/RecipeSearchPage/RecipeSearchPage';
import RecipePage from './pages/RecipePage/RecipePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/ingredients" element={<AddIngredientsPage/>} />
        <Route path="/recipes" element={<RecipeSearchPage/>} />
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
