import React from 'react' ;

class Pet extends React.Component {


  handleAdoptClick = () => {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {

    let button = (this.props.pet.isAdopted == true) ? 
      <button className="ui disabled button">Already adopted</button> 
      :
      <button className="ui primary button" onClick={this.handleAdoptClick}>Adopt pet</button>
    ;

    let genderIcon = (this.props.pet.gender == "male") ?  "♂" : "♀";

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {genderIcon}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    )
  }
}

export default Pet;
