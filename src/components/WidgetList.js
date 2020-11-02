import React from "react";
import {connect} from "react-redux";
import {

  deleteWidget,
  updateWidget,
  editWidget,
  okWidget,
  createWidgetForTopic
} from "../actions/widgetActions";

const WidgetList = ({

  widgets=[],
                      topicId={},

  deleteWidget,
  createWidgetForTopic,
  updateWidget,
  editWidget,
  okWidget


}) =>
  <div>

    <h5 className={"wbdv-editor-component-header"}> Widgets </h5>
    <ul>
      {
        widgets.map(widget =>
          <li key={widget.id}>
            {JSON.stringify(widget)}
            {alert(JSON.stringify(topicId))}
            <button type="button" class="btn btn-danger"
              onClick={() => deleteWidget(widget)}>
              Delete
            </button>
            {
              widget.editing &&
              <span><input
                onChange={ (event) => updateWidget({
                  ...widget,
                  name: event.target.value
                })}
                value={widget.name}/>

                <button onClick={() => okWidget(widget)}>
                  Ok
                </button>
                </span>
            }
            {
              !widget.editing &&
                <span>
                  {widget.name}
                  {widget.type}
                  <button type="button" class="btn btn-danger" onClick={() => editWidget(widget)}>
                    Edit
                  </button>
                </span>
            }

          </li>

        )


      }
    </ul>
    <button type="button" class="btn btn-primary" onClick={() => createWidgetForTopic(topicId)} > Create </button>

  </div>

// export default WidgetList

const stateToPropertyMapper = (state) => ({
  widgets: state.widgetsReducer.widgets,
  topicId: state.widgetsReducer.topicId
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteWidget: (widget) => deleteWidget(dispatch, widget),
  //createWidget: () => alert("CreateWidgetClicked"),
  createWidgetForTopic: (topicId) => createWidgetForTopic(dispatch, topicId),
  updateWidget: (widget) => updateWidget(dispatch, widget),
  editWidget: (widget) => editWidget(dispatch, widget),
  okWidget: (widget) => okWidget(dispatch, widget)
})

export default connect
( stateToPropertyMapper,
  propertyToDispatchMapper)
(WidgetList)
