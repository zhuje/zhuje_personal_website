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
    body: JSON.stringify({name: "NEW HEADING ", type: "HEADING", text: "NEW TEXT", size: 1 }),
      headers: {
          "content-type": "application/json"
      }
  })
    .then(response => response.json())


export const deleteWidget = (widget) =>
    fetch(`${WIDGET_URL}/${widget.id}`,{
        method: "DELETE"
    }).then(response => response.json())

export const updateWidget = (widgetId, newWidget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const updateWidgetOrder = (newWidgets) =>
    fetch(`${WIDGET_URL}`, {
        method: "PUT",
        body: JSON.stringify(newWidgets),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())



export default {
  findAllWidgets, createWidgetForTopic, findWidgetsForTopic, deleteWidget,updateWidget, updateWidgetOrder
}
