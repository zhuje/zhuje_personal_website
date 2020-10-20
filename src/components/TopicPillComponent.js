import React from "react";
import {connect} from "react-redux";
import topicService from "../services/TopicService";

// Extract the parameter 'topics' from
// the stateToPropertyMapper
const TopicPills = ({
                        lessonId,
                        topics=[],
                        createTopicForLesson,
                        deleteTopic,
                        updateTopic
}) =>
    <div className={"container-fluid"}>

        <h5> Topics :   </h5>

        <div className={"row"}>

            <ul className="nav nav-pills">
                {
                    topics.map(topic =>

                        // Delete
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

                                        {topic.title}

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
                    )
                }
            </ul>
        {/* Create */}
        <button onClick={()=> createTopicForLesson(lessonId)}>
            <i className="fa fa-plus fa-2x"></i>
        </button>
        </div>

    </div>


// Fetch the 'topics' param for 'const TopicPills = ({topics}) =>
// Do this by getting the state from the reducer (REDUX!)
const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId
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