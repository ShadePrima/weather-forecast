import React from 'react';
import CurrentPlace from './components/CurrentPlace/CurrentPlace';
import Header from './components/Header/Header';
import Now from './components/NowInfo/NowInfo';
import WeekInfo from './components/WeekInfo/WeekInfo';
import './styles/main.scss';

function App() {
  React.useEffect(() => {
    const apiKey = '44891c7aa3ff423899f100657232601';
  }, []);
  return (
    <div>
      <Header />
      <CurrentPlace />
      <Now />
      <WeekInfo />
    </div>
  );
}

export default App;
