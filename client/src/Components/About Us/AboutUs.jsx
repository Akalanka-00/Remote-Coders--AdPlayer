import React from "react";
import Card from 'react-bootstrap/Card';

import "./AboutUs.css";
import './UserCard.css'

import PIC1 from "../../Assets/Slides/pic1.jpg";
import PIC2 from "../../Assets/Slides/pic2.jpg";


const AboutUs = () => {
  const users = [
    {
      title: "Game Developer",
      description: "Game Developer Description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea accusantium odit quas nam eum? Accusantium non assumenda ducimus impedit ullam facilis labore. Esse molestiae distinctio impedit? Molestias dolores saepe voluptas.",
      path: PIC1,
    },
    {
      title: "Customer",
      description: "Customer Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea accusantium odit quas nam eum? Accusantium non assumenda ducimus impedit ullam facilis labore. Esse molestiae distinctio impedit? Molestias dolores saepe voluptas.",
      path: PIC2,
    },
  ];
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <h1 className="title">Connect with adPlayer</h1>
      </div>

      <div className="users">
        {users.map((user, index) => (
          <div key={index}>
            <UserCard className="user-card-parent" user={user} />
          </div>
        ))}
      </div>
    </section>
  );
};

function UserCard({user}) {
  return (
    <Card style={{ width: '18rem' }} className="user-card">
      <Card.Img variant="top" src={user.path} />
      <Card.Body className="content-about">
        <Card.Title className="content-title">{user.title}</Card.Title>
        <Card.Text>
          {user.description}
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default AboutUs;
