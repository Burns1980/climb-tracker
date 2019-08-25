import React from 'react';

import RouteListItem from './RouteListItem';

import '../css/RouteTable.css';

const createHead = data => {

  const columnNames = ["Route Name", "Location", "Style", "Type", "Rating", "Stars", "Pitches", "Picture", "Date Climbed"];

  
  return (
    <tr>
      {
        columnNames.map((column, i) => (
          <th key={i}>{column}</th>
        ))
      }
    </tr>
  );
};

const RouteTable = props => {
  const routes = props.routes;
  console.log("inside rouite table");

  const head = createHead(props.routes);
  
  return(
    <table>
    <caption>Routes {props.userName} has climbed</caption>
      <thead>
        {head} 
      </thead>
      <tbody>
      {routes.map((route, i) => 
        {
          return (
            <RouteListItem 
              key={i}
              id={route["id"] + i}
              rtName={route["rtName"]}
              location={route["location"]}
              rtStyle={route["rtStyle"]}
              type={route["type"]}
              rating={route["rating"]}
              stars={route["stars"]}
              pitches={route["pitches"]}
              img={route["img"]}
              date={route["date"]}
              handleDelete={props.handleDelete}
            />
          );
        })
      }
      </tbody>
    </table>
  );
}

export default RouteTable;