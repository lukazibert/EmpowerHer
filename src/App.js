import "./App.css";
import AppBar from "./components/AppBar";
import CommunityView from "./views/CommunityView";
import LoadingView from "./views/LoadingView";
import SupportView from "./views/SupportView";
import {React, useState} from "react";

function App() {

  const [page, setPage] = useState("community")
  
  return (
    <div className="App">
      {/* <LoadingView/> */}
      {/* <AppBar active="profile"/> */}
      {/* <CommunityView/> */}
      <AppBar active={page} />

      <SupportView/>
    </div>
  );
}

export default App;
