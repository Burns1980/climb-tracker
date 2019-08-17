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

  render () {
    console.log("inside render of main");

    return (
      <div>
        <h1>Hello World</h1>
        <RouteForm 
          pageNum={this.state.pageNum}
        />        
      </div>
    );
    
  }
}