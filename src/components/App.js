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

  changeTypes = event => {
    this.setState({
      filters: {
        ...this.state.filters, type: event.target.value
      }
    })
  }

  findPets = () => {
    const petsUrl = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`

    fetch(petsUrl)
    .then(res => res.json())
    .then(res => this.setState({ pets: res }))
  }

  adoptPet = event => {
    const index = this.state.pets.findIndex(ele => ele.id === event )
    this.setState(previousState => {
      const updatedPets = previousState.pets
      updatedPets[index].isAdopted = true
      return {
        ...previousState, pets: updatedPets
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
              <Filters onChangeType={this.changeTypes} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
