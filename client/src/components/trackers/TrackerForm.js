import { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { TrackerConsumer } from '../../providers/TrackerProvider';
import { withRouter } from 'react-router-dom';

const TrackerForm = ({ addTracker, id, steps_taken, applied_status, interview_date, follow_up, updateTracker, handleEditClose, history }) => {
  const [tracker, setTracker] = useState({ steps_taken:"", applied_status:false, interview_date: "", follow_up: "" })
  useEffect( () => {
    if (id) {
      setTracker({ steps_taken, applied_status, interview_date, follow_up })
    }
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setTracker({...tracker})
    if (id) {
      updateTracker(id, tracker, history)
      handleEditClose()
    } else {
      addTracker(tracker)
    }
    setTracker({ steps_taken:"", applied_status:false, interview_date: "", follow_up: ""})
  }
  
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTrackerTitle">
          <Form.Label>Application Steps Completed</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Steps Completed" 
            name="steps_taken"
            value={tracker.steps_taken}
            onChange={(e) => setTracker({...tracker, steps_taken: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicTrackerAppStatus">
          <Form.Label>Application Status Complete:</Form.Label>
          <Form.Control 
            type="checkbox" 
            placeholder="Application Status" 
            name="applied_status"
            value={tracker.applied_status}
            onChange={(e) => setTracker({...tracker, applied_status: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicTrackerInterviewDate">
          <Form.Label>Interview Date</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Interview Date (yyyy-mm-dd)" 
            name="interview_date"
            value={tracker.interview_date}
            onChange={(e) => setTracker({...tracker, interview_date: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicTrackerFollowUp">
          <Form.Label>Follow-Up Date</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Follow-Up Date (yyyy-mm-dd)" 
            name="follow_up"
            value={tracker.follow_up}
            onChange={(e) => setTracker({...tracker, follow_up: e.target.value})}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  )
}

const ConnectedTrackerForm = (props) => (
  <TrackerConsumer>
    { value => <TrackerForm {...props} {...value} /> }
  </TrackerConsumer>
)

export default withRouter(ConnectedTrackerForm);