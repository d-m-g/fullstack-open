const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content e1={exercises1} e2={exercises2} e3={exercises3} p1={part1} p2={part2} p3={part3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )
}

const Header = (props) => { 
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
      
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part exercises={props.e1} part={props.p1}/>
      <Part exercises={props.e2} part={props.p2}/>
      <Part exercises={props.e3} part={props.p3}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
      <p>
        {props.part} {props.exercises}
      </p>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
  )
}
export default App