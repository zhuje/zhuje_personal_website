import React from "react";
import widgetTypeDropDownList from "../widgetTypeDropDownList";

const ImageWidget = (
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


                    {/*<div>*/}
                    {/*<widgetTypeDropDownList*/}
                    {/*    widget={widget}*/}
                    {/*    updateWidget={updateWidget}*/}
                    {/*    okWidget={okWidget}*/}
                    {/*    deleteWidget={deleteWidget}*/}
                    {/*/>*/}
                    {/*</div>*/}


                <button type="button" className="btn btn-success pull-right" onClick={() => okWidget(widget)}>
                    Save
                </button>

                <h3> Image </h3>
                <textarea placeholder={"Enter Image Source"} value={widget.src} className="form-control"
                          onChange={ (event) =>
                              updateWidget({...widget, src: event.target.value })}></textarea>
                <input placeholder="Name" className="form-control"
                       onChange={ (event) =>
                           updateWidget({...widget, name: event.target.value })}/>

                <div>
                    <h3> Preview </h3>
                    <img className={"card-img-top"} src={widget.src} alt={"No Image Available"}/>
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

export default ImageWidget
