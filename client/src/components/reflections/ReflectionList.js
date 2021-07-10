import { useEffect } from 'react';
import { ReflectionConsumer } from '../../providers/ReflectionProvider';
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const ReflectionList = ({ reflections, getAllReflections }) => {
  useEffect( () => {
    getAllReflections()
  }, [])
  return (
    <>
      <List bulleted>
        { reflections.map( r => 
          <Link to={{
            pathname: `/api/trackers/${id}/reflections/${r.id}`,
            state: { ...r }
          }}>
            <List.Item>Reflections: {r.summary}</List.Item>
          </Link>
        )}
      </List>
    </>
  )
}
const ConnectedReflectionList = (props) => (
  <ReflectionConsumer>
    { value => 
      <ReflectionList {...props} {...value} />
    }
  </ReflectionConsumer>
)

export default ConnectedReflectionList;