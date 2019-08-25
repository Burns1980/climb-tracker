import React from 'react';

import '../css/RouteTable.css';

const RouteListItem = props => {
  return (
    <tr id={props.id}>
      <td>
        {props.rtName}
      </td>
      <td>
        {props.location}
      </td>
      <td>
        {props.rtStyle}
      </td>
      <td>
        {props.type}
      </td>
      <td>
        {props.rating}
      </td>
      <td>
        {props.stars}
      </td>
      <td>
        {props.pitches}
      </td>
      <td>
        {props.img}
      </td>
      <td>
        {props.date}
      </td>
      <td>
        <button className="editRouteBtn" type="button">
          Edit 
        </button>
      </td>
      <td>
        <button className="deleteRouteBtn" type="button">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RouteListItem;