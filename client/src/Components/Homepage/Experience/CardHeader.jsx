import Card from 'react-bootstrap/Card';

import './CardHeader.css'

function CardHeader({experience}) {
  return (
    <Card className='card-view'>
      <Card.Header className='card-header' as="h5">{experience.title}</Card.Header>
      <Card.Body className='card-body'>
        <Card.Text className='card-text'>
         {experience.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardHeader;