import React, {useState} from 'react';
import './App.css';
import SmallCard from './component/card';
import MainCard from './component/mainCard';
import iconplay from "./images/icon-play.svg"
import iconexercise from "./images/icon-exercise.svg";
import iconselfcare from "./images/icon-self-care.svg";
import iconsocial from "./images/icon-social.svg";
import iconstudy from "./images/icon-study.svg";
import iconwork from "./images/icon-work.svg";
import data from "./data.json";

function App() {
  const styles = {
    work: {
      largCardColor: "#ff8b64",
      backgroundImage: iconwork
    },
    play: {
      largCardColor: "#56c2e6",
      backgroundImage: iconplay
    },
    study: {
      largCardColor: "#ff5e7d",
      backgroundImage: iconstudy
    },
    exercise: {
      largCardColor: "#4bcf83",
      backgroundImage: iconexercise
    },
    social: {
      largCardColor: "#7235d1",
      backgroundImage: iconsocial
    },
    selfcare: {
      largCardColor: "#f1c75b",
      backgroundImage: iconselfcare
    }
  }

  const [time, setTime] = useState("daily");

  const handleTime = (time) => {
    setTime(time)
  };

  return (
    <div className='container'>
      <MainCard onClick={handleTime} time={time}/>
      <div className='container-sub-2'>
        <SmallCard style={styles.work} data={data[0]} time={time}/>
        <SmallCard style={styles.play} data={data[1]} time={time}/>
        <SmallCard style={styles.study} data={data[2]} time={time}/>
        <SmallCard style={styles.exercise} data={data[3]} time={time}/>
        <SmallCard style={styles.social} data={data[4]} time={time}/>
        <SmallCard style={styles.selfcare} data={data[5]} time={time}/>
      </div>
    </div>
  );
}

export default App;
