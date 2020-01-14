import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    userData: []
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/informagician')
      .then(res => this.setState({ userData: res.data }))
      .catch(err => console.log(err));
  }

  
  render() {
    return (
      <div className="App">
        <h1>{this.state.userData.login}</h1>
      </div>
    );
  }
}

export default App;
