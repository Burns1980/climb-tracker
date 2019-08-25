import React from 'react';

import RouteListItem from './RouteListItem';

import '../css/RouteTable.css';

const RouteTable = props => {
  const routes = props.routes;
  console.log("inside rouite table");
  
  return(
    <table>
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