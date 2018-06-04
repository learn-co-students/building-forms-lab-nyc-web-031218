import React, { Component } from 'react';

class Bands extends Component {

  constructor(props) {
    super(props)
  }

  render(){
   const bands = this.props.getState().bands.map(band, index) => {
     return <li key={index}> {band} </li>
   }

    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;
