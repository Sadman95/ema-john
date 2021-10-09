import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

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
          <Route path="/placeorder">
            <OrderPlaced></OrderPlaced>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path='*'>
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
