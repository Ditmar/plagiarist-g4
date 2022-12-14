import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import MenuComponent from './components/MenuComponent/MenuComponent'
import {Table} from './components/CardTableComponet/Table'
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
        <MenuComponent/>
        <Table/>
      </Theme>
  );
}

export default App;
