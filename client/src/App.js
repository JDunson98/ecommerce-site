import './App.css';
import TopBar from './Components/TopBar/TopBar';
import Navigation from './Components/Navigation/Navigation';
import ProductList from './Components/ProductList/ProductList';
import Data from './dummyData';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <TopBar />
        <Navigation />
        <ProductList data={Data} />
      </div>
  );
}

export default App;
