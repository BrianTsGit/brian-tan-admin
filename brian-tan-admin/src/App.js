import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './App.scss';
import Layout from './hoc/Layout/Layout';
import Home from './container/Home/Home';
import FashionMagazine from './container/FashionMagazine/FashionMagazine';

class App extends Component {
  render() {
    let innerBodyClasses = classes.InnerBody;

    if (this.props.showConceptGrid) {
      innerBodyClasses = [classes.InnerBody, classes.ShowConceptGrid].join(' ');
    }

    return (
      <div className={innerBodyClasses}>
        <Layout>
          <Switch>
            <Route path="/fashion-magazine" component={FashionMagazine}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showConceptGrid: state.showConceptGrid
  }
};

export default withRouter(connect(mapStateToProps)(App));
