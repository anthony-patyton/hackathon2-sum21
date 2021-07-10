import { } from 'semantic-ui-react';
import JobProvider from '../../providers/JobProvider';

const Job = ({ id, title, category, udpateBlog, deleteBlog }) => {

  return(
    <>
      <h1>{title}</h1>
      <h3>Category: {category}</h3>
      <button onClick={ () => deleteBlog(id)}>Delete Job</button>
    </>
  )
}

export default Job;