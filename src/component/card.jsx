import classes from "./card.module.css";

const SmallCard = (props) => {
    const gg = "weekly";
    console.log(gg)
    const {largCardColor, smallCardColor} = props.style;
    const {title, timeframes: {[gg]: {current, previous }}} = props.data;
 
    return ( 
        <div className={classes.mainCard} style={{backgroundColor: largCardColor }}>
            <div className={classes.subCard} style={{backgroundColor: smallCardColor}}>
                <div className={classes.cardHeader}>
                    <h3>{title}</h3>
                    <p>...</p>
                </div>
                <div>
                    <h2 className={classes.h2}>{`${current}hrs`}</h2>
                    <p className={classes.subHour}>{`Last Week - ${previous}hrs`}</p>
                </div>
            </div>
        </div>
     );
}
export default SmallCard;