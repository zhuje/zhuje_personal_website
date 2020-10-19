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
    <div>
        <h1> Topics! ({lessonId}) </h1>
            <ul className="nav nav-tabs">
                {
                    topics.map(topic =>

                        // Delete
                        <li key={topic._id} className={"nav-item"}>
                            <a className={"nav-link"}>
                                <button onClick={() => deleteTopic(topic._id)}>
                                    <i className="fa fa-times"></i>
                                </button>

                                {/* Edit */}
                                {
                                  !topic.editing &&
                                    <span>
                                        <button onClick={() =>
                                            updateTopic({...topic, editing: true})
                                        }>
                                            <i className="fa fa-pencil"></i>
                                        </button>

                                        {topic.title}

                                    </span>
                                }
                                {
                                    topic.editing &&
                                        <span>
                                            <button onClick={() =>
                                                updateTopic({...topic, editing: false})}>
                                                <i className="fa fa-check"></i>
                                            </button>
                                            <input onChange={(event) =>
                                                updateTopic({
                                                    ...topic,
                                                    title: event.target.value
                                                })} value = {topic.title} />
                                        </span>
                                }

                            </a>
                        </li>
                    )
                }
            </ul>

        {/* Create */}
        <button onClick={()=> createTopicForLesson(lessonId)}>
            Create
        </button>
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