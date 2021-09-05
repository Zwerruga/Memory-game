import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Card from './Card.jsx'
import {
    setNewDesk,
    setFirstFlipped,
    setSecondFlipped,
    compareFlipped,
    hideFirstFlipped
} from '../redux/actions/cardActions.js'
import '../styles/desk.css'

export default memo(function Desk() {
    const { cards } = useSelector((s) => s);
    const dispatch = useDispatch()
    const [timeout, setTimeoutState] = useState(0)

    useEffect(() => {
        dispatch(setNewDesk())
    }, [dispatch])

    const handleClick = (cardIndex) => {
        if (typeof cards.firstFlipped !== 'number') {
            dispatch(setFirstFlipped(cardIndex))
            setTimeoutState(setTimeout(() => {
                dispatch(hideFirstFlipped())
            }, 5000))
        } else if (typeof cards.secondFlipped !== 'number') {
            if (cardIndex !== cards.firstFlipped) {
                dispatch(setSecondFlipped(cardIndex))
                clearTimeout(timeout)
                setTimeout(() => {
                    dispatch(compareFlipped())
                }, 400)
            }
            return
        }
    }

    return (
        <div className="desk">
            {cards.desk.map((c, i) => <Card key={i} imgSrc={c.img} flip={c.flip} blank={c.blank} onClick={() => handleClick(i)} />)}
        </div>
    )
})
