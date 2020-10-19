import React from "react";
import {findCourseById} from "../services/CourseService";
import WidgetListContainer from "../containers/WidgetListContainer";
import WidgetList from "./WidgetList";
import ModuleListComponent from "./ModuleListComponent";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import lessonService from "../services/LessonService"
import LessonTabs from "./LessonTabsComponent";

import topicService from "../services/TopicService"
import TopicPillComponent from "./TopicPillComponent";
import TopicPills from "./TopicPillComponent";

class CourseEditorComponent extends React.Component {


    // componentDidMount() is invoked when the application first gets initialized
    // we must use componentDidUpdate to update the state and rendering of components
  componentDidMount() {
      // create alias for the params (taken courseID and moduleID from the URL)
    const courseId = this.props.match.params.courseId;
    const moduleId = this.props.match.params.moduleId;
    const lessonId = this.props.match.params.lessonId;


      // fetch the JSON object for the course -- then fetch the module JSON objects associated
      // with the course
    this.props.findCourseById(courseId);
    this.props.findModulesForCourse(courseId);


    // if we have the moduleId then we can retrieve the lessons
    if(moduleId) {

        this.props.findLessonsForModule(moduleId)
    }
    if(lessonId){
      this.props.findTopicsForLesson(lessonId)
    }

  }

  // componentDidUpdate -- checks if the current states have updated -- if so rerender
    // allows a different list of lesson to render every time we click on new module
    // this is for reloading components on the same page. Instead of navigating to a
    // new URL route and having the page rerender each time with 'componentDidMount' --
    // we want to stay on the same URL route and only re-render the components that have been updated.
  componentDidUpdate(prevProps, prevState, snapshot) {

    // Condition -- is the current moduleID different than the previous moduleId?
    // if so then 'findLessonsForModule(moduleId)'  -- re-render the list of lessons
      // for this new moduleId
      const moduleId = this.props.match.params.moduleId;
    if(moduleId !== prevProps.match.params.moduleId) {
      this.props.findLessonsForModule(moduleId)
    }

    const lessonId = this.props.match.params.lessonId;
    if (lessonId !== prevProps.match.params.lessonId) {
        this.props.findTopicsForLesson(lessonId)
    }

  }

  render() {
    return(
      <div>
        <h1>Course Editor</h1>
        <div className="row">
          <div className="col-4">
            <ModuleListComponent/>
          </div>
          <div className="col-8">
            <LessonTabs/>
            {/*<h1>Topics</h1>*/}
            <TopicPills/>
            <WidgetList/>
          </div>
        </div>
      </div>
    )
  }
}

// Redux Grabs the state from the Reducer to pass back into the component
const stateToPropertyMapper = (state) => ({
  course: state.courseReducer.course
})

// Redux grabs the services and dispatches the action.stypes back to reducer.
const propertyToDispatchMapper = (dispatch) => ({
  findCourseById: (courseId) => findCourseById(courseId)
    .then(actualCourse => dispatch({
      type: "SET_COURSES",
      course: actualCourse
    })),
  findModulesForCourse: (courseId) => moduleService.findModulesForCourse(courseId)
    .then(actualModules => dispatch({
      type: "FIND_MODULES_FOR_COURSE",
      modules: actualModules
    })),
  findLessonsForModule: (moduleId) =>
    lessonService.findLessonsForModule(moduleId)
      .then(lessons => dispatch({
        type: "FIND_LESSONS_FOR_MODULE",
        lessons,
        moduleId
      })),
    findTopicsForLesson : (lessonId) =>
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch ({
                type: "FIND_TOPICS_FOR_LESSON",
                topics,
                lessonId
            }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorComponent)
