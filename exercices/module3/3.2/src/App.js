import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Course from "./components/Course";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;


  const courses = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (<Course course={courses}/>
    /*<div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exo1={exercises1}
        exo2={exercises2}
        exo3={exercises3}
      />
      <Footer
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>*/
  );
};

export default App;
