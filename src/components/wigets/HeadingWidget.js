import React from "react";


const HeadingWidget = (

    {
        widget,
        updateWidget,
        okWidget,
    }) =>

    <div>

        <h5> HeadingWidget Component, widget being passed  {JSON.stringify(widget)}  </h5>
        {
            widget.editing &&
            <div>

                <button type="button" className="btn btn-success" onClick={() => okWidget(widget)}>
                    Save
                </button>

                <h3>Heading</h3>
                <input  className="form-control" placeholder="Text"
                        onChange={ (event) =>
                            updateWidget({...widget, text: event.target.value })}/>
                <select name={"headingSize"} className="form-control"
                        onChange={ (event) =>
                            updateWidget({...widget, size: event.target.value })}>
                    <option value={"1"}>Heading 1</option>
                    <option value={"2"}>Heading 2</option>
                    <option value={"3"}>Heading 3</option>
                    <option value={"4"}>Heading 4</option>
                    <option value={"5"}>Heading 5</option>
                    <option value={"6"}>Heading 6</option>
                </select>
                <input placeholder="Name" className="form-control"
                       onChange={ (event) =>
                           updateWidget({...widget, name: event.target.value })}/>

                <h1> Preview Heading : </h1>

                {/*
                    NOTE :: UPON fresh the widget.size becomes an Integer
                    but otherwise when editing it is a string. The following
                    if/else statements try to capture both the possibilities
                    of strings and integers. SERVER -- stores size as an
                    Integer. But the CLIENT Reducer doesn't specify --
                    the response returns the object and it probably gets
                    parsed as a string. So that why on first DOM mount
                    it pulls widget.size as a Integer. Then all subsequent
                    updates go through the Reducer as a JSON Object then
                    string.
                */}
                {
                    widget.size === 1 &&
                    <h1>{widget.text}</h1>
                }
                {
                    widget.size === 2 &&
                    <h2>{widget.text}</h2>
                }
                {
                    widget.size === 3 &&
                    <h3>{widget.text}</h3>
                }
                {
                    widget.size === 4 &&
                    <h4>{widget.text}</h4>
                }
                {
                    widget.size === 5 &&
                    <h5>{widget.text}</h5>
                }
                {
                    widget.size === 6 &&
                    <h6>{widget.text}</h6>
                }



                {
                    widget.size === "1" &&
                    <h1>{widget.text}</h1>
                }
                {
                    widget.size === "2" &&
                    <h2>{widget.text}</h2>
                }
                {
                    widget.size === "3" &&
                    <h3>{widget.text}</h3>
                }
                {
                    widget.size === "4" &&
                    <h4>{widget.text}</h4>
                }
                {
                    widget.size === "5" &&
                    <h5>{widget.text}</h5>
                }
                {
                    widget.size === "6" &&
                    <h6>{widget.text}</h6>
                }

            </div>
        }
        {
            !widget.editing &&
            <div>

                {
                    widget.size === 1 &&
                    <h1>{widget.text}</h1>
                }
                {
                    widget.size === 2 &&
                    <h2>{widget.text}</h2>
                }
                {
                    widget.size === 3 &&
                    <h3>{widget.text}</h3>
                }
                {
                    widget.size === 4 &&
                    <h4>{widget.text}</h4>
                }
                {
                    widget.size === 5 &&
                    <h5>{widget.text}</h5>
                }
                {
                    widget.size === 6 &&
                    <h6>{widget.text}</h6>
                }



                {
                    widget.size === "1" &&
                    <h1>{widget.text}</h1>
                }
                {
                    widget.size === "2" &&
                    <h2>{widget.text}</h2>
                }
                {
                    widget.size === "3" &&
                    <h3>{widget.text}</h3>
                }
                {
                    widget.size === "4" &&
                    <h4>{widget.text}</h4>
                }
                {
                    widget.size === "5" &&
                    <h5>{widget.text}</h5>
                }
                {
                    widget.size === "6" &&
                    <h6>{widget.text}</h6>
                }

            </div>

        }
    </div>

export default HeadingWidget