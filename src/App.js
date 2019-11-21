import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Dogs from './components/Dogs/Dogs';
import Adoptions from './components/Adoptions/Adoptions';
import Checkout from './components/Checkout/Checkout';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wantToAdopt:[]
    }
    this.handleAdoptionCount = this.handleAdoptionCount.bind(this);
  }

  handleAdoptionCount(dog) {
    console.log(dog + ' was added.');
    this.setState((prevState) => {
      return {
        wantToAdopt: prevState.wantToAdopt.concat(dog)
      };
    });
  }

  render(){
    return (
    <Router>
      <div className="App">
      <Header currentAdopted={this.state.wantToAdopt.length}/>
      <main>
        <Redirect from='/' to='/dogs'/>
      <Switch>
        <Route exact path='/dogs' render={(routeProps)=> (<Dogs {...routeProps} currentAdopted={this.handleAdoptionCount}/>)}/>
        <Route exact path='/adoptions' component={Adoptions}/>
        <Route exact path='/checkout/' render={(routeProps)=> (<Checkout {...routeProps} currentAdopted={this.state.wantToAdopt}/>)}/>
      </Switch>
      </main>
    </div>
    </Router>
  );
  }
}

export default App;
