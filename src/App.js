import React from 'react';
import './App.css';
import SmallCard from './component/card';
import MainCard from './component/mainCard';

function App() {
  const firstCard = {
    largCardColor: "orange",
    smallCardColor: "brown"
  }

  const data =   {
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
  }
  return (
    <div className='container'>
      <MainCard />
      <div className='container-sub-2'>
        <SmallCard style={firstCard} data={data} time="Weekly"/>
        <SmallCard style={firstCard} data={data} time="Weekly"/>
        <SmallCard style={firstCard} data={data} time="Weekly"/>
        <SmallCard style={firstCard} data={data} time="Weekly"/>
        <SmallCard style={firstCard} data={data} time="Weekly"/>
        <SmallCard style={firstCard} data={data} time="Weekly"/>
      </div>
    </div>
  );
}

export default App;
