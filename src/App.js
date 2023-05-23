import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import './App.css';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'
           element={<LoginPage/>}
            >
          </Route>
          <Route path='signup/'
            element={<SignupPage/>}
            >
          </Route>
          <Route path='home/'
            element={<HomePage/>}
            >
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
