import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Header from './Components/Header/Header';
import DarkToggle from './Components/DarkModeToggle/DarkModeToggle';
import Footer from './Components/Footer/Footer';

function App() {
  return (
        <div className='App'>
            <DarkToggle/>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </div>
  );
}

export default App;
