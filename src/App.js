import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewRecord } from "./redux/actions/recordActions.js";

import Footer from "./components/Footer.jsx";
import Desk from "./components/Desk.jsx";
import EndGame from "./components/EndGame.jsx";

function App() {
  const { cards, score } = useSelector((s) => s);
  const dispatch = useDispatch();

  const [endGame, setEndGame] = useState(false);
  const [timer, setTimer] = useState(0);
  const [interval, setIntervalState] = useState(0);

  useEffect(() => {
    if (cards.countFlipped === cards.desk.length) {
      if (interval) {
        setEndGame(true);
        dispatch(addNewRecord(score));
      }
      clearInterval(interval);
    }
  }, [cards, interval, score]);

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
