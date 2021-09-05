import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import '../styles/endGame.css'

export default memo(function EndGame({ close }) {
    const { score, records } = useSelector(s => s)

    return (
        <div className="modal-wrapper">
            <div className="modal">
                <i class="far fa-times-circle" onClick={close}></i>
                <p>Your score: {score}</p>
                <div className="best-scores">
                    <p>Best scores:</p>
                    <ul>
                        {records.sort((a, b) => b - a).slice(0, 3).map(r => <li>{r}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
})
