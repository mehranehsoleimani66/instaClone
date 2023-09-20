
import { Route,Routes } from 'react-router';
import './App.css';
import HomePage from './HomePage';
import LogIn from './login/LogIn';


function App() {
  return (
    <div className='App'>
      <LogIn/>
{/* <Routes>
     <Route index element={<HomePage/>} />
     <Route path='/Shop' element={<LogIn />}/>
     
   
      </Routes>
       */}
    
      
    </div>
  )
}

export default App;
