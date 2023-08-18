import React, { Component } from 'react'
import './App.css'
import Card from './Component/card-list/Card';
import Search from './Component/search-box/Search-box'
// import Input from './Input'
export default class ClassComponent extends Component {

      constructor(){
          super();
          this.state={
            monsters:[],//if the api has crashed tahn it show that there is no user in monster;
          searchField:''
            
          };
          // console.log("first");
      }
     //lifecycle method
    //mounted it is render part
              componentDidMount(){
                // console.log("it is third part");
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(
                  (res)=>{
                    // console.log(res.json())
                  return res.json();
                  })
                  .then(
                    (user)=>{
                    console.log(user);
                    this.setState(()=>{return {monsters:user}},()=>{
                      console.log(this.state)
                    })
                  })

              }
              onSearch=(e)=>
              {

                    //check the data of current
                    // console.log({starting:this.state.monsters})

                    // console.log(e.target.value);
                    const searchField=e.target.value.toLocaleLowerCase();
                    //[{true},{true},---{false}---,{true}]


                    //update the state for search option
                    this.setState(()=>{
                      return {searchField};
                    }
                    ,()=>{
                       console.log({ending:this.state.searchField})
                    }
                    )

                }
          
              render() {
                // console.log('2')
                const {monsters,searchField}=this.state;
                const {onSearch}=this;
                      const filterMonster=monsters.filter((ele)=>{
                        // console.log("ele",ele.name.toLocaleLowerCase().includes(searchField))
                        return ele.name.toLocaleLowerCase().includes(searchField);
                      })

                return (
                  
                    <div className="App">
                      
                      {/* <input className='input-box' type="search" placeholder='search abc' onChange={onSearch}/> */}
                      <Search  
                      onSearch={onSearch} 
                      placeholder="search" 
                      class="search-box-monster"/>
                      
                    
                    <Card  monsters={filterMonster}  />

                  </div>
                )
              }
            }






            // {/* {
            //           filterMonster.map((ele,ind)=>
            //           {
            //             // console.log(ind)
            //             return (
            //               <div key={ele.id}>
            //             <h1 >{ele.name}</h1>
            //             </div>
            //             )
            //           })
            //         } */}