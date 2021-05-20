import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


// <Form>
//   <Row>
//     <Col>
//       <Form.Control placeholder="First name" />
//     </Col>
//     <Col>
//       <Form.Control placeholder="Last name" />
//     </Col>
//   </Row>
// </Form>

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Press to Submit new Measurement
    </Tooltip>
  );

function MeasurementForm(props) {
    

    return (
        <Form onSubmit={event => {event.preventDefault(); props.handleSubmit(event)}}>
        <Row>
        <Col>
        <Form.Group controlId="cityM">
            <Form.Label>Enter a city:</Form.Label>
            <Form.Control size='lg' type="text" placeholder="Enter city name" />
        </Form.Group>
        </Col>
        </Row>

        <Row>
        <Col>
        <Form.Group controlId="coordinatesM">
            <Form.Label>Enter a coordinates:</Form.Label>
            <Form.Control type="text" placeholder="Enter coordinates" />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="countryM">
            <Form.Label>Enter a country:</Form.Label>
            <Form.Control type="text" placeholder="Enter country" />
        </Form.Group>
        </Col>
        </Row>

        <Row>
        <Col>
        <Form.Group controlId="dateM">
            <Form.Label>Enter a date:</Form.Label>
            <Form.Control type="text" placeholder="Enter date" />
        </Form.Group>
        </Col>

        <Col>
        <Form.Group controlId="locationM">
            <Form.Label>Enter a location:</Form.Label>
            <Form.Control type="text" placeholder="Enter location" />
        </Form.Group>
        </Col>
        </Row>

        <Row>
        <Col>
        <Form.Group controlId="parameterM">
            <Form.Label>Enter a parameter:</Form.Label>
            <Form.Control type="text" placeholder="Enter parameter" />
        </Form.Group>
        </Col>

        <Col>
        <Form.Group controlId="unitM">
            <Form.Label>Enter a unit:</Form.Label>
            <Form.Control type="text" placeholder="Enter unit" />
        </Form.Group>
        </Col>
        </Row>

        <Row>
        <Col>
        <Form.Group controlId="valueM">
            <Form.Label>Enter a value:</Form.Label>
            <Form.Control type="text" placeholder="Enter value" />
        </Form.Group>
        </Col>
        </Row>

        <Row>
        <Col>
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
        <Button variant="primary" type="submit">
        Submit
        </Button>
        </OverlayTrigger>
        </Col>
        </Row>

        </Form>
    )

}
export default MeasurementForm;