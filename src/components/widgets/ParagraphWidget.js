import React from "react";

const ParagraphWidget = (
    {
        widget,
        updateWidget,
        okWidget,
        deleteWidget,
    }) =>
    <div>
    {
        widget.editing &&
        <div>

            <select onChange={ (event) => okWidget({
                                                       ...widget,
                                                       type: event.target.value
                                                   })}
                    value="widget type" name="userSelectedWidgetType">
                <option value="Widget Type"> Widget Type </option>
                <option value="HEADING"> Heading </option>
                <option value="PARAGRAPH"> Paragraph </option>
                <option value="LIST"> List </option>
                <option value="IMAGE"> Image </option>


            </select>


            <button type="button" className="btn btn-success pull-right" onClick={() => okWidget(widget)}>
                Save
            </button>

            <h3>Paragraph</h3>
            <textarea placeholder={"​Image URL"} className="form-control"
                      onChange={ (event) =>
                          updateWidget({...widget, text: event.target.value })}></textarea>
            <input placeholder="Name" className="form-control"
                   onChange={ (event) =>
                       updateWidget({...widget, name: event.target.value })}/>

            <div>
                <h3> Preview </h3>
                {widget.text}
            </div>

            <button type="button" className="btn btn-danger pull-right"
                    onClick={() => deleteWidget(widget)}>
                Delete
            </button>




        </div>
    }
    {
        !widget.editing &&
        <div>
            {widget.text}
        </div>

    }
    </div>

export default ParagraphWidget
