import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (selectedType) => {
    this.setState({ 
      ...this.state, 
      filters: {
        type: selectedType
      }
    },
      () => console.log("App.js:25 (this.state.filters.type): " + this.state.filters.type)
    );
  }

  onFindPetsClick = () => {
    console.log("App.js:30: onFindPetsClick()");
    if (this.state.filters.type === 'all') {
      fetch("/api/pets")
        .then(response => response.json())
        .then(json => console.log(json));
    }
    else {
      fetch("/api/pets?type=" + this.state.filters.type)
        .then(response => response.json())
        .then(json => console.log(json));
    }
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
