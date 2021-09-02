import { Alert } from 'react-bootstrap'

const WarningSign = (props) => (
    <Alert className="warn" variant="danger">{props.text}</Alert>
)

export default WarningSign