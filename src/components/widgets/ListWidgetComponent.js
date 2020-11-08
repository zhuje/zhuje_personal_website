import React from "react";
import '../style.Widgets.css'

// const ListWidgetComponent = (
//     {
//         widget,
//         updateWidget,
//         okWidget,
//         deleteWidget,
//     }) =>
//     <div>
//         {
//             widget.editing &&
//             <div>
//
//                 <select onChange={ (event) => okWidget({
//                                                            ...widget,
//                                                            type: event.target.value
//                                                        })}
//                         value="widget type" name="userSelectedWidgetType">
//                     <option value="Widget Type"> Widget Type </option>
//                     <option value="HEADING"> Heading </option>
//                     <option value="PARAGRAPH"> Paragraph </option>
//                     <option value="LIST"> List </option>
//
//
//                 </select>
//
//
//                 <button type="button" className="btn btn-success pull-right" onClick={() => okWidget(widget)}>
//                     Save
//                 </button>
//
//                 <h3> List </h3>
//                 <textarea value={widget.text} className="form-control"
//                           onChange={ (event) =>
//                               updateWidget({...widget, text: event.target.value })}></textarea>
//
//
//
//                 <select className={"form-control"}>
//                     <option> Unordered List  </option>
//                     <option> Ordered List  </option>
//                 </select>
//
//                 <input placeholder="Name" className="form-control"
//                        onChange={ (event) =>
//                            updateWidget({...widget, name: event.target.value })}/>
//
//                 <div>
//                     <h3> Preview </h3>
//                     <ul>
//                         {widget.text.split("\n").map((i,key) => {
//                             return <li key={key}>{i}</li>;
//                         })}
//                     </ul>
//
//                 </div>
//
//                 <button type="button" className="btn btn-danger pull-right"
//                         onClick={() => deleteWidget(widget)}>
//                     Delete
//                 </button>
//
//
//
//
//             </div>
//         }
//         {
//             !widget.editing &&
//             <div>
//                 {widget.text}
//             </div>
//
//         }
//     </div>
//
// export default ListWidgetComponent

class ListWidgetComponent extends React.Component {

    state = {
        listType: "UL",
    }

    render() {
        return(

            <div>
                {
             this.props.widget.editing &&
             <div>
                 <select onChange={ (event) => this.props.okWidget({
                                                            ...this.props.widget,
                                                            type: event.target.value                  })}
                        value="widget type" name="userSelectedWidgetType">
                     <option value="Widget Type"> Widget Type </option>
                     <option value="HEADING"> Heading </option>
                     <option value="PARAGRAPH"> Paragraph </option>
                     <option value="LIST"> List </option>
                     <option value="IMAGE"> Image </option>


                 </select>

                 <button type="button" className="btn btn-success pull-right" onClick={() => this.props.okWidget(this.props.widget)}>
                     Save
                 </button>

                 <h3> List </h3>
                 <textarea value={this.props.widget.text} className="form-control"
                           onChange={ (event) =>
                               this.props.updateWidget({...this.props.widget, text: event.target.value })}></textarea>


                 {/*{JSON.stringify(this.state.listType)}*/}
                 {/*<select onChange={ (event) =>*/}
                 {/*    this.setState(prevState => ({listType: event.target.value }))}*/}
                 {/*    className={"form-control"}*/}
                 {/*    value="list type"*/}
                 {/*    name="userSelectedListType"*/}
                 {/*>*/}
                 {/*    <option value="UL">  Unordered List  </option>*/}
                 {/*    <option value="OL"> Ordered List  </option>*/}
                 {/*</select>*/}


                 {JSON.stringify(this.state.listType)}
                 <select onChange={ (event) =>
                     this.setState( {listType: event.target.value })}
                         className={"form-control"}
                         value="list type"
                         name="userSelectedListType"
                 >
                     <option value="">  Choose List Type  </option>
                     <option value="UL">  Unordered List  </option>
                     <option value="OL"> Ordered List  </option>
                 </select>



                 <input placeholder="Name" className="form-control"
                        onChange={ (event) => this.props.updateWidget({...this.props.widget, name: event.target.value })}/>

                 <div>
                     <h3> Preview </h3>
                     {
                         this.state.listType === ("UL") &&
                         <ul>
                             {this.props.widget.text.split("\n").map((i, key) => {
                                 return <li key={key}>{i}</li>;
                             })}
                         </ul>
                     }
                     {
                         this.state.listType === ("OL") &&
                         <ol>
                             {this.props.widget.text.split("\n").map((i, key) => {
                                 return <li key={key}>{i}</li>;
                             })}
                         </ol>
                     }
                 </div>

                 <button type="button" className="btn btn-danger pull-right"
                         onClick={() => this.props.deleteWidget(this.props.widget)}>
                     Delete
                 </button>



             </div>
         }
         {
             !this.props.widget.editing &&
             <div>
                 {
                     this.state.listType === ("UL") &&
                     <ul>
                         {this.props.widget.text.split("\n").map((i, key) => {
                             return <li key={key}>{i}</li>;
                         })}
                     </ul>
                 }
                 {
                     this.state.listType === ("OL") &&
                     <ol>
                         {this.props.widget.text.split("\n").map((i, key) => {
                             return <li key={key}>{i}</li>;
                         })}
                     </ol>
                 }
             </div>

         }
     </div>

        );
    }


}

export default ListWidgetComponent
