import React from 'react';
import styles from './Filtr.scss';

const filtr = props => {
    return (
        <div className={styles.Filtr}>
            {props.children}
            {props.getTags().map((elem, index) => {
                return (
                    <label key={index}>
                        <input
                            type="checkbox"
                            onChange={event => props.handleCheck(event, elem)}
                        />
                        {JSON.stringify(elem)}
                    </label>
                );
            })}
        </div>
    );
};

export default filtr;
