import React from "react";


const widgetTypeDropDownList = (
    {
        widget,
        updateWidget,
        okWidget,
        deleteWidget,
    }) =>
            <div>
                <h1> Hello World </h1>
                <select onChange={(event) => okWidget({
                                                          widget,
                                                          type: event.target.value
                                                      })}
                        value="widget type" name="userSelectedWidgetType">
                    <option value="Widget Type"> Widget Type </option>
                    <option value="HEADING"> Heading </option>
                    <option value="PARAGRAPH"> Paragraph </option>
                    <option value="LIST"> List </option>
                    <option value="IMAGE"> Image </option>
                </select>

            </div>






export default widgetTypeDropDownList
