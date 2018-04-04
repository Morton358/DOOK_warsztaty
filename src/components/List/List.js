import React from 'react';
import ListItem from './ListItem/ListItem.js';
import styles from './List.scss';

const list = props => {
    return (
        <div className={styles.List}>
            {props.items.map((elem, i) => {
                // elem.tags.map((tag) => {
                //   if (props.alltags[tag] === true || !("tag" in props.alltags)) {
                return (
                    <ListItem
                        key={i}
                        index={i}
                        title={elem.title}
                        author={elem.author}
                        tags={elem.tags}
                        ondelete={props.ondelete}
                    />
                );
                //   }
                // })
            })}
        </div>
    );
};

export default list;
