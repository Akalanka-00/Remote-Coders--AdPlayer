import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



import './NotificationCard.css'
const NotificationCard = ({notificationData}) => {

  const bg = [{background:"#ffffff"},{background:"#E4EDFA"}]

  return (
    <div className='notification-card-container'>
      <Card className='notification-card' style={notificationData.reviewed_by_user?bg[0]:bg[1]}>
      <Card.Body>
        <Card.Title>{notificationData.title}</Card.Title>
        <Card.Text>
          {notificationData.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default NotificationCard
