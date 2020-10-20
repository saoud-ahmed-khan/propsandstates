import React from 'react';
import './App.css';
import "./components/nav.css";
import Footer from "./components/Footer";
import { Text } from "./components/Text";
function App() {
  const [page,Setpage]=React.useState("USE STATE");
  return (
    <div className="App">
     
     <div>
             <header className="header">
                <a href="/" className="logo"> SPA </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
                <ul className="menu">
                    <li><a onClick={()=>Setpage("Be Kind")} href="#" >Be Kind</a></li>
                    <li><a onClick={()=>Setpage("Be Assertive")} href="#" > Be Assertive</a></li>
                    <li><a onClick={()=>Setpage("Be Listen")} href="#" >Be Listen</a></li>
                    <li><a onClick={()=>Setpage("Be Connect")} href="#" >Be Connect</a></li>
                    <li><a onClick={()=>Setpage("Be Responsible")} href="#" >Be Responsible</a></li>
                </ul>
            </header>
        </div>
        <Text Text={page}/>
      
      <Footer/>

    </div>
  );
}

export default App;
