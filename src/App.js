import './App.css';
import React from 'react';
import{
  Route,
  HashRouter,
} from 'react-router-dom';
import Resume from './components/Resume';
//import Menu from './Menu';

function App() {
  return (
    <HashRouter>
    <React.StrictMode>
      {/*<Menu /> TODO: Add menu*/}
      <Route exact path="/" component={Resume} />
    </React.StrictMode>
  </HashRouter>
  );
}

export default App;
