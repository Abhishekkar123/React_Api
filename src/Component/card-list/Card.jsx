import React, { Component } from 'react'
import './card-list.style.css'
import CardList from '../card-list/CardList'

export default class Card extends Component {
  render() {
    console.log(this.props.monsters);
    console.log("render the card")
    const {monsters}=this.props;
    return (
      <div className='card-list'>
      {monsters.map((mon)=>{
       
   return( 
    <CardList monster={mon}/>
   )
      })
      }
      </div>

    )
  }
}
