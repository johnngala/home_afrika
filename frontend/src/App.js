import './App.css';
import { BrowserRouter as Router ,Switch ,Route} from  'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Listing from './containers/Listings'
import ListingDetail from './containers/ListingDetail'
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import Layout from './hoc/Layout'
import NotFound from './components/NotFound'
import PrivateRoute from './components/privateRoute'

//import './sass/main.scss'

import {Provider} from 'react-redux'
import store from './store'

function App() {
  return(
    <Provider store = {store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path = '/' component= {Home} />
            <Route  path = '/about' component= {About} />
            <Route  path = '/contact' component= {Contact} />
            <PrivateRoute  exact path = '/listings/:id' component= {ListingDetail} />
            <Route  path = '/listings' component= {Listing} />
            <Route  path = '/login' component= {Login} />
            <Route  path = '/signup' component= {SignUp} />
            <Route  component = {NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App;
