import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from "./Orders";


const promise=loadStripe(
  'pk_test_51LQlI8SEQVwLxBohVxQMukAg06Rcu07xC8VYwUMcsdtK4lfNQa61vRa3GIlvbHnWCc7VOLNqVDyc7bHoOyHhKubp00KeC72wax'
);

function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
    // will only run when the app component loads 
    auth.onAuthStateChanged(authUser=>{
      console.log('The USER IS >>> ', authUser);
    
      if(authUser){
        // the user just logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })
  },[])



  return (
    
      <Router>
        <div className="app">
       <Header/>
        {/* <Home /> */}
      

      <Routes >
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/payment" element={<Payment/>} /> */}
        <Route path="/payment" element= {<Elements stripe={promise}><Payment/> </Elements>}/>
        
        <Route path="/" element={<Home/> }/>
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>
      </div>
    </Router>

    

 
    
  );
}

export default App;
