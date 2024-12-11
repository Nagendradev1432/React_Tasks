import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props,onbuttonClick) {
  return (
    
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.image} style={{height:"100px"}} />
      <Card.Body style={{height:"190px",overflow:"scroll",borderRadius:"30px"}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        <button onClick={onbuttonClick}>Add to cart</button>
      </Card.Body>
    </Card>
    
  );
}

export default Cards;