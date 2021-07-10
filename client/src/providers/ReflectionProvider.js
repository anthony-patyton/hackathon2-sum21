import React, {useState} from 'react';
import axios from 'axios';

export const ReflectionContext = React.createContext();
export const ReflectionConsumer = ReflectionContext.Consumer;

const ReflectionProvider = ({children}) => {
  const [reflections, setReflections] = useState([])
  const getAllReflections = () => {
    axios.get(`/api/trackers/${id}/reflections`)
      .then( res => {
        setReflections(res.data)
      })
      .catch( err => console.log(err) )
  }
  
  const addReflection = (reflection) => {
    axios.post(`/api/trackers/${id}/reflections`, {reflection} )
      .then( res => {
        setReflections([...reflections, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateReflection = (id, reflection, history) => {
    axios.put(`/api/trackers/${id}/reflections/${id}`, {reflection} )
      .then( res => {
        const updatedReflections = reflections.map( r => {
          if (reflections.id == id) {
            return res.data
          }
          return r
        })
        setRefections(updatedReflections)
        history.push("/reflections")
      })
      .catch( err => console.log(err) )
  }

  const deleteReflection = (id, history) => {
    axios.delete(`/api/trackers/${id}/reflections/${id}`)
      .then( res => {
        setReflections(reflections.filter( r => r.id !== id))
        alert(res.data.message)
        history.push("/reflections")
      })
      .catch( err => console.log(err) )
  }

  return(
    <ReflectionContext.Provider value={{
      reflections,
      getAllReflections: getAllReflections,
      addReflection: addReflection,
      updateReflection: updateReflection,
      deleteReflection: deleteReflection,
    }}>
      {children}
    </ReflectionContext.Provider>
  )
}

export default ReflectionProvider;