import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './Create';
import About from './About';
import Details from './Details';


function App() {
  return (
    
      <Router>
          <div className="App">
          <Navbar />
          <div className="content">
              <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/create' element={<Create/>}></Route>
                <Route  exact path='/about' element={<About/>}></Route>
                <Route exact path='/blogs/:id' element={<Details/>}></Route>
              </Routes>
          </div>
        </div>
      </Router>
   
  );
}

export default App;