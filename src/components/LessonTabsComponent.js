import React from "react";
import {lessonReducer} from "../reducers/lessonReducer";
import {connect} from "react-redux";
import lessonService from "../services/LessonService";
import {Link} from "react-router-dom";
import CourseRowComponent from "./CourseRowComponent";



function highlight ( lesson, lessons ) {
    let allModule = document.getElementsByClassName("highlightModule");


    for (let i = 0; i < lessons.length; i++){
        console.log( "i : " + i + lessons[i]._id +  " " + lessons[i].title)
        let foo = document.getElementsByClassName(lessons[i]._id) // get the DOM element by className =  ._id
        console.log (foo + " : foo")
        for (let f of foo ) {
            console.log("f of foo element" + f)
            f.className = " z highlightModule " + lessons[i]._id
        }
    }

    // alert(" Click for Module : " +  module.title )

    let selectedModule = document.getElementsByClassName(lesson._id)

    // alert ("SelectedModule is : " + selectedModule.toString())

    for (let item of selectedModule) {
        console.log(item)
        item.className += " active";
        console.log(item)

    }
}



const LessonTabs = (
    {
        // State that is passed from 'connect' (below). 'Connect's Reducer state to this component.
        course = {},
        moduleId,
        lessons = [],

        //  Dispatch actions that are passed from 'connect' (below).
        createLessonForModule,
        deleteLesson,
        updateLesson
    }) =>
    <div className={"container-fluid"}>

        <h5 className={" wbdv-editor-component-header "}> Lessons : </h5>


        <div className={"row"}>

            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>

                                    <div  className={"highlightModule "+ lesson._id} onClick={()=> highlight(lesson, lessons)}>


                                    <li key={lesson._id} className="nav-item wbdv-editor-highlight">
                            <a className="nav-link">

                            {/*  Edit   */}
                            {
                                !lesson.editing &&
                                <span>
                                  <Link
                                      to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>
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
                                                     })} value={lesson.title}/>
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
                                    </div>
                    )
                }
            </ul>

            {/*  Create */}

            <button className={"wbdv-editor-plus-btn"} onClick={() => createLessonForModule(moduleId) }>
                <i className="fa fa-plus fa-2x pull-right"></i>
            </button>

        </div>
    </div>

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course,

    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId,

})

const dispatchToPropertyMapper = (dispatch) => ({
    updateLesson: (newLesson) =>
        lessonService.updateLesson(newLesson)
            .then(actualLesson => dispatch({
                                               type: "UPDATE_LESSON",
                                               lesson: newLesson
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
