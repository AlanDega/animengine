import React from 'react'

export default function AnimatedText({ classText, text}) {
    return (
        <div className={classText}>
            <h1>{text}</h1>
        </div>
    )
}
