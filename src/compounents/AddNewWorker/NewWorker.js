import React from 'react';
import {Form ,Button} from 'react-bootstrap';


const NewWorker =() => {
    return (
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Contract</Form.Label>
    <Form.Control as="select">
      <option>SIVP</option>
      <option>CDD</option>
      <option>CDI</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Group</Form.Label>
    <Form.Control as="select">
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Salary</Form.Label>
    <Form.Control type="number"  />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>working time</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>engagement date</Form.Label>
    <Form.Control type="date" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Status</Form.Label>
    <Form.Control as="select">
      <option>In duty</option>
      <option>In holiday</option>
    </Form.Control>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )

}
export default(NewWorker);