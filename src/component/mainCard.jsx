import classes from "./mainCard.module.css";
import userImage from "../images/image-jeremy.png";

const MainCard = (props) => {
    return ( 
        <div className={classes.mainCard}>
            <div className={classes.profileCard}>
                <img src={userImage} alt="" className={classes.userImage}/>
                <div>
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className={classes.badges}>
                <p onClick={() => props.onClick("daily")} className={props.time === "daily" ? classes.active : ""}>Daily</p>
                <p onClick={() => props.onClick("weekly")} className={props.time === "weekly" ? classes.active : ""}>Weekly</p>
                <p onClick={() => props.onClick("monthly")} className={props.time === "monthly" ? classes.active : ""}>Monthly</p>
            </div>
        </div>
     );
}
 
export default MainCard;