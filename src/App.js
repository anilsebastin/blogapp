import React from "react";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import { selectSignedIn } from "./features/userSlice";
import { useSelector } from "react-redux";
import Blogs from "./Components/Blogs";
import "./styling/app.css";

const App = () => {

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {
        isSignedIn && <Blogs />
      }
    </div>
  );
}

export default App;
