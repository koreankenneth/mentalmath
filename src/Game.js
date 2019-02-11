import React from 'react'

function Game (props) {
  const p = Math.floor(Math.random() * 3) + props.xyz.x + props.xyz.y + props.xyz.z
  return (
    <div className="game">
    <h2>Mental Math</h2>
    <div className="equation">
      <p className="text">{`${props.xyz.x} + ${props.xyz.y} + ${props.xyz.z} = ${p}`}</p>
    </div>
    <button onClick={() => props.onCheckAnswer(p, true)}>True</button>
    <button onClick={() => props.onCheckAnswer(p, false)}>False</button>
    <p className="text">
      Your Score: {props.score.numCorrect}/{props.score.numQuestions}
    </p>
  </div>
  )
}

export default Game