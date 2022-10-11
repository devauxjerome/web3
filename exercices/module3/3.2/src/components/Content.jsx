import Exercice from "./Exercice";

const Content = ({course}) => {
    return (
      <>
      {course.map(course => 
          <li key={course.id}>
            <Exercice part={course.name} exo={course.exercices}/>
          </li>
        )}
      </>
    );
  };

  export default Content;