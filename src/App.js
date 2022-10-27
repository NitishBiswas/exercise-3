import React, { Component } from 'react'
import LOGO from './images/hacker.png'

export default class App extends Component {
  Constructor() {
    this.super();
  }
  state = {
    persons: [],
    name: '',
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ persons: users }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className='container d-flex flex-column align-items-center mt-5'>
        <img src={LOGO} alt='Logo' height={150} width={150} />
        <h1 className='text-info'>Search User</h1>
        <input
          type="text"
          className="form-control mt-3 mb-3 p-2 shadow w-75"
          id="user" name="user"
          placeholder="Search by name"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <div className='d-flex flex-column w-75 mt-3'>
          {this.state.persons.length > 0 ? this.state.persons.filter((person) => {
            if (this.state.name === '') {
              return person;
            } else if (person.name.toUpperCase().includes(this.state.name.toUpperCase())) {
              return person;
            }
          }).map((person) => {
            return (
              <h3 className='border rounded p-2 my-2 border-info'>{person.name}</h3>
            )
          }) : <div className='text-center'><h3 className='my-2'>Oops...!</h3><h3 className='my-2'>Data is not available!</h3></div>}
        </div>
      </div>
    )
  }
}

