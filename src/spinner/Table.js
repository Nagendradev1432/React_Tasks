import Table from 'react-bootstrap/Table';

function Tablu(props) {
  return (
    <Table striped bordered hover size="sm" style={{padding:"20px 30px"}}>
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Description</th>
          <th>image</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.title}</td>
          <td>{props.description}</td>
          <td><img src={props.image} alt='image' style={{height:"120px"}}/></td>
          <td>{props.category}</td>
        </tr> 
      </tbody>
    </Table>
  );
}

export default Tablu;