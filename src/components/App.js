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

  changeType = (e) => {
    this.setState({
      ...this.state.pets,
      filters: {
        type: e.target.value
      }
    })
  }

  findPets = (e) => {
    let url

    if (this.state.filters.type === "all") {
      url = '/api/pets'
    } else {
      url = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      pets: data
    }))
  }

  adoptPet = (id) => {
    this.state.pets.forEach(pet => {
      if (pet.id === id){
        pet.isAdopted = true
      }
    })
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
              <Filters 
              onChangeType={this.changeType}
              onFindPetsClick={this.findPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              onAdoptPet={this.adoptPet}
              pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
