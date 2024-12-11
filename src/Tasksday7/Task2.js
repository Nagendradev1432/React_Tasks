import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Child(props) {
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} style={{height:"130px"}} />
      <Card.Body style={{height:"120px",overflow:"scroll",borderRadius:"30px"}}>
        <Card.Title>{props.title}</Card.Title>
         <Card.Text>
         {props.id}
        {props.description}
        
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Child;