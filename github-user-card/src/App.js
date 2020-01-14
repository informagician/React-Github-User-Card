import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';

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
        <User user={this.state.userData} />
      </div>
    );
  }
}

export default App;
