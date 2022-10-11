import Header from ".//Header";
import Content from ".//Content";
import Footer from ".//Footer";


const Course = ({course}) => {
    return (
        <div>
      <Header course={course.name} />
      <Content course={course.parts}/>
      <Footer
      course={course.parts}
      />
    </div>

    ) }

export default Course;