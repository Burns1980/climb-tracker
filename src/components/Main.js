import React from 'react';
import axios from 'axios';

import InputField from './InputField';

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
        <InputField />
      </div>
    );
    
  }
}