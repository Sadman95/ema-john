import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
import Orders from './components/Orders/Orders';
import Review from './components/Review/Review';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Shop></Shop>
          </Route>
          <Route path='/shop'>
          <Shop></Shop>
          </Route>
          <PrivateRoute path='/review'>
          <Review></Review>
          </PrivateRoute>
          <Route path='/inventory'>
          <Inventory></Inventory>
          </Route>
          <PrivateRoute path='/orders'>
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/placeorder">
            <OrderPlaced></OrderPlaced>
          </PrivateRoute>
          <PrivateRoute path="/shipping">
            <Shipping></Shipping>
          </PrivateRoute>
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
      </AuthProvider>
  );
}

export default App;
