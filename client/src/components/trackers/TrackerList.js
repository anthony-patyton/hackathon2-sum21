import { useEffect } from 'react';
import { TrackerConsumer } from '../../providers/TrackerProvider';
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const TrackerList = ({ trackers, getAllTrackers }) => {
  useEffect( () => {
    getAllTrackers()
  }, [])
  return (
    <>
      <List bulleted>
        { trackers.map( t => 
          <Link to={{
            pathname: `/api/jobs/${id}/trackers/${t.id}`,
            state: { ...t }
          }}>
            <List.Item>Application Status: {t.applied_status}</List.Item>
          </Link>
        )}
      </List>
    </>
  )
}
const ConnectedTrackerList = (props) => (
  <TrackerConsumer>
    { value => 
      <TrackerList {...props} {...value} />
    }
  </TrackerConsumer>
)

export default ConnectedTrackerList;