import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import LogIn from './components/LogIn/LogIn'
import ContactForm from "./components/ContactUs/ContactForm";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/ProfilePage/Profile";
import Instrumentals from "./components/Instrumentals/Instrumentals";
import Artwork from "./components/Artwork/Artwork";
import Footer from "./components/Footer/Footer";

function App() {
  return (
 
    <div className="App">
    <Navbar />


      
        <Switch>
        <Route path="/contactus">
        <ContactForm />
      </Route>
      <Route path="/signup" component={SignUp}>
      <SignUp />
    </Route>
    <Route path="/login" component={LogIn}>
    <LogIn />
  </Route>
  <Route path="/instrumentals" component= {Instrumentals}>
  <Instrumentals />
</Route>
<Route path="/artwork" component= {Artwork}>
<Artwork />
</Route>
    <Route path="/profile" >
    <Profile />
  </Route>
        <Route path="/">
          <Home />
        </Route>
      
      </Switch>
     
      <footer>
      <Footer />
      </footer>
    </div>
   
  );
}

export default App;
