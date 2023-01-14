import AppBar from "../components/AppBar";
import SearchBar from "../components/SearchBar";

export default function CommunityView() {
  return (
    <div>
      <AppBar active="community" />
      <div className=""></div>
      <SearchBar />
    </div>
  );
}
