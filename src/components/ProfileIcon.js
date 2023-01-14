import CheckIcon from "../assests/check.png"
import "../styles/ProfileIcon.css"
export default function ProfileIcon(props) {
    return(
        <div className="icon">
            {props.mentor ? <img src={CheckIcon} alt="" className="check"/> : ""}
        </div>
        
    );
}