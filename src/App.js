import "./App.css";
import AppBar from "./components/AppBar";
import CommunityView from "./views/CommunityView";
import LoadingView from "./views/LoadingView";
import SupportView from "./views/SupportView";
import ProfileView from "./views/ProfileView";
import { React, useState, useEffect } from "react";
import ViewProfile from "./views/ViewProfile";
import MessageView from "./views/MessageView.js";

function App() {
  const [page, setPage] = useState("loading");
  const [appBarHeight, setHeight] = useState(0);
  const [viewId, setviewId] = useState(null);

  const changePage = (val) => {
    setPage(val);
  };

  const viewProfile = (id) => {
    setviewId(id);
    setPage("viewprofile");
  };

  const addUser = () => {
    setPage("support");
  };

  const renderPage = () => {
    switch (page) {
      case "loading":
        return <LoadingView />;
        break;
      case "community":
        return <CommunityView setPage={changePage} viewProfile={viewProfile} />;
        break;
      case "support":
        return <SupportView setPage={changePage} />;
        break;
      case "profile":
        return <ProfileView setPage={changePage} />;
        break;
      case "viewprofile":
        return <ViewProfile setPage={changePage} id={viewId} />;
        break;
      case "message":
        return <MessageView setPage={changePage} />;
        break;
      default:
        break;
    }
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // console.log(appBarHeight);

  useEffect( () => {
    async function load(){
      await delay(2000);
      setPage("community")
    }

    load();

  }, [])

  return (
    <div className="App">
      {page == "loading" ? (
        renderPage()
      ) : (
        <div className="">
          <AppBar
            active={page}
            setPage={changePage}
            setHeight={setHeight}
            addUser={addUser}
          />
          <div
            className=""
            style={{
              marginTop: appBarHeight,
            }}
          >
            {renderPage()}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
