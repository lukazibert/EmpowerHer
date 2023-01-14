import AppBar from "../components/AppBar";
import ProfileIcon from "../components/ProfileIcon";
import SearchBar from "../components/SearchBar";

export default function CommunityView() {
  return (
    <div>
      <AppBar active="community" />
      <div className="m-2">
        <SearchBar />
        <ProfileIcon/>
      </div>
    </div>
  );
}
