import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';
import Followers from './components/Followers';


class App extends React.Component {

  state = {
    userData:[],
    followersData: []
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/informagician')
      .then(res => this.setState({ userData: res.data }))
      .catch(err => console.log(err));

      axios
      .get(`https://api.github.com/users/informagician/followers`)
      .then(res => this.setState({ followersData: res.data }))
      .catch(err => console.log(err));
  }


  // login, avatar_url , name , location , bio , followers , following
  render() {
    return (
      <div className="app">
        <h1>GitHub User Card Assignment</h1>
        <User user={this.state.userData} />
        <h2>Followers</h2>
        <Followers follower={this.state.followersData} />
      </div>
    );
  }
}

export default App;
