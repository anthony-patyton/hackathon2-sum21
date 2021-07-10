import React, {useState} from 'react';
import axios from 'axios';

export const TrackerContext = React.createContext();
export const TrackerConsumer = TrackerContext.Consumer;

const TrackerProvider = ({children}) => {
  const [trackers, setTrackers] = useState([])
  const getAllTrackers = (jobId) => {
    axios.get(`/api/jobs/${jobId}/trackers`)
      .then( res => {
        setTrackers(res.data)
      })
      .catch( err => console.log(err) )
  }
  
  const addTracker = (tracker, jobId) => {
    axios.post(`/api/jobs/${jobId}/trackers`, {tracker} )
      .then( res => {
        setTrackers([...trackers, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateTracker = (id, tracker, history, jobId) => {
    axios.put(`/api/jobs/${jobId}/trackers/${id}`, {tracker} )
      .then( res => {
        const updatedTrackers = trackers.map( t => {
          if (trackers.id === id) {
            return res.data
          }
          return t
        })
        setTrackers(updatedTrackers)
        history.push("/trackers")
      })
      .catch( err => console.log(err) )
  }

  const deleteTracker = (id, history, jobId) => {
    axios.delete(`/api/jobs/${jobId}/trackers/${id}`)
      .then( res => {
        setTrackers(trackers.filter( t => t.id !== id))
        alert(res.data.message)
        history.push("/trackers")
      })
      .catch( err => console.log(err) )
  }

  return(
    <TrackerContext.Provider value={{
      trackers,
      getAllTrackers: getAllTrackers,
      addTracker: addTracker,
      updateTracker: updateTracker,
      deleteTracker: deleteTracker,
    }}>
      {children}
    </TrackerContext.Provider>
  )
}

export default TrackerProvider;