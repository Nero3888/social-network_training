import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {

  return (
    
    <div className= 'app-wrapper'>
      <Header />
      <Navbar />
      
     <div class='app-wrapper-content'>

       <Route path='/dialogs' 
       render={ () => <Dialogs state={props.state.dialogsPage} /> } />
       <Route path='/profile' 
       render={ () => <Profile state={props.state.profilePage} /> } />
       
     </div>
    </div>
    
  );
}
export default App;
