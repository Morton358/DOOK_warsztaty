import React from 'react';

const filtr = props => {
    return (
        <div className="Filtr">
            {props.children}
            {props.getTags().map((elem, index) => {
                return (
                    <label key={index}>
                        <input
                            type="checkbox" //onChange={(event) =>
                            //props.handleCheck(event, elem)}
                            checked
                        />
                        {JSON.stringify(elem)}
                    </label>
                );
            })}
        </div>
    );
};

export default filtr;
