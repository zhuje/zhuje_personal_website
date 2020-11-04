import {DELETE_WIDGET, CREATE_WIDGET, UPDATE_WIDGET} from "../actions/widgetActions"

// const initialState = {
//   widgets: [],
//   topicId: {}
// }

const widgetReducer = (state = {}, action) => {
    switch (action.type) {
    case "FIND_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgets,
        topicId: action.topicId
      }
    case "FIND_ALL_WIDGETS":
      return {
        ...state,
        widgets: action.widgets
      }
    case CREATE_WIDGET:
      return {
        widgets: [...state.widgets, action.widget],
        topicId: action.topicId
      }
      case UPDATE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.map(
          widget => widget.id === action.widget.id ?
            action.widget : widget)
      }
    case DELETE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget !== action.widget)
      }
    case "UPDATE_WIDGET_ORDER":
        return {
            ...state,
            widgets: action.responseNewWidgetOrder
        }
    default:
      return state
  }
}

export default widgetReducer
