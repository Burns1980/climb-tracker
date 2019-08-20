import React from 'react';

const InputField = (props) => {
  console.log("***********PROPS INSIDE INPUTFIELD: ******************");
  console.log(props);
  
  
  return (
    <div className="rtInput">
      <h1>Inside InputField</h1>
      <input
        type={props.type}
        placeholder={props.placeholder}
        required
        name={props.name}
        value={props.value}
      />
    </div>
  );
}

export default InputField;