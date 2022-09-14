import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Register />} exact />
          <Route
            path='/login'
            element={user ? <Navigate to='/' /> : <Login />}
          />
          <Route
            path='/register'
            element={user ? <Navigate to='/' /> : <Register />}
          />
          <Route path='/profile/:username' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
