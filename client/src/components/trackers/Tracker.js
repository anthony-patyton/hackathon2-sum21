import { Button, Header, Icon, Modal, setOpen, } from 'semantic-ui-react';
import { useState } from 'react';
import TrackerForm from './TrackerForm';
import { TrackerConsumer } from '../../providers/TrackerProvider';

const TrackerShow = ({ location, match, deleteTracker, history }) => {
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  return (
    <>
      <h1>Tracker Show # {location.state.id}</h1>
      {/* <h1>Checkout Show # {match.params.id}</h1> */}
      <p>
        Steps Completed: {location.state.steps_taken}
      </p>
      <p>
        Application Completed: {location.state.applied_status}
      </p>
      <p>
        Interview Date: {location.state.interview_date}
      </p>
      <p>
        Follow-Up Date: {location.state.follow_up}
      </p>
      <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
      {' '}
      <Button variant="danger" onClick={() => deleteTracker(match.params.id, history)}>Delete</Button>
      
      <Modal
        // show={editshow}
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={<Button>Basic Modal</Button>}
        >
          <Header icon>
            <Icon name='archive' />

          </Header>
          <Modal.Content>
          <TrackerForm { ...location.state } handleEditClose={handleEditClose} />
          </Modal.Content>
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
  <TrackerConsumer>
    { value => <TrackerShow {...props} {...value} /> }
  </TrackerConsumer>
)

export default ConnectedTrackerShow;