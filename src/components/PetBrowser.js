import React from 'react'; 
import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
      return this.props.pets.map(
        (pet) => <div><Pet pet={pet} onAdoptPet={this.props.onAdoptPet} /><br /></div>
      );
  }
}

export default PetBrowser;
