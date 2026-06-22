import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + neutral + bad
  let avg = (good - bad) / all
  let pos = good / all

  return (
    <div>
      <Header text="give feedback"/>
      <p>
      <Button text="good" value={good} setter={setGood}/>
      <Button text="neutral" value={neutral} setter={setNeutral}/>
      <Button text="bad" value={bad} setter={setBad}/>
      </p>
      <Header text="statistics"/>
      <p>
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad} <br/>
      all {all} <br/>
      average {avg} <br/>
      positive {pos} % <br/>

      </p>
    </div>
  )
}

const Button = ({text, value, setter}) => {
  return (
    <button onClick={() => setter(value + 1)}>{text}</button>
  )
}

const Header = ({text}) => {return(<h1>{text}</h1>)}

export default App