import "./App.css";
import AppBar from "./components/AppBar";
import CommunityView from "./views/CommunityView";
import LoadingView from "./views/LoadingView";
import SupportView from "./views/SupportView";
import { React, useState } from "react";

function App() {
  const [page, setPage] = useState("community");

  const changePage = (val) => {
    setPage(val);
  };

  const renderPage = () => {
    switch (page) {
      case "community":
        return <CommunityView setPage={changePage}/>;
        break;
      case "support":
        return <SupportView setPage={changePage}/>;

        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      {/* <LoadingView/> */}
      {/* <AppBar active="profile"/> */}
      {/* <CommunityView/> */}
      <AppBar active={page} setPage={changePage} />
      {renderPage()}
    </div>
  );
}

export default App;
