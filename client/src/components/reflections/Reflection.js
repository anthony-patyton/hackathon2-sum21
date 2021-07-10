import { Button, Header, Modal } from 'semantic-ui-react';
import { useState } from 'react';
import ReflectionForm from './ReflectionForm';
import { ReflectionConsumer } from '../../providers/TrackerProvider';

const ReflectionShow = ({ location, match, deleteReflection, history }) => {
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  return (
    <>
      <h1>Reflection {location.state.id}
      </h1>
 
      <h2>
        Summary:  {location.state.summary}
      </h2>

      <h2>
        What did I do well: {location.state.did_right}
      </h2>
      
      <h2>
        What I will improve on: {location.state.do_better}
      </h2>
      
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
const ConnectedReflectionShow = (props) => (
  <ReflectionConsumer>
    { value => <ReflectionShow {...props} {...value} /> }
  </ReflectionConsumer>
)

export default ConnectedReflectionShow;