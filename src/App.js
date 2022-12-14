
import './App.css';
import Navbar from './components/Navbar';
// import File from './components/file';
import { BrowserRouter , Route ,Routes,} from  "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (

    <BrowserRouter>
    <div className="App">
      {/* <File /> */}
      <Navbar />
      <Routes>
  <Route  exact path='/'  element = {<Home/>}/> 
  <Route  path='/about' element={<About />} />
  <Route  path='/contact' element={<Contact />} />
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
