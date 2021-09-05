import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { setNewDesk } from '../redux/actions/cardActions.js'
import { setScore } from '../redux/actions/scoreActions.js'
import '../styles/footer.css'

export default memo(function Footer({
    timer,
    setTimer,
    interval,
    setIntervalState
}) {
    const dispatch = useDispatch()

    const handleStart = () => {
        dispatch(setNewDesk())
        !interval && setIntervalState(setInterval(() => {
            setTimer(t => {
                dispatch(setScore(t + 1))
                return t + 1
            })
        }, 1000))
    }

    const handleRestart = () => {
        clearInterval(interval)
        setIntervalState(null)
        setTimer(0)
        dispatch(setScore())
    }

    return (
        <footer>
            <div className="timer">
                {`${parseInt(timer / 60)} : ${('0' + timer % 60).slice(-2)}`}
            </div>
            {!interval ?
                <button onClick={handleStart}>Start</button> :
                <button onClick={handleRestart}>Restart</button>
            }
        </footer>
    )
})
