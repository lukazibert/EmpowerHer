import "./App.css";
import AppBar from "./components/AppBar";
import CommunityView from "./views/CommunityView";
import LoadingView from "./views/LoadingView";

function App() {
  
  return (
    <div className="App">
      {/* <LoadingView/> */}
      {/* <AppBar active="profile"/> */}
      <CommunityView/>
    </div>
  );
}

export default App;
