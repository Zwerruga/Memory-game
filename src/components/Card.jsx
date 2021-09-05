import React, { memo } from 'react'
import '../styles/card.css'

export default memo(function Card({
    imgSrc = "",
    flip = false,
    blank = false,
    onClick = () => { }
}) {
    if (blank) return (
        <div className="card flip">
            <div className="card__img front-img">
                <i className="fas fa-asterisk"></i>
            </div>
        </div>)

    return (
        <div className={`card${flip ? " flip" : ''}`} onClick={onClick}>
            <div className="card__img back-img">
            </div>
            <div data-id={imgSrc} className="card__img front-img" dangerouslySetInnerHTML={{ __html: imgSrc }}>
            </div>
        </div>
    )
})
