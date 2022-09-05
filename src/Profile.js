import React from "react";
import Card from 'react-bootstrap/Card';
import "./styles/Profile.css";

class Profile extends React.Component {
  
  render() {
    return (
        <div id="profileCard">
        <Card  style={{ width: '18rem' }}>
      <Card.Img className="img-me" variant="top" src={require('./Me.png')} />
      <Card.Body>
        <Card.Title>Yazan Alfarra</Card.Title>
        <Card.Text>
          Upcoming and growing Software with proven experience in HTML, CSS, JavaScript and Python.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    )
  }
}

export default Profile;
