import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.pets.forEach(e => {
      return <Pet pet={e} onAdoptPet={this.props.onAdoptPet} />
      })}
    </div>
  }
}

export default PetBrowser
