import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Nav from './Nav';
import Gallery from './Gallery';
import Tasks from './Tasks';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/work' element={<Tasks/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
