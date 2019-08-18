import React from 'react';
import axios from 'axios';

import RouteForm from './RouteForm';

export default class Main extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      allRoutes: [],
      pageNum: 1,
      resultsPerPage: 10,
      routesToDisplay: [],
      disableNextBtn: false,
      disablePrevBtn: true,
    }
  }

  addRoute = routeObj => {
    console.log("Inside main addRoute");
    console.log(routeObj);

    this.setState({allRoutes: [...this.state.allRoutes, routeObj]}, _=> {
      console.log(this.state);
    });
  };

  searchForRoute = routeObj => {
    console.log("Inside searchForRoute");
    console.log(routeObj);
    
  };

  render () {
    console.log("inside render of main");

    // const { addRoute } = this;
    // const restInterface = { addRoute };

    return (
      <div>
        <h1>Hello World</h1>
        <RouteForm formFunction="add" addRoute={this.addRoute} id="addRouteForm" />        
        <RouteForm formFunction="search" searchForRoute={this.searchForRoute} id="searchRouteForm" />
      </div>
    );
    
  }
}