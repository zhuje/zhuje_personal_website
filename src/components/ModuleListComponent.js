import React from "react";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import {Link} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {Row, Col, Nav, } from "react-bootstrap"

// ModuleListComponent -- A stateless class component that can dynamically render the
// the list of modules for a course. The state is managed using redux. This ia a component
// of the CourseEditor Component
// @ course={} -- current course -- initialized as an empty object '={}' so that we don't crash if it is an empty object
// @ modules=[] -- list of modules for the course
// @ deleteModule, createModule, updateModule -- from service/ModuleServices (relay information to and from server)


// <div className={topic.editing ? "active": ""}>





function highlight ( module, modules ) {


    // for (let i of modules ) {
    //     console.log(i.title + " " + i._id);
    //     let m = document.getElementsByClassName(i._id);
    //     for (let j of m) {
    //         console.log(m);
    //         m.className += " active";
    //     }
    // }

    let allModule = document.getElementsByClassName("highlightModule");

    // for (let item of allModule) {
    //     console.log(item)
    //     item.className += " highlightModule ";
    //     console.log(item)
    // }

    for (let i = 0; i < modules.length; i++){
        console.log( "i : " + i + modules[i]._id +  " " + modules[i].title)
        let foo = document.getElementsByClassName(modules[i]._id) // get the DOM element by className =  ._id
        console.log (foo + " : foo")
        for (let f of foo ) {
            console.log("f of foo element" + f)
            f.className = " z highlightModule " + modules[i]._id
        }
    }





    // alert(" Click for Module : " +  module.title )

    let selectedModule = document.getElementsByClassName(module._id)

    // alert ("SelectedModule is : " + selectedModule.toString())
    //

    for (let item of selectedModule) {
        console.log(item)
        item.className += " active";
        console.log(item)

    }



    // let allModules = document.getElementsByClassName( "highlightModule");
    // for (let i of allModules) {
    //     console.log("Reset all i -- is :" + i );
    //
    // }



    // // go through JSON objects, find the associated DOM element --> add 'active to class
    // // else className should be "highlight" + m._id
    // for (let m of selectedModule ) {
    //     console.log(m.title);
    //     console.log(m._id);
    //     console.log(module._id);
    //
    //     if (m._id === module._id ){
    //         console.log("TRUE");
    //         let selectedM = document.getElementsByClassName(module._id);
    //
    //         selectedM.className += " active ";
    //     }
    // }

    //
    // for (let item of selectedModule) {
    //
    //     console.log(item)
    //     item.className += " active";
    //     console.log(item)
    //
    //
    //     // item.className = "highlightModule " + module._id;
    //     // console.log(item)
    // }




    //
    // console.log(module.className)
    // module.className += "active";

    // for (let mod of modules ) {
    //     if (mod._id == module._id){
    //         mod.className = "active";
    //     }
    //     console.log(mod)
    // }

}


const ModuleListComponent = (
  {
    course={},
    modules=[],
    deleteModule,
    createModule,
    updateModule,
    edit,
    ok,
}) =>
  <div>


      {/*<button className={"wbdv-go-back-btn"}  onClick={()=> goBack()}>Go Back</button>*/}

    <h3>Modules for Selected Course: </h3>
      <h5> {course.title}  </h5>


      <nav className={"navbar bg-light"}>
      <ul  className={"navbar-nav "}>
      {
        modules.map(module =>
                        <div  className={"highlightModule "+ module._id} onClick={()=> highlight(module, modules)}>

                        <li key={module._id} keyProp={module._id}  className={"nav-item "}>

            {
              !module.editing &&
                <span   className={"wbdv-editor-highlight"}>

                    {/* Module Name / Render Module's Lessons */}
                    <Link to={`/edit/${course._id}/modules/${module._id}`}>
                        {module.title}
                    </Link>

                    {/* Edit Module Name */}
                    <button onClick={() => edit(module)}>
                        <i className="fa fa-pencil"></i>
                    </button>


                </span>
            }
            {
              module.editing &&
              <span>

                {/*  Input Field to Edit Module Name*/}
                <input onChange={(event) => updateModule({
                        ...module,
                        title: event.target.value
                        })}
                  value={module.title}/>

                  {/* Ok */}
                  <button onClick={() => ok(module)}>
                    <i className="fa fa-check"></i>
                  </button>

                  {/* Delete */}
                  <button onClick={() => deleteModule(module)}>
                      <i className="fa fa-times"></i>

                  </button>


              </span>


            }

          </li>
                        </div>
        )
      }
    </ul>
      </nav>


      {/* Pass the selected course so that we can create a new module for it ' createModule(course) */}
    <div className={"row pull-right"}>
      <button
      onClick={() => createModule(course)}>
        <i className="fa fa-plus fa-2x pull-right"></i>
    </button>
    </div>
  </div>

// export default ModuleListComponent

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  ok: (module) =>
    moduleService.updateModule(module._id, {
      ...module, editing: false
    }).then(status => dispatch({
      type: "UPDATE_MODULE",
      module: {...module, editing: false}
    })),
  edit: (module) =>
    moduleService.updateModule(module._id, {
      ...module, editing: true
    }).then(status =>
      dispatch({
      type: "UPDATE_MODULE",
      module: {...module, editing: true}
    })),
  deleteModule: (module) =>
    moduleService.deleteModule(module._id)
      .then(status => dispatch({
        type: "DELETE_MODULE",
        module: module
      })),
  createModule: (course) =>
    moduleService.createModuleForCourse(course._id, {
      title: "New Module"
    }).then(actualModule => dispatch({
      type: "CREATE_MODULE",
      module: actualModule
    })),
  updateModule: (module) =>
    dispatch({
      type: "UPDATE_MODULE",
      module: module
    })
    // moduleService.updateModule(module._id, module)
    //   .then(status => dispatch({
    //     type: "UPDATE_MODULE",
    //     module: module
    //   }))
})

export default connect
( stateToPropertyMapper,
  propertyToDispatchMapper)
(ModuleListComponent)
