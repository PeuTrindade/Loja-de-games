import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Info from "./components/Info";
import Products from "./components/Products";
import Featured from "./components/Featured";

function App(props){
    return(
        <>
        <header>
        <Navbar/>
        </header>
        <main>
         <Image/>
         <Info/>
         <Products/>
         <Featured/>
        </main>
        </>
    )
}
export default App;