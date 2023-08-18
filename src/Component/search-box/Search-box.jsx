import React, { Component } from 'react'
import './search-box.style.css'

export default class search extends Component {
  render() {
    return (
      <div>
         <input
          className={`search-box ${this.props.class}` }
          type="search" 
          placeholder={this.props.placeholder}
           onChange={this.props.onSearch}
           />
      </div>
    )
  }
}
