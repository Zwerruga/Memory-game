import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Footer from "./components/Footer.jsx";
import Desk from "./components/Desk.jsx";
import EndGame from "./components/EndGame.jsx";

function App() {
  const { cards } = useSelector((s) => s);
  const [endGame, setEndGame] = useState(false);
  const [timer, setTimer] = useState(0);
  const [interval, setIntervalState] = useState(0);

  useEffect(() => {
    if (cards.countFlipped === cards.desk.length) {
      interval && setEndGame(true);
      clearInterval(interval);
    }
  }, [cards, interval]);

  return (
    <div className='wrapper'>
      <Footer
        interval={interval}
        timer={timer}
        setTimer={setTimer}
        setIntervalState={setIntervalState}
      />
      <Desk />
      {endGame && <EndGame close={() => setEndGame(false)} />}
    </div>
  );
}

export default App;
