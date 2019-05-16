import React from 'react';
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    alert(`The information captured - username: ${username}, password: ${password}`)
  }

  handleValueChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <>
        <h1>Please Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              onChange={this.handleValueChange}
              type="text" />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              onChange={this.handleValueChange}
              type="password" />
          </div>
          <input type="submit" />
        </form>
      </>
    );
  }
}

