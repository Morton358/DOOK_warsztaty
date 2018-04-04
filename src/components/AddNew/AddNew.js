import React, { Component } from 'react';
import styles from './AddNew.scss';

class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            tags: ''
        };
    }
    handleClick = () => {
        this.props.onSubmit(this.state);
    };
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    render() {
        return (
            <div className={styles.AddNew}>
                <h2>Dodaj książkę</h2>
                <div className={styles.AddNewInput}>
                    <div className={styles.AddNewInputTitle}>
                        <p>Tytuł:</p>
                        <input
                            id="title"
                            type="text"
                            placeholder="np. Jądro Ciemności"
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                    </div>
                    <div className={styles.AddNewInputAuthor}>
                        <p>Author:</p>
                        <input
                            id="author"
                            type="text"
                            placeholder="np. J.R.R. Tolkien"
                            onChange={this.handleChange}
                            value={this.state.author}
                        />
                    </div>
                    <div className={styles.AddNewInputTags}>
                        <p>Tagi:</p>
                        <input
                            id="tags"
                            type="text"
                            placeholder="np. fantastyka"
                            onChange={this.handleChange}
                            value={this.state.tags}
                        />
                    </div>
                </div>
                <br />
                <button
                    className={styles.ButtonAdd}
                    type="submit"
                    onClick={this.handleClick}
                >
                    dodaj
                </button>
            </div>
        );
    }
}
export default AddNew;
