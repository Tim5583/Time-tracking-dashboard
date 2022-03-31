import classes from "./card.module.css";

const SmallCard = (props) => {
    const time = props.time;
    const {largCardColor, backgroundImage} = props.style;
    const {title, timeframes: {[time]: {current, previous }}} = props.data;
 
    return ( 
        <div className={classes.mainCard} style={{backgroundColor: largCardColor }}>
            <img src={backgroundImage} alt="" className={classes.backgroundImage}/>
            <div className={classes.subCard}>
                <div className={classes.cardHeader}>
                    <h2>{title}</h2>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
                <div className={classes.hours}>
                    <h2 className={classes.h2}>{`${current}hrs`}</h2>
                    <p className={classes.subHour}>{`Last Week - ${previous}hrs`}</p>
                </div>
            </div>
        </div>
     );
}
export default SmallCard;
