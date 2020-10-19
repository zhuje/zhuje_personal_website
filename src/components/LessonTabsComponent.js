import React from "react";
import {lessonReducer} from "../reducers/lessonReducer";
import {connect} from "react-redux";
import lessonService from "../services/LessonService";
import {Link} from "react-router-dom";
import CourseRowComponent from "./CourseRowComponent";


const LessonTabs = (
  {
      // State that is passed from 'connect' (below). 'Connect's Reducer state to this component.
    course={},
    moduleId,
    lessons=[],
    //  Dispatch actions that are passed from 'connect' (below).
    createLessonForModule,
    deleteLesson,
    updateLesson
  }) =>
  <div className={"container-fluid"}>
      <div className={"row"}>

      {/*<h1>Lessons ({moduleId})</h1>*/}
    <ul className="nav nav-tabs">
      {
        lessons.map(lesson =>

            // Delete
          <li key={lesson._id} className="nav-item wbdv-editor-highlight">
            <a className="nav-link">


                  {/*Edit   */}
                  {
                    !lesson.editing &&
                      <span>

                          <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>
                                 {lesson.title}
                          </Link>

                        <button onClick={() =>
                          updateLesson({...lesson, editing: true})}>
                            <i className="fa fa-pencil"></i>
                        </button>

                      </span>
                  }
                  {
                    lesson.editing &&
                      <span>

                        <input onChange={(event) =>
                            updateLesson({
                                ...lesson,
                                title: event.target.value
                         })} value={lesson.title} />
                         <button onClick={() =>
                             updateLesson({...lesson, editing: false})}>
                            <i className="fa fa-check"></i>
                        </button>

                        {/* Delete */}
                        <button onClick={() => deleteLesson(lesson._id)}>
                            <i className="fa fa-times"></i>
                        </button>

                      </span>
                  }
            </a>
          </li>
        )
      }
    </ul>

    {/*  Create */}
    <button onClick={() => createLessonForModule(moduleId)}>
        <i className="fa fa-plus fa-2x pull-right"></i>
    </button>
  </div>
  </div>

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course,

    lessons: state.lessonReducer.lessons,
  moduleId: state.lessonReducer.moduleId
})

const dispatchToPropertyMapper = (dispatch) => ({
  updateLesson: (newLesson) =>
    lessonService.updateLesson(newLesson)
      .then(actualLesson => dispatch({
        type: "UPDATE_LESSON",
        lesson : newLesson
      })),
  deleteLesson: (lessonId) =>
    lessonService.deleteLesson(lessonId)
      .then(status => dispatch({
        type: "DELETE_LESSON",
        lessonId
      })),
  createLessonForModule: (moduleId) =>
    lessonService.createLessonForModule(
      moduleId, {
      title: "New Lesson",
    })
      .then(actualLesson => dispatch({
        type: "CREATE_LESSON_FOR_MODULE",
        lesson: actualLesson
      }))
})

export default connect
(stateToPropertyMapper,
  dispatchToPropertyMapper)
(LessonTabs)
