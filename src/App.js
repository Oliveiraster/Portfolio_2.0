import theme from './theme'
import {Container} from './style'
import { ThemeProvider } from 'styled-components'

import Footer from './components/Footer';
import Header from './components/Header';
import Project from './pages/Projects';
import About from './pages/About'

import {Route, Routes} from 'react-router-dom'
import {useEffect, useState} from 'react';

function App() {

  const [user, setUser] = useState('Oliveiraster')
  const [dataUser, setDataUser] = useState('')
  const [repos, setRepos] = useState('')



  useEffect(() => {
      const handleGetData = async () => {
        const userData = await fetch(`https://api.github.com/users/${user}`).catch( err => console.log(err))
        const newUser = await userData.json()
        setUser(newUser.login)
        const {avatar_url, name, bio, login} = newUser
        setDataUser({avatar_url, name, bio, login})

        const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
        const newRepos = await reposData.json()
        setRepos(newRepos)
  
      }
      handleGetData()
      console.log('foi consumiu API')
    },[user])

  const [Tema, setTema] = useState('Dark')

  const resultTheme = r => setTema(r)

  

  return (

    
   <ThemeProvider theme={theme[Tema]} >
    <Container>
      <Header handleTheme={resultTheme}va/>
      <Routes>
        <Route path='/Portfolio_2.0/' element={ <About img={dataUser.avatar_url} description={dataUser.bio}/> }/> 
        <Route path='/Portfolio_2.0/projects' element={ <Project arr={repos} user={user}/> } />
      </Routes>
     <Footer />
    </Container>
   </ThemeProvider>
  
  );
}

export default App;
