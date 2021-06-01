import Table from 'react-bootstrap/Table'
function MeasurementTable(props) {
    return (
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Location</th>
      <th>Parameter</th>
      <th>Unit</th>
      <th>Value</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
  {props.rows}
  </tbody>
</Table>
    )
}
export default MeasurementTable;