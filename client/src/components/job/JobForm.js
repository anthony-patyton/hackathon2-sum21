import { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { JobConsumer } from '../../providers/JobProvider';
import { withRouter } from 'react-router-dom';

const JobForm = ({ addJob, id, title, company, title_desc, link_url, end_date, updateJob, handleEditClose, history }) => {
  const [job, setJob] = useState({ title:"", company:"", title_desc: "", link_url: "", end_date: null})
  useEffect( () => {
    if (id) {
      setJob({ title, company, title_desc, link_url, end_date })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setJob({...job})
    if (id) {
      updateJob(id, job, history)
      handleEditClose()
    } else {
      addJob(job)
    }
    setJob({ title:"", company:false, title_desc: "", link_url: ""})
  }
  
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicJobTitle">
        <Form.Label>Title: </Form.Label>
        <Form.Control
          type="text" 
          placeholder="title" 
          name="title"
          value={job.title}
          onChange={(e) => setJob({...job, title: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicJobCompany">
        <Form.Label>Company: </Form.Label>
        <Form.Control
          type="text" 
          placeholder="Company" 
          name="company"
          value={job.company}
          onChange={(e) => setJob({...job, company: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicJobTitle_Desc">
          <Form.Label>Title_Desc </Form.Label>
          <Form.Control
            type="text" 
            placeholder="Title Description"
            name="title_desc"
            value={job.title_desc}
            onChange={(e) => setJob({...job, title_desc: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicJobEndDate">
          <Form.Label>Title: </Form.Label>
          <Form.Control
            type="date" 
            placeholder="date" 
            name="end_date"
            value={job.end_date}
            onChange={(e) => setJob({...end_date, title: e.target.value})}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  )
}

const ConnectedTrackerForm = (props) => (
  <JobConsumer>
    { value => <JobForm {...props} {...value} /> }
  </JobConsumer>
)

export default withRouter(ConnectedTrackerForm);