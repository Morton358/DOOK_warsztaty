import React, { Component } from 'react';


const filtr = (props) => {
  return (
    <div className="Filtr">
      {props.children}
      {props.getTags().map((elem) => {
        return (
          <label>
            <input type="checkbox" //onChange={(event) =>
              //props.handleCheck(event, elem)}
              checked/>
            {JSON.stringify(elem)}
          </label>
        )
      })
      }
    </div>
  )
}

export default filtr;
