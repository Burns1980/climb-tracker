import React from 'react';

import '../css/RouteTable.css';

const createRow = data => {

  const valuesToDisplay = [];

  for(let keys of Object.keys(data)) {
    if(keys === "id" || keys === "handleDelete") continue;
    valuesToDisplay.push(data[keys]);
  }

  const row = valuesToDisplay.map((values, i) => (
    <td key={`${i}-${data.id}`}>
      {values}
    </td>
  ));
  row.push(
    <td key="buttonsForTheTable" className="tableBtns">
      <button type="button" className="editBtn" >Edit</button>
      <button type="button" className="deleteBtn" onClick={_ => data.handleDelete(data.id)}>Delete</button>
    </td>
  );
  return row;
};

const RouteListItem = props => {

  const tableBody = createRow(props);

  return (
    <tr key={props.id} data-route-id={props.id}>
      {tableBody}
    </tr>
  );
};

export default RouteListItem;