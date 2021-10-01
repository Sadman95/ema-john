import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';

function App() {
  return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Shop></Shop>
          </Route>
          <Route path='/shop'>
          <Shop></Shop>
          </Route>
          <Route path='/review'>
          <Review></Review>
          </Route>
          <Route path='/inventory'>
          <Inventory></Inventory>
          </Route>
          <Route path='*'>
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
