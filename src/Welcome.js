import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import "./styles/Welcome.css";

class Welcome extends React.Component {
  render() {
    return (
        <div id="welcome">
      <h1>Welcome to the Book shelf Library</h1>
      <h2>Sign in to view your collection</h2>
      </div>
    )
  }
}

export default withAuth0(Welcome);
