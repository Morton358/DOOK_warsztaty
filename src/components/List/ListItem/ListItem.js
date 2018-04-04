import React, { Component } from 'react';
import styles from './ListItem.scss';

class ListItem extends Component {
    handleClick = () => {
        this.props.ondelete(this.props.index);
    };
    render() {
        return (
            <div className={styles.ListItem}>
                <h2>{this.props.title}</h2>
                <p>Author: {this.props.author}</p>
                <p>
                    {this.props.tags.map((elem, i) => {
                        return (
                            <span className={styles.tag} key={i}>
                                #{elem}
                            </span>
                        );
                    })}
                </p>

                <button className={styles.ButtonDelete} onClick={this.handleClick}>
                    Usuń
                </button>
            </div>
        );
    }
}

export default ListItem;
