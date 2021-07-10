// eslint-disable-next-line no-unused-vars
import React, {useState, } from 'react';
import axios from 'axios';

export const JobContext =  React.createContext();

export const JobConsumer = JobContext.Consumer;

const JobProvider = ({ children }) => {
  // this will grab all the books and fill the array up with books from database
  const [jobs, setJobs] = useState([])
  // useEffect( () => {
  const getAllJobs = () => {
    axios.get('/api/jobs')
      .then( res => {
          setJobs(res.data)
          console.log(res.data)
      })
      .catch(err => console.log(err))
  }
  // }, [])

  const addJob = (job) => {
      axios.post('/api/jobs', { job })
      .then( res => {
          setJobs([...jobs, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateJob = (id, job) => {
      axios.put(`/api/jobs/${id}`, { job })
      .then(res => {
          const updatedJobs = jobs.map( j => {
              if (j.id === id) {
                  return res.data
              }
              return j
          })
          setJobs(updatedJobs)
      })
      .catch( err => console.log(err) )
  }

  const deleteJob = (id) => {
      axios.delete(`/api/jobs/${id}`)
      .then( res => {
          setJobs(jobs.filter(j => j.id !== id))
          alert(res.data.message)
      })
      .catch( err => console.log(err) )

  }
  
  return (
      <JobContext.Provider value={{
          jobs, 
          getAllJobs: getAllJobs,
          addJob: addJob,
          updateJob: updateJob,
          deleteJob: deleteJob,
      }}>
          { children }
      </JobContext.Provider>
  )
}
export default JobProvider; 