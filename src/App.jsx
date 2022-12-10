import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import LastComponent from './components/LastComponent/Index';
function App() {

  const items = [
    {
      to: '/',
      name: 'Home'  
    },
    {
      to: '/searchgiffs',
      name: 'Search Memes'
    },
    {
      to: '/login',
      name: 'Login'
    }
  ];

  return (
    
      <Theme>
        <LastComponent/>
      </Theme>
  );
}

export default App;
