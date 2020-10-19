
// parentComponent
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/jannunzi2/lessons"
// childComponent
const topicUrl = "https://wbdv-generic-server.herokuapp.com/api/jannunzi2/topics"


// findTopicsForLesson() -- takes a lessonID to find all the
// topic-Objects associated with it
// @param -- lessonId -- the lessonID is passed from the routing URL to the courseManager to the courseEditor
export const findTopicsForLesson  = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json());



// createTopicsForLesson -- got to the server to put a new
// topic object with the attribute from the parent-lessonId object.
// this allows the child-topic object to associate with the parent
// when it re-renders upon an update.
// @param -- lessonId -- the parent-lesson Object's ID, this is taken
// from the URL passed down to the CourseManager --> CourseEditor
// @param -- topic -- the new 'topic' object that will be added to the
// list of topics associated with the parent 'lesson' object -- all
// the children 'topic' objects will be associated with the parent lesson-object's ID
export const  createTopicForLesson = (lessonId, topic) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json());

export const updateTopic = (topic) =>
    fetch(`${topicUrl}/${topic._id}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteTopic = topicId =>
    fetch(`${topicUrl}/${topicId}`, {
    method: "DELETE"
    }).then(response => response.json())




export default {
    findTopicsForLesson,
    createTopicForLesson,
    deleteTopic,
    updateTopic
}