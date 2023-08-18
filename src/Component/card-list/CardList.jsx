import React, { Component } from 'react'
import './card-list.style.css'
export default class cardList extends Component {
  render() {
    const {name,id,email}=this.props.monster;
    console.log("sdfghjkl;'",name,id,email)
    return (
      <div className='card-cont' key={id}>
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
      <h2>{name}</h2>
      <p>{email}</p>

    </div>
    )
  }
}
