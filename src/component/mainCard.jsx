import classes from "./mainCard.module.css";

const MainCard = (props) => {
    return ( 
        <div className={classes.mainCard}>
            <div className={classes.profileCard}>
                <img src="../images/icon-exercise.svg" alt="" />
                <p>Report for</p>
                <h1>Jeremy <br/>Robson</h1>
            </div>
            <div className={classes.badges}>
                <p>Daily</p>
                <p>Weekly</p>
                <p>Monthly</p>
            </div>
        </div>
     );
}
 
export default MainCard;