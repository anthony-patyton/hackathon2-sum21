import { Button, Modal,} from 'semantic-ui-react';
import { useState } from 'react';
import JobForm from './JobForm';
import JobConsumer from '../../providers/JobProvider';

const Job = ({ location, match, deleteJob, history }) => {
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  return (
    <>
      <h1>Job Show # {location.state.id}</h1>
      {/* <h1>Checkout Show # {match.params.id}</h1> */}
      <p>
        Company: {location.state.company}
      </p>
      <p>
        Title Description: {location.state.title_desc}
      </p>
      <a href={location.state.link_url}>
        Job URL
      </a>
      <p>
        End Date: {location.state.end_date}
      </p>
      <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
      {' '}
      <Button variant="danger" onClick={() => deleteJob(match.params.id, history)}>Delete</Button>
      <Modal show={editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Job Show # {location.state.id} Edit
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JobForm { ...location.state } handleEditClose={handleEditClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
const ConnectedTrackerShow = (props) => (
  <JobConsumer>
    { value => <Job {...props} {...value} /> }
  </JobConsumer>
)

export default ConnectedTrackerShow; 