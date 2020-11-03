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




                  {/*<span><input*/}
                  {/*  onChange={ (event) => updateWidget({*/}
                  {/*    ...widget,*/}
                  {/*    name: event.target.value*/}
                  {/*  })}*/}
                  {/*  value={widget.name}/>*/}


                <button type="button" className="btn btn-success" onClick={() => okWidget(widget)}>
                    Save
                </button>
                <h3>Heading</h3>

                <input  className="form-control" placeholder="Text" onChange={ (event) => updateWidget({
                                                                                                           ...widget,
                                                                                                           text: event.target.value })}/>
                <select name={"headingSize"} className="form-control" onChange={ (event) => updateWidget({
                                                                                        ...widget,
                                                                                        size: event.target.value })}>
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
                <input placeholder="Name" className="form-control" />

                <h1> Preview Heading : </h1>
                <div> {widget.text }</div>


            </div>



        }
        {
            !widget.editing &&
            <div>
                {
                    <h1> {"DEFAULT:" +  widget.text + widget.size } </h1>
                }

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
                {/*{*/}
                {/*    <h1> {"DEFAULT:" +  widget.text + widget.size } </h1>*/}
                {/*}*/}


            </div>

        }





    </div>

export default HeadingWidget