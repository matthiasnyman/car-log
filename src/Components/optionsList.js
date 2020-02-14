import React from "react";

const optionsList = props => {
  let status = props.globals.statuslist;
  const options = [];

  for( let key in status ){
    let x = status[key];
    options.push(
    <option key={x.value} value={x.value}>{x.text}</option>
    )

  }


  return (
    <>
      {options}
    </>
  );
};

export default optionsList;
