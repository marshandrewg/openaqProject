import Form from 'react-bootstrap/Form'
function SelectCityForm(props) {
    return (
<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select a city to view measurments</Form.Label>
    <Form.Control as="select" onChange={props.handleChange}>
      {props.options}
    </Form.Control>
  </Form.Group>
    )
}
export default SelectCityForm;