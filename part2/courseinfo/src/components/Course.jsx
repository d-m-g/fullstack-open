const Header = props => <h1>{props.course}</h1>

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

const Part = props => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = props => (
  <p>
    {" "}
    <strong>Total of {props.total} exercises</strong>
  </p>
)

const Course = ({ course }) => {
  const exercises = course.parts.map(part => part.exercises)
  const total = exercises.reduce((a, c) => a + c)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

export default Course
