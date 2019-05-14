import axios from 'axios';
import {key, proxy} from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe(){
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = red.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;

        } catch (error){
            console.log(error);
            alert('Something went wrong :(');
        }
    }

    calcTime(){
        // Assuming that we need 15 mins per 3 ingredients
        const numImg = this.ingredients.length;
        const periods = Math.ceil(numImg / 3);
        this.time = periods * 15;
    }

    calcServings(){
        this.servings = 4;
    }
}