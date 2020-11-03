import React from "react";
import {connect} from "react-redux";
import ToggleButton from "react-bootstrap";
import ToggleSwitch from "./ToggleSwitch";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import './style.Widgets.css'

import {

  deleteWidget,
  updateWidget,
  editWidget,
  okWidget,
  createWidgetForTopic
} from "../actions/widgetActions";



const WidgetList = ({

    // vars
  widgets=[],
  topicId={},

    // functions
  deleteWidget,
  createWidgetForTopic,
  updateWidget,
  editWidget,
  okWidget


}) =>
  <div>

    <h5 className={"wbdv-editor-component-header"}> Widgets </h5>

      {/* TOGGLE BUTTON */}
      {/*<ToggleSwitch widgets={widgets}/>*/}

    <div>
      {
        widgets.map(widget =>
          <div key={widget.id} className={"wbdv-widget-component"}>

            {/* TESTING */}
            {/*{JSON.stringify(widget)}*/}
            {/*{alert(JSON.stringify(topicId))}*/}


              {/* DropDown List */}
              {/*<select onChange={ (event) => okWidget({*/}
              {/*                                               ...widget,*/}
              {/*                                               type: event.target.value*/}
              {/*                                           })}*/}
              {/*        value="widget type" name="userSelectedWidgetType">*/}
              {/*    <option value="Widget Type"> Widget Type </option>*/}
              {/*    <option value="HEADING"> Heading </option>*/}
              {/*    <option value="PARAGRAPH"> Paragraph </option>*/}


              {/*</select>*/}

            {/*  Delete Button */}
            {/*<button type="button" class="btn btn-danger"*/}
            {/*  onClick={() => deleteWidget(widget)}>*/}
            {/*  Delete*/}
            {/*</button>*/}

            {/*{*/}
            {/*  widget.editing &&*/}
            {/*  <span><input*/}
            {/*    onChange={ (event) => updateWidget({*/}
            {/*      ...widget,*/}
            {/*      name: event.target.value*/}
            {/*    })}*/}
            {/*    value={widget.name}/>*/}

            {/*    <button onClick={() => okWidget(widget)}>*/}
            {/*      Ok*/}
            {/*    </button>*/}
            {/*    </span>*/}
            {/*}*/}
            {/*{*/}
            {/*  !widget.editing &&*/}
            {/*    <span>*/}
            {/*      {widget.name}*/}
            {/*      /!*{widget.type}*!/*/}
            {/*        */}
            {/*      <button type="button" class="btn btn-danger" onClick={() => editWidget(widget)}>*/}
            {/*        Edit*/}
            {/*      </button>*/}
            {/*    </span>*/}
            {/*}*/}



              <button type="button" class="btn btn-warning pull-right" onClick={() => editWidget(widget)}>
                          Edit
              </button>
              {/*<button type="button" class="btn btn-success" onClick={() => okWidget(widget)}>*/}
              {/*  Save*/}
              {/*</button>*/}



              {
                  widget.type === ("HEADING" ) &&
                  <HeadingWidget
                      widget={widget}
                      updateWidget={updateWidget}
                      okWidget={okWidget}
                      deleteWidget={deleteWidget}
                  />
              }
              {
                  widget.type === ("PARAGRAPH" ) &&
                  <ParagraphWidget
                      widget={widget}
                      updateWidget={updateWidget}
                      okWidget={okWidget}
                      deleteWidget={deleteWidget}
                  />
              }




              {/*<h1> {widget.text} </h1>*/}

          </div>

        )


      }
    </div>

    {/*  Create Button */}
    <button type="button" class="btn btn-primary"
            onClick={() => createWidgetForTopic(topicId)} > Create </button>













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
