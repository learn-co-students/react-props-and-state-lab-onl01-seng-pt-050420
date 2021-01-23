import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  findPets = () =>{
    let url  
    if (this.state.filters.type === 'all'){
      url = '/api/pets'
    }
    else{
      url = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(url) 
      .then(res => res.json())
      .then(petData => this.setState({pets: petData
    }))
  }

  chooseType = (e) =>{
    // console.log(this.state.filters.type)
    this.setState({
      ...this.state.pets,
      filters: {
        type: e.target.value
      }
    })
  } 

  adoptPet =(id)=>{
    const pet = this.state.pets.find(pet => pet.id === id)
    pet.isAdopted = true
    console.log(pet.isAdopted)
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.chooseType}
              onFindPetsClick={this.findPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
              onAdoptPet = {this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

