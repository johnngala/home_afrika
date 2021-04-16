
import './App.css';
import { BrowserRouter as Router ,Switch ,Route} from  'react-router-dom'

import Navbar from './components/Navbar'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Listing from './containers/Listings'
import ListingDetail from './containers/ListingDetail'
// import Layout from './hoc/Layout'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import Landing from './containers/Landing'
import { Component } from 'react';

import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/BackDrop/BackDrop'



class  App extends Component {

    state = {
    sideDrawerOpen :false
  }

drawerToggleClickHandler = () => {
  this.setState((prevState) => {
    return { sideDrawerOpen : !prevState.sideDrawerOpen}
  })
}

backDropClickHandler = () => {
  this.setState({sideDrawerOpen : false})
}

render(){

  
    let backDrop;

    if(this.state.sideDrawerOpen){
      backDrop = <BackDrop click = {this.backDropClickHandler}/>
    }

  return(

    <Router>
        {/* <Layout> */}
          <Navbar drawerClickHandler = {this.drawerToggleClickHandler}/>
          <SideDrawer show = {this.state.sideDrawerOpen}/>
          {backDrop}
          <Switch>
            <Route exact path = '/' component= {Landing} />
            <Route path = '/search' component = {Home} />
            <Route  path = '/about' component= {About} />
            <Route  path = '/contact' component= {Contact} />
            <Route  exact path = '/listings/:id' component= {ListingDetail} />
            <Route  path = '/listings' component= {Listing} />
            <Route  component = {NotFound} />
          </Switch>
          <Footer/>
        {/* </Layout> */}
      </Router>
    )
      
  }

}

export default App;
