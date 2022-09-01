import {Route , Routes} from 'react-router-dom'

import Home from './pages/Home.js'
import ButtonsList from './pages/ButtonsList.js'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/buttons' element={<ButtonsList />} />
    </Routes>

  );
}

export default App;
