import React, { useState } from 'react'

const Statistics = (props) => {
  const good = props.statGood
  const neutral = props.statNeutral
  const bad = props.statBad

  const all = good + neutral + bad
  const average = ((good - bad) / all).toPrecision(1)
  const positive = ((good / all) * 100).toPrecision(3)

  if (all <= 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text={"Good: "} stat={good} />
            <StatisticLine text={"Neutral: "} stat={neutral} />
            <StatisticLine text={"Bad: "} stat={bad} />
            <StatisticLine text={"All: "} stat={all} />
            <StatisticLine text={"Average: "} stat={average} />
            <StatisticLine text={"Positive: "} stat={positive} symbol={"%"} />
          </tbody>
        </table>
      </div>
    )
  }
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.stat} {props.symbol}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text="Good" />
      <Button handleClick={neutralClick} text="Neutral" />
      <Button text="Bad" handleClick={badClick} />
      <Statistics statGood={good} statNeutral={neutral} statBad={bad} />
    </div>
  )
}

export default App