import React from "react";

const ParagraphWidget = (
    {
        widget,
        updateWidget,
        okWidget,
    }) =>
    <div>

    {
        widget.editing &&
        <div>

            <button type="button" className="btn btn-success" onClick={() => okWidget(widget)}>
                Save
            </button>
            <h3>Paragraph</h3>

            <textarea placeholder={"Enter Text for your paragraph"} className="form-control" onChange={ (event) => updateWidget({
                                                                                                                                    ...widget,
                                                                                                                                    text: event.target.value })}></textarea>
            <input placeholder="Name" className="form-control" onChange={ (event) => updateWidget({
                                                                                                      ...widget,
                                                                                                      name: event.target.value })}/>
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