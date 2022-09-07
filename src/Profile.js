// import React from "react";
import Card from 'react-bootstrap/Card';
import "./styles/Profile.css";
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    console.log(user);
    return(
      <div id="profileCard">
      <Card id="innerCard" style={{ width: '18rem' }}>
    <Card.Img className="img-me" variant="top" src={user.picture} />
    <Card.Body>
      <Card.Title>{user.nickname}</Card.Title>
      <Card.Text>{user.email}</Card.Text>
    </Card.Body>
  </Card>
  </div>
  ) 
  // <div>Hello {user.name}</div>;
}
};

export default withAuth0(Profile);





// class Profile extends React.Component {
  
//   render() {
//     return (
        
//     )
//   }
// }

// export default Profile;
