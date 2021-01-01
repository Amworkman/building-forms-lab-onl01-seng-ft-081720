import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    name: ''
  }
  
  handleOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input 
            type='text'
            onChange={this.handleOnChange}
            id='name'
            placeholder='Band name...'
            value={this.state.name}
          />
          <input 
            type='submit' 
            value='Add Band'
          />
        </form>
      </div>
    )
  }
}

export default BandInput
