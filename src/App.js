import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Header from './Components/Header/Header';
import DarkToggle from './Components/DarkModeToggle/DarkModeToggle';

function App() {
  return (
        <div className='App'>
            <DarkToggle/>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </div>
  );
}

export default App;
