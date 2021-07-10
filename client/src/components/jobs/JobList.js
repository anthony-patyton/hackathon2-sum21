import { useEffect } from 'react';
import { JobConsumer } from '../../providers/JobProvider';
import { Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Job from './Job';

const JobList = ({ jobs, getAllJobs }) => {
  useEffect( () => {
    getAllJobs()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container textAlign="center">
        <Header>Job</Header>
        <Job />
        { jobs.map( j => 
          <Link to={{
            pathname: `/job/${j.id}`,
            state: { ...j }
          }}>
          </Link>
        )}
      </Container>
    </>
  )
}
const ConnectedJobList = (props) => (
  <JobConsumer>
    { value => 
      <JobList {...props} {...value} />
    }
  </JobConsumer>
)

export default ConnectedJobList;