import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback"/>
      <p>
      <Button text="good" value={good} setter={setGood}/>
      <Button text="neutral" value={neutral} setter={setNeutral}/>
      <Button text="bad" value={bad} setter={setBad}/>
      </p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let avg = (props.good - props.bad) / all
  let pos = props.good / all * 100

  if (all === 0) {
    return (
      <div> No feedback has been given</div>
    )
  }

  return (
    <div>
      <Header text="statistics"/>
      <div>
        <StatisticLine text="good" value={props.good} percentage={false}/>
        <StatisticLine text="neutral" value={props.neutral} percentage={false}/>
        <StatisticLine text="bad" value={props.bad} percentage={false}/>
        <StatisticLine text="all" value={all} percentage={false}/>
        <StatisticLine text="average" value={avg} percentage={false}/>
        <StatisticLine text="positive" value={pos} percentage={true}/>
      </div>
    </div>
  )
}

const Button = ({text, value, setter}) => {
  return (
    <button onClick={() => setter(value + 1)}>{text}</button>
  )
}

const StatisticLine = ({text, value, percentage}) => {
  return(
  <div>
    {text} {' '} {value}{percentage ? ' %' : ''}
    <br/>
  </div>)
}

const Header = ({text}) => {return(<h1>{text}</h1>)}

export default App
