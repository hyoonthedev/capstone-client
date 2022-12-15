import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

// Pages and Components
import LandingPage from './pages/LandingPage/LandingPage';
import AddIngredientsPage from './pages/AddIngredientsPage/AddIngredientsPage';
import RecipeSearchPage from './pages/RecipeSearchPage/RecipeSearchPage';
import RecipePage from './pages/RecipePage/RecipePage';
import NeedLoginSignUp from './pages/NeedLoginSignUp/NeedLoginSignUp';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Loading from './components/Loading/Loading';
import Footer from './components/Footer/Footer';
import Page404 from './pages/Page404/Page404';

function App() {

// Login State
  const [loginSuccess, setloginSuccess] = useState((sessionStorage.getItem("JWTtoken")) ? true : false);
  const [userInfo, setUserInfo] = useState(null);
  const [loggedUserId, setLoggedUserId] = useState(null);
  const [favUpdate, setFavUpdate] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;
  const PORT = process.env.REACT_APP_PORT;

// Get Token
  useEffect(() => {
    const token = sessionStorage.getItem('JWTtoken')

    if(!token) {
        return;
    }
    axios
      .get(`${API_URL}${PORT}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      .then((response) => {
          setUserInfo(response.data.username) // Set Username
          return response
      })
      .then((response) => {
        const user = response.data.username
        axios
          .get(`${API_URL}${PORT}/profile/${user}`)
          .then((response) => {
            const { id } = response.data[0]
            setLoggedUserId(id) // Set User Id
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
},[loginSuccess])

if(!loginSuccess){
 return( 
  <BrowserRouter>
    <Routes>
      <Route 
            path="/" 
            element={<LandingPage
              setloginSuccess={setloginSuccess}
              loginSuccess={loginSuccess}
              setUserInfo={setUserInfo}
              setLoggedUserId={setLoggedUserId}
              loggedUserId={loggedUserId}
              />} 
      />
      <Route path="*" element={<NeedLoginSignUp/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)}

if(!loggedUserId){
  return <Loading/>
}
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path="/" 
        element={<Navigate to={"/ingredients"} />}
        />
        <Route path="/ingredients" 
        element={<AddIngredientsPage
        loggedUserId={loggedUserId}
          />} 
        />
        <Route 
        path="/recipes" 
        element={<RecipeSearchPage
          loggedUserId={loggedUserId}
          setFavUpdate={setFavUpdate}
          favUpdate={favUpdate}
          />}
        />
        <Route path="/recipe/:id" 
          element={<RecipePage 
            loggedUserId={loggedUserId}
          />} 
        />
        <Route path="/user"
          element={<ProfilePage
          loggedUserId={loggedUserId}
          userInfo={userInfo}
          setFavUpdate={setFavUpdate}
          favUpdate={favUpdate}
          />}
        />
        <Route path="*" element={<Page404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
