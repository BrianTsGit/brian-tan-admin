import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classes from './FashionMagazine.scss'
import * as actions from '../../store/actions/index';

class FashionMagazine extends Component {

    state = {

    }

    componentDidMount () {
        this.props.getFashionArticles();
    }

    render () {
        return(
            <div className={classes.FashionMagazine}>
                <h2>FASHION MAG ADMIN PAGE AYOO</h2>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        fashionArticles: state.fashionMagazine.fashionArticles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFashionArticles: () => dispatch(actions.getFashionArticles())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FashionMagazine);