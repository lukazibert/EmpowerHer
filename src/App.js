import "./App.css";
import AppBar from "./components/AppBar";
import CommunityView from "./views/CommunityView";
import LoadingView from "./views/LoadingView";
import SupportView from "./views/SupportView";
import ProfileView from "./views/ProfileView";
import { React, useState } from "react";
import ViewProfile from "./views/ViewProfile";
import MessageView from "./views/MessageView.js";

function App() {
  const [page, setPage] = useState("viewprofile");
  const [appBarHeight, setHeight] = useState(0);
  const [viewId, setviewId] = useState(null);

  const changePage = (val) => {
    setPage(val);
  };

  const viewProfile = (id) => {
    setviewId(id);
    setPage("viewprofile");
  }

  const addUser = () => {
    setPage("support");
  }

  const renderPage = () => {
    switch (page) {
      case "community":
        return <CommunityView setPage={changePage} viewProfile={viewProfile}/>;
        break;
      case "support":
        return <SupportView setPage={changePage} />;
        break;
      case "profile":
        return <ProfileView setPage={changePage} />;
        break;
      case "viewprofile":
        return <ViewProfile setPage={changePage} id={viewId}/>;
        break;
      case "message":
        return <MessageView setPage={changePage} />;
        break;
      default:
        break;
    }
  };

  // console.log(appBarHeight);

  return (
    <div className="App">
      <AppBar active={page} setPage={changePage} setHeight={setHeight} addUser={addUser}/>
      <div
        className=""
        style={{
          marginTop: appBarHeight,
        }}
      >
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
