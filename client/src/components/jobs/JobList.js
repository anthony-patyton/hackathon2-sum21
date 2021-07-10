import { useEffect, useContext } from 'react';
import { JobConsumer, JobContext } from '../../providers/JobProvider';
import { Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Job from './Job';

const JobList = (props) => {
  const { getAllJobs, jobs } = useContext(JobContext)
  useEffect( () => {
    getAllJobs()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container textAlign="left">
        {jobs.map (j =>
          <p>{j.title}</p>
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

// { jobs.map( j => {}
//   <p>Job {j.title}</p>
//     <Link to={{
//       pathname: `/job/${j.id}`,
//       state: { ...j }
//     }}>
//     </Link>