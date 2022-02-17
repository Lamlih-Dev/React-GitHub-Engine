import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Navigation from './component/Navigation';
import Users from './component/users/Users';
import Search from './component/Search';
import DisplayUser from './component/users/DisplayUser';
import NotFound from './component/NotFound';


class App extends Component {

  render(){
    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/allUsers' element={<Users />}></Route>
          <Route path='/allUsers/:login' element={<DisplayUser />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>   
      </Router>
    );
  }
}

export default App;
