import Accordion from 'react-bootstrap/Accordion';

function Child(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h1>{props.title}</h1></Accordion.Header>
        <Accordion.Body>
         {props.description}
        <img src={props.image} alt="Image" style={{height:"170px"}}/>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Child;