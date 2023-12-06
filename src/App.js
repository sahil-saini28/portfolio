import UserContext from './Context/UserContext';
import { useContext } from 'react';
import './App.css';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import MainProject from './Component/MainProject';
function App() {
  
const {theme} = useContext(UserContext) 
  

  return (
    < >
    
    <div data-theme={theme} >
      
      <Navbar></Navbar>
      <Home></Home>
      <MainProject></MainProject>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  
    </>
  );
}

export default App;
