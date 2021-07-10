import { Header } from 'semantic-ui-react';
import JobList from './JobList';
import { BackgroundStyles } from '../styledComponents/sharedStyles';


const Jobs = () => (
  <>
    
  <BackgroundStyles>
    <Header>
      All Jobs
    
    </Header>
    <JobList />
  </BackgroundStyles>
   
  </>
)

export default Jobs;