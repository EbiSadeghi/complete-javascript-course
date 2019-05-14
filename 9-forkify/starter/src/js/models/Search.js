import axios from 'axios';
import {key, proxy} from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`); // Axios is a better version of fetch
            this.result = res.data.recipes;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    };

    /*
    async function getResultsWProxy(query){ //“Access-Control-Allow-Origin” missing
        const proxy = 'https://crossorigin.me/';
        const key = '5d9109f1b446cd1d8b995a4b20db1e4c';
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`); // Axios is a better version of fetch
        console.log(res);
    }
    getResultsWProxy('pizza');
    
    async function getResultsWProxy2(query){ //“Access-Control-Allow-Origin” missing
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '5d9109f1b446cd1d8b995a4b20db1e4c';
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`); // Axios is a better version of fetch
        console.log(res);
    }
    getResultsWProxy2('pizza');
    */
}



/*
import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}

*/