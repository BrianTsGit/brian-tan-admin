import axiosServer from '../../axios/axios-server';

import * as actionTypes from './actionTypes';

export const getFashionArticlesInit = () => {
    return {
        type: actionTypes.GET_FASHION_ARTICLES_INIT
    };
};

export const getFashionArticlesSuccess = (fashionArticles) => {
    return {
        type: actionTypes.GET_FASHION_ARTICLES_SUCCESS,
        fashionArticles: fashionArticles
    };
};

export const getFashionArticlesFail = () => {
    return {
        type: actionTypes.GET_FASHION_ARTICLES_FAIL
    };
};

export const getFashionArticles = () => {
    return dispatch => {
        dispatch(getFashionArticlesInit());
        axiosServer.get('/api/fashionMagazine/fashionArticles')
            .then(res => {
                console.log(res.data);
                dispatch(getFashionArticlesSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(getFashionArticlesFail());
            });
    }
}
