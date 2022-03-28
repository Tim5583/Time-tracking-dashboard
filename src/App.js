import React, {useState, useEffect} from 'react';
import './App.css';
import SmallCard from './component/card';
import MainCard from './component/mainCard';
import iconplay from "./images/icon-play.svg"

function App() {
  const styles = {
    work: {
      largCardColor: "orange",
      smallCardColor: "brown",
      backgroundImage: iconplay
    },

  }

  const [time, setTime] = useState("daily");

  const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

  const handleTime = (time) => {
    setTime(time)
  };

  return (
    <div className='container'>
      <MainCard onClick={handleTime} time={time}/>
      <div className='container-sub-2'>
        <SmallCard style={styles.work} data={data[0]} time={time}/>
        <SmallCard style={styles.work} data={data[1]} time={time}/>
        <SmallCard style={styles.work} data={data[2]} time={time}/>
        <SmallCard style={styles.work} data={data[3]} time={time}/>
        <SmallCard style={styles.work} data={data[4]} time={time}/>
        <SmallCard style={styles.work} data={data[5]} time={time}/>
      </div>
    </div>
  );
}

export default App;
