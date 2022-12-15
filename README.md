
# panTree

panTree looks to limit household foodwaste by generating recipes based on ingredients you have in your pantry and fridge.
You can input your ingredients into panTree and be shown visual indications how long a product has been in your pantry and fridge allowing you to create meals with them before they go bad.
Not only does panTree limit the amount of food being wasted, you will also be inspired to try a wide selection of recipes from different cuisines.
Find anything you like? Save it into your favourites, and re-use the recipe!

# Setting Up

To setup, please make sure to download both the server and client side.

#Server
- initialize node modules with $npm i
- create a .env file following the .envsample keys
    - PORT = (Port Number)
    - DB = (DB Connection)
    - secretKey (Generate a random uuid)
- scripts are already created for you, run the following:
    - $npm run migrate (generates tables)
    - $npm run seed (seeds recipe table)
- start backend with $npm run dev
- your backend should be running when you see "Connected to 'PORT'"

#Client
- initialize node modules with $npm i
- create a .env file following the .envsample keys
    - REACT_APP_API_URL = (URL of server)
    - REACT_APP_PORT = (Port Number from server)
- start client side with $npm start

# How To Use 

#Signup
- You will need to signup to access the pages
- Click get started to open the sign up menu
    - enter username, password and confirm password
    - username must not already exist
    - password MUST be 8 characters long
    - password and confirm password must match
#Login
- After signing up you will be directed to login menu
    - enter username and password
    - username and password must be signed up
#Ingredients
- After logging in you will be directed to the ingredients pages
    - enter your ingredients
        - name of ingredient
        - date of purchase
        - category
    - you must fill all values in order to submit
- The ingredient will appear in panTree
    - clicking the leaf will select the ingredient to generate a recipe
    - clicking the trash can will remove it from the list
    - the leaf will appear green for 0-3 days, yellow for 3-7 days, and red for >7 days
- After selecting ingredients, click Make a recipe
    - If there are too many ingredients/no ingredients no recipes will show up
#Recipe list
- After creating recipes a list of recipes will appear
- Hovering over the card will show the recipe name and cuisines
- Clicking the heart will add it to your favourites
- Clicking the card will go to the Recipe Details
#Recipe Details
- This will provide the full details of the recipe
- This includes general details, ingredients and instructions
- After making the recipe, you can click the complete button to confirm the use of your selected ingredients, this will clear your selected ingredients list
#Profile
- Your profile page will include a user card (TBD)
- and a list of your favourited recipes
    - you can unfavourite these recipes, and it will be updated
#Navigation
- Navigation includes Pantry, Profile and Logout
    - Pantry navigates to Ingredients page
    - Profile goes to your profile page
    - Log out will log user out and go to the main page


