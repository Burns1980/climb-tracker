import React from 'react';
import axios from 'axios';

import RouteForm from './RouteForm';
import RouteTable from './RouteTable';

import '../css/RouteTable.css';
import '../css/Main.css';

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

  tempAddRoutes = _=> {
    this.setState({routesToDisplay: [{
      id: "testID",
      rtName: "Edge",
      location: "eldo",
      rtStyle: "lead",
      type: "trad",
      rating: "5.11b",
      stars: "4",
      pitches: "6",
      img: "",
      date: "11/11/2019",
    },
    {
      id: "testID",
      rtName: "Doub-Griffith",
      location: "eldo",
      rtStyle: "lead",
      type: "trad",
      rating: "5.11b",
      stars: "4",
      pitches: "6",
      img: "",
      date: "11/11/2019",
    },
    {
      id: "testID",
      rtName: "Upstart",
      location: "eldo",
      rtStyle: "lead",
      type: "trad",
      rating: "5.11b",
      stars: "4",
      pitches: "6",
      img: "",
      date: "11/11/2019",
    },
    {
      id: "testID",
      rtName: "Yonkers",
      location: "eldo",
      rtStyle: "lead",
      type: "trad",
      rating: "5.11b",
      stars: "4",
      pitches: "6",
      img: "",
      date: "11/11/2019",
    }]}, _=> {
      // console.log(this.state);
    })} 

  getAllRoutes = async _=> {

  };

  getNRoutes = async _=> {

  };

  addRoute = routeObj => {
    console.log("Inside main addRoute");
    console.log(routeObj);
    // ****** ADD timestamp for firestore sorting. ************

    this.setState({allRoutes: [...this.state.allRoutes, routeObj]}, _=> {
      console.log(this.state);
    });
  };

  searchForRoute = routeObj => {
    console.log("Inside searchForRoute");
    console.log(routeObj);
    
  };

  deleteRoute = routeObj => {
    console.log("inside handle delete");
    console.log(routeObj);
  };

  componentDidMount = _=> {
    this.tempAddRoutes();
  };

  render () {
    console.log("inside render of main");

    // const { addRoute } = this;
    // const restInterface = { addRoute };

    return (
      <div className="main">
        <div className="mainForms">
          <RouteForm formFunction="add" addRoute={this.addRoute} id="addRouteForm" />        
          <RouteForm formFunction="search" searchForRoute={this.searchForRoute} id="searchRouteForm" />
        </div>
        <div className="rtTable">
          <RouteTable routes={this.state.routesToDisplay} handleDelete={this.deleteRoute} userName="BrentZ"/>
        </div>
      </div>
    );
    
  }
}