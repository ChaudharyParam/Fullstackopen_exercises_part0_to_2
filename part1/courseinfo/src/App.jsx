const Header = (props) => {
  console.log(props)
  return(
    <>
    <h1>
      {/* {props.course} */}
    </h1>
    </>
  )  
}

const Content = () => {

  return(
    <div>
      {/* <Part/>
      <Part/>
      <Part/> */}
    </div>
  )
  
}
const Total = () => {
  
}

const App = () => {
  const course = {name:'Half Stack application development'
  ,
  parts : [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }]
}

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )

}


export default App