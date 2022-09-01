import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynav from './components/Mynav';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Mynav />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
