import React from 'react';

export default class RouteForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rtName: "",
      location: "",
      style: "",
      type: "",
      rating: "",
      stars: 0,
      pitches: 1,
      date: null,
    };
  }

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    console.log("Inside HandlChange********");
    console.log(name, value);
    
    this.setState({[name]: value}, _=> console.log(this.state))
  };

  render() {
    console.log("***********PROPS INSIDE ROUTEFORM: ******************");
    console.log(this.props);
    console.log("*************State Inside RouteFrom**********:");
    console.log(this.state);
    
    return (
      <form className="clearfix" id="addRouteForm">
        <div className="row">
          <div className="formGroup">
            <label htmlFor="rtNameAddInput">Route Name *</label>
            <input
              id="rtNameAddInput"
              type="text"
              name="rtName"
              placeholder="Route Name"
              value={this.state.rtName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="locationAddInput">Location</label>
            <input
              id="locationAddInput"
              type="text"
              name="location"
              placeholder="Location"
              value={this.state.location}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="rtNameAddInput">Route Name *</label>
            <input
              id="rtNameAddInput"
              type="text"
              name="rtName"
              placeholder="Route Name"
              value={this.state.rtName}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="formGroup">
            <label htmlFor="rtNameAddInput">Route Name *</label>
            <input
              id="rtNameAddInput"
              type="text"
              name="rtName"
              placeholder="Route Name"
              value={this.state.rtName}
              onChange={this.handleChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="rtNameAddInput">Route Name *</label>
            <input
              id="rtNameAddInput"
              type="text"
              name="rtName"
              placeholder="Route Name"
              value={this.state.rtName}
              onChange={this.handleChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="rtNameAddInput">Route Name *</label>
            <input
              id="rtNameAddInput"
              type="text"
              name="rtName"
              placeholder="Route Name"
              value={this.state.rtName}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="formGroup">
            <label htmlFor="rtNameAddInput">Route Name *</label>
            <input
              id="rtNameAddInput"
              type="text"
              name="rtName"
              placeholder="Route Name"
              value={this.state.rtName}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </form>
    );
  }
}
