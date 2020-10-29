import React from "react";
import {connect} from "react-redux";
import topicService from "../services/TopicService";
import {Link} from "react-router-dom";

function highlight ( topic, topics ) {
    let allModule = document.getElementsByClassName("highlightModule");


    for (let i = 0; i < topics.length; i++){
        console.log( "i : " + i + topics[i]._id +  " " + topics[i].title)
        let foo = document.getElementsByClassName(topics[i]._id) // get the DOM element by className =  ._id
        console.log (foo + " : foo")
        for (let f of foo ) {
            console.log("f of foo element" + f)
            f.className = " z highlightModule " + topics[i]._id
        }
    }

    // alert(" Click for Module : " +  module.title )

    let selectedModule = document.getElementsByClassName(topic._id)

    // alert ("SelectedModule is : " + selectedModule.toString())

    for (let item of selectedModule) {
        console.log(item)
        item.className += " active";
        console.log(item)

    }
}



// Extract the parameter 'topics' from
// the stateToPropertyMapper
const TopicPills = ({
                        // State that is passed from 'connect' (below). 'Connect's Reducer state to this component.
                        course = {},
                        moduleId,


                        lessonId,
                        topics=[],
                        createTopicForLesson,
                        deleteTopic,
                        updateTopic
}) =>
    <div className={"container-fluid"}>

        <h5 className={"wbdv-editor-component-header"}> Topics :   </h5>

        <div className={"row"}>

            <ul className="nav nav-pills">
                {
                    topics.map(topic =>

                                   <div  className={"highlightModule "+ topic._id} onClick={()=> highlight(topic, topics)}>



                        <li key={topic._id} className={"nav-item wbdv-editor-highlight"}>

                            {/* Conditional styling --  'topic.editing ? "active" : ""
                                saying if its TRUE that the topic-object is editing 'topic.editing
                                '?' THEN  --- "className is 'active'" --- ELSE " : " -- className={""} */}
                            <div className={topic.editing ? "active": ""}>
                            <a className={"nav-link"} >


                                {/* Edit */}
                                {
                                  !topic.editing &&
                                    <span>

                                        <Link
                                            to={`/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}  >
                                          {topic.title}
                                        </Link>


                                        <button onClick={() =>
                                            updateTopic({...topic, editing: true})
                                        }>
                                            <i className="fa fa-pencil"></i>
                                        </button>



                                    </span>
                                }
                                {
                                    topic.editing &&
                                        <span>
                                            <input onChange={(event) =>
                                                updateTopic({
                                                                ...topic,
                                                                title: event.target.value
                                                            })} value = {topic.title} />
                                            <button onClick={() =>
                                                updateTopic({...topic, editing: false})}>
                                                <i className="fa fa-check"></i>
                                            </button>

                                            <button onClick={() => deleteTopic(topic._id)}>
                                                <i className="fa fa-times"></i>
                                            </button>

                                        </span>
                                }
                            </a>
                            </div>

                        </li>
                                   </div>
                    )
                }
            </ul>
        {/* Create */}
        <button className={"wbdv-editor-plus-btn"} onClick={()=> createTopicForLesson(lessonId)}>
            <i className="fa fa-plus fa-2x pull-right"></i>
        </button>
        </div>

    </div>


// Fetch the 'topics' param for 'const TopicPills = ({topics}) =>
// Do this by getting the state from the reducer (REDUX!)
const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course,
    moduleId: state.lessonReducer.moduleId,
    lessonId: state.topicReducer.lessonId,
    topics: state.topicReducer.topics,

})

const dispatchToPropertyMapper = (dispatch) => ({

    updateTopic: (newTopic) =>
        topicService.updateTopic(newTopic)
            .then(actualTopic => dispatch({
                type: "UPDATE_TOPIC",
                topic : newTopic
            })),

    deleteTopic: (topicId) =>
        topicService.deleteTopic(topicId)
            .then(status => dispatch ({
                type: "DELETE_TOPIC",
                topicId
              })),

    createTopicForLesson: (lessonId) =>
        topicService.createTopicForLesson(
            lessonId, {
             title: "New Topic",
            })
            .then(actualTopic => dispatch({
                type:"CREATE_TOPIC_FOR_LESSON",
                topic: actualTopic
            }))
})


export  default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(TopicPills)