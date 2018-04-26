import React, { Component } from 'react';
import AddNew from '../../components/AddNew/AddNew';
import Filtr from '../../components/Filtr/Filtr';
import List from '../../components/List/List';
import styles from './App.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    title: 'Władca Pierścieni: Dwie Wierzy',
                    author: 'J.K. Rowling',
                    tags: ['fantastyka', 'trylogia', 'tolkien']
                },
                {
                    title: 'Prawo Milenium: Obietnica Następcy',
                    author: 'Trudi Canavan',
                    tags: ['fantastyka', 'smierć', 'swiat_dysku']
                },
                {
                    title: 'Mistrz i Małgorzata',
                    author: 'Michail Bulgakow',
                    tags: ['realizm', 'powieść', 'rosja']
                }
            ],
            checkedTags: [],
            alltags: {}
        };
    }

    getTags = () => {
        let temp = [...this.state.items];
        let alltags = [];
        temp.map(elem => {
            return alltags.push(elem.tags);
        });
        let mergedtags = [...new Set([].concat.apply([], alltags))];
        // let temptags = {}
        // mergedtags.map((element) => {
        //   return temptags[element] = true;
        // })
        // this.setState({alltags: temptags})
        // console.log(this.state.alltags);
        return mergedtags;
    };

    // addTagsToState = () => {
    //   const mergedtags = this.handleCheck();
    //   let temptags = {}
    //   mergedtags.map((element) => {
    //     return temptags[element] = true;
    //   })
    //   this.setState({alltags: temptags})
    //   console.log(this.state.alltags);
    // }

    handleCheck = (event, elem) => {
        event.preventDefault();
        let temp = [...this.state.checkedTags];
        console.log(elem);
        if (temp.includes(String(elem))) {
            temp = temp.filter(el => el !== elem);
        } else {
            temp = temp.push(elem);
        }
        this.setState({checkedTags: temp});
    };

    onDelete = index => {
        let temp = [...this.state.items];
        temp.splice(index, 1);
        this.setState({ items: temp });
    };

    handleAddNew = values => {
        let temp = [...this.state.items];
        temp.push({
            title: values.title,
            author: values.author,
            tags: values.tags.split(',')
        });
        console.log(temp);
        this.setState({ items: temp });
    };
    render() {
        let itemsForRender = [...this.state.items];
        const checkedTags = [...this.state.checkedTags];
        if (checkedTags.length !== 0) {
            const temp = itemsForRender.filter(el =>
                el.tags.some(
                    tag =>
                        checkedTags.find(
                            checkedTag => checkedTag === tag
                        ) !== undefined
                )
            );
            itemsForRender = temp;
        }
        return (
            <div className={styles.App}>
                <Filtr
                    getTags={this.getTags}
                    handleCheck={this.handleCheck}
                    addTagsToState={this.addTagsToState}
                >
                    {' '}
                    <h1>My Library</h1>{' '}
                </Filtr>
                <List
                    items={itemsForRender}
                    ondelete={this.onDelete}
                    alltags={this.state.alltags}
                />
                <AddNew onSubmit={this.handleAddNew} />
            </div>
        );
    }
}

export default App;
