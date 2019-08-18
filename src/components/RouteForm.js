import React from 'react';

import '../css/RouteForm.css';

export default class RouteForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rtName: "",
      location: "",
      style: "",
      type: "",
      rating: "",
      stars: "",
      pitches: "",
      date: null,
    };
  }

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;

    if(name === "stars" || name === "pitches") {
      this.setState({[name]: value}, _=> console.log(this.state))
    }
    
    this.setState({[name]: value}, _=> console.log(this.state))
  };

  addRoute = _=> {

  };

  render() {
    console.log("***********PROPS INSIDE ROUTEFORM: ******************");
    console.log(this.props);
    // console.log("*************State Inside RouteFrom**********:");
    // console.log(this.state);
    
    return (
      <form className="addForm" id="addRouteForm">
        <div className="row">
          <div className="formGroup">
            <label htmlFor="rtNameAddInput">Route Name*</label>
            <input
              id="rtNameAddInput"
              type="text"
              name="rtName"
              placeholder=""
              // value={this.state.rtName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="locationAddInput">Location*</label>
            <input
              id="locationAddInput"
              type="text"
              name="location"
              placeholder=""
              // value={this.state.location}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="typeAddInput">Type</label>
            <select
              className="selectInput"
              id="typeAddInput"
              name="type"
              // value={this.state.type}
              onChange={this.handleChange}
            >
              <option value="trad">trad</option>
              <option value="sport">sport</option>
              <option value="boulder">boulder</option>
              <option value="solo">solo</option>
              <option value="aid">aid</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="formGroup">
            <label htmlFor="ratingAddInput">Rating</label>
            <select
              id="ratingAddInput"
              name="rating"
              onChange={this.handleChange}
              className="selectInput"
            >
              <option value="5.0">5.0</option>
              <option value="5.1">5.1</option>
              <option value="5.2">5.2</option>
              <option value="5.3">5.3</option>
              <option value="5.4">5.4</option>
              <option value="5.5">5.5</option>
              <option value="5.6">5.6</option>
              <option value="5.7">5.7</option>
              <option value="5.8-">5.8-</option>
              <option value="5.8">5.8</option>
              <option value="5.8+">5.8+</option>
              <option value="5.9-">5.9-</option>
              <option value="5.9">5.9</option>
              <option value="5.9+">5.9+</option>
              <option value="5.10a">5.10a</option>
              <option value="5.10b">5.10b</option>
              <option value="5.10c">5.10c</option>
              <option value="5.10d">5.10d</option>
              <option value="5.11a">5.11a</option>
              <option value="5.11b">5.11b</option>
              <option value="5.11c">5.11c</option>
              <option value="5.11d">5.11d</option>
              <option value="5.12a">5.12a</option>
              <option value="5.12b">5.12b</option>
              <option value="5.12c">5.12c</option>
              <option value="5.12d">5.12d</option>
              <option value="5.13a">5.13a</option>
              <option value="5.13b">5.13b</option>
              <option value="5.13c">5.13c</option>
              <option value="5.13d">5.13d</option>
              <option value="5.14a">5.14a</option>
              <option value="5.14b">5.14b</option>
              <option value="5.14c">5.14c</option>
              <option value="5.14d">5.14d</option>
              <option value="5.15a">5.15a</option>
              <option value="5.15b">5.15b</option>
              <option value="5.15c">5.15c</option>
              <option value="5.15d">5.15d</option>
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="starsAddInput">Stars</label>
            <select
              className="selectInput"
              id="starsAddInput"
              name="stars"
              onChange={this.handleChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="pitchesAddInput">Pitches</label>
            <input
              id="pitchesAddInput"
              type="number"
              name="pitches"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="formGroup">
            <label htmlFor="dateAddInput">Date</label>
            <input
              id="dateAddInput"
              type="date"
              name="date"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button type="button" form="addRouteForm" className="btn addRouteBtn" onClick={this.addRoute} >Add Route</button>
      </form>
    );
  }
}
