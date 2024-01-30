import React, { Component } from 'react';
import User from './User';

const DUMMY_USERS = [
  { id: 'i1', name: 'Amaan' },
  { id: 'i2', name: 'Sajid' },
  { id: 'i3', name: 'Alim' },
];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }

  toggleUsersHandler = () => {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  };

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <>
        <button onClick={this.toggleUsersHandler}>{this.state.showUsers ? 'Hide' : 'Show'} Users </button>
        {this.state.showUsers && usersList}
      </>
    );
  }
}

export default Users;
