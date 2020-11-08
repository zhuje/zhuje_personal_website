import React from "react";
import '../style.Widgets.css'
import widgetTypeDropDownList from "./widgetTypeDropDownList";


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

                 <button type="button" className="btn btn-success pull-right" onClick={() => this.props.okWidget({...this.props.widget})}>
                     Save
                 </button>

                 <h3> List </h3>
                 <textarea placeholder={" ​Enter one list item per line​.\n"}  className="form-control" value={this.props.widget.text}
                           onChange={ (event) =>
                               this.props.updateWidget({...this.props.widget, text: event.target.value })}></textarea>



                 {/*<select onChange={ (event) =>*/}
                 {/*    this.setState( {listType: event.target.value })}*/}
                 {/*        className={"form-control"}*/}
                 {/*        value="list type"*/}
                 {/*        name="userSelectedListType"*/}
                 {/*>*/}
                 {/*    <option value="">  Choose List Type  </option>*/}
                 {/*    <option value="UL">  Unordered List  </option>*/}
                 {/*    <option value="OL"> Ordered List  </option>*/}
                 {/*</select>*/}
                 {/*{JSON.stringify(this.props.widget)}*/}

                 <select onChange={ (event) => this.props.updateWidget({...this.props.widget, value: event.target.value })}
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
                         // this.state.listType === ("UL") &&
                          this.props.widget.value === ("UL") &&
                         <ul>
                             {this.props.widget.text.split("\n").map((i, key) => {
                                 return <li key={key}>{i}</li>;
                             })}
                         </ul>
                     }
                     {
                         // this.state.listType === ("OL") &&
                         this.props.widget.value === ("OL") &&
                         <ol>
                             {this.props.widget.text.split("\n").map((i, key) => {
                                 return <li key={key}>{i}</li>;
                             })}
                         </ol>
                     }
                     {
                         this.props.widget.value === null &&
                         <ul>
                             {this.props.widget.text.split("\n").map((i, key) => {
                                 return <li key={key}>{i}</li>;
                             })}
                         </ul>
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
                     this.props.widget.value === ("UL") &&
                     <ul>
                         {this.props.widget.text.split("\n").map((i, key) => {
                             return <li key={key}>{i}</li>;
                         })}
                     </ul>
                 }
                 {
                     this.props.widget.value === ("OL") &&
                     <ol>
                         {this.props.widget.text.split("\n").map((i, key) => {
                             return <li key={key}>{i}</li>;
                         })}
                     </ol>
                 }
                 {
                     this.props.widget.value === null &&
                     <ul>
                         {this.props.widget.text.split("\n").map((i, key) => {
                             return <li key={key}>{i}</li>;
                         })}
                     </ul>
                 }

             </div>

         }
     </div>

        );
    }


}

export default ListWidgetComponent
