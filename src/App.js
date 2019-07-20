import React,{Component} from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import Joke from './components/Joke.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login} />
          <Route path='/login/jokes' component={Joke}/>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;




