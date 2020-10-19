import React from "react";
import CourseCardComponent from "./CourseCardComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


export default class CourseGrid extends React.Component {

  // We declare what objects we want to pay attention to when that object's state changes.
  // I.e. when the state of the 'course' array changes (when we add or delete courses in the
  // array) then we want to RE-render() the array to reflect the latest changes. This is
  // an advancement for single page applications because instead of navigating to another page
  // or re-rendering the whole page we only re-render the objects' who's state has changed.
  // So we're updating only a small portion of page -- which save us time and the user's
  // experience isn't as laggy.
  state = {
    courses: [], // array of courses
    courseBeingEdited: {}
  };

  /*
  Here --- componentDidCount() -- is called when the component is first called/intialized in
  'index.js'. After render() this function is called because it was able to mount
  to the DOM. Specifically -- we want to contact our remote server to load our list of
  courses we have stored -- and save it locally in in the state variable 'courses:[]'.
  *
  componentDidMount() is invoked immediately after a component is mounted
  (inserted into the tree). Initialization that requires DOM nodes should go here.
  If you need to load data from a remote endpoint, this is a good place to instantiate the
  network request.
   */
  componentDidMount() {
    console.log("component did mountManager");
    findAllCourses() // fetches from the remote server all of the 'courses' as a JSON object 'courses' which we will then parse here
        .then(courses => { // then once we receive the JSON object -- store it in the variable 'courses' then manipulate it '=>'
          this.setState({ // we're going to manipulate the JSON object 'course' by setting the state's attribute 'courses' (in purple)
                          courses: courses // to the JSON object 'courses' (in grey)
                        })
        })
  }

  /*
  this.setState(prevState =>({ courses: prevState.courses.filter(c => c._id !== course._id) }) )
  setState -- queues for the changes that will be re-rendered
  this.setState(prevState =>({ courses: prevState.courses.filter(c => c._id !== course._id) } )
          -- takes the previous state (the state of the array of courses before we apply the changes)
          then we filter our the want to delete (course._id)

  SERVICES -- with remote server
   deleteCourseService(course._id) -- call CourseServices.js to go to the remote server and delete the give course._id
   .then -- come back and update our local 'courses' array
   this.setState -- will then re re-render the local 'courses' array without the deleted 'course._id'
  */
  deleteCourse = (course) => {
    deleteCourse(course._id)
        .then(status => this.setState(prevState =>({
                                        courses: prevState.courses.filter(c => c._id !== course._id)
                                      })
        ))
        .catch(error => {

        })

  };

  addCourse = () => {
    // creating a new table data row
    const newCourse = {
      title: "New Course",
      owner: "me",
      modified: (new Date()).toDateString() // Date returns as an object so you can't print an object -- you have to stringify it
    };

    // calling the remote server here.
    // .THEN updating the local state variable 'courses'
    // this.setState -- will recognize that the 'courses' have been updated and re-render the component\
    createCourse(newCourse)
        .then(actualCourse => this.setState(prevState => ({
          // ...prevState.courses  -- .clone() the previous state of courses
          // then append the new course ('actualCourse') to the list of previous courses
          courses: [
            ...prevState.courses, actualCourse
          ]
        })))
  };

  // function calls changes the state -- to recognize that the selected course is being edited
  editCourse = (course) => {
    this.setState({
                    courseBeingEdited: course
                  })
  };




  // Render() is the only required function from the inherited parent React.Component
  render() {
    console.log("render()");
    return (

        <div className={"container "}>

            <div>
                <h1> Course Grid </h1>
            </div>

                <span  className={"row"}>
                    <div className={"wbdv-header-doc d-none d-lg-table-cell"}> Recent Documents </div>
                    <div className={"wbdv-button-spacing wbdv-header-owner d-none d-lg-table-cell"}> Owned By Me </div>
                    <div className={"wbdv-header-buttons"}>
                        <a href={"#"} className={"wbdv-grid-heading"}>
                            <i className="fa fa-sort-alpha-down "></i>
                        </a>
                        <Link to={`/courses`} className={"wbdv-grid-heading"} >
                            <i className="fa fa-list-ul "></i>
                        </Link>
                        <a href={"#"} className={"wbdv-grid-heading"}  >
                            <i className="fa fa-folder "></i>
                        </a>
                    </div>
                </span>



          <div className={"container"} >
            <div className={"row"} >
              {
                // 1) this.state.course -- means we're applying state to the array 'courses' so
                // that once the array is changed we'll rerender the array 'courses' to reflect
                // the changes on the browser
                // 2) .map() just means we're going to take the elements being pass in and
                // manipulate them with some other functions
                // Here we're applying the function to each the of the components in the
                // 3) <CourseRowComponent
                //     courseBeingEdited={this.state.courseBeingEdited}
                //     editCourse={this.editCourse}
                //     deleteCourse={this.deleteCourse}
                //     course={course}/>
                // Here we're telling the class 'CourseRowComponent' that you can expect a
                // property called 'deleteCourse' which will pass in a parameter called
                // 'this.deleteCourse' which is a reference to our function that will
                // setState and request the browser to rerender the an 'courses' array
                // without the deleted course.

                this.state.courses.map((course) =>
                                           // <Col xs="3">
                                           <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                             <CourseCardComponent
                                                 courseBeingEdited={this.state.courseBeingEdited}
                                                 editCourse={this.editCourse}
                                                 deleteCourse={this.deleteCourse}
                                                 course={course}
                                                 key={course._id}
                                             />
                                             {/*// </Col>*/}
                                           </div>
                )
              }
            </div>
          </div>


          {/* Sticky bottom plus button */}
          <a href="#"
             onClick={this.addCourse} // when the 'Add Course' button is clicked call the 'addCourse' function
          >
            <i className="fa fa-plus-circle pull-right fa-3x wbdv-add-course-button wbdv-sticky-add-course-button "
               aria-hidden="true"></i>
            {/*Add Course*/}
          </a>

        </div>
    )
  }
}









