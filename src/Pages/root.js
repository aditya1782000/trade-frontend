import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import classes from "./Root.module.css";

function Root() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
    //     <div className={classes.description}>
    //     <h1 className={classes.h1}>Welcome to Niner Traders</h1>
    //         <p className={classes.p}>Niner Traders is the trading platform for trading 
    //             electronic devices like mobile phones, tablets, laptops, 
    //             headphones, moniters, and many more. Niner Traders will 
    //             try to make your expreince smooth in the journey of electronic treding. </p>
    // </div>
      </main>
    </>
  );
}

export default Root;
