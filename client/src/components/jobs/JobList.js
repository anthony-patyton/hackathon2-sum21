import { useEffect, useContext } from 'react';
import { JobConsumer, JobContext } from '../../providers/JobProvider';
import { Container, Header, Item, Image } from 'semantic-ui-react';
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
        <>
          <Link to={{
              pathname: `/jobs/${j.id}`,
              state: { ...j }
          }}>
          <Item>
            <Item.Image size='tiny' src='/images/wireframe/image.png' />

            <Item.Content>
              <Item.Header as='a'>
                {j.title}
              </Item.Header>
              <Item.Header>
                {j.company}
              </Item.Header>
              <Item.Meta>
                {j.title_desc}
              </Item.Meta>
              <Item.Description>
                <Image src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
              </Item.Description>
              <Item.Extra>
                {j.link_url}
                <button>Edit</button>
                <button>Delete</button>
              </Item.Extra>
            </Item.Content>
          </Item>
            {j.link_url}
          </Link>
          <br />
          </>
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
