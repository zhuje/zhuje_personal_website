import React, { Component } from 'react';
import {
    createWidgetForTopic,
    deleteWidget,
    editWidget, okWidget,
    updateWidget
} from "../actions/widgetActions";
import {connect} from "react-redux";

class ToggleSwitch extends Component {
    state = {
        switch1: true,
    }
    handleSwitchChange = nr => () => {
        let switchNumber = `switch${nr}`;
        this.setState({
                          [switchNumber]: !this.state[switchNumber]
                      });
    }

    render() {
        return (
            <div className='custom-control custom-switch'>
                <input
                    type='checkbox'
                    className='custom-control-input'
                    id='customSwitches'
                    checked={this.state.switch1}
                    onChange={this.handleSwitchChange(1)}
                    readOnly
                />
                <label className='custom-control-label' htmlFor='customSwitches'>
                    Preview
                </label>
                {
                    // this.state.switch1 === false  &&  this.props.widgets.map(widget => ()=> widget.editing = true )
                    // this.state.switch1 == false &&
                    // alert(JSON.stringify(this.props.widgets))
                }
            </div>
        );
    }
}


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
(ToggleSwitch)


// export default ToggleSwitch;










