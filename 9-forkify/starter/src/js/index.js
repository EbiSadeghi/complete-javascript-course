// Global app controller
import axios from 'axios';
import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/* Global state of the app 
* Search object
* Current recipe object
* Shopping list object
* Liked recipes
*/
const state = {};

/**
 *  SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();
    console.log(query);

    if (query){
        // 2. new search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4. Search for recipes
            await state.search.getResults();

            // 5. Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
            console.log(state.search.result);
        } catch (err) {
            alert('Something wrong with the search...');
            clearLoader();
        }
    }
}

/*
document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault(); //Stop page from reloading
    controlSearch();
});*/

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault(); //Stop page from reloading
    controlSearch();
});

elements.searchResPages,addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline'); // The user may press on the button text, icon, or body. Hence we use closest
    console.log(e.target);
    console.log(btn);
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        console.log(goToPage);
    }
});

/**
 *  RECIPE CONTROLLER
 */
const controlRecipe = () => {
    // Get ID from URL
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes

        try {
            // Create new recipe object
            state.recipe = new Recipe(id);

            // Get recipe data
            await state.recipe.getRecipe();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            console.log(state.recipe);
        } catch (err) {
            alert('Error retrieving recipe');
        }
    }
};

//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));



/*
const search = new Search('pizza');
console.log(Search);
search.getResults();
*/

/*
import str from './models/Search';

//import {add, multiply, ID} from './views/searchView';
//console.log(`Using imported functions: ${add(ID, 2)} ${multiply(3, 5)}. ${str}`);

//import {add as a, multiply as m, ID} from './views/searchView';

import * as searchView from './views/searchView';
console.log(`Using imported functions: ${searchView.add(searchView.ID, 2)} ${searchView.multiply(3, 5)}. ${str}`);
*/
