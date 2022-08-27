import './App.css';
import {Route , Routes} from 'react-router-dom'

import Home from './pages/Home.js'
import Buttons from './pages/Buttons.js'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/buttons' element={<Buttons />} />
    </Routes>

  );
}

export default App;
