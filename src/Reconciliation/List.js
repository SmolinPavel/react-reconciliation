import React, { Component } from 'react';

class List extends Component {
  render() {
    const { items } = this.props;
    console.log('items', items);
    return <div>
        {items.map((item, idx) => (
          <div key={idx}><h2>{item}</h2></div>
        ))}
      </div>;
  }
}


export default List;