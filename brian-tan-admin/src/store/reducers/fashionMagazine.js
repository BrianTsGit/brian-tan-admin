import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loadingFashionArticles: false,
    fashionArticles: [],
    recommendations: [],
    fashionSections: [] 
}

const store = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FASHION_ARTICLES_INIT:
            return updateObject(state, { loadingFashionArticles: true});
        case actionTypes.GET_FASHION_ARTICLES_INIT:
            return updateObject(state, { loadingFashionArticles: false});
        case actionTypes.GET_FASHION_ARTICLES_INIT:
            return updateObject(state, { loadingFashionArticles: false});
        default: 
        return state;
    }
}

export default store; 