import React from "react";

const ParagraphWidget = (
    {
        widget
    }) =>
    <div>

    {
        widget.editing &&
        <div>
            <h3>Paragraph</h3>
            <textarea placeholder={"Enter Text for your paragraph"} className="form-control"></textarea>
            <input placeholder="Name" className="form-control"/>
        </div>
    }

    </div>

export default ParagraphWidget