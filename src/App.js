import React, { Component } from 'react';
import AddNew from './AddNew.js'
import Filtr from './Filtr.js'
import ListItem from './ListItem.js'
import List from './List.js'
import './App.css'



class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      items : [
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
    alltags: {

    }
    }
  let temptags = {};
  }

getTags = () => {
  let temp = [...this.state.items]
  let alltags = []
  temp.map((elem) => {
    return alltags.push(elem.tags)
  })
  let mergedtags = [ ...new Set([].concat.apply([], alltags)) ];
  // let temptags = {}
  // mergedtags.map((element) => {
  //   return temptags[element] = true;
  // })
  // this.setState({alltags: temptags})
  // console.log(this.state.alltags);
  return mergedtags;
}


// addTagsToState = () => {
//   const mergedtags = this.handleCheck();
//   let temptags = {}
//   mergedtags.map((element) => {
//     return temptags[element] = true;
//   })
//   this.setState({alltags: temptags})
//   console.log(this.state.alltags);
// }


// handleCheck = (event, elem) => {
//   //const mergedtags = this.handleCheck();
//
//   // mergedtags.map((element) => {
//   //   return temptags[element] = true;
//   // })
//   if (event.target.checked) {
//     this.temptags[elem] = true;
//   }
//   if (!event.target.checked) {
//     this.temptags[elem] = false;
//   }
// this.setState({alltags: this.temptags})
// console.log(this.state.alltags);
// // return checkedtag;
// }



onDelete = (index) => {
  let temp = [...this.state.items]
  temp.splice(index, 1)
  this.setState({items: temp})
}

handleAddNew = (values) => {
  let temp = [...this.state.items];
  temp.push({title: values.title,
            author: values.author,
            tags: values.tags.split(',')
  })
  console.log(temp);
  this.setState({items: temp})

  }
  render() {
    return (
      <div className="App">
        <Filtr getTags={this.getTags} handleCheck={this.handleCheck}
          addTagsToState={this.addTagsToState}> <h1>My Library</h1> </Filtr>
        <List items={this.state.items} ondelete={this.onDelete}
          alltags={this.state.alltags}/>
        <AddNew onSubmit={this.handleAddNew}/>
      </div>
    );
  }
}


export default App;
