import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';
import Followers from './components/Followers';


class App extends React.Component {

  state = {
    userName: 'informagician',
    userData:[],
    userContributions: [],
    followersData: []
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => this.setState({ userData: res.data }))
      .catch(err => console.log(err));

      axios
      .get(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => this.setState({ followersData: res.data }))
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps,prevState){
    if(this.state.userName !== prevState.userName) {
      if(this.state.userName == 'informagician') {
        
      }
    }
  }


  handleChanges = e => {
    this.setState({
      userName: e.target.value
    });
  };

  fetchUser = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => this.setState({ userData: res.data }))
      .catch(err => console.log(err));

      axios
      .get(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => this.setState({ followersData: res.data }))
      .catch(err => console.log(err));
  };

  // login, avatar_url , name , location , bio , followers , following
  render() {
    return (
      <div className="app">
        <h1>GitHub User Card Assignment</h1>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchUser}>Search</button>
        <User user={this.state.userData} />
        <h2>Followers</h2>
        <Followers follower={this.state.followersData} />
      </div>
    );
  }
}

export default App;
