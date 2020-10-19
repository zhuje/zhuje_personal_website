

import React from "react";
import {updateCourse} from "../services/CourseService";
import './StyleCourseListComponent.css';
import {Link} from "react-router-dom";

class CourseCardComponent extends React.Component {
    state = {
        editing: false,
        courseTitle: "Some Course",
        course: this.props.course
    }

    constructor(props) {
        super(props)
    }

    updateTitle = (event) => {
        const newTitle = event.target.value
        const course = { ...this.state.course }
        course.title = newTitle
        this.setState({
                          course: course
                      })
    }

    updateCourse = () => {
        // debugger
        this.setState({editing: false})
        updateCourse(this.state.course._id, this.state.course)
    }

    render() {
        return (

                    <div className={"card wbdv-card "} >
                        <img className={"card-img-top"} src={"https://i.imgflip.com/2c4ilx.jpg"} alt={"Card image cap"}/>
                        <div className={"card-body"}>
                            <h5 className={"card-title"}>
                                {
                                    this.state.editing === true &&
                                    <input
                                        onChange={this.updateTitle}
                                        value={this.state.course.title}
                                    />
                                }
                                {
                                    this.state.editing === false &&
                                    <Link to={`/edit/${this.props.course._id}`}>
                                        <i className="fas fa-file-alt wbdv-button-spacing"></i>
                                        {this.state.course.title}
                                    </Link>
                                }
                            </h5>
                            {/*<h5 className={"card-title"}> {this.state.course.title}  </h5>*/}
                            <div className={"wbdv-card-text"}> Modified :  {this.props.course.modified} </div>
                            <div className={"wbdv-card-text"}> Owner : {this.props.course.owner} </div>
                                     <button
                                        className="btn btn-danger "
                                        onClick={() => this.props.deleteCourse(this.props.course)}>
                                         Delete
                                    </button>
                                     {
                                        this.state.editing &&
                                        <button
                                            className="btn btn-primary "
                                            onClick={this.updateCourse}>
                                            Ok
                                        </button>
                                    }
                                    {
                                        !this.state.editing &&
                                        <button
                                            className="btn btn-primary "
                                            onClick={() => this.setState({editing: true})}>
                                            Edit
                                        </button>
                                    }




                        </div>
                    </div>

        );
    }
}

export default CourseCardComponent