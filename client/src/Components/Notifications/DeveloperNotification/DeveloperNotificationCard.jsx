import React from 'react'
import Card from 'react-bootstrap/Card';
import './NotificationCard.css'
const DeveloperNotificationCard = ({notificationData}) => {
  return (
    <Card style={{ width: "100%" }}>
    <Card.Body>
      <Card.Title className="card-title">{notificationData.title}</Card.Title>
      <Card.Text className="card-body">
        {notificationData.description}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default DeveloperNotificationCard
