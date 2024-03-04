import {SectionProject} from './style'
import Card from '../../components/Card'


const Project = ({arr, user}) => {


    return(
        
        <SectionProject >
         <h1>PROJETOS</h1>
            {arr?(
            arr.map(repo => <Card key={repo.id} name={repo.name} user={user} description={repo.description} repo={repo.html_url}/>)
            ): null}
        </SectionProject>
      )
}

export default Project;