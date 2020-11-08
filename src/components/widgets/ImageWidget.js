import React from "react";
import widgetTypeDropDownList from "./widgetTypeDropDownList";
import '../style.Widgets.css'

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

                <div >
                    <h3> Preview </h3>
                    <img className={"card-img-top wbdv-image-widget-preview"} src={widget.src} alt={"No Image Available"}/>
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
                <img className={"card-img-top wbdv-image-widget-preview "} src={widget.src} alt={"No Image Available"}/>
            </div>

        }
    </div>

export default ImageWidget
