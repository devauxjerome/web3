const Footer = ({course}) => {
    return (
      <>
      {course.map(course => 
        <li key={course.id}>
          <p>{course.exercices}</p> 
        </li>
      )}
      </>
    );
  };

  export default Footer;