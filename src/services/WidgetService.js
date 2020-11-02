// + A5 -- all

const WIDGET_URL = "http://localhost:8080/api/widgets"
const TOPIC_URL  = "http://localhost:8080/api/topics"

const findAllWidgets = () =>
  fetch(WIDGET_URL)
    .then(response => response.json())

const findWidgetsForTopic = (topicId) =>
  fetch(`${TOPIC_URL}/${topicId}/widgets`)
    .then(response => response.json())

const createWidgetForTopic = (topicId) =>
  fetch(`${TOPIC_URL}/${topicId}/widgets`, {
    method: "POST",
    body: JSON.stringify({name: "NEW HEADING Pizza ", type: "HEADING"}),
      headers: {
          "content-type": "application/json"
      }
  })
    .then(response => response.json())


export const deleteWidget = (widget) =>
    fetch(`${WIDGET_URL}/${widget.id}`,{
        method: "DELETE"
    }).then(response => response.json())




export default {
  findAllWidgets, createWidgetForTopic, findWidgetsForTopic, deleteWidget
}
