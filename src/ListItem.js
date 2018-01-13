import React, { Component } from 'react';


class ListItem extends Component {
  handleClick = () => {
    this.props.ondelete(this.props.index);
  }
  render(){
    return(
      <div className="ListItem">

        <h2>{this.props.title}</h2>
        <p>Author: {this.props.author}</p>
        <p>
          {this.props.tags.map((elem,i) => {
            return(
              <span className='tag' key={i}>
                #{elem}
              </span>
            )
          })}
        </p>

        <button className="ButtonDelete" onClick={this.handleClick}>
          Usuń
        </button>
      </div>
    );
  }
}

export default ListItem;
